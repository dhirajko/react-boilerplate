import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MDBContainer,  MDBBtn } from "mdbreact";
import { AuthConsumer, withContext } from "./../Layout/Header/AuthContext";


const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail is not valid")
    .max(50, "E-mail must be less than 50 characters")
    .required("E-mail is required"),
  password: Yup.string().required("Password is required")
});

const LoginPage = (props) => {
   
  return (
    <AuthConsumer>
      {({ login }) => (
        <MDBContainer className="mt-5 pt-5 d-flex justify-content-center align-items-center">
          <div className="col-6">
            <h3 className="text-center mb-5">Sign In</h3>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={() => loginSchema}
              onSubmit={values => {
                login(values);
              }}
            >
              {({ isSubmitting }) => (
                <div>
                  <Form>
                    <div className="md-form form-group">
                      <i data-test="fa" className="fa fa-envelope prefix"></i>
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Type your email"
                        id="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ fontSize: "12px", color: "red" }}
                      />
                    </div>
                    <div className="md-form form-group">
                      <i data-test="fa" className="fa fa-lock prefix"></i>
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Type your password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={{ fontSize: "12px", color: "red" }}
                      />
                      <MDBBtn type="submit">Login</MDBBtn>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </MDBContainer>
      )}
    </AuthConsumer>
  );
};

export default withContext(LoginPage);
