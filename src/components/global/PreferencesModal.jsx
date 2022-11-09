import { React } from "react";
import { Modal, Row, Button, Text, Col, Grid } from "@nextui-org/react";
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
  }
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
        <Text id='modal-title' size={18}>
          Preferences
        </Text>
      </Modal.Header>
      <Modal.Body>
        {fbLogin && (
          <Grid justify="space-between">
            <Row>
              <Col>
                <BsFacebook size={25} />
              </Col>
              <Col>
                <Text b>Logout from Facebook</Text>
              </Col>
              <Col>
                <Button auto color='error' onClick={logoutFb}>
                  Logout
                </Button>
              </Col>
            </Row>
          </Grid>
        )}
        {!fbLogin && <Text b>You have not logged in Facebook account</Text>}
        {insLogin && (
          <Grid>
            <Row>
              <Col>
                <Text b>Logout from Instagram</Text>
              </Col>
              <Col>
                <Button auto color='error' onClick={logoutIns}>
                  Logout
                </Button>
              </Col>
            </Row>
          </Grid>
        )}
        {!insLogin && <Text b>You have not logged in Instagram account</Text>}
        {twitterLogin && (
          <Grid>
            <Row>
              <Col>
                <Text b>Logout from Twitter</Text>
              </Col>
              <Col>
                <Button auto color='error' onClick={logoutTwitter}>
                  Logout
                </Button>
              </Col>
            </Row>
          </Grid>
        )}
        {!twitterLogin && <Text b>You have not logged in Twitter account</Text>}
      </Modal.Body>
    </Modal>
  );
}
