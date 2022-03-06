import React, { useState } from "react"; // eslint-disable-line
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

export default function LargeModal({ title, children, setOpenModal, active, footer = false }) {
    // const [active, setOpenModal] = React.useState(active);

    return (
        <>
            <Modal size="lg" active={active} toggler={() => setOpenModal(false)}>
                <ModalHeader toggler={() => setOpenModal(false)}>
                    {title}
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                {footer && <ModalFooter>
                    <Button
                        color="red"
                        buttonType="link"
                        onClick={(e) => setOpenModal(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                    <Button
                        color="green"
                        onClick={(e) => setOpenModal(false)}
                        ripple="light"
                    >
                        Save Changes
                    </Button>
                </ModalFooter>}
            </Modal>
        </>
    );
}