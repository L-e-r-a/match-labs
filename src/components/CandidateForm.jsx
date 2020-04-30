import React from "react";
import styles from "./CandidateForm.module.css";
import Button from "./Button";


const CanditateForm = ({inputsData, sendFormData}) => {
    const inputs = inputsData;

    const getFormData = () => {
      const formData = {};
      document.querySelectorAll('input').forEach((input) => {
          formData[input.name] = input.value;
      })
      sendFormData && sendFormData(formData);
    }

    return (
      <form className={styles.form} action="" onSubmit={(e) => {e.preventDefault()}}>
        {inputs.map((input, index) => (
          <div className={styles.field} key={index}>
            <input type="text" name={input.name} placeholder={input.placeholder} defaultValue={input.value} />
          </div>
        ))}
        <Button 
            type="submit"
            variant="secondary"
            size="huge"
            action={getFormData}
        >
        Submit
        </Button>
      </form>
      )


}

export default CanditateForm;