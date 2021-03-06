import React from 'react';

import { Overlay } from '../portfolio/portfolio.styles';

import MyBioImage from '../../assets/me.jpg';


import { 
    ImageContainer,
    SquareContainer,
    ImageSrc,
    MyImageBody,
    GithubLink,
    MyImageOverlay 
} from './my-image.styles';

const MyImage = () => {
    return (
        <ImageContainer>
            <GithubLink href="https://github.com/Mark9Mbugua" target="_blank">
                <SquareContainer className='square-container' />
                <MyImageBody>
                    <ImageSrc src={MyBioImage} />
                    <MyImageOverlay />
                </MyImageBody>
            </GithubLink> 
        </ImageContainer>
    )
}

export default MyImage
