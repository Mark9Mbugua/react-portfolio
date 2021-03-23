import styled from 'styled-components';

export const LandingSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
`;

export const LandingBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    margin-top: 30px;
    margin-left: 100px;
`;



export const MyName = styled.p`
    color: #ff6161;
    font-size: 25px;
`;

export const HeadingTwo = styled.h1`
    color:#9396a3;
    font-size: 75px;
    line-height: 110px;
`;

export const HeadingOne = styled.h1`
    color:#ffff;
    font-size: 75px;
    line-height: 110px;
`;

export const IntroDetails = styled.p`
    color:#9396a3;
    font-size: 35px;
    line-height: 60px;
`;

export const FavStack = styled.span`
    color: #ff6161;
    padding: 0;
    margin: 0;
`;

export const LandingButtonContainer = styled.div`
    margin-top: 90px;
    padding-left: 0;
`;