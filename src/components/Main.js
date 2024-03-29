import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

//components
import LogoComponent from "../subComponents/LogoComponent";
import { PowerButton } from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";

const MainContainer = styled.div`
    background: ${(props) => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    position: relative;

    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Karla", sans-serif;
        font-weight: 500;
    }
`;

const Container = styled.div`
    padding: 2rem;
`;

const Contact = styled(NavLink)`
    color: ${(props) => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
`;

const MySkills = styled(NavLink)`
    color: ${(props) => props.theme.text};
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
`;

const BottomBar = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;

    display: flex;
    justify-content: space-evenly;
`;

const About = styled(NavLink)`
    background: -webkit-linear-gradient(
        ${(props) => props.theme.body},
        ${(props) => props.theme.text}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* color: ${(props) =>
        props.click ? props.theme.body : props.theme.text}; */
    text-decoration: none;
    z-index: 1;
`;

const rotate = keyframes`

from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

const Center = styled.button`
    position: absolute;
    top: ${(props) => (props.click ? "85%" : "50%")};
    left: ${(props) => (props.click ? "92%" : "50%")};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;

    & > :first-child {
        animation: ${rotate} infinite 1.5s linear;
    }

    & > :last-child {
        display: ${(props) => (props.click ? "none" : "inline-block")};
        padding-top: 1rem;
    }
`;

const DarkDiv = styled.div`
    background-color: #000;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 50%;
    width: ${(props) => (props.click ? "50%" : "0%")};
    height: ${(props) => (props.click ? "100%" : "0%")};
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;
`;

export const Main = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <MainContainer>
            <Container>
                <PowerButton />
                <LogoComponent theme={click ? "dark" : "light"} />
                <SocialIcons theme={click ? "dark" : "light"} />

                <DarkDiv click={click} />
                <Center click={click}>
                    <YinYang
                        onClick={handleClick}
                        width={click ? 120 : 200}
                        height={click ? 120 : 200}
                        fill="currentColor"
                    />
                    <span>Click Me!</span>
                </Center>

                <Contact
                    target="_blank"
                    to={{ pathname: "mailto:mdadilsharif2@gmail.com" }}
                >
                    <motion.h2
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Say hi..
                    </motion.h2>
                </Contact>

                <MySkills to="/skills">
                    <motion.h2
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        MySkills
                    </motion.h2>
                </MySkills>

                <BottomBar>
                    <About to="/about" click={click}>
                        <h2>About</h2>
                    </About>
                </BottomBar>
            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    );
};
