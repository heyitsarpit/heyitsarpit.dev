import styled from '@emotion/styled';

import AboutMe from '../components/AboutMe/AboutMe';
import Experience from '../components/Experience/Experience';
import Intro from '../components/Intro/Intro';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

// const Space = styled.div`
//     height: 70px;
//     width: 100%;
//     position: relative;
//     top: 0px;
//     padding-top: 0px;
//     padding-bottom: 3cm;
//     background-color: transparent;
//     color: #f9f9f9;
// `;

const Home: React.FC = () => {
    return (
        <>
            <Intro />
            <AboutMe />
            <Experience />
            <Skills />
            <Projects />
        </>
    );
};

export default Home;
