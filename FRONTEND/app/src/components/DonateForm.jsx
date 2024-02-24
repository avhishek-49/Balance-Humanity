import React from "react";
import useTransaction from "../hooks/useTransaction";
import "../onboarding/styles/sign_up.css";
import Layout from "./Layout";
import "./styles/main_style.css";
import { useLocation } from "react-router-dom";

const DonateForm = () => {

  const {state} = useLocation()

  const formik = useTransaction(state)

  const {values, errors, isSubmitting, handleSubmit, handleChange, setFieldValue} = formik

  return (
    <Layout>
      <div className="container main-section-wrapper">
        <h1>
          Help us to implment this program. <br /> Make a Donation!
        </h1>
        <div className="section-form">
          <form id="form">
            <div className="">
              <label htmlFor="accountName"> Account Name</label>
              <input
                type="text"
                name="accountName"
                value={values.accountName}
                onChange={handleChange}
              />
                                          {errors?.accountName && <text style={{color: 'red', marginTop: 2}}>{errors?.accountName}</text>}

            </div>
                        <div className="">
              <label htmlFor="toAccountNumber"> Account Number</label>
              <input
                type="text"
                name="toAccountNumber"
                value={values.toAccountNumber}
                onChange={handleChange}
              />
                            {errors?.toAccountNumber && <text style={{color: 'red', marginTop: 2}}>{errors?.toAccountNumber}</text>}

            </div>
            <div className="">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                name="amount"
                value={values.amount}
                onChange={handleChange}
              />
                            {errors?.amount && <text style={{color: 'red', marginTop: 2}}>{errors?.amount}</text>}

            </div>
            <div className="">
              <label htmlFor="remarks">Remarks</label>
              <input
                type="text"
                name="remarks"
                value={values.remarks}
                onChange={handleChange}
              />
              {errors?.remarks && <text style={{color: 'red', marginTop: 2}}>{errors?.remarks}</text>}
            </div>
            <div>
              <button type="button" id="btn" onClick={handleSubmit} disabled={isSubmitting}>
                Donate
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default DonateForm;
