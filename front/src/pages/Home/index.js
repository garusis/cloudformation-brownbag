import React, { Component } from "react";
import NavBar from "./../../layout/NavBar";
import DrawTable from "../../shared/Components/DrawTable";
import axios from "axios";
const structure = [
  {
    label: "Nombre",
    key: "name"
  },
  {
    label: "Apellido",
    key: "lastName"
  }
];
const data = [
  {
    name: "Un dato",
    lastName: "mock"
  },
  {
    name: "Otro dato",
    lastName: "Mock"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    try {
      let result = await axios.get("https://eunl4m60c3.execute-api.us-west-2.amazonaws.com/develop/list");
      result = result.data;
      if (Array.isArray(result)) {
        this.setState({ data: result });
      } else {
        throw "Se danio";
      }
    } catch (error) {
      this.setState({ data });
    }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <DrawTable structure={structure} data={this.state.data} />
      </React.Fragment>
    );
  }
}
export default Home;
