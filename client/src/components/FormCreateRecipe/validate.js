const regexName = new RegExp("^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$");

//^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$

export default function Validate(inputs) {
  const errors = {};

  if (!inputs.name) {
    errors.name = "Name is required";
  } else if (!regexName.test(inputs.name)) {
    errors.name = "Only letters and spaces...";
  } else if (inputs.name.length < 5) {
    errors.name = "Min 5 characters";
  } 

  if (!inputs.summary) {
    errors.summary = "Summary is required";
  } else if (inputs.summary.length < 15) {
    errors.summary = "Min 15 characters";
  }

  if (!inputs.steps) {
    errors.steps = "Steps is required";
  } else if (inputs.steps.length < 15) {
    errors.steps = "Min 10 characters";
  }

  if (Object.entries(errors).length > 0) {
    errors.enabled = false;
  }
  if (Object.entries(errors).length === 0) {
    errors.enabled = true;
  }
  return errors;
}
