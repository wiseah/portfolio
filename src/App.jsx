import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

const Container = styled(motion.div)`
  background-color: #F8F8F8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4vh;

  @media (max-width: 768px) {
    gap: 2vh;
  }
`

const EntranceImg = styled.img`
  width: 100vh;

  @media (max-width: 768px) {
    width: 80vh;
  }

  @media (max-width: 480px) {
    width: 80vh;
  }
`

const TypedText = styled.div`
  color: #00D564;
  font-weight: bold;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const ShareButton = styled.button`
  width: 300px;
  height: 70px;
  border-radius: 10px;
  background-color: ${(props) => props.color || '#00D564'};
  color: ${(props) => props.textcolor || '#000'};
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 60px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 50px;
    font-size: 14px;
  }
`;

function App() {
  const navigate = useNavigate();

  const handleInterestClick = () => {
    alert('첫 화 보기를 눌러주세요!');
  };
  
  const handleClick = () => {
    navigate('/ep1');
  };

  return (
    <Container 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <EntranceImg src='/images/entranceBackground.png' alt='entranceBackground'/>
      <TypedText as={ReactTyped} // `ReactTyped`를 styled-component로 대체
        strings={[
          "편리한 사용자 경험을 위해", 
          "끊임없이 UX와 성능 최적화 사이에서 고민하는", 
          "FE 개발자 김현아입니다."
        ]}
        typeSpeed={50} // 타이핑 속도
        backSpeed={25} // 타이핑 지우는 속도
        loop={true} // 반복 유무
      />
      <ButtonContainer>
        <ShareButton color="#00D564" textcolor="#fff" onClick={handleInterestClick}> + 관심 2025,0113</ShareButton>
        <ShareButton color="#A5A5A5" textcolor="#000" onClick={handleClick}>첫 화 보기</ShareButton>
      </ButtonContainer>
    </Container>
  )
}

export default App;
