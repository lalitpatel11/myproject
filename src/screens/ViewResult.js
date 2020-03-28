import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import axios from "../api";
import Modal from "./Modal";
import { getChallengesData } from "../helpers/GetChallenges";
import { getLoginDetails } from "../helpers/Store";

class ViewResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [],
      searchText: "",
      isAdmin: false,
      username: "",
      show: false,
      modal_text: "",
      isLoggedIn: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    this.props.history.push("/");
  };

  async componentDidMount() {
    let { username, full_name, isAdmin } = await getLoginDetails();
    console.log("isAdmin :", isAdmin);
    if (
      username === "" ||
      username === "undefined" ||
      username === undefined ||
      username === "null" ||
      username === null ||
      full_name === "" ||
      full_name === "null" ||
      full_name === null ||
      full_name === "undefined" ||
      full_name === undefined
    ) {
      await this.setState({
        modal_text:
          "Please Sign In to access this page. All fields will be disabled until you login.",
        isLoggedIn: false
      });
      await this.showModal();
      console.log("this.state1212 :", this.state);
      return;
    } else {
      this.setState({ challenges: [] });
      await axios
        .post("/challenges/get_submitted_challenges")
        .then(res => {
          console.log(res.data);
          let data = getChallengesData(res.data.result);
          this.setState({ challenges: data });
          console.log("data11111111111111 :", data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  returnSearchTerm(index, { program_id, title, createdAt, no_of_submissions }) {
    console.log("program_id :", program_id);
    return (
      <tr key={program_id}>
        <td>{index + 1}</td>
        <td> {title}</td>
        <td> {new Date(createdAt).toLocaleDateString()}</td>
        <td> {no_of_submissions}</td>
        <td>
          <Link to={`/rankings/${program_id}`} className="btn btn-secondary">
            <i className="fas fa-angle-double-right" /> View Result
          </Link>
        </td>
      </tr>
    );
  }

  renderChallenge(searchText = this.state.searchText) {
    if (searchText && searchText !== "") {
      return this.state.challenges.map((challenge, i) => {
        return challenge.title.toLowerCase().indexOf(searchText.toLowerCase()) >
          -1
          ? this.returnSearchTerm(i, challenge)
          : null;
      });
    } else {
      return this.state.challenges.map((challenge, i) => {
        return this.returnSearchTerm(i, challenge);
      });
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Modal
          modalText={this.state.modal_text}
          show={this.state.show}
          handleClose={this.hideModal}
        />
        <br />
        <br />
        <br />
        <div>
          {/* HEADER */}
          <header id="main-header" className="py-2 bg-primary text-white">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1>
                    <i className="fas fa-desktop" /> Result
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
                      placeholder="Search result of challenge..."
                      onChange={event => {
                        this.setState({ searchText: event.target.value });
                      }}
                      value={this.state.searchText}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          this.renderChallenge(this.state.searchText);
                        }}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* POSTS */}
          <section id="posts">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-header">
                      <h4>Results </h4>
                    </div>
                    <table className="table table-striped">
                      <thead className="thead-dark">
                        <tr>
                          <th>#</th>
                          <th>Challenges</th>
                          <th>Date</th>
                          <th>Submissions</th>
                          <th>View Result</th>
                        </tr>
                      </thead>
                      <tbody>{this.renderChallenge()}</tbody>
                      {/* <tbody>
                        <tr>
                          <td>1</td>
                          <td>find my car</td>
                          <td>Jan 10 2020</td>
                          <td>
                            <i className="fas fa-star " />
                            <i className="fas fa-star " />
                            <i className="fas fa-star " />
                          </td>
                          <td>
                            <a
                              href="details.html"
                              className="btn btn-secondary"
                            >
                              <i className="fas fa-angle-double-right" /> View
                              Result
                            </a>
                          </td>
                        </tr>
                      </tbody> */}
                    </table>
                    {/* PAGINATION */}
                    {/* <nav className="ml-4">
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <Link to="/" href="#" className="page-link">
                            Previous
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link to="/" href="#" className="page-link">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="/" href="#" className="page-link">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="/" href="#" className="page-link">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="/" href="#" className="page-link">
                            Next
                          </Link>
                        </li>
                      </ul>
                    </nav> */}
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
export default ViewResult;
