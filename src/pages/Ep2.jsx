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

function Ep2() {
  return (
    <>
      <HeaderContainer />
      <Title>Ep2. 나는 개발을 위해 이것까지 해봤다.</Title>
      <Contents>
        대외활동
      </Contents>
      
    </>
  )
}

export default Ep2
