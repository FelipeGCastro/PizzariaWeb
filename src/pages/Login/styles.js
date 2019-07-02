import styled from 'styled-components';
import background from '../../assets/Imagens/fundo.jpg';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 72px;
  height: 72px;
  margin-bottom: 30px;
`;
export const EmailInput = styled.input`
  height: 50px;
  width: 350px;
  background: #fff;
  font-family: sans-serif;
  font-size: 17px;
  color: #999999;
  text-align: left;
  margin-bottom: 14px;
  border-style: none;
  border-radius: 8px;

  padding: 10px 20px;
`;
export const PasswordInput = styled.input`
  height: 50px;
  width: 350px;
  background: #fff;
  font-size: 17px;
  color: #999999;
  text-align: left;
  margin-bottom: 20px;

  border-style: none;
  border-radius: 8px;

  padding: 10px 20px;
`;

export const SignButton = styled.button`
  height: 50px;
  width: 350px;
  background: #e5293e;
  justify-content: center;
  align-content: center;
  border-style: none;
  border-radius: 8px;

  font-weight: bold;
  font-size: 18px;
  color: #fff;
`;
