"use server";

export const createUser = async (data) => {
  const res = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const userInfo = await res.json();
  //   console.log(userInfo);
  return userInfo;
};
