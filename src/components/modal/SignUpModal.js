import React from "react";
import Modal from "@material-tailwind/react/Modal";
import Button from "@material-tailwind/react/Button";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import H5 from "@material-tailwind/react/Heading5";

const SignUpModal = ({ showModal, setShowModal }) => {

    return (
        <>
            <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>

                {/* <Card> */}
                    <CardHeader color="lightBlue" size="lg">
                        <H5 color="white">Sign up</H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mt-4 mb-8 px-4">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                placeholder="Full Name"
                                iconName="account_circle"
                            />
                        </div>
                        <div className="mb-8 px-4">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="password"
                                iconName="lock"
                            />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </CardFooter>
                {/* </Card> */}

            </Modal>
        </>
    );
}

export default SignUpModal