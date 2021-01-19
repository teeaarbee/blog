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
            Hi! I am TRB or teeaarbee, But I suppose you dont have any trouble figuring that out unless you are an old machine. 
<br></br><br></br>I am best known for uploading what people call Meme videos on the Internet. 
<br></br>Even though I dont make them anymore, The skills that I learnt from making those are helping me earn some money i.e., via Video Editing.

<br></br><br></br>Things that I am interested in: Psychology, Neuroscience, Philosophy, Art, History, Business and the list goes on.
<br></br>So yes! I am sort of a generalist or better trying to be one.
<br></br><br></br>I don't know where I am going to end up in a few years but if you want to know the answer to that then you can read blogs.
Which I publish every sunday. 
<br></br>And maybe join My Discord/ Telegram Group or Email List and get notified everytime I post a blog. 
<br></br><br></br>Links to everything can be found <a href="https://teeaarbee.com/#implinks">Here</a> 
<br></br>Or at the very bottom of this page in the footer section.
                    <br></br><br></br>Thank you! For taking your time to read about me.
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default About;
