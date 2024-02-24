import React from "react";
import usePost from "../hooks/usePost";
import "../onboarding/styles/sign_up.css";
import Layout from "./Layout";
import "./styles/main_style.css";

const CampaignForm = () => {

  const {formik} = usePost()

  const {values, handleChange, setFieldValue, errors, handleSubmit, isSubmitting} = formik

  return (
    <Layout>
      <div className="container main-section-wrapper">
        <h1>Start a Campaign !</h1>
        <div className="section-form">
          <form id="form">
            <div className="">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
             {errors?.description &&  <text style={{color: 'red'}}>{errors?.description}</text>}
            </div>
            <div>
              <label htmlFor="accNumber">Upload Image</label>
              <input
                type="file"
                name="image"
                onChange={(e) => setFieldValue('image', e.currentTarget.files[0])}
              />
                  {errors?.image &&  <text style={{color: 'red'}}>{errors.image}</text>}
            </div>
            <div>
              <button type="button" id="btn" onClick={handleSubmit} disabled={isSubmitting}>
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CampaignForm;
