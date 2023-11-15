import React from "react";
import "./About.css";

import { Type } from "./Type";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
// import Button from "@mui/material/Button";

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">G.CHARAN KANNA</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
         
        </p>
        <div className="about__contact center">
          <a
            href="https://https://github.com/charankannag"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:charankanna2013@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+918508783733"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/g-charan-kanna/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open("https://drive.google.com/file/d/1-6X3BiWvsRphOSX588-XMGip1vd9ok6x/view?usp=drive_link");
          }}
        >
         Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};