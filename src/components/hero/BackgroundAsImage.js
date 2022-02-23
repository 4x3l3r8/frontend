import React, { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import SignUpModal from "../modal/SignUpModal";
import LoginModal from "../modal/LoginModal";
import { LogoutAction } from "../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header, { NavLink, NavLinks, PrimaryLink, SecondaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-indigo-500`}
  }
`;

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-indigo-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-blue-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${'' /* ${tw`absolute inset-0 bg-indigo-100 transform -skew-x-12 z-10`} */}
    ${'' /* ${tw`absolute inset-0 bg-indigo-100 transform -skew-x-12 -z-10`} */}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;


const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-indigo-500 font-bold rounded shadow transition duration-300 hocus:bg-indigo-500 hocus:text-gray-100 focus:shadow`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

const BackgroundAsImage = () => {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showSignUp, setShowSignUp] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authResponse = useSelector((state) => state.userAuth.authResponse);

  const logOut = () => {
    dispatch(LogoutAction());
    navigate("/");
  };


  const token = localStorage.getItem("user-token");

  useEffect(() => {
    if (authResponse !== "" && authResponse.success === true) {
      alert(authResponse.message);
      localStorage.removeItem("user-token");
    }
    return () => { };
  }, [authResponse]);

  const GetButtons = () => {
    if (token !== null && token !== "") {
      return (<NavLinks key={2}>
        <PrimaryLink onClick={logOut}>
          Logout
        </PrimaryLink>
      </NavLinks>)
    } else {
      return (<NavLinks key={2}>
        <PrimaryLink onClick={() => setShowLogin(true)}>
          Login
        </PrimaryLink>
        <SecondaryLink onClick={() => setShowSignUp(true)}>
          Sign Up
        </SecondaryLink>
      </NavLinks>)
    }
  }


  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="test">
        About
      </NavLink>
      <NavLink href="#">
        Blog
      </NavLink>
      <NavLink href="#">
        Locations
      </NavLink>
      <NavLink href="#">
        Pricing
      </NavLink>
    </NavLinks>,
    <GetButtons />
  ];

  return (
    <>
      <Container>
        <OpacityOverlay />
        <HeroContainer>
          <StyledHeader links={navLinks} />
          <TwoColumn>
            <LeftColumn>
              <Notification>We have now launched operations in Europe.</Notification>
              <Heading>
                <span>Hire the best</span>
                <br />
                <SlantedBackground>Travel Agency.</SlantedBackground>
              </Heading>
              <PrimaryAction>Read Customer Stories</PrimaryAction>
            </LeftColumn>
            <RightColumn>
              <StyledResponsiveVideoEmbed
                url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
                background="transparent"
              />
            </RightColumn>
          </TwoColumn>
        </HeroContainer>
      </Container>
      <SignUpModal showModal={showSignUp} setShowModal={setShowSignUp} />
      <LoginModal showModal={showLogin} setShowModal={setShowLogin} />
    </>
  );
};

export default BackgroundAsImage