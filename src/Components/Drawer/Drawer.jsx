import React, { useState } from "react";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import up_arrow_icon from "../../assets/icons/AK.svg";
import { Link } from "react-router-dom";

const DrawerField = ({ title, setting_icon, down_arrow_icon, childItems }) => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen((open) => !open);
  };

  return (
    <div>
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
          <img
            style={{ marginLeft: "6px" }}
            src={setting_icon}
            alt="setting-icon"
          />
          <ListItemText sx={{ marginLeft: "1.5rem" }} primary={title} />
        </div>
        <div>
          <img
            src={open ? up_arrow_icon : down_arrow_icon}
            alt="down-arrow-icon"
          />
        </div>
      </ListItem>

      {open &&
        childItems.map((item, index) => (
          <Link
            style={{
              textDecoration: "none",
            }}
            to={item.params}
          >
            <ListItem
              key={index}
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
                <ListItemText
                  sx={{
                    marginLeft: "4.5rem",
                    color: "#5B5B5B",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                  primary={item.title}
                />
              </div>
            </ListItem>
          </Link>
        ))}
    </div>
  );
};

export default DrawerField;
