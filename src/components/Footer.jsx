import React from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faT, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.div`
  width: 100vw;
  height: 50px;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContentContainer = styled.div`
  width: 400px;
  display: flex;
  font-size: 30px;
  justify-content: center;
  cursor: pointer;
  /* color: #387D8C; */
  /* font-family: 'WantedSans-Medium'; */
`;

const FooterContent1 = styled.a`
  width: 30px;
  height: 30px;
  margin: 0 10px;
  display: flex;
  color: black;
  justify-content: center;
  &:hover {
    color: #387d8c;
  }
`;

const FooterContent2 = styled.a`
  display: flex;
  justify-content: center;
  margin: 0 10px;
  width: 30px;
  height: 30px;
  color: black;
  border: 2px solid black;
  &:hover {
    color: #387d8c;
    border-color: #387d8c;
  }
`;
const FooterContent3 = styled.a`
  display: flex;
  justify-content: center;
  margin: 0 10px;
  width: 30px;
  height: 30px;
  color: black;
  &:hover {
    color: #387d8c;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <FooterContent1 href="https://github.com/Sung-Heee" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </FooterContent1>
        <FooterContent2 href="https://sheeheehee.tistory.com/" target="_blank">
          <FontAwesomeIcon icon={faT} />
        </FooterContent2>
        <FooterContent3 href="mailto:08heehee08@naver.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </FooterContent3>
      </FooterContentContainer>
    </FooterContainer>
  );
}
