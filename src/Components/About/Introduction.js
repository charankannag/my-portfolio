import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/img.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
            
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is
                <span className="different"> G.CHARAN KANNA </span> and I am from{" "}
                <span className="different">
                  Erode, Tamil Nadu (India)
                </span>
                . I have completed my graduation in B.E (Mechanical
                 Engineering) from 
                <span className="different">
                  {" "}
                  RVS Technical Campus, Coimbatore (TN)
                </span>{" "}
                and After I learn MERN stack & have been honing my skills in web
                development ever since. In my free time, exploring new projects.
              </h4>

              <h4>professional Skills</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Problem Solving
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Traveller
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Adaptability
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Decision making
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};