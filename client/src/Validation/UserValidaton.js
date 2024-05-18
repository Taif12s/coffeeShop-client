import * as yup from "yup"; //import all from the yup

export const userSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup.string().email("Not valid email format").required("Email is required"),

  phone: yup.string().min(8).max(8).required("Phone is required"),

  password: yup.string().min(8).max(20).required("Password is required"),
  
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords Don't Match").required(),
});