import { useState } from "react";
import { Sidebar, useProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
function AppSidebar() {
  const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ display: "block", height: "100%" }}>
      <Sidebar>
        <Menu>
          <MenuItem icon={<MdDashboard size={30} />}> Unify Stream</MenuItem>
          <MenuItem icon={<BsFacebook size={30} color={"#087AEA"} />}>
            Facebook
          </MenuItem>
          <MenuItem icon={<BsTwitter size={30} color={"#1D9BF0"} />}>
            Twitter
          </MenuItem>
          <MenuItem icon={<BsInstagram size={30} />}> Instagram</MenuItem>
        </Menu>
      </Sidebar>
      <main></main>
    </div>
  );
}

export default AppSidebar;
