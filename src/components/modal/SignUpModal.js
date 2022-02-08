import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import Button from "@material-tailwind/react/Button";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import H5 from "@material-tailwind/react/Heading5";
import { useDispatch } from "react-redux";
import { RegisterAction } from "../../redux/actions/AuthActions";

const SignUpModal = ({ showModal, setShowModal }) => {
    const dispatch = useDispatch();
    const [fields, setState] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleFieldChange = (e) => {
        setState({
            ...fields,
            [e.target.id]: e.target.value,
        });
    };

    const UserRegister = (e) => {
        e.preventDefault();
        console.log(fields);
        const passwordMatch = checkPasswordMatch(fields.password, fields.password_confirmation);
        if (passwordMatch === true) {
            alert("passwords dont match. please check your password again");
            return;
        }
        dispatch(RegisterAction(fields));
    };

    const checkPasswordMatch = (password, password_confirmation) => {
        return password !== password_confirmation ? true : false;
    };

    return (
        <>
            <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>

                {/* <Card> */}
                <CardHeader color="lightBlue" size="lg">
                    <H5 color="white">Sign up</H5>
                </CardHeader>
                <form onSubmit={UserRegister}>
                    <CardBody>
                        <div className="mt-4 mb-8 px-4">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                placeholder="Full Name"
                                iconName="account_circle"
                                autoComplete="false"
                                required
                                value={fields.name}
                                id="name"
                                onChange={handleFieldChange}
                            />
                        </div>
                        <div className="mb-8 px-4">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                                autoComplete="off"
                                required
                                id="email"
                                value={fields.email}
                                onChange={handleFieldChange}
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="password"
                                iconName="lock"
                                autoComplete="off"
                                required
                                id="password"
                                value={fields.password}
                                onChange={handleFieldChange}
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Confirm password"
                                iconName="lock"
                                autoComplete="off"
                                required
                                id="password_confirmation"
                                value={fields.password_confirmation}
                                onChange={handleFieldChange}
                            />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                color="lightBlue"
                                buttonType="outline"
                                size="lg"
                                ripple="dark"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </CardFooter>
                </form>
                {/* </Card> */}

            </Modal>
        </>
    );
}

export default SignUpModal