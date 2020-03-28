import React from "react";
import axios from "../api";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Modal from "./Modal";
import { getLoginDetails } from "../helpers/Store";

class ShowQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
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
      // let path = `/`;
      // this.props.history.push(path);
      return;
    } else {
      await this.setState({ isLoggedIn: true, isAdmin: JSON.parse(isAdmin), username });
      await axios
        .post("/questions/get_questions")
        .then(res => {
          console.log("AXIOS:",res.data);
          this.setState({ questions: res.data.result });
        })
        .catch(async function(error) {
          console.log(error);
          await this.setState({
            modal_text:
              `SOMETHING WENT WRONG: ${error.message} `,
            isLoggedIn: false
          });
          await this.showModal();
        });
    }

  }

  returnSearchTerm(index, { _id, title }) {

    return (
      <tr key={_id}>
        <td>{index + 1}</td>
        <td> {title}</td>
        <td>
          <Link to={`/challenge/${_id}`} className="btn btn-secondary">
            <i className="fas fa-angle-double-right" /> More
          </Link>
        </td>
        {this.state.isAdmin && this.state.username !== "" ? (
          <td style={{cursor:'pointer'}} onClick={()=>{
            console.log("EDIT:",_id)
            this.props.history.push(`/addorupdateques/${_id}`);
          }}>
            <i className="fas fa-edit" />
          </td>
        ) : null}
        {this.state.isAdmin && this.state.username !== "" ? (
            <td style={{cursor:'pointer'}} onClick={async ()=>{
              console.log("DELETE:",_id)
              await axios.post("/questions/delete_questions",{
                "question_id":_id
              }).then((resp)=>{
                if(resp.data.status === 1){
                  alert(`Title: ${title} SUCCESSFULLY DELETED`)
                  this.setState({questions: [],
                    searchText: ""})
                }else{
                  alert("Failed to Delete Challenge")
                }
              }).catch((err)=>{
                console.log('err :', err);
                alert("Failed to Delete Challenge: "+err)
              })
            }}>
            <i className="fas fa-trash" />
          </td>
        ) : null}
      </tr>
    );
  }

  renderQuestion(searchText = this.state.searchText) {
    if (searchText && searchText !== "") {
      return this.state.questions.map((question, i) => {
        return question.title.toLowerCase().indexOf(searchText.toLowerCase()) >
          -1
          ? this.returnSearchTerm(i, question)
          : null;
      });
    } else {
      return this.state.questions.map((question, i) => {
        return this.returnSearchTerm(i, question);
      });
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
          <Modal
          modalText={this.state.modal_text}
          show={this.state.show}
          handleClose={this.hideModal}
        />
          <br />
          <br />
          <br />

          {/* HEADER */}
          <main role="main">
            <header id="main-header" className="py-2 bg-success text-white">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1>
                      <i className="fas fa-bolt" /> Challenges
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
                        placeholder="Search Question Title..."
                        onChange={event => {
                          this.setState({ searchText: event.target.value });
                        }}
                        value={this.state.searchText}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-success"
                          onClick={() => {
                            this.renderQuestion(this.state.searchText);
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
            {/* CATEGORIES */}
            <section id="categories">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <div className="card-header">
                        <h4>Questions For Challenges</h4>
                       <Link to="/addorupdateques/NA"><button className="btn btn-success">
                         <i className="fas fa-plus"/> ADD Questions / Challenges</button>
                         </Link> 
                      </div>
                      <table className="table table-striped">
                        <thead className="thead-dark">
                          <tr>
                            <th>Sr. No.</th>
                            <th>Question Title</th>
                            <th>About Question</th>
                            {this.state.isAdmin &&
                            this.state.username !== "" ? (
                              <th>Edit</th>
                            ) : null}
                            {this.state.isAdmin &&
                            this.state.username !== "" ? (
                              <th>Delete</th>
                            ) : null}
                          </tr>
                        </thead>
                        <tbody>{this.renderQuestion()}</tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* FOOTER */}
            <br /> <br />
          </main>
        </div>
      </div>
    );
  }
}
export default ShowQuestion;
