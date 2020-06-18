import React from 'react';
import Layout from '../layout';
import logo from '../../static/favicons/logo.png';
import SEO from '../components/SEO';
import './about.scss';

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <article className="about">
        <img src={logo} className="user-avatar" alt="logo" />
        <section className="about-context">
          <div>
            <h3>T R B</h3>
            <p className="time">2019-12-11</p>
            <p>
              Hi! I am TRB. I am a Professional Video Editor, Memer and A Blogger, and I'm very passionate and dedicated
              to my work. With 5 years experience as a Professional Video Editor, I have acquired the skills and
              knowledge necessary to make your project a success. I enjoy every step of the design process, from
              discussion and collaboration.
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default About;
