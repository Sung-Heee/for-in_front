import React from 'react';
import styled, { css } from 'styled-components';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 110px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
`;

const Logo = styled.a`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Nav = styled.div`
  width: 15vw;
  display: flex;
  justify-content: space-evenly;
  font-size: 25px;
`;

const buttonStyles = css`
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 2px;
  color: #387d8c;
  font-family: 'WantedSans-SemiBold';
`;

const MyPageButton = styled.a`
  ${buttonStyles};
`;

const LoginButton = styled.a`
  ${buttonStyles};
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo href="/">
        <LogoImg src="./logo.png" alt="Logo" />
      </Logo>

      <Nav>
        <MyPageButton onClick={() => alert('준비 중입니다.')}>
          MyPage
        </MyPageButton>
        <LoginButton onClick={() => alert('준비 중입니다.')}>Login</LoginButton>
      </Nav>
    </HeaderWrapper>
  );
}
