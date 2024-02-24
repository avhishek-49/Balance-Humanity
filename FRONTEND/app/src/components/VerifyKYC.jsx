import React from "react";
import useKYC from '../hooks/useKYC';
import "../onboarding/styles/sign_up.css";
import Layout from "./Layout";
import "./styles/main_style.css";

const VerifyKyc = () => {


  const {formik, useFetchDistricts} = useKYC()

  const {data} = useFetchDistricts()

  const {values, errors, isSubmitting, handleChange, handleSubmit, setFieldValue} = formik

  return (
    <Layout>
      <div className="container main-section-wrapper">
        <h1>Fill KYC of a victim</h1>
        <div className="section-form">
          <form id="form">
            <div className="">
              <label htmlFor="account_name">Account Name</label>
              <input
                type="text"
                name="account_name"
                value={values.account_name}
                onChange={handleChange}
              />
                {errors?.account_name && <text style={{color: 'red', marginTop: 2}}>{errors?.account_name}</text>}
            </div>
            <div className="">
              <label htmlFor="account_number">Account Number</label>
              <input
                type="text"
                name="account_number"
                value={values.account_number}
                onChange={handleChange}
              />
                              {errors?.account_number && <text style={{color: 'red', marginTop: 2}}>{errors?.account_number}</text>}

            </div>
            <div className="">
              <label htmlFor="description_of_victim">Bio/Description</label>
              <input
                type="text"
                name="description_of_victim"
                value={values.description_of_victim}
                onChange={handleChange}
              />
                              {errors?.description_of_victim && <text style={{color: 'red', marginTop: 2}}>{errors?.description_of_victim}</text>}

            </div>

            <div className="">
              <label htmlFor="citizenship_number">Citizenship number</label>
              <input
                type="text"
                name="citizenship_number"
                value={values.citizenship_number}
                onChange={handleChange}
              />
                              {errors?.citizenship_number && <text style={{color: 'red', marginTop: 2}}>{errors?.citizenship_number}</text>}

            </div>
                        <div className="">
              <label htmlFor="relationship">Relationship</label>
              <input
                type="text"
                name="relationship"
                value={values.relationship}
                onChange={handleChange}
              />
                              {errors?.relationship && <text style={{color: 'red', marginTop: 2}}>{errors?.relationship}</text>}

            </div>
            <div className="">
              <label htmlFor="address">District</label>
              <select value={values.address} style={{width: '100%'}} onChange={(e) => setFieldValue('address', e.target.value)}>
                <option value=''>Select district</option>
                {data?.data?.data?.map(item => <option key={item?.id} value={item?.id}>{item?.name}</option>)}
              </select>
                              {errors?.address && <text style={{color: 'red', marginTop: 2}}>{errors?.address}</text>}

            </div>
            <div>
              <button type="button" id="btn" onClick={handleSubmit} disabled={isSubmitting}>
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyKyc;
