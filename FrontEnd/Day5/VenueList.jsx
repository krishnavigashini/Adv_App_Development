import React from "react";
import { render } from "react-dom";
import './VenueList.css';
import AdminNav from './AdminNavBar'
import AdminSideBar from './AdminSideBar'

class App extends React.Component {
  state = {
    students: [],
    show: false,
    changeText: false,
    disableButton: false
  };
  handleChange = (e, i) => {
    let { name, value } = e.target;
    let students = [...this.state.students];
    students[i] = {
      ...students[i],
      [name]: value
    };
    console.log(students);
    this.setState({
      students,
      disableButton: true
    });
  };
  handleAddStudent = () => {
    this.setState((prevState) => ({
      students: [
        ...prevState.students,
        {
          name: "",
          attendence: ""
        }
      ]
    }));
  };
  handleRemoveLastStudent = () => {
    this.setState({
      students: this.state.students.slice(0, -1)
    });
  };
  handleRemoveSpecificStudent = (i) => () => {
    const students = [...this.state.students];
    students.splice(i, 1);
    this.setState({ students });
  };
  handleViewDetailsClick = () => {
    let students = [...this.state.students];
    this.setState({
      students,
      show: !this.state.show,
      changeText: !this.state.changeText
    });
  };
  render() {
    console.log(this.state.students);
    return (
      
      <div className="adminattbg">
      
      <AdminNav/> 
        <div className="textatt-center">
          <i className="h3att">
            VENUE LIST
          </i>
        </div>
        <div className="containerview">
          <div className="rowatt">
            <div className="colatt-md-12 column">
              <table
                className="tableatt table-bordered table-hover"
                id="tab_logicatt"
              >
                <thead>
                  <tr>
                    <th className="textatt-center font-italic red "> S No </th>
                    <th className="textatt-center font-italic"> Name </th>
                    <th className="textatt-center font-italic"> Venue Name </th>
                    <th className="textatt-center font-italic">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.students.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          autoComplete="off"
                          value={this.state.students[i].name}
                          onChange={(e) => this.handleChange(e, i)}
                          className="formatt-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="attendence"
                          autoComplete="off"
                          value={this.state.students[i].attendence}
                          onChange={(e) => this.handleChange(e, i)}
                          className="formatt-control"
                        />
                      </td>
                      <td className="textatt-center">
                        <button
                          className="btnatt btn-outline-danger btn-sm"
                          onClick={this.handleRemoveSpecificStudent(i)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br></br>
              <br></br>
              <button
                onClick={this.handleAddStudent}
                className="btnatt btn-primary"
              >
                Add Venue
              </button>
              <button
                onClick={this.handleRemoveLastStudent}
                className="btnatt1 btn-danger float-right"
              >
                Delete Last Venue
              </button>
            </div>
          </div>
        </div>
        <div className="textatt-center">
          <button
            type="button"
            className="btnatt btn-outline-success btn-md"
            disabled={this.state.disableButton === false}
            onClick={this.handleViewDetailsClick}
          >
            {this.state.changeText ? "Hide Details" : "View Details"}
          </button>
        </div>
        <div>
          {this.state.show && (
            <table className="w-50 mt-5 ml-5 table text-center">
              <thead className="theadatt-dark">
                <th className="fontatt-italic">S No</th>
                <th className="fontatt-italic">Name</th>
                <th className="fontatt-italic">Venue Name</th>
              </thead>
              <tbody>
                {this.state.students.map((i, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{i.name}</td>
                      <td>{i.attendence}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}
export default App;