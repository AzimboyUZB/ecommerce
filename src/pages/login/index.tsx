import LoginForm from '@/components/comparision/login/components/LoginForm'
import styled from '@emotion/styled'

const Login = () => {
  return (
    <Wrapper>
      <LoginRight>
        <LoginForm />
      </LoginRight>
    </Wrapper>
  )
}

export default Login

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LoginRight = styled.div`
  width: 900px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(' /images/Login/LoginBack.png');
  background-size: cover;
`
