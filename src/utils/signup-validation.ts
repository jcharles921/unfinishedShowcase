import * as Yup from "yup";
const signupSchema = Yup.object({
  firstName: Yup.string().required("First name Required"),
  lastName: Yup.string().required("Last name is Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

export default signupSchema;
