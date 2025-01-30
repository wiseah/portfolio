import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative; /* 부모 컨테이너에 relative 위치 추가 */
  min-height: 100vh;
`;

const SearchBox = styled.img`
  width: 90vw;
  height: auto;
`;

const TypedText = styled.div`
  position: absolute; /* 텍스트를 이미지 위에 배치 */
  color: #FF007F;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  top: 50%; /* 중앙 정렬 */
  transform: translateY(-50%); /* 세로 중앙 정렬을 위해 */
`;

function Search() {
  return (
    <Container 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <SearchBox src='/images/searchBox.png' alt='searchbox'/>
      <TypedText>
        <ReactTyped
          strings={[
            "편리한 사용자 경험을 위해", 
            "UX와 성능 최적화 사이에서 고민하는", 
            "FE 개발자 김현아입니다."
          ]}
          typeSpeed={50} // 타이핑 속도
          backSpeed={25} // 타이핑 지우는 속도
          loop={true} // 반복 유무
        />
      </TypedText>
    </Container>
  )
}

export default Search
