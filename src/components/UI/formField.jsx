import React from "react";

const FormField = ({ formdata, id, change, add }) => {

  const showError =()=>{
    let errorMessage = <div className="error_label">
    {
        formdata.validation && !formdata.valid ? 
        formdata.validationMessage : null
    }
    </div>

    return errorMessage;
  }

  const formTemplate = () => {
    let template = null;
    switch (formdata.element) {
      case "input":
        template = (
          <div>
          <input
            {...formdata.config}
            value={formdata.value}
            onChange={event => change({ event, id })}
            className="registration_field"
          />
          {showError()}
          </div>
        );
        break;
      default:
        template = null;
    }
    return template;
  };
  return <div>{formTemplate()}</div>;
};

export default FormField;
