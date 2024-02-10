export const getAllDonations = async () => {
  const res = fetch("http://localhost:5000/donations");
  const data = (await res).json();
  console.log(data);
  return data;
};

export const getSingleDonation = async (id) => {
  const res = fetch(`http://localhost:5000/donations/${id}`);
  console.log(res);
  const data = (await res).json();
  console.log(data);

  return data;
};
