import React from 'react'
import styled from 'styled-components'
import HeaderContainer from '../layouts/HeaderContainer'
import CookieAnimation from '../components/CookieAnimation'
import { motion } from 'framer-motion'

const Title = styled.div`
  background-color: #393B45;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Contents = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
const Text = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }  
`
const Highlight = styled.span`
  color: #FF007F;
  font-weight: bolder;
`;

function Ep3() {
  return (
    <>
      <HeaderContainer />
      <Title>Ep3. 내가 그리는 미래</Title>
      <Contents
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <CookieAnimation />
        <Text>
          유료회차는 곧 감상하실 수 있습니다.<br />
          지금 당장 보기를 원하시면 <Highlight>쿠키</Highlight>를 구워주세요! 
        </Text>
      </Contents>
      
    </>
  )
}

export default Ep3
