import React from 'react'
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";

export default function PreferencesModal() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
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
        <Text id="modal-title" size={18}>Preferences</Text>
      </Modal.Header>
    </Modal>
  );
}