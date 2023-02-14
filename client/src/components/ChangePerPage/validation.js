export default function Validate(inputs) {
  const errors = {};
  if (inputs.input < 9 || inputs.input >= 101) {
    errors.input = "Min 9 - Max 100";
  }

  if (Object.entries(errors).length > 0) {
    errors.enabled = false;
  }
  if (Object.entries(errors).length === 0) {
    errors.enabled = true;
  }
  return errors;
}
