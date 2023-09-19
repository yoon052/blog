react query 는 server 에서 가져온 데이터를 웹 브라우저 앱에서 사용하기 쉽게 도와주는 기술이다. server 는 api 서버, client 는 웹 브라우저에서 실행되는 우리가 작성한 react 앱을 의미한다.

## server / client state를 가지고 있는 어플리케이션의 아키텍쳐 구조

### server state

server 는 특정 시점에 client 의 요청에 따라 베이스에서 유저 정보를 가져와 server 의 상태 값을 만든다. 데이터 베이스에 있는 값을 그대로 client 에게 전달 하거나, 요청에 담긴 특정 값을 이용해 정보를 가공해 메모리에 놓아둔다.
정보들을 client 에게 전달한다.

### client state

client state는 크게 두가지로 나뉜다.

client 에서 자체적으로 만드는 state (최초 데이터의 발생지가 클라이언트)
server 에서 전달받은 값으로 만다는 state (최초 데이터의 발생지가 서버)

external state 로는 리덕스 , 몹엑스, 저스탠드, 조타이, 리코일 등등..
internal state로는 context api, useState가 있다.

#### client 가 자체적으로 만드는 state 에 대한 내용

대개 UI를 담당하는 부분으로 모달이 열리고 닫았는지, 어떤 버튼이 클릭되었는지, 지금 창이 re-sizing 되고 있는지에 대한 meta 정보를 담은 상태값이다.

#### server state -> client state로 가져오는 부분에 대한 내용

리엑트는 서버의 상태 값을 받아오는데 정해진 형식이 없다.

컴포넌트의 생명 주기를 파악한 후 적절한 시점에 ajax 호출을 하고 서버에서 데이터를 받아온다.
useState를 사용할 경우 데이터를 불러와 setState 호출을 통해 응답 당시의 server state를 component state로 wrapping 한다.

## react query가 해결 해주는 문제

### 간편한 server state 수급 방식

react query는 hook 기반의 로직으로 구성되어 해당 hook 을 사용하는 컴포넌트에서 상태 값의 변경 여부를 간단히 파악해 re-rendering 을 가능하게 해준다.

### 캐시

react query를 사용해서 개발자가 처리해야할 작업들을 캐시를 통해서 줄였다.

### 인터페이스

react query는 데이터의 캐시 처리를 간편하게 할 수 있는 인터페이스를 제공한다.

client 와 server 의 상태 값을 일치해야 하는 요구사항에서 부가적으로 생길 수 있는 로직들을 react query 의 api와 인터페이스로 간단하게 해결할 수 있도록 한다.

React components implement a `render()` method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by `render()` via `this.props`.

```jsx
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

root.render(<HelloMessage name='Taylor' />);
```

## Declarative

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

A paragraph with _emphasis_ and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

- Lists
- [ ] todo
- [x] done

## Component-Based

Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

## Learn Once, Write Anywhere

We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.

![React Office desk](https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)

> The most important addition in React 18 is something we hope you never have to think about: concurrency. We think this is largely true for application developers, though the story may be a bit more complicated for library maintainers.

Concurrency is not a feature, per se. It’s a new behind-the-scenes mechanism that enables React to prepare multiple versions of your UI at the same time. You can think of concurrency as an implementation detail — it’s valuable because of the features that it unlocks. React uses sophisticated techniques in its internal implementation, like priority queues and multiple buffering. But you won’t see those concepts anywhere in our public APIs.

When we design APIs, we try to hide implementation details from developers. As a React developer, you focus on what you want the user experience to look like, and React handles how to deliver that experience. So we don’t expect React developers to know how concurrency works under the hood.

However, Concurrent React is more important than a typical implementation detail — it’s a foundational update to React’s core rendering model. So while it’s not super important to know how concurrency works, it may be worth knowing what it is at a high level.

A key property of Concurrent React is that rendering is interruptible. When you first upgrade to React 18, before adding any concurrent features, updates are rendered the same as in previous versions of React — in a single, uninterrupted, synchronous transaction. With synchronous rendering, once an update starts rendering, nothing can interrupt it until the user can see the result on screen.

In a concurrent render, this is not always the case. React may start rendering an update, pause in the middle, then continue later. It may even abandon an in-progress render altogether. React guarantees that the UI will appear consistent even if a render is interrupted. To do this, it waits to perform DOM mutations until the end, once the entire tree has been evaluated. With this capability, React can prepare new screens in the background without blocking the main thread. This means the UI can respond immediately to user input even if it’s in the middle of a large rendering task, creating a fluid user experience.

Another example is reusable state. Concurrent React can remove sections of the UI from the screen, then add them back later while reusing the previous state. For example, when a user tabs away from a screen and back, React should be able to restore the previous screen in the same state it was in before. In an upcoming minor, we’re planning to add a new component called `<Offscreen>` that implements this pattern. Similarly, you’ll be able to use Offscreen to prepare new UI in the background so that it’s ready before the user reveals it.

Concurrent rendering is a powerful new tool in React and most of our new features are built to take advantage of it, including Suspense, transitions, and streaming server rendering. But React 18 is just the beginning of what we aim to build on this new foundation.
