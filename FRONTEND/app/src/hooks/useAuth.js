import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import {
  changePassword,
  getProfile,
  login,
  register,
} from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import KEYS from "../core/constants/keys";
import QUERIES from "../core/constants/queries";
import * as yup from "yup";
import { useFormik } from "formik";

const useAuth = () => {
  const navigate = useNavigate();

  const useLogin = () =>
    useMutation((body) => login(body), {
      onSuccess: (res) => {
        const { accessToken } = res.data;

        localStorage.setItem(KEYS.token, accessToken.token);
        navigate("home");
      },
      onError: (err) => {
        if (err?.response?.status === 401) {
          toast.error("Invalid credentials", {
            onClick: () => toast.dismiss(),
          });
          return;
        }

        const { message } = err?.response?.data;

        if (message) {
          toast.error(message, {
            onClick: () => toast.dismiss(),
          });
        }
      },
    });

  const useForgetPassword = () =>
    useMutation((body) => changePassword(body), {
      onSuccess: (res) => {
        navigate(-1);
      },
      onError: (err) => {
        const { message } = err?.response?.data;

        if (message) {
          toast.error(message, {
            onClick: () => toast.dismiss(),
          });
        }
      },
    });

  const useFetchProfile = () => useQuery([QUERIES.myProfile], getProfile);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    customerPin: "",
    districtId: "",
  };

  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    mobileNumber: yup
      .string()
      .required("Mobile number is required")
      .min(10, "Mobile number must be 10 digits")
      .max(10, "Mobile number must be 10 digits"),
    password: yup.string().required("Password is required"),
    customerPin: yup.string().required("Customer pin is required"),
    districtId: yup.string().required("District is required"),
  });

  const { mutate } = useMutation((body) => register(body), {
    onSuccess: (_, values) => {
      if (location.pathname === "/submit") {
        toast.success("OTP sent");
        formik.resetForm();
        localStorage.setItem("customer", JSON.stringify(formik.values));
        navigate("/otp");
      } else {
        toast.success("Account registered");
        navigate(-2);
      }
    },
    onError: (err) => {
      formik.setSubmitting(false);
      const { message } = err?.response?.data;

      if (message) {
        toast.error(message);
      }
    },
  });

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values) => mutate(values),
  });

  return { formik, useLogin, useFetchProfile, useForgetPassword, mutate };
};

export default useAuth;
