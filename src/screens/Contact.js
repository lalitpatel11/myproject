import React from 'react';
import Navbar from './NavBar';
// import {Link} from 'react-router-dom'

class Contact extends React.Component {
  render() {
    return (
      <div className="aboutusbody container-fluid">
        <link rel="stylesheet" href="css/contact.css" />
        <Navbar /> <br /> <br /> <br />
        <div className="container">
          <h1 className="contactustitle text-center">Contact Us <i className="fas fa-phone" /></h1>
          <div className="imagediv ">
            <img className="imagehere1" src="images/logo-new.png" alt="college logo"/>
          <img className="imagehere2" src="images/bnn header copy.png" alt="college name"/>
          <img className="imagehere3" src="images/GoldenJubilee.gif" alt="golden jubilee of college"/>

          </div>
          <div className="row">
            <div className="columnstyle1 col">
              <ul>
                <div className="colheader"> <h5>Address  <i className="listicon fas fa-map" /></h5></div>
                <li className="listitem">Varaladevi Road, Dhamankar Naka ,Bhiwandi, Dist-Thane , Maharashtra- 421305</li>
               <button className="buttonmore btn btn-info"> <a className="gotomaptitle" href="https://www.google.co.in/maps/place/B.N.N.+College(A,+S+%26+C),+Bhiwandi/@19.2847113,73.0528956,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7bda77801768d:0x83030494207bd654!8m2!3d19.2847062!4d73.0550896" >
                  Go to Map</a></button>
              </ul>
            </div>
            <div className="columnstyle2 col">
              <ul>
                <div className="colheader"> <h5>Email  <i className="listicon fas fa-envelope" /></h5></div>
                <li>bnncollege1966@gmail.com</li>
              </ul>
            </div>
            <div className="columnstyle3 col">
            <ul>
                <div className="colheader"> <h5>Contact  <i className="listicon fas fa-phone-square" /></h5></div>
                <li>02522 230879/228650</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact;