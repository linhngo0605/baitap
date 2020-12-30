import React from "react";

const CV = (props) => {
  return (
    <>
      <div className="resume">
        <div className="resume_left">
          <div className="resume_profile">
            <img
              className="images"
              src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/70237537_694082141109367_1582818361950076928_n.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_ohc=QTR5gbnrySUAX_v7AYM&_nc_ht=scontent.fsgn2-3.fna&oh=4f19b2ca86417ef526178005ffb10a43&oe=6012C2C8"
              alt="profile_pic"
            />
          </div>
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold">Ngô Thị Thùy Linh</p>
                <p className="regular">Designer</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fas fa-map-signs" />
                  </div>
                  <div className="data">
                    458 Tôn Đức Thắng, Liên Chiểu, Đà Nẵng
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-mobile-alt" />
                  </div>
                  <div className="data">0926710381</div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="data">vannhiliem@gmail.com</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">skill's</p>
              </div>
              <ul>
                <li>
                  <div className="skill_name">HTML</div>
                  <div className="skill_progress">
                    <span style={{ width: "40%" }} />
                  </div>
                  <div className="skill_per">40%</div>
                </li>
                <li>
                  <div className="skill_name">CSS</div>
                  <div className="skill_progress">
                    <span style={{ width: "11%" }} />
                  </div>
                  <div className="skill_per">11%</div>
                </li>
                <li>
                  <div className="skill_name">JS</div>
                  <div className="skill_progress">
                    <span style={{ width: "11%" }} />
                  </div>
                  <div className="skill_per">10%</div>
                </li>
                <li>
                  <div className="skill_name">C++</div>
                  <div className="skill_progress">
                    <span style={{ width: "11%" }} />
                  </div>
                  <div className="skill_per">10%</div>
                </li>
                <li>
                  <div className="skill_name">JAVA</div>
                  <div className="skill_progress">
                    <span style={{ width: "11%" }} />
                  </div>
                  <div className="skill_per">11%</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">SOFT SKILL'S</p>
              </div>
              <ul>
                <li>
                  <div className="data">
                    <p className="semi-bold">EngLish</p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <p className="semi-bold">Presentation</p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <p className="semi-bold">Photoshop</p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <p className="semi-bold">Communication</p>
                  </div>
                </li>
                <li>
                  <div className="data">
                    <p className="semi-bold">Work Group</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title">
              <p className="bold">Career Goals</p>
            </div>
            <p>
              Graduated in software engineering, Java - CGC JAVA certificate at
              Danang University of Education. Mastering specialized knowledge of
              Spring Framework and Hibernate, SQL &amp; database, Java Core
              &amp; OOP, HTML, CSS and Javascript. Find a job as a Java
              programmer in a professional and dynamic working environment so
              that you can develop your skills in developing quality software
              products in the Java language. The challenging working environment
              is the motivation and opportunity for me to improve my
              professional knowledge and become a good programmer.
            </p>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold">Join The Program</p>
            </div>
            <ul>
              <li>
                <div className="date">2013 - 2015</div>
                <div className="info">
                  <p className="semi-bold">Career talk with KMS</p>
                </div>
              </li>
              <li>
                <div className="date">2015 - 2017</div>
                <div className="info">
                  <p className="semi-bold">VNG</p>
                </div>
              </li>
              <li>
                <div className="date">2017 - Present</div>
                <div className="info">
                  <p className="semi-bold">FPT</p>
                </div>
              </li>
              <li>
                <div className="date">2017 - Present</div>
                <div className="info">
                  <p className="semi-bold">Code Complete</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_education">
            <div className="title">
              <p className="bold">Education</p>
            </div>
            <ul>
              <li>
                <div className="date">2018- 2020</div>
                <div className="info">
                  <p className="semi-bold">Web Designing (DaNang University)</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_hobby">
            <div className="title">
              <p className="bold">Hobby</p>
            </div>
            <ul>
              <li>
                <i className="fas fa-book" />
              </li>
              <li>
                <i className="fas fa-gamepad" />
              </li>
              <li>
                <i className="fas fa-music" />
              </li>
              <li>
                <i className="fab fa-pagelines" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CV;
