import {
  Avatar,
  Dropdown,
  Navbar,
  Switch,
  Text,
  useTheme,
} from "@nextui-org/react";
import { BiMenu } from "react-icons/bi";
import { useTheme as useNextTheme } from "next-themes";
import { useProSidebar } from "react-pro-sidebar";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useSetRecoilState } from "recoil";
import { preferenceModal } from "../../hooks/useRecoil";

const AppNavbar = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const { collapseSidebar } = useProSidebar();
  const setModalVisible = useSetRecoilState(preferenceModal);

  return (
    <div>
      <Navbar variant='static' maxWidth='fluid'>
        <Navbar.Content>
          <Navbar.Item placement='bottom-left'>
            <BiMenu size={30} onClick={() => collapseSidebar()} />
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Brand>
            <Text size={35} css={{ fontFamily: "Oswald" }}>
              SocialOne
            </Text>
          </Navbar.Brand>
        </Navbar.Content>
        <Navbar.Content css={{ "@xs": { w: "150px", js: "flex-end" } }}>
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
    </div>
  );
};

export default AppNavbar;
