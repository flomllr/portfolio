import React from 'react';
import { Layout, Greeting, Gallery, Project } from './components';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient" />
      <Layout>
        <Greeting />
        <h2 className="topic">Personal Projects</h2>
        <Gallery>
          <Project
            title="Deeplify"
            subtitle="Y Combinator Hackathon - 2019"
            description="Deeplify provides a convenient way for researchers to serve their trained deep learning models via an API and a central platform for developers to discover and use them."
            techstack="React.js, Firebase"
            url="https://devpost.com/software/deephub"
            linktext="Devpost"
          />
          <Project
            title="Pheel"
            subtitle="Start Hack St. Gallen - 2019"
            description="Our contribution to the Microsoft Challenge 'AI for Good': Providing audio feedback on the expressions and reactions of the people in front of you."
            techstack="React.js, Node.js"
            url="https://devpost.com/software/start-hack"
            linktext="Devpost"
          />
          <Project
            title="Dcode"
            subtitle="Shopify App - 2019"
            description="Shopify app adding a simple, but desired feature to Shopify stores: cart-level discount codes"
            techstack="React.js, Node.js"
            url="https://apps.shopify.com/discountcode-in-cart"
            linktext="Shopify App Store"
          />
          <Project
            title="4Four"
            subtitle="iNTUition Hackathon - 2018"
            description="Mobile app that matches exchange students with local students and suggests social activities in line with their interests."
            techstack="Ionic"
            url="https://devpost.com/software/forfour"
            linktext="Devpost"
          />
        </Gallery>
        <h2 className="topic">Webdesign / Webdevelopment</h2>
        <Gallery>
          <Project
            title="Bube Concept"
            subtitle="Website implementation - 2018"
            description="In a team of three we redesigned and implemented the website for a B2B print company in Cologne, Germany."
            url="http://bube-concept.de"
            linktext="bube-concept.de"
          />
          <Project
            title="Academy Consult"
            subtitle="Website implementation - 2018"
            description="I redesigned and implemented the website of the student-run business consultancy Academy Consult e.V."
            url="http://academyconsult.de"
            linktext="bube-concept.de"
          />
          <Project
            title="Applied AI"
            subtitle="Wesite implementation - 2018"
            description="Redesign and implementation of corporate website of the appliedAI Initiative in Munich."
            url="https://appliedai.de"
            linktext="appliedai.de"
          />
        </Gallery>
        <h2 className="topic">
          Archive <span>- projects which are not representative anymore</span>
        </h2>
        <Gallery>
          <Project
            title="Fancymerch"
            subtitle="Print on Demand online store - 2017 (sold)"
            description="Online store selling t-shirts with self made designs that are printed at time of the order. Gained lots of traffic due to facebook post of Robert Downey Jr. Sold the shop due to low margins, dropping sales and uncertainty about tax situation in US."
            url="https://fancymerch.com"
            linktext="fancymerch.com"
          />
        </Gallery>
      </Layout>
    </div>
  );
}

export default App;
