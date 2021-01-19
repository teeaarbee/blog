import React from 'react';
import Layout from '../layout';
import SEO from '../components/SEO';
import './about.scss';
// import './../static/images/Sherlock_Cheems.png';

const Newsletter = () => {
  return (
    <Layout>
      <SEO title="Newsletter" path="/Newsletter" />
      <article className="text-center markdowm-body">
        {/* <img src={trbPfp} className="user-avatar" alt="trbPfp" /> */}
        <section className="about-context">
          <div>
            <h1>Search feature coming soon, Till then you can google "teeaarbee" plus anything that you want to read about in this blog.</h1>
            <picture>
              <img src="https://i.postimg.cc/NjcrkjjG/Sherlock-Cheems.png" alt="" />
            </picture>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default Newsletter;
