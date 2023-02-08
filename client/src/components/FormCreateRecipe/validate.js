export default function Validate(inputs) {
  const errors = {};

  if (inputs.name.length < 5) {
    errors.name = "Name is Required";
  }
  if (inputs.summary.length < 15) {
    errors.summary = "Min 15 Caracteres";
  }
  if (inputs.steps.length < 15) {
    errors.steps = "Min 10 Caracteres";
  }
  //   if (
  //     inputs.name.length > 5 &&
  //     inputs.summary.length > 15 &&
  //     inputs.steps.length > 15
  //   ) {
  //     errors.enabled = true;
  //   }
  if (Object.entries(errors).length > 0) {
    errors.enabled = false;
  }
  if (Object.entries(errors).length === 0) {
    errors.enabled = true;
  }
  return errors;
}
