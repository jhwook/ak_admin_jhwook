import React ,{useState} from "react";
import { NavLink } from "react-router-dom";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import up_arrow_icon from "../../assets/icons/up-arrow-icon.svg"
import styled from "styled-components";
import { sidebar } from "../../sidebar_data/sidebar_routes";


export const Sidebar = ({title,Ilban, Section, ChildItems}) => {

  const [open, SetOpen]= useState(false)
  const onClick = ()=>{
    SetOpen((open) => !open)
  }
  return (
    <Container>
      <Card>
        <ListItem onClick={onClick} sx={{
          display: "flex",
          justifyContent: "space-between"
        }} button >
          <div style={{
            display: 'flex'
          }}>
<img style={{marginLeft:'6px'}} src={Ilban} alt='ilban' />
<ListItemText sx={{marginLEft: '1.5rem'}} primary={"vaxa"} />
          </div>
          <div>
            <img src={open ? Section : Ilban} alt='section' />
          </div>
        </ListItem>
{
  open && sidebar.map((item)=>(
    <Link to={item.path}>
    <ListItem key={'index'} sx={{display: 'flex', justifyContent:'space-between'}}button  >
<div style={{display:'flex'}}>
  <ListItemText sx={{
    marginLeft:"4.5rem",
    color:"red",

  }} primary={item.title}/>
  </div>
    </ListItem>
    </Link>
  ))
}
        {/* {sidebar.map((item) => (
          <Link key={item.id} to={item.path}>
            {item.title}
          </Link>
        ))} */}
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 230px;
  background: #ffffff;
  padding: 8px 0px 0 31px;
  box-shadow: 2px 0px 2px #e7eaf3;
  top: 0;
  left: 0;
`;
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
export default Sidebar;
