import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const AppNavbar = () => {
  return <Navbar isBordered class="Navbar">
    <Navbar.Brand> <SearchIcon /> </Navbar.Brand>
  </Navbar>;
};

export default Navbar;
