import React from 'react';
import Navbar from '../screens/NavBar';
class Rules extends React.Component {
  render() {
    return (
      <div className="Container-fluid">
        <link rel="stylesheet" href="css/rules.css" />
        <Navbar />
        <br /><br /><br />
        <div className="RulesTitle">
          <h1>Rules For Programming Competition <i className="fas fa-gavel" /></h1>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>Rule 1</h1>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>Rule 2</h1>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 3</h1>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 4</h1>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 5</h1>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 6</h1>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 7</h1>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 8</h1>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 9</h1>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 10</h1>
          </div>
        </div>

      </div>
    )
  }
}
export default Rules;