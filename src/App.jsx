import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

const Container = styled(motion.div)`
  background-color: #F8F8F8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
  /* justify-content: center; */
`

const EntranceImg = styled.img`
  width: 100vh;
  margin-top: 4rem;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ShareButton = styled.button`
  width: 300px;
  height: 70px;
  border-radius: 10px; /* 원형 버튼 */
  background-color: ${(props) => props.color || '#00D564'}; /* props로 색상 설정 */
  color: ${(props) => props.textcolor || '#000'};;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.8; /* 호버 효과 */
  }
`;

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ep1')
  };

  return (
    <Container 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <EntranceImg src='/images/entranceBackground.png' alt='entranceBackground'/>
      <ReactTyped
          strings={[
            "편리한 사용자 경험을 위해", 
            "끊임없이 UX와 성능 최적화 사이에서 고민하는", 
            "FE 개발자 김현아입니다."
          ]}
          typeSpeed={50} // 타이핑 속도
          backSpeed={25} // 타이핑 지우는 속도
          loop={true} // 반복 유무
          style={{
            color: "#00D564",
            fontWeight: "bold",
            fontSize: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
      />
      <ButtonContainer>
        <ShareButton color="#00D564" textcolor="#fff"> + 관심 20,250,113</ShareButton>
        <ShareButton color="#A5A5A5" textcolor="#000" onClick={handleClick}>첫 화 보기</ShareButton>
      </ButtonContainer>
    </Container>
  )
}

export default App
