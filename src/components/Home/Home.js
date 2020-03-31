import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Home = () => {
  return (
    <React.Fragment>
      <MDBContainer className="text-center mt-5 pt-5">
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            A Material-Formik Boilerplate
          </h2>
          <p className="lead grey-text w-responsive mx-auto mb-5">
            A Working Boilerplate
          </p>
          <MDBRow>
            <MDBCol md="4">
              <MDBIcon icon="chart-area" size="3x" className="red-text" />
              <h5 className="font-weight-bold my-4">Item 1</h5>
              <p className="grey-text mb-md-0 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores aperiam minima assumenda deleniti hic.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <MDBIcon icon="book" size="3x" className="cyan-text" />
              <h5 className="font-weight-bold my-4">Item 2</h5>
              <p className="grey-text mb-md-0 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores aperiam minima assumenda deleniti hic.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <MDBIcon far icon="comments" size="3x" className="orange-text" />
              <h5 className="font-weight-bold my-4">Item 3</h5>
              <p className="grey-text mb-md-0 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores aperiam minima assumenda deleniti hic.
              </p>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </React.Fragment>
  );
};

export default Home;
