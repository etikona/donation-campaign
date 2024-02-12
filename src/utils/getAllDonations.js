export const getAllDonations = async () => {
  const res = fetch("http://localhost:5000/donations");
  const data = (await res).json();
  console.log(data);
  return data;
};

export const getSingleDonation = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/donations/${id}`);
    console.log(res.headers.get("Content-Type"));
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status}`);
    }

    const data = await res.json();

    // Validate data here

    return data;
  } catch (error) {
    console.error("Error fetching donation:", error);
    // Handle error gracefully, e.g., display user-friendly message
  }
};
