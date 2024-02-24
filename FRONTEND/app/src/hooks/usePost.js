import { useMutation, useQuery } from "react-query";
import { createPost, getAllPosts, getMyPosts } from "../services/posts.service";
import QUERIES from "../core/constants/queries";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const usePost = () => {
  const useFetchMyPosts = () =>
    useQuery([QUERIES.myPosts], getMyPosts, {
      onError: (err) => {
        console.log("err", err?.response?.data);
      },
    });

  const { mutate } = useMutation((body) => createPost(body), {
    onSuccess: (res) => {
      const { message } = res.data;

      toast.success(message);
      formik.resetForm();
    },
    onError: (err) => {
      toast.error(JSON.stringify(err?.response?.data));
    },
  });

  const useFetchPosts = () =>
    useQuery([QUERIES.allPosts], getAllPosts, {
      onError: (err) => {
        console.log("err", err?.response?.data);
      },
    });

  const initialValues = {
    description: "",
    image: null,
  };

  const schema = yup.object().shape({
    description: yup.string().required("Description is required"),
    image: yup.mixed().required("Image is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      const formData = new FormData();

      formData.append("description", values.description);
      formData.append("file", values.image);

      mutate(formData);
    },
  });

  return { formik, useFetchMyPosts, useFetchPosts };
};

export default usePost;
