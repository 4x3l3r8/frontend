import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import Image from "@material-tailwind/react/Image";
import Dropdown from "@material-tailwind/react/Dropdown";
import { useNavigate } from "react-router-dom";
import { LogoutAction } from "../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import ProfilePicture from "images/team-1-800x800.jpg";
import tw, { css } from "twin.macro"; //eslint-disable-line

const StyledButton = Button;
// color="transparent" buttonType="link" size="lg" iconOnly rounded ripple="light"
const TwButton = tw(StyledButton)``; //eslint-disable-line
const Nav = tw.nav`bg-blue-500 md:ml-64 py-6 px-3`;
const NavContainer = tw.div`container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10`;
const Hidden = tw.div`md:hidden`; //eslint-disable-line

const ButtonContainer = tw.div`absolute top-2 md:hidden z-50 transition-all duration-300`;

const NavRight = tw.div`flex justify-between items-center w-full`;
const NavHeadText = tw.h4`uppercase text-white text-sm tracking-wider mt-1`;
const ContainerFlex = tw.div`flex`;
const DropdownContainer = tw.div`-mr-4 ml-6`;

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
  const location = useLocation().pathname;
  const heading_text_array = location.toUpperCase().split("/");
  const heading = heading_text_array[heading_text_array.length - 1];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authResponse = useSelector((state) => state.userAuth.authResponse);

  const logOut = () => {
    dispatch(LogoutAction());
    navigate("/");
  };

  useEffect(() => {
    if (authResponse !== "" && authResponse.success === true) {
      alert(authResponse.message);
      localStorage.removeItem("user-token");
    }
    return () => {};
  }, [authResponse]);

  return (
    <Nav>
      {/* <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10"> */}
      <NavContainer>
        {/* <div className="md:hidden"> */}
        <Hidden>
          <Button color="transparent" buttonType="link" size="lg" iconOnly rounded ripple="light" onClick={() => setShowSidebar("left-0")}>
            {/* <TwButton> */}
            <Icon name="menu" size="2xl" color="white" />
            {/* </TwButton> */}
          </Button>
          <ButtonContainer className={showSidebar === "left-0" ? "left-64" : "-left-64"}>
            <Button color="transparent" buttonType="link" size="lg" iconOnly rounded ripple="light" onClick={() => setShowSidebar("-left-64")}>
              <Icon name="close" size="2xl" color="white" />
            </Button>
          </ButtonContainer>
        </Hidden>

        <NavRight>
          <NavHeadText>{heading}</NavHeadText>

          <ContainerFlex>
            <NavbarInput placeholder="Search" />

            <DropdownContainer>
              <Dropdown
                color="transparent"
                buttonText={
                  <div className="w-12">
                    <Image src={ProfilePicture} rounded />
                  </div>
                }
                rounded
                style={{
                  padding: 0,
                  color: "transparent",
                }}
              >
                <DropdownItem color="lightBlue">
                  <div className="flex justify-between">
                    Profile
                    <Icon name="person" size="l" />
                  </div>
                </DropdownItem>
                <DropdownItem color="lightBlue" onClick={logOut}>
                  <div className="flex justify-between">
                    Logout
                    <Icon name="logout" size="l" />
                  </div>
                </DropdownItem>
              </Dropdown>
            </DropdownContainer>
          </ContainerFlex>
        </NavRight>
      </NavContainer>
    </Nav>
  );
}
