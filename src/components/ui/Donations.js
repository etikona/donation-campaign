import { getAllDonations, getSingleDonation } from "@/utils/getAllDonations";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Donations = async () => {
  const data = await getAllDonations();
  // console.log(data);

  //   console.log(donations);
  return (
    <div className="grid grid-cols-3 w-full my-12 gap-y-5">
      {data.map((donation) => (
        <Card key={donation} sx={{ maxWidth: 345 }}>
          <CardActionArea className="container m-auto flex">
            <CardMedia>
              <Image
                width="350"
                height="100"
                className=""
                src={donation.image}
                alt="card image"
              />
            </CardMedia>
            <CardContent className="">
              {/* <Typography
                gutterBottom
                className="bg-red-200 text-red-400 font-bold w-24 p-1 rounded text-center"
                variant=""
                component="div"
              >
                {donation.category}
              </Typography> */}
              <Typography
                variant="body2"
                className="text-red-600 font-semibold text-lg w-full "
              >
                {donation.name}
              </Typography>
              <Link href={`/donations/${donation._id}`}>
                <button className="bg-green-300 p-1 rounded w-20 text-green-600 font-semibold m-auto">
                  Details
                </button>
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Donations;
