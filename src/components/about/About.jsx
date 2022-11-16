import React from "react";
import "./about.css";
import me from "../../img/me.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        {/* <div className="shadow">

        </div> */}
        <div className="cardleft">
          <img src={me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="subtitle">Little description about myself</p>
        <p className="a-desc">
          I am a very Passionate Full Stack Developer, who gets fun developing
          cool websites. I always look for oppurtunities to upskill and master.
          I am very commited to my passion and Work.
        </p>
        <div className="ex">
          <h2 className="exp">Experience</h2>
          <div className="exlist">
            <div className="list">
              <h2 className="listtitle">Kameleon Technologies</h2>
              <p className="role">React Developer Internship</p>
            </div>
            <div className="list">
              <h2 className="listtitle">Tech Affairs Website IIITDM</h2>
              <p className="role">
                Part of Development Team of the Tech Affairs Website of IIITDM
              </p>
            </div>
            <div className="list">
              <h2 className="listtitle">Smart Knower Internship</h2>
              <p className="role">Web Developer Internship Certification</p>
            </div>
            <div className="list">
              <h2 className="listtitle">Exposys Labs Intership</h2>
              <p className="role">
                Web Developer Virtual Internship Certification
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default About;
