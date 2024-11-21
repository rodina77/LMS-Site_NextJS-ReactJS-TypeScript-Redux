import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  imgUrl: string;
  title: string;
}
const OfficeCard = ({ imgUrl, title }: IProps) => {
  return (
    <>
      <div>
        <div>
          <img width={500} height={400} src={imgUrl} alt="officeImg" />
        </div>

        <Typography variant="h4" fontWeight={500}>
          {title}
        </Typography>
      </div>
    </>
  );
};

export default OfficeCard;
