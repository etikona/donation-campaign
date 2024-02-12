import SingleDonationPage from "@/components/ui/SingleDonation";

const DonationDetails = ({ params }) => {
  return (
    <div>
      <SingleDonationPage id={params.id} />
    </div>
  );
};

export default DonationDetails;
