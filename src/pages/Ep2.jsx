import React from 'react'
import styled from 'styled-components'
import HeaderContainer from '../layouts/HeaderContainer'
import data from '../data/ActivityData.json'
import { motion } from 'framer-motion';

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
`;

const Contents = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

//타임라인
const TimelineWrapper = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title2 = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  line-height: 30px; //줄 간격 속성
`;

const Timeline = styled.div`
  border-left: 2px solid #FF007F;
  margin-left: 4px;
  position: relative;
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative; //상대 위치 설정

  & .topRow {
    display: flex;
    align-items: center; // 동그라미와 텍스트를 세로로 정렬
  }

  & .circle {
    width: 1rem; /* 바깥 동그라미 크기 */
    height: 1rem;
    background: #FF007F; /* 바깥 동그라미 색상 */
    border-radius: 50%; /* 완전한 원 */
    margin-right: 10px; /* 동그라미와 텍스트 간격 */
    position: absolute; /* 절대 위치로 설정 */
    left: -9px; /* 타임라인 선에서 떨어지는 위치 */
    top: 10px; //선 위에 위에서 10px떨어진 곳에 위치
    transform: translateY(-50%); /* 세로 중앙 정렬 */
    z-index: 1;

    &::after {
      content: "";
      width: 0.5rem; /* 안쪽 동그라미 크기 */
      height: 0.5rem;
      background: #fff; /* 안쪽 동그라미 색상 */
      border-radius: 50%; /* 완전한 원 */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); /* 안쪽 동그라미를 중앙에 배치 */
      z-index: 2;
    }
  }

  & .mainContent {
    font-weight: bold;
    color: #333;
    font-size: 20px;
    margin: 0;
  }

  & .date {
    font-weight: bold;
    color: #FF007F;
    margin-right: 10px;
    margin-left: 24px;
    font-size: 20px;
  }

  & .subContent {
    margin: 4px 0 0 108px; /* 서브 콘텐츠를 들여쓰기 */
    font-size: 1rem; /* 서브 콘텐츠를 약간 작게 */
    color: #555;
  }
`;

// const TimelineItem = styled.div`
//   margin-bottom: 20px;
//   position: relative;

//   &::before {
//     content: "";
//     width: 1rem; /* 동그라미 크기 조정 */
//     height: 1rem;
//     background: #FF007F; /* 동그라미 색상 */
//     border-radius: 50%; /* 완전한 원 */
//     position: absolute;
//     left: -22px; /* 타임라인 선에서 떨어지는 위치 */
//     top: 0; /* 텍스트와 정확히 정렬되도록 설정 */
//     transform: translateY(50%); /* 세로 가운데 정렬 */
//   }

//   &::after {
//     content: "";
//     width: 0.5rem; /* 안쪽 동그라미 크기 */
//     height: 0.5rem;
//     background: #fff; /* 안쪽 동그라미 색상 */
//     border-radius: 50%; /* 완전한 원 */
//     position: absolute;
//     left: -18px; /* 바깥 동그라미의 중심에 위치 */
//     top: 8px; /* 바깥 동그라미의 중심에 위치 */
//     transform: translateY(50%);
//     z-index: 2; /* 바깥 동그라미 위에 표시 */
//   }

//   & > span {
//     font-weight: bold;
//     color: #333;
//   }

//   & > p {
//     font-weight: bold;
//     margin: 5px 0 0;
//     color: #FF007F;
//   }
// `;

function Ep2() {
  return (
    <>
      <HeaderContainer />
      <Title>Ep2. 나는 개발을 위해 이것까지 해봤다.</Title>
      <Contents
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
      <TimelineWrapper>
        <Title2>🔎 히스토리</Title2>
        <Subtitle>
          제 개발 여정은 매 프로젝트가 하나의 도전이자 배움의 기록이었습니다. <br />
          직접 부딪히고 시행착오를 겪으며 배워가는 과정에 강점이 있는 저는, 매 프로젝트에서 발견한 부족함을 개선하며 한 단계씩 성장하고 있습니다!
        </Subtitle>
        {/* <Timeline>
          {data.map((item, index) => (
            <TimelineItem key={index}>
              <span>{item.date}</span>
              <span>{item.content}</span>
            </TimelineItem>
          ))}
        </Timeline> */}
        <Timeline>
          {data.map((item, index) => (
            <TimelineItem key={index}>
              {/* 날짜와 활동 내용 */}
              <div className="topRow">
                <div className="circle" />
                <span className="date">{item.date}</span>
                <span className="mainContent">{item.content}</span>
              </div>

              {/* 서브 콘텐츠가 있는 경우만 렌더링 */}
              {Array.isArray(item.subcontents) && item.subcontents.map((sub, subIndex) => (
                <p key={subIndex} className="subContent">
                  {sub}
                </p>
              ))}
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineWrapper>
      </Contents>
    </>
  )
}

export default Ep2
