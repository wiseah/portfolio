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

const ColumnContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vh;
`
const RowContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4vw;
  margin-top: 3rem;
`
const MyImg = styled.img`
    width: 200px;
    border-radius: 10px;
`
const Text = styled.div`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
`
const InfoContainer = styled.div`
    padding: 1rem;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #D9D9D9;
    width: 800px;
`
const InfoTitle = styled.div`
    color: #393B45;
    font-size: 40px;
    font-weight: bold;
`
const InfoContent = styled.div`
    font-size: 1rem;
`
const Highlight = styled.span`
  color: #00D564;
  font-weight: bolder;
`;

const Divider = styled.div`
    
    margin: 30px auto;
`

function Ep1() {
  return (
    <>
      <HeaderContainer />
      <Title>Ep1. 나는 이런 개발자입니다.</Title>
      <RowContents>
        <ColumnContents>
            <MyImg src='/images/myImg.png' alt='myImg'/>
            <Text>김현아</Text>
            <img src="https://skillicons.dev/icons?i=javascript,typescript,react,vite,next" alt=""/>
            {/* <img src="https://skillicons.dev/icons?i=react,vite,next" alt=""/> */}
            <img src="https://skillicons.dev/icons?i=styledcomponents,tailwindcss,vercel,figma" alt=""/>
        </ColumnContents>
        <ColumnContents>
            <InfoContainer>
                <InfoTitle># FE 개발자가 되기로 결심한 순간</InfoTitle>
                <InfoContent>
                    해결하고 싶은 딜레마가 생기면 언제든지 서비스를 개발할 수 있는 실력을 갖추고자 프론트엔드 개발자를 꿈꾸게 되었습니다. 
                    지금은 유저들과 가장 가까운 곳, 개발의 최전선에서 사용자 경험을 직접 만들어갈 수 있다는 것에 가장 큰 보람을 느껴 계속해서 성장해나가고 있습니다.
                </InfoContent>
            </InfoContainer>
            <InfoContainer>
                <InfoTitle># 프로젝트 진행 시 가장 중요하게 여기는 요소</InfoTitle>
                <InfoContent>
                    사람들과의 <Highlight>협업</Highlight>을 통해 활력을 얻고, <Highlight>활력</Highlight>을 통해 좋은 성과를 내어 <Highlight>"더 나은 세상"</Highlight>을 만들어가는 것을 좋아하는 저는, <br />
                    프로젝트 진행 시 <Highlight>소통</Highlight>을 가장 중요시 여깁니다.
                    원활한 소통이 이루어질 때 팀의 시너지가 극대화되고, 그 결과 더 나은 성과로 이어진다는 것을 경험해보았기 때문입니다.
                </InfoContent>
            </InfoContainer>
            <InfoContainer>
                <InfoTitle># 앞으로 어떤 개발자가 되고 싶은지</InfoTitle>
                <InfoContent>
                    기술적 문제를 해결하는 것에 그치지 않고, 사용자가 실제로 느낄 수 있는 체감 성능을 최우선으로 고려하며 개발하고, UX와 성능 최적화의 두 가지 균형을 이룬 서비스를 만들고자 합니다.
                </InfoContent>
            </InfoContainer>
        </ColumnContents>
      </RowContents>      
    </>
  )
}

export default Ep1
