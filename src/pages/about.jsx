import React from 'react';
import Layout from '../layout';
import logo from '../../static/favicons/logo-192x192.png';
import SEO from '../components/SEO';
import './about.scss';

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <article className="">
        <img src={logo} className="user-avatar" alt="logo" />
        <section className="about-context">
          <div>
            <h3>T R B</h3>
            {/* <p className="time">2019-12-11</p> */}
            <p className="markdowm-body">
             Hi! I am TRB. I am known for uploading meme related videoclips on the web. 
             <br></br>I am also a part time freelance Video Editor.
             and now i guess a blogger too.
                   <br></br>I have been a part of the underground meme community for over 2.5 years now and almost the same amount of time 
                    in the field of video editing.
                    <br></br><br></br>Last year I developed an intrest for books and the genre which i seem to be enjoying the most are Psychology, History
                    and a bit of philosophy. Lately I have also developed a bit of interest in business.
                    My plans for now are to just explore my interest and learn more about the world. 
                    <br></br>
                    I plan to share my weekly experince via my blogs here,
                    I hope you find them interesting. 
                    <br></br><br></br>Thank you! For taking your time to read about me now <a href="https://teeaarbee.com">Click Here</a> to visit my main website XD
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default About;
