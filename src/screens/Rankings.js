import React from "react";
import NavBar from "./NavBar";

class Rankings extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
         
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
            integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
            crossOrigin="anonymous"
          />
         

          <title>Ranking</title>
          <NavBar />
          <br /> <br /> <br />
          {/* HEADER */}
          <header id="main-header" className="py-2 bg-info text-white">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1>
                    <i className="fas fa-trophy" /> Ranking
                  </h1>
                </div>
              </div>
            </div>
          </header>
          {/* SEARCH */}
          <section id="search" className="py-4 mb-4 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Username..."
                    />
                    <div className="input-group-append">
                      <button className="btn btn-info">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* USERS */}
          <section id="users">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-header">
                      <h4>Result Ranking-wise</h4>
                    </div>
                    <table className="table table-striped">
                      <thead className="thead-dark">
                        <tr>
                          <th>Rank</th>
                          <th>Name</th>
                          <th>Time Taken</th>
                          <th>Medal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Hitesh Doe</td>
                          <td>4:30</td>
                          <td style={{ color: "goldenrod" }}>
                            <i className="fas fa-trophy " />
                            <i className="fas fa-trophy " />
                            <i className="fas fa-trophy " />
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jay White</td>
                          <td>4:49</td>
                          <td style={{ color: "darkgray" }}>
                            <i className="fas fa-trophy " />
                            <i className="fas fa-trophy " />
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Mahesh Johnson</td>
                          <td>4:59</td>
                          <td style={{ color: "#d28c47" }}>
                            <i className="fas fa-trophy " />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Rankings;
