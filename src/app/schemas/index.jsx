import * as Yup from "yup";

const userDataValidation = Yup.object({
  name: Yup.string().min(2,"Too Short").max(25).required("Please Enter user name"),
  Address: Yup.string().min(5).max(50).required("Enter address"),
  Hobbies: Yup.string().required("Select your hobby"),
  Gender: Yup .string().required("Select Gender"),
  countryValue: Yup.string().required("Select Country"),
});

export {userDataValidation};