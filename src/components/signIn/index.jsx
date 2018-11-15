import React, { Component } from "react";
import FormField from "../UI/formField";
import "./signin.css";
import { validate } from "../UI/misc";
import { firebase } from "../../firebase";

class SignIn extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          placeholder: "введите вашу почту",
          type: "email",
          name: "email_input"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          placeholder: "введите ваш пароль",
          type: "password",
          name: "password_input"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

  updateForm = element => {
    const formdata = { ...this.state.formdata };
    const formElement = { ...formdata[element.id] };
    formElement.value = element.event.target.value;
    formdata[element.id] = formElement;
    // validation
    let validData = validate(formElement); // returns the array [valid, message]
    formElement.valid = validData[0]; // true/false
    formElement.validationMessage = validData[1]; // message

    this.setState({ formdata: formdata, formError: false });
  };

  resetForm() {
    const formData = { ...this.state.formdata };
    for (let key in formData) {
      formData[key].value = "";
      formData[key].valid = false;
      formData[key].validationMessage = "";
    }

    this.setState({
      formdata: formData,
      formError: false,
      formSuccess: "Congratulations"
    });
  }

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }
    if (formIsValid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => {
          this.props.history.push("/dashboard");
        })
        .catch(error => {
          this.setState({
            formError: true
          });
        });
    } else {
      this.setState({ formError: true });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="signin_wrapper">
          <form
            onSubmit={event => this.submitForm(event)}
            className="registration_form"
          >
            <h2>Вход в систему</h2>
            <div>
              <FormField
                id={"email"}
                formdata={this.state.formdata.email}
                change={element => this.updateForm(element)}
              />
              <FormField
                id={"password"}
                formdata={this.state.formdata.password}
                change={element => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">
                  что-то пошло не так, пропробуйте ещё раз
                </div>
              ) : null}
              <div className="success_label">{this.state.formSuccess}</div>
              <button onClick={event => this.submitForm(event)}>Войти</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
