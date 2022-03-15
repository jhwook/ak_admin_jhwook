import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import up_arrow_icon from "../../assets/icons/up-arrow-icon.svg";
import down_arrow_icon from "../../assets/icons/down-arrow-icon.svg";
import styled from "styled-components";

const DrawerField = ({ title, childItems }) => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(() => !open);
  };

  return (
    <Card>
      <ListItem
        onClick={onClick}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        button
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <ListItemText sx={{ marginLEft: "1.5rem" }} primary={title} />
        </div>
        <div>
          <img src={open ? up_arrow_icon : down_arrow_icon} alt="section" />
        </div>
      </ListItem>
      {open &&
        childItems.map((el, index) => (
          <Link key={index} to={el.params}>
            <ListItem
              key={"index"}
              sx={{ display: "flex", justifyContent: "space-between" }}
              button
            >
              <div style={{ display: "flex" }}>
                <ListItemText
                  sx={{
                    marginLeft: "4.5rem",
                    color: "red",
                  }}
                  primary={el.title}
                />
              </div>
            </ListItem>
          </Link>
        ))}
    </Card>
  );
};

const Wrapper = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #555555;
`;
const Icons = styled.img`
  width: 26px;
  height: 26px;
`;
const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Link = styled(NavLink)`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #555555;
  margin-bottom: 10px;
`;

export default DrawerField;
