import SingleDonationPage from "@/components/ui/SingleDonation";
import { getSingleDonation } from "@/utils/getSingleDonation";
import React from "react";

const DonationDetails = async ({ params }) => {
  return (
    <div>
      <SingleDonationPage id={params.id} />
    </div>
  );
};

export default DonationDetails;
