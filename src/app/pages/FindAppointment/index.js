import React, { Component } from "react";
import { Formik } from "formik";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles.scss';

class FindAppointment extends Component {
  render() {
    return (
      <div className="registration-container">
        <Formik
          initialValues={{
            verificationCode: "",
            pesel: "",
            firstName: "",
            surname: "",
            email: "",
            password: ""
          }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
            <Card className="registrationInputs">
            <h1>Zacznij od utworzenia konta</h1>
            <form  onSubmit={handleSubmit}>
            <div className="singleInput-container">
            <TextField
            type="verificationCode"
          id="verificationCode"
          label="Kod weryfikacyjny"
          className="textField"
          value={values.verificationCode}
          onChange={handleChange}
          onBlur={handleBlur}
          margin="normal"
        />
              {errors.verificationCode && touched.verificationCode && errors.verificationCode}
              </div>
              
              <div className="singleInput-container">
              <TextField
            type="pesel"
          id="pesel"
          label="Pesel"
          className="textField"
          value={values.pesel}
          onChange={handleChange}
          onBlur={handleBlur}
          margin="normal"
        />
              {errors.pesel && touched.pesel && errors.pesel}
              </div>
              <div className="singleInput-container">
              <TextField
            type="firstName"
          id="firstName"
          label="Imię"
          className="textField"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          margin="normal"
        />
              {errors.firstName && touched.firstName && errors.firstName}
              </div>
              <div className="singleInput-container">
              <TextField
            type="surname"
          id="surname"
          label="Nazwisko"
          className="textField"
          value={values.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          margin="normal"
        />
              {errors.surname && touched.surname && errors.surname}
              </div>
              <div className="singleInput-container">
              <TextField
            type="email"
          id="email"
          label="E-mail"
          className="textField"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          margin="normal"
        />
              {errors.email && touched.email && errors.email}
              </div>
              <div className="singleInput-container">
              <TextField
            type="password"
          id="password"
          label="Hasło"
          className="textField"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          margin="normal"
        />
              {errors.password && touched.password && errors.password}
              </div>
              <Button type="submit" disabled={isSubmitting} variant="contained" color="primary" className="submit-button">
        Załóż konto
      </Button>
            </form>
            </Card>
          )}
        </Formik>
      </div>
    );
  }
}

export default FindAppointment;
