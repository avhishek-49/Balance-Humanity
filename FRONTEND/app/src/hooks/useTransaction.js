import { useFormik } from "formik";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { createTransaction } from "../services/posts.service";
import QUERIES from "../core/constants/queries";

const useTransaction = (name) => {
  const navigate = useNavigate();
  const client = useQueryClient();

  const { mutate } = useMutation((body) => createTransaction(body), {
    onSuccess: () => {
      client.invalidateQueries([QUERIES.allPosts]);
      toast.success("Transaction completed");
      navigate(-1);
    },
    onError: (err) => {
      toast(JSON.stringify(err?.response?.data));
    },
  });

  const initialValues = {
    toAccountNumber: "",
    accountName: name || "",
    amount: "",
    remarks: "",
  };

  const schema = yup.object().shape({
    toAccountNumber: yup.string().required("Account number is required"),
    accountName: yup.string().required("Name"),
    amount: yup.string().required("Amount is required"),
    remarks: yup.string().required("Remarks is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values) => mutate(values),
  });

  return formik;
};

export default useTransaction;
