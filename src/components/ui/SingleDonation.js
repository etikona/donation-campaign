import { getSingleDonation } from "@/utils/getAllDonations";
import React from "react";

const SingleDonationPage = async ({ id }) => {
  const data = await getSingleDonation(id);
  console.log(data);

  return <div></div>;
};

export default SingleDonationPage;
