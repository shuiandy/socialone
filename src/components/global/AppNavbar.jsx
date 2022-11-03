import {
  Navbar,
  Button,
  Dropdown,
  Modal,
  Text,
  Avatar,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { useTheme as useNextTheme } from "next-themes";
import { useProSidebar } from "react-pro-sidebar";
import { GoLogoGithub } from "react-icons/go";
import { PreferenceModal } from "./PreferencesModal";
import {HiSun, HiMoon} from "react-icons/hi2"
const AppNavbar = () => {
  const collapseItems = ["Profile", "Log Out"];
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  // const { isShowing, toggleModal } = usePreferenceModal();
  const { collapseSidebar } = useProSidebar();
  const [visible, setModalVisible] = useState(false);
  const closeHandler = () => {
    setModalVisible(false);
  };
  return (
    <div>
      <Navbar>
        <Navbar.Content NavbarVariants='static'>
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
              iconOn={<HiMoon />}
              iconOff={<HiSun />}
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
              onAction={(actionKey) => {
                if (actionKey === "settings") {
                  setModalVisible(true);
                }
                console.log({ actionKey });
              }}
            >
              <Dropdown.Item key='profile' css={{ height: "$18" }}>
                <Text b color='interit' css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color='interit' css={{ d: "flex" }}>
                  shuiandy@gmail.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key='settings' withDivider>
                <Text color='interit' css={{ d: "flex" }}>
                  Settings
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key='logout' withDivider color='error'>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>
      <Modal
        closeButton
        blur
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Preferences
          </Text>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default AppNavbar;
