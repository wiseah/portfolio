import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import cookieAnimation from '../assets/cookieAnimation.json'

const AnimationWrapper = styled.div`
  width: 300px;
`;

const CookieAnimation = () => {
  return (
    <AnimationWrapper>
      <Lottie animationData={cookieAnimation} loop={true} />
    </AnimationWrapper>
  );
};

export default CookieAnimation;
