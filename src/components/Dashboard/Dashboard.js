import React, { Component } from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer
} from "mdbreact";

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false
    };
  }
  

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <div>
          <MDBContainer>
           
            <MDBRow className="py-5">
              <div className="text-center text-md-left col-md-6 mt-xl-5 mb-5">
                <h1
                  className="h1-responsive text-dark"
                  style={{ zIndex: 1, color: "black" }}
                ></h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                  sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.
                </h6>
                <MDBBtn color="white">Download</MDBBtn>
                <MDBBtn outline color="dark">
                  Learn More
                </MDBBtn>
              </div>
              <MDBCol md="12" className="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>    
                {this.props.products.map((data,index)=><h2 key={index}>{data.email}</h2>)}          
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}
