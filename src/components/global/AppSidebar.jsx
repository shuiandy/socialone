import { useState } from "react";
import { Sidebar, useProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
function AppSidebar () {
  const { collapseSidebar } = useProSidebar();
  return (
    <div class="Sidebar">
      <Sidebar>
        <Menu>
          <MenuItem icon={<DashboardIcon />}> Unify Stream</MenuItem>
          <MenuItem icon={<FacebookIcon />}> Facebook</MenuItem>
          <MenuItem icon={<TwitterIcon />}> Twitter</MenuItem>
          <MenuItem icon={<InstagramIcon />}> Instagram</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}><MenuIcon /></button>
      </main>
    </div>
  );
};

export default AppSidebar;
