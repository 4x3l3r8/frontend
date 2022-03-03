import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import Button from "@material-tailwind/react/Button";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../redux/actions/AuthActions";
import { useNavigate } from "react-router-dom";
import InputIcon from "@material-tailwind/react/InputIcon";
import H5 from "@material-tailwind/react/Heading5";

const SignUpModal = ({ showModal, setShowModal }) => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const [fields, setState] = useState({
        email: "",
        password: "",
    });

    const handleFieldChange = (e) => {
        setState({
            ...fields,
            [e.target.id]: e.target.value,
        });
    };

    const UserLogin = async(e) => {
        e.preventDefault();
        // console.log(fields);
        // await dispatch(LoginAction(fields, history));
            let user ={
                api_token: null,
                created_at: "2022-02-10T13:47:13.000000Z",    
                email: "admin@gmail.com",    
                email_verified_at: null,    
                id: 4,    
                is_admin: 1,    
                name: "admin1",    
                updated_at: "2022-02-10T13:47:13.000000Z",
            }
            localStorage.setItem("user-data", JSON.stringify(user));
        if(localStorage.getItem('user-data').is_Admin === 1){
            history("/admin/admin/dashboard")
        }
    };


    return (
        <>
            <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>

                {/* <Card> */}
                <CardHeader color="blue" size="lg">
                    <H5 color="white">Login</H5>
                </CardHeader>
                <form onSubmit={UserLogin}>
                    <CardBody>
                        <div className="mb-8 px-4">
                            <InputIcon
                                required
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                                label="email"
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
                                required
                                className="px-1"
                                id="password"
                                value={fields.password}
                                onChange={handleFieldChange}
                            />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center">
                            <Button
                                color="lightBlue"
                                buttonType="outline"
                                size="lg"
                                type="submit"
                                ripple="dark"
                            >
                                Login
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