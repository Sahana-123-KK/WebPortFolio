import React from "react";
import "./skills.css";
import skill from "../../img/skills.jpg";
import js from "../../img/js.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import react from "../../img/react.png";
import next from "../../img/next.png";
import bootstrap from "../../img/bootstrap.png";

import mern from "../../img/mern.png";
import mongo from "../../img/mongo.png";
import express from "../../img/express.png";
import django from "../../img/django.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="s-left">
        <h1 className="s-title"> My Skills</h1>
        <span className="brief">Being React Developer, i would say i am comparitively very confident in React Js</span>
        <div className="skill-list">
          <div className="skill-item">
            <img src={html} alt="" className="img-s" />
            <h5>HTML</h5>
            <p className="level">Intermediate</p>
          </div>
          <div className="skill-item">
            <img src={css} alt="" className="img-s" />
            <h5>CSS</h5>
            <p className="level">Intermediate</p>
          </div>
          <div className="skill-item">
            <img src={js} alt="" className="img-s" />
            <h5>JavaScript</h5>
            <p className="level">Intermediate</p>
          </div>
          <div className="skill-item">
            <img src={bootstrap} alt="" className="img-s" />
            <h5>Bootstrap</h5>
            <p className="level">Intermediate</p>
          </div>
          <div className="skill-item">
            <img src={react} alt="" className="img-s" />
            <h5>React Js</h5>
            <p className="level">Intermediate</p>
          </div>
          <div className="skill-item">
            <img src={next} alt="" className="img-s" />
            <h5>NEXT Js</h5>
            <p className="level">Intermediate</p>
          </div>
          <div className="skill-item">
            <img src={mongo} alt="" className="img-s" />
            <h5>Mongo DB</h5>
            <p className="level">Intermediate</p>
          </div>
          <div className="skill-item">
            <img src={express} alt="" className="img-s" />
            <h5>express Js</h5>
            <p className="level">Intermediate</p>
          </div>
          <div className="skill-item">
            <img src={mern} alt="" className="img-s" />
            <h5>MERN</h5>
            <p className="level">Intermediate</p>
          </div>
          <div className="skill-item">
            <img src={django} alt="" className="img-s" />
            <h5>django</h5>
            <p className="level">Beginner</p>
          </div>
        </div>
      </div>
      <div className="s-right">
        <img src={skill} alt="" className="skillimg" />
      </div>
    </div>
  );
};

export default Skills;
