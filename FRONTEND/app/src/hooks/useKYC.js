import * as yup from "yup";
import { useFormik } from "formik";
import { useMutation, useQuery } from "react-query";
import { createKYC, getDistricts } from "../services/posts.service";
import QUERIES from "../core/constants/queries";
import { toast } from "react-toastify";

const useKYC = () => {
  const initialValues = {
    address: "1",
    citizenship_number: "",
    relationship: "",
    description_of_victim: "",
    account_number: "",
    account_name: "",
  };

  const schema = yup.object().shape({
    address: yup.string().required("Address is requireqd"),
    citizenship_number: yup.string().required("Citizenship number is required"),
    relationship: yup.string().required("Relationship status is required"),
    description_of_victim: yup.string().required("Description is required"),
    account_number: yup.string().required("Account number is required"),
    account_name: yup.string().required("Account name is required"),
  });

  const useFetchDistricts = () => useQuery([QUERIES.districts], getDistricts);

  const { mutate } = useMutation((body) => createKYC(body), {
    onSuccess: () => {
      toast.success("KYC has been added");
      formik.resetForm();
    },
    onError: (err) => {
      if (err?.response?.data) {
        toast.error(JSON.stringify(err?.response?.data));
      }
    },
  });

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values) => {
      const formData = new FormData();

      Object.entries(values).map(([k, v]) => formData.append(k, v));

      mutate(formData);
    },
  });

  return { formik, useFetchDistricts };
};

export default useKYC;
