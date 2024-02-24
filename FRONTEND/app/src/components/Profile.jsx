import React from "react";
import usePost from "../hooks/usePost";
import Layout from "./Layout";
import "./styles/main_style.css";
import useAuth from "../hooks/useAuth";


const Profile = () => {


  const {useFetchMyPosts} = usePost()

  const {useFetchProfile} = useAuth()

  const {data: res} = useFetchMyPosts()

  const {data: profile} = useFetchProfile()


  return (
    <Layout>
      <div className="container main-section-wrapper">
        <img
          src="/images/user.png"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div className="profile-style">
          <p>Name: Abhishek Paudel</p>
          <p> Mobile number: {profile?.data?.profileData[0]?.mobile_number}</p>
          <p>Email: {profile?.data?.profileData[0]?.email}</p>
          <p>Address: {profile?.data?.profileData[0]?.district_name}</p>
           <p>Amount: Rs {profile?.data?.profileData[0]?.amount}</p>
        </div>
        {res?.data?.data?.length > 0 && (
          <div className="container profile-campaigns">
            <h2>My Campaigns</h2>
            {res?.data?.data?.map((item) => {
              return (
                <div class="custom-card card mb-3" style={{display: 'flex', flexDirection: 'row'}}>
                  <img class="card-img" src={item.image} alt="Card image cap"  />
                  <div class="card-body">
                    <h5 class="card-title">{item.districtName}</h5>
                    <p class="card-text">{item.fullName ?? 'N/A'}</p>
                     <p class="card-text">{item.mobileNumber}</p>
                    <p class="card-text">{item.description}</p>
                    {/* <p class="card-text">
                      <b>Fund Raised: </b>Rs.{item.amount} /-
                    </p> */}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
