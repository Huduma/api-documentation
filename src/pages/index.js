import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import code from '../../static/img/code.png'
import  './banner.css'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className='landing-banner'>
    <div className='landing-banner-left'>
       <h1>Seamless <span style={{ color:"#F0BD24" }}>SMS</span> integration, empowered by <span style={{color:'#117BAC'}}>HudumaSMS APIs.</span> </h1>
       <p>
         With our powerful SMS APIs, 
        you can seamlessly integrate SMS messaging capabilities into your applications. </p>
        <Link  style={{ textDecoration:'none'}} to="/docs/intro" ><span className="action-button" > Read Docs</span></Link>
        <Link  style={{ textDecoration:'none'}} to="https://hudumasms.com/" >
              <span className="action-button2" > Create account</span>
              </Link>
    </div>
    <div className='landing-banner-right'>
       <img src={code} alt="send image" loading="loading" />
    </div>
</div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Send bulky messages for cheapest price in Tanzania">
      <HomepageHeader />
      <br />
      <br />
      <br />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
