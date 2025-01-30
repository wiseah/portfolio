import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4vw;

  @media (max-width: 768px) {
    gap: 2vw;
  }
  @media (max-width: 480px) {
    gap: 1vw;
  }
`;

const HomeButton = styled.button`
  font-size: 40px;
  font-weight: bold;
  color: #FF007F;
  margin-left: 40px;
  background-color: #F8F8F8;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 32px;  
    margin-left: 16px;
  }
  @media (max-width: 480px) {
    font-size: 26px; 
    margin-left: 10px;
  }
`;

const EpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2vw;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 16px;
  }
  @media (max-width: 480px) {
    margin-right: 10px;
  }
`;

const EpButton = styled.button`
  font-size: 30px;
  font-weight: bold;
  color: ${({ isActive }) => (isActive ? '#FF007F' : '#000')};
  background-color: #F8F8F8;
  border: none;
  cursor: pointer;
  border-bottom: ${({ isActive }) => (isActive ? '3px solid #FF007F' : 'none')};
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 24px;   
  }
  @media (max-width: 480px) {
    font-size: 18px;   
  }
`;

function HeaderContainer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('');

  // URL 경로에 맞는 버튼 활성화
  useEffect(() => {
    const path = location.pathname; // 현재 경로를 가져옵니다.
    if (path === '/ep1') {
      setActiveButton('ep1');
    } else if (path === '/ep2') {
      setActiveButton('ep2');
    } else if (path === '/ep3') {
      setActiveButton('ep3');
    } else {
      setActiveButton('ep1'); // 기본값은 ep1
    }
  }, [location.pathname]); // 경로가 변경될 때마다 상태를 업데이트합니다.

  const handleClick = (buttonId, path) => {
    setActiveButton(buttonId); // 활성화된 버튼 상태 업데이트
    navigate(path); // 해당 경로로 이동
  };

  return (
    <Container>
      <HomeButton onClick={() => navigate('/')}>Wiseah's Portfolio</HomeButton>
      <EpContainer>
        <EpButton
          isActive={activeButton === 'ep1'}
          onClick={() => handleClick('ep1', '/ep1')}
        >
          Ep1
        </EpButton>
        <EpButton
          isActive={activeButton === 'ep2'}
          onClick={() => handleClick('ep2', '/ep2')}
        >
          Ep2
        </EpButton>
        <EpButton
          isActive={activeButton === 'ep3'}
          onClick={() => handleClick('ep3', '/ep3')}
        >
          Ep3
        </EpButton>
      </EpContainer>
    </Container>
  );
}

export default HeaderContainer;
