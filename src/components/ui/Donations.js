import { getAllDonations } from "@/utils/getAllDonations";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import React from "react";
import Image from "next/image";

const Donations = async () => {
  const data = await getAllDonations();

  //   console.log(donations);
  return (
    <div className="grid grid-cols-3 container m-auto my-12 gap-y-5">
      {data.map((donation) => (
        <Card key={donation} sx={{ maxWidth: 345 }}>
          <CardActionArea className="container m-auto">
            <CardMedia>
              <Image
                width="350"
                height="350"
                src={donation.image}
                alt="card image"
              />
            </CardMedia>
            <CardContent className=" flex">
              <Typography
                gutterBottom
                className="bg-red-200 text-red-400 font-bold w-24 p-1 rounded text-center"
                variant=""
                component="div"
              >
                {donation.category}
              </Typography>
              <Typography
                variant="body2"
                className="text-red-600 font-semibold text-lg"
              >
                {donation.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Donations;
