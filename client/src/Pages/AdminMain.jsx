import { Link, NavLink } from "react-router-dom";

  import React from 'react'
  import styles from "./Admin.module.css";

const links = [
    { path: "/", text: "Home" },
    { path: "/admin", text: "AddProducts" },
    { path: "/adminproduct", text: "Products" },
    { path: "/adminusers", text: "Users" },
    { path: "/", text: "Logout" }
  ];
  const AdminMain = () => {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height:"60px",
        // backgroundColor:"greenyellow"
      }}>
         {links.map((link) => (
        <NavLink
          // style={({ isActive }) => {
          //   return isActive ? activeStyle : defaultStyle;
          // }}
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          key={link.path}
          to={link.path}
        >
          {link.text}
        </NavLink>
      ))}
      </div>
    )
  }
  
  export default AdminMain