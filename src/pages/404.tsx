import styled from '@emotion/styled';
import Link from 'next/link';

const NotFound = () => {
  return (
    <Wrapper>
      <Container>
          <Img src='https://dily.ru/templates/images/word_18_2875628.png' />
          <H1>Страницы не существует</H1>
          <Link href="/"><Button>Вернуться на сайт</Button></Link>
      </Container>
    </Wrapper>
  )
}

export default NotFound

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f8fa;
`

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding: 40px;
  gap: 40px;
  background-color: #fff;
  border-radius: 200px 60px 200px 60px;
`

const Img = styled.img`
  position: absolute;
  height: 256px;
  top: 90px;
`

const H1 = styled.h1`
  font-size: 22px;
  font-family: sans-serif;
  color: #23235f;
`
const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: #23235f;
  color: #fff;
  border: none;
  border-radius: 10px;
`
