import React from 'react'
import styled from 'styled-components'
import HeaderContainer from '../layouts/HeaderContainer'

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

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Ep1() {
  return (
    <>
      <HeaderContainer />
      <Title>Ep1. 나는 이런 개발자입니다.</Title>
      <Contents>
        기술스택
      </Contents>
      
    </>
  )
}

export default Ep1
