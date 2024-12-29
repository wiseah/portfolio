import { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  background-color: #00D564;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const EntranceImg = styled.img`
  width: 100%;
`

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/search');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);


  return (
    <Container 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <EntranceImg src='/images/entranceBackgroundGreen.png' alt='entranceBackground'/>
    </Container>
  )
}

export default App
