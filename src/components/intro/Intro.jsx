import React from "react";
import "./intro.css";
import myself from "../../img/myself.png";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="intro">Hello, My Name is</h2>
          <h1 className="name">K Sahana</h1>
          <div className="i-title">
            <div className="i-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">Android Developer</div>
              {/* <div className="i-title-item"></div> */}
            </div>
          </div>
          <div className="desc">
            I am a Web Developer, a MERN Stack Developer,I find Developing
            Websites so funfilled.If you need any help or assistance just ping
            me.
          </div>
          {/* <i className="bi bi-mouse-fill scroll"></i> */}
        </div>
      </div>
      <div className="i-right">
        <div className="imgback"></div>
        <img src={myself} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
