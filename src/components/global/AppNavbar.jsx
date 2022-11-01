import {
  Navbar,
  Button,
  Dropdown,
  Text,
  Avatar,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { useTheme as useNextTheme } from "next-themes";
import { useProSidebar } from "react-pro-sidebar";
import {GoLogoGithub} from 'react-icons/go'
const AppNavbar = () => {
  const collapseItems = ["Profile", "Log Out"];
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const { collapseSidebar } = useProSidebar();
  return (
    <div
      class='sidebar'
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        position: "top",
        padding: "16px",
      }}
    >
      <Navbar isBordered variant='sticky'>
        <Navbar.Content>
          <Navbar.Item placement='bottom-left'>
            <BiMenu size={30} onClick={() => collapseSidebar()} />
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Brand>
            <GoLogoGithub size={75} />
          </Navbar.Brand>
        </Navbar.Content>
        <Navbar.Content css={{ "@xs": { w: "12%", js: "flex-end" } }}>
          <Navbar.Item>
            <Switch
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
          </Navbar.Item>
          <Dropdown placement='bottom-right'>
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as='button'
                  color='secondary'
                  size='md'
                  src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label='User menu actions'
              color='secondary'
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key='profile' css={{ height: "$18" }}>
                <Text b color='interit' css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color='interit' css={{ d: "flex" }}>
                  shuiandy@gmail.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key='logout' withDivider color='error'>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
