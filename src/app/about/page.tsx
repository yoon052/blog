import Hero from '@/components/Hero';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          항상 도전하는 풀스택 개발자 <br />
          사람과 디자인을 담는 반응형웹을 만들고 있음
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          구글구글 (-Now) <br />
          메이스북 (-2027) <br />
          삼준전자 (-2025)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Node
          <br />
          Git, Clean Code <br />
          VS Code, IntelliJ, MongoDB
        </p>
      </section>
    </>
  );
}
