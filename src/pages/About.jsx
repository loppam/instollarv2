import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import MainFooter from "../components/MainFooter";

const About = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="about">
        <h2>Africa's Green Talent Marketplace</h2>
        <div className="who-we-are">
          <h2>Who We Are</h2>
          <p>
            Instollar is a Green Workforce Marketplace that connects renewable
            energy companies in need of skills for solar project implementation
            across Africa, with qualified freelance green-energy talents who are
            experienced in project implementation. <br /> On Instollar, skilled
            talents such as Solar Engineers, Technicians, Commissioning
            Engineers, Project Managers, and Design Engineers are listed.
            Renewable Energy companies can use these services on a freelance
            basis. <br /> This platform offers a competitive advantage to
            companies as they will have unbridled access to a pool of trained,
            skilled, and qualified workforce everywhere, including remote,
            urban, sub-urban and peri-urban areas.
          </p>
        </div>
        <div className="what-we-want">
          <h2>What We Want</h2>
          <p>
            Our Vision: Our vision is to pioneer a dynamic platform that drives
            a gig economy in the clean energy sector and be a leading hub for
            sustainable talent, innovation, and collaboration whilst
            contributing to the global transition towards a cleaner and greener
            future.
            <br />
            <br />
            Our Mission: At Instollar, our mission is to revolutionize the
            green-collar workforce by connecting trained and qualified solar
            workforce with opportunities while fostering a community of learning
            and growth <br />
            <p className="xt">Our Goals </p>
            Long-term: Identify, train, skill and deploy 1,000,000 green energy
            talents across Africa by the end of 2030.
            <br />
            <br />
            Short-term: Identify, train, skill, and deploy 10,000 green energy
            talents across at least three countries (Nigeria, Kenya, and Ghana)
            in Africa by the end of 2023.
          </p>
        </div>
        <div className="global-impact">
          <h2>Global Impact</h2>
          <div className="global_flex">
            <div className="global_row">
              <img src="/about/img1.png" alt="" />
              <div className="global_row-txt">
                <h6>Affordable and Clean Energy</h6>
                <p>
                  Instollar's focus on promoting renewable energy adoption,
                  providing access to quality solar products, and facilitating
                  last-mile delivery directly contributes to SDG 7's aim of
                  ensuring access to affordable, reliable, sustainable, and
                  modern energy for all.
                </p>
              </div>
            </div>
            <div className="global_row">
              <img src="/about/img2.png" alt="" />
              <div className="global_row-txt">
                <h6>Decent work and Economic growth</h6>
                <p>
                  By identifying, training, and connecting young and unemployed
                  individuals with employment opportunities in the renewable
                  energy sector, Instollar contributes to SDG 8's goal of
                  promoting sustained, inclusive, and sustainable economic
                  growth, full and productive employment, and decent work for
                  all.
                </p>
              </div>
            </div>
            <div className="global_row">
              <img src="/about/img3.png" alt="" />
              <div className="global_row-txt">
                <h6>Industry Innovation and Infrastructure</h6>
                <p>
                  The project's digital platform development, solar product
                  showcase, and last-mile delivery efforts align with SDG 9's
                  objective of building resilient infrastructure, promoting
                  inclusive and sustainable industrialization, and fostering
                  innovation.
                </p>
              </div>
            </div>
            <div className="global_row">
              <img src="/about/img4.png" alt="" />
              <div className="global_row-txt">
                <h6>Sustainable Cities and Communities</h6>
                <p>
                  Instollar's community engagement initiatives contribute to SDG
                  11's goal of making cities and human settlements inclusive,
                  safe, resilient, and sustainable. By promoting renewable
                  energy adoption and community empowerment, the project
                  contributes to sustainable urban development.
                </p>
              </div>
            </div>
            <div className="global_row">
              <img src="/about/img5.png" alt="" />
              <div className="global_row-txt">
                <h6>Climate Action</h6>
                <p>
                  The project's emphasis on promoting renewable energy adoption
                  and reducing reliance on fossil fuels aligns with SDG 13's
                  goal of taking urgent action to combat climate change and its
                  impacts
                </p>
              </div>
            </div>
            <div className="global_row">
              <img src="/about/img6.png" alt="" />
              <div className="global_row-txt">
                <h6>Partnership for the Goals</h6>
                <p>
                  Instollar's collaborative approach involves establishing
                  partnerships with renewable energy companies, educational
                  institutions, logistics providers, and communities. This
                  aligns with SDG 17's emphasis on strengthening global
                  partnerships to achieve sustainable development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
          <Footer />
          <MainFooter />
    </div>
  );
};

export default About;
