import React from "react";
import "./Projects.css";
import Pokemon from '../../assets/Pokemon.png'
import EquipmentRental from '../../assets/EquipmentRental.png'
import FitnessLogger from '../../assets/FitnessLogger.png'
export const Projects = () => {
    return (
      <>
      <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Pokemon}
                    alt="Pokemon"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Pokemon API</h2>
                <p>
                Developed a Pokemon API using async/await with fetch.
                Technologiess used : HTML , CSS , Javascript
                Implement the Pagination.
                The API supports asynchronous programming using the async/await.

                </p>
                <div>
                  
                </div>
                <div>
                  <a
                    href="https://glowing-tulumba-f02fdd.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/charankannag/new-pokemon.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Frontend
                    </span>
                  </a>
                 
                 
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/61qsd7-KIpL._AC_UF1000,1000_QL80_.jpg"
                    alt="Equipment-Rental"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Equipment Rental</h2>
                <p>
                  Equipment Rental is a rental website for
                  computer accessories like mouse , keyboard ,
                  headphone, toys ,etc.
                </p>
                <div>
                 
                </div>
                <div>
                  <a
                    href="https://zippy-naiad-08e5c4.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/charankannag/new-equipment-rental.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Frontend
                    </span>
                  </a>
                  <a
                    href="https://github.com/charankannag/new-equipment-rental-backend.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    Backend
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/71OwMbp92LL._AC_UF1000,1000_QL80_.jpg"
                    alt="Fitness-logger"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Fitness Logger</h2>
                <p>
                  Fitness Logger is a log website for
                  all who is looking to become fit here they can enroll 
                  and gain the result.
                </p>
                <div>
                 
                </div>
                <div>
                  <a
                    href="https://beautiful-kangaroo-155686.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/charankannag/new-fitness-logger.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Frontend
                    </span>
                  </a>
                  <a
                    href="https://github.com/charankannag/new-fitness-logger-backend.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                    Backend
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </>
    )
}