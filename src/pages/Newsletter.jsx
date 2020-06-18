import React from 'react';
import Layout from '../layout';
import SEO from '../components/SEO';
import './about.scss';

const Newsletter = () => {
  return (
    <Layout>
      <SEO title="Newsletter" path="/Newsletter" />
      <article className="text-center markdowm-body">
        {/* <img src={trbPfp} className="user-avatar" alt="trbPfp" /> */}
        <section className="about-context">
          <div>
            <p>Please Subscribe to my Blog, No spams I swear</p>
            <h3>
              <a href="https://teeaarbee.com/#blog">
                <i className="far fa-arrow-alt-circle-right fa-2x" />
                Click here and enter your email ID
              </a>
            </h3>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default Newsletter;
