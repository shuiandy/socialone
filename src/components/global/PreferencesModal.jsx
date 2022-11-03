import { useState, React } from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";

export default function PreferencesModal() {
  const [visible, setVisible] = useState(false);
  const usePreferenceModal = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
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
    </Modal>
  );
}
