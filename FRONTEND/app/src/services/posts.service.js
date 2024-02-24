import client from "../axios";
import URLS from "../core/constants/urls";

export const getMyPosts = async () => await client.get(URLS.myPosts);

export const createPost = async (data) =>
  await client.post(URLS.createPost, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const getAllPosts = async () => await client.get(URLS.allPosts);

export const createTransaction = async (data) =>
  await client.post(URLS.transaction, data);

export const createKYC = async (data) => await client.post(URLS.kyc, data);

export const getDistricts = async () => await client.get(URLS.districts);
