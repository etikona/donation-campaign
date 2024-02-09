export const getAllDonations = async () => {
  const res = fetch("http://localhost:5000/donations");
  const data = (await res).json();

  return data;
};
