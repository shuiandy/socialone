import { Modal } from "@nextui-org/react"

export default function TweetContextModal() {
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}>
    </Modal>
  );
}