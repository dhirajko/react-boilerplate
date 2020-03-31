import { Formik, ErrorMessage } from "formik";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import { AuthConsumer } from "./../Layout/Header/AuthContext";
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail is not valid")
    .max(50, "E-mail must be less than 50 characters")
    .required("E-mail is required"),
  password: Yup.string().required("Password is required"),
  name: Yup.string().required("Name is required")
});

const RegisterPage = () => {
  return (
    <MDBContainer className="pt-5 mt-5 ">
      <MDBRow>
        <MDBCol md="6" className="offset-md-3">
          <AuthConsumer>
            {({ register }) => (
              <div>
                <p className="h4 text-center mb-4">Sign Up</p>

                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    name: ""
                  }}
                  validationSchema={registerSchema}
                  onSubmit={values => {
                    register({
                      email: values.email,
                      password: values.password,
                      name: values.name
                    });
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <label className="grey-text">Your email</label>
                      <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={"form-control"}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ fontSize: "12px", color: "red" }}
                      />
                      <label className="grey-text">Your password</label>
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className={"form-control"}
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={{ fontSize: "12px", color: "red" }}
                      />
                      <label className="grey-text">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={"form-control"}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        style={{ fontSize: "12px", color: "red" }}
                      />
                      <div className="text-center mt-4">
                        <MDBBtn color="indigo" type="submit">
                          Sign Up
                        </MDBBtn>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            )}
          </AuthConsumer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default RegisterPage;
