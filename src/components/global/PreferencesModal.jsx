import { React } from "react";
import { Modal, Row, Button, Text, Col, Grid, Image } from "@nextui-org/react";
import {
  fbLoginStatus,
  insLoginStatus,
  twitterLoginStatus,
  preferenceModal,
} from "../../hooks/useRecoil";
import { useRecoilState } from "recoil";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { deleteCookie } from "cookies-next";
export default function PreferencesModal(props) {
  const [fbLogin, setFbLogin] = useRecoilState(fbLoginStatus);
  const [insLogin, setInsLogin] = useRecoilState(insLoginStatus);
  const [twitterLogin, setTwitterLogin] = useRecoilState(twitterLoginStatus);
  const [visible, setVisible] = useRecoilState(preferenceModal);
  const closeHandler = () => {
    setVisible(false);
  };
  const logoutFb = () => {
    setFbLogin(false);
    deleteCookie("fbId");
    deleteCookie("fbAccessToken");
  };
  const logoutIns = () => {
    setInsLogin(false);
    deleteCookie("insUserId");
    deleteCookie("insAccessToken");
  };
  const logoutTwitter = () => {
    setTwitterLogin(false);
    deleteCookie("twitterAccessSecret");
    deleteCookie("twitterAccessToken");
    deleteCookie("twitterId");
  };
  return (
    <Modal
      closeButton
      blur
      aria-labelledby='modal-title'
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text b id='modal-title' size={18}>
          Preferences
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Grid.Container justify='center'>
          <Row justify='center'>
            <Grid>
              <Image
                src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                alt='profile-photo'
                height='50px'
                width='50px'
                css={{ borderRadius: "50%" }}
              />
            </Grid>
          </Row>
          <Row justify='center'>
            <Grid>
              <Text b h3>
                Shuiandy
              </Text>
            </Grid>
          </Row>
        </Grid.Container>
        {fbLogin && (
          <Row align='center' justify='space-between'>
            <Grid css={{ paddingRight: "15px" }}>
              <BsFacebook size='25px' />
            </Grid>
            <Grid>
              <Text b color='success'>
                Facebook: logged in
              </Text>
            </Grid>
            <Grid>
              <Button auto color='error' onClick={logoutFb}>
                Logout
              </Button>
            </Grid>
          </Row>
        )}
        {!fbLogin && (
          <Row>
            <Grid css={{ paddingRight: "45px" }}>
              <BsFacebook size='25px' />
            </Grid>
            <Grid>
              <Text b>Facebook: not logged in</Text>
            </Grid>
          </Row>
        )}
        {insLogin && (
          <Row align='center' justify='space-between'>
            <Grid css={{ paddingRight: "45px" }}>
              <BsInstagram size='25px' />
            </Grid>
            <Grid>
              <Text b color='success'>
                Instagram: logged in
              </Text>
            </Grid>
            <Grid>
              <Button auto color='error' onClick={logoutIns}>
                Logout
              </Button>
            </Grid>
          </Row>
        )}
        {!insLogin && (
          <Row>
            <Grid css={{ paddingRight: "45px" }}>
              <BsInstagram size='25px' />
            </Grid>
            <Grid>
              <Text b>Instagram: not logged in</Text>
            </Grid>
          </Row>
        )}
        {twitterLogin && (
          <Row align='center' justify='space-between'>
            <Grid css={{ paddingRight: "15px" }}>
              <BsTwitter size='25px' />
            </Grid>
            <Grid>
              <Text b color='success'>
                Twitter: logged in
              </Text>
            </Grid>
            <Grid>
              <Button auto color='error' onClick={logoutTwitter}>
                Logout
              </Button>
            </Grid>
          </Row>
        )}
        {!twitterLogin && (
          <Row>
            <Grid css={{ paddingRight: "45px" }}>
              <BsTwitter size='25px' />
            </Grid>
            <Grid>
              <Text b>Twitter: not logged in</Text>
            </Grid>
          </Row>
        )}
      </Modal.Body>
    </Modal>
  );
}
