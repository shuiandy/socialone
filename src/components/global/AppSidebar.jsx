import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { Image, Grid, Text } from "@nextui-org/react";
import { useRecoilState } from "recoil";
import { modeState } from "../../hooks/useRecoil";
function AppSidebar() {
  const { collapsed } = useProSidebar();
  const [mode, setMode] = useRecoilState(modeState);
  return (
    <div style={{ display: "block", height: "100%" }}>
      <Sidebar style={{ height: "100%" }}>
        {!collapsed && (
          <Grid.Container
            alignContent='center'
            justify='center'
            direction='column'
            css={{ paddingTop: "80px" }}
          >
            <Grid>
              <Image
                width={"100px"}
                height={"100px"}
                src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                alt='profile-image'
                css={{
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </Grid>
            <Grid>
              <Text h2 b css={{ m: 2 }}>
                shuiandy
              </Text>
            </Grid>
          </Grid.Container>
        )}
        <Menu>
          <MenuItem
            active={mode === "unify"}
            onClick={() => setMode("unify")}
            icon={<MdDashboard size={30} />}
          >
            {" "}
            Unify Stream
          </MenuItem>
          <MenuItem
            active={mode === "facebook"}
            onClick={() => setMode("facebook")}
            icon={<BsFacebook size={30} color={"#087AEA"} />}
          >
            Facebook
          </MenuItem>
          <MenuItem
            active={mode === "twitter"}
            onClick={() => setMode("twitter")}
            icon={<BsTwitter size={30} color={"#1D9BF0"} />}
          >
            Twitter
          </MenuItem>
          <MenuItem
            active={mode === "instagram"}
            onClick={() => setMode("instagram")}
            icon={<BsInstagram size={30} />}
          >
            {" "}
            Instagram
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default AppSidebar;
