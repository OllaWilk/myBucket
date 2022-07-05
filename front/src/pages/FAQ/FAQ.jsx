import React from 'react';

import './FAQ.scss';

const FAQ = () => {
  return (
    <section className="app__faq-page  container">
      <h2>Frequently Asked Questions</h2>
      <div className="app__faq-wrap">
        <h3>What is MyBucket?</h3>
        <p>
          MyBucket is as a place to create, discover, and accomplish your life
          goals.
        </p>
      </div>
      <div>
        <h3>What is bucket list?</h3>
        <p>
          A bucket list is a list of the most important things that you still
          want to do, see and experience. By writing down your dreams, goals and
          wishes you motivate yourself to actively achieve them. You can see it
          as the most important 'to-do' list of your life.
        </p>
      </div>
      <div>
        <h3>Why should I have a bucket list??</h3>
        <p>
          By having a bucket list, you actively motivate yourself to do all the
          things you've always wanted to do during your life. It is wonderful to
          be able to look back on all the things on your list that you have
          completed. On top of that you can also inspire other people with your
          bucket list by sharing it on social media.
        </p>
      </div>
      <div>
        <h3>How do I make my own bucket list?</h3>
        <p>
          Making a bucket list is easy. First create an account either by
          signing up with your email account. Then Add goals you hope to
          achieve.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
