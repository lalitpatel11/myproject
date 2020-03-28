import React from 'react';
import Navbar from './NavBar';
//import { Link } from 'react-router-dom';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="AboutusPage">
        <link rel="stylesheet" href="css/aboutus.css" />
        <Navbar /> <br /><br />
        <div className="titlediv text-center">
          <h1 className="abooutusname">About Us <i className="abouticon fas fa-info-circle" /></h1>
        </div>
        <div className="SectionOne">
          <p>Lan Based Programming Competetion</p>
          <hr className="hrtitle" />
          <h2>Code Fusion</h2>
        </div>
        <div className="teammemberdiv">
          <h1 className="teammembertitle text-center">
            <i class="fas fa-user-cog" />Team members</h1>
        </div>
        <div className="imageSectionFirst row">
          <div className="imageStyle col">
            <img className="styleofimage" src="images/member.jpg" alt="" />
            <p>Team Member</p>
            <h2>Lalit  Patel</h2>
            <p>Bsc TY (IT) Roll No.: 79 </p>

          </div>
          <div className="imageStyle col">
            <img className="styleofimage" src="images/member.jpg" alt="" />
            <p>Team Member</p>
            <h2>Vishal Yadav</h2>
            <p>Bsc TY (IT) Roll No.:124</p>
          </div>
        </div>
        {/*corousel image view*/}
        <h1 className="aboutourprojecttitle text-center"> <i className="fas fa-arrow-down" /> About Our project <i className="fas fa-arrow-down" /></h1>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
            <li data-target="#myCarousel" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="carousel_img first-slide" src="images/slide01.jpg" alt="First slide" />
              <div className="container">
                <div className="carousel-caption">
                  {/*<h1>Code Fusion.</h1>*/}
                  <h2>What is Programming Competition ?</h2><br />
                  <h4>
                    <ul>
                      <li>this Project we can easily to write different program and compile it and debug in on-line.</li>
                      <br />
                      <li>the ability to use different compilers allow a programmer to pick up the fastest or the most
                      convenient
                    tool to compile the code and remove the error.</li><br />
                      <li>A web based application can be used remotely throughout any network connection and it is platform
                    independent.</li><br />
                      <li>the trouble of installing the compiler and software on each computer is avoided</li><br />
                      <li>Result declare on the time of after execution on the server PC</li><br />
                    </ul>
                  </h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="carousel_img second-slide" src="images/slide02.jpg" alt="Second slide" />
              <div className="container">
                <div className="carousel-caption">
                  <h2>Why we need impartial judge in Programming Competetion?</h2><br />
                  <h4>
                    <ul>
                      <li>Eighty percent of the time ,the program are checked manually</li><br />
                      <li>a lot of people participate</li><br />
                      <li>people prefer the contests to be online(on practical based)</li><br />
                      <li>the judging is done automatically by host machines </li><br />
                    </ul>
                  </h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="carousel_img third-slide" src="images/slide03.jpg" alt="Third slide" />
              <div className="container">
                <div className="carousel-caption">
                  <h2>
                    Project Background
              </h2><br />
                  <h4>
                    <ol>
                      <li>Makes you a desirable candidate to major companies</li><br />
                      <li>Makes you faster and more focused</li><br />
                      <li>helps you solve complicated problems</li><br />
                      <li>teaches you how to work in terms</li><br />
                      <li>training and participation helps you prepare for a career in coding</li><br />
                    </ol>
                  </h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="carousel_img fourth-slide" src="images/slide04.jpg" alt="Fourth slide" />
              <div className="container">
                <div className="carousel-caption text-left">
                  <h2>
                    Project Objectives
              </h2><br />
                  <h4>
                    <ul>
                      <li>Multiple languages supports (C,C++,JAVA,JAVASCRIPT,PYTHON)</li><br />
                      <li>Quick checking,No biases</li><br />
                      <li>It can be use on mobile devices</li><br />
                      <li>User can execute the program anywhere</li><br />
                      <li>No need to install any software on devices</li><br />
                      <li>Support for compiling various languages source code</li><br />
                      <li>User friendly interface</li><br />
                    </ul>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="SectionOne">
          <p>Department Of Information Technology</p>
          <hr className="hrtitle" />
          <h2>Guides and Other members of projects</h2>
        </div>

        <div className="imageSectionSecond row">
          <div className="imageStyle col">
            <img className="styleofimage" src="images/fakeha.jpg" alt="" />
            <p>Project guide</p>
            <h2>Prof. Fakeha momin</h2>
           

          </div>
          <div className="imageStyle col">
            <img className="styleofimage" src="images/pramodshewale.jpg" alt="" />
            <p>Co-Ordinator of Information Technology</p>
            <h2>Prof. Pramod shewale</h2>
          </div>
        </div>
        <div className="imageSectionSecond row">
          <div className="imageStyle col">
            <img className="styleofimage" src="images/Principal.png" alt="" />
            <p>Principal</p>
            <h2>Dr. Ashok D. Wagh</h2>

          </div>
          <div className="imageStyle col">
            <img className="styleofimage" src="images/logo-new.png" alt="" />
            <p>College</p>
            <h2>B.N.N. College bhiwandi</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;