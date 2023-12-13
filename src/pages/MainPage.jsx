import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const MainContainer = styled.div`
  margin-top: 110px;
  display: flex;
  width: 100vw;
  height: calc(100vh - 110px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainInputBarContainer = styled.div`
  width: 750px;
  height: 70px;
  border: 3px solid #387d8c;
  display: flex;
`;

const Input = styled.input`
  width: 570px;
  font-size: 30px;
  padding: 10px 20px;
  font-family: 'WantedSans-Medium';
  letter-spacing: 2px;
  ::placeholder {
    color: #b8b8b8;
  }
  :focus {
    outline: none;
  }
`;

const SubmitBtn = styled.button`
  font-size: 30px;
  width: 180px;
  color: #fff;
  background-color: #387d8c;
  border: none;
  font-family: 'WantedSans-Bold';
  letter-spacing: 2px;
  cursor: pointer;
`;

const InputHistoryContainer = styled.div`
  margin-top: 20px;
  width: 750px;
  max-height: 360px;
  font-size: 22px;
  letter-spacing: 2px;
  font-family: 'WantedSans-Medium';
  overflow-y: auto;
`;

const InputHistorySecondContainer = styled.div`
  width: 690px;
  background-color: #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: #387d8c;
  font-size: 22px;
  padding: 10px 20px;
`;

const InputHistoryItem = styled.div`
  width: 650px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-around;
`;

const Modify = styled.button`
  width: 30px;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const Delete = styled.button`
  width: 30px;
  font-size: 20px;

  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const BtnContainer = styled.div`
  margin-top: 30px;
  width: 750px;
  height: 50px;
  border: 3px solid #387d8c;
`;

const Reset = styled.button`
  width: 200px;
  height: 50px;
  color: #387d8c;
  background-color: transparent;
  border: none;
  font-size: 20px;
  font-family: 'WantedSans-Bold';
  cursor: pointer;
`;

const Start = styled.button`
  width: 350px;
  height: 50px;
  color: #fff;
  background-color: #387d8c;
  border: none;
  font-size: 20px;
  font-family: 'WantedSans-Bold';
  cursor: pointer;
  text-decoration: none;
`;

const Store = styled.button`
  width: 200px;
  height: 50px;
  color: #387d8c;
  background-color: transparent;
  border: none;
  font-size: 20px;
  font-family: 'WantedSans-Bold';
  cursor: pointer;
`;

export default function MainPage() {
  // const [inputText, setInputText] = useState('');
  const [inputHistory, setInputHistory] = useState([]);

  const [isLogin, setIsLogin] = useState(false);

  const inputRef = useRef();
  const container_scroll = useRef();

  const navigate = useNavigate();

  const toLocalStorage = (data) => {
    localStorage.setItem('inputHistory', JSON.stringify(data));
  };

  const toServer = (data) => {
    // 서버에 저장하는 로직
  };

  const handleSubmit = () => {
    if (inputRef.current.value !== '') {
      const newInputHistory = [...inputHistory, inputRef.current.value];
      setInputHistory(newInputHistory);
      // setInputText('');
      inputRef.current.value = '';

      if (isLogin) {
        toServer(newInputHistory);
      } else {
        toLocalStorage(newInputHistory);
      }
      container_scroll.current.scrollTop =
        container_scroll.current.scrollHeight;
    } else {
      alert('내용을 입력해주세요.');
    }
  };

  // 엔터키 설정
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  // 질문 초기화
  const contentReset = () => {
    setInputHistory([]);
    localStorage.removeItem('inputHistory'); // 초기화 시 로컬 스토리지에서도 제거
  };

  // 인터뷰 페이지로 이동
  const goToInterview = () => {
    // 모의 면접 시작 버튼 클릭 시 /interview 로 이동
    navigate('/interview');
  };

  // 질문 삭제 버튼
  const deleteInput = (index) => {
    const newSearchHistory = [...inputHistory];
    newSearchHistory.splice(index, 1);
    setInputHistory(newSearchHistory);
    toLocalStorage(newSearchHistory);
  };

  useEffect(() => {
    const storedData = localStorage.getItem('inputHistory');
    if (storedData) {
      setInputHistory(JSON.parse(storedData));
    }
  }, []);

  // useEffect(() => {
  //   console.log(container_scroll.current.scrollHeight);
  //   if (container_scroll.current) {
  //     container_scroll.current.scrollTop =
  //       container_scroll.current.scrollHeight;
  //   }
  // }, [container_scroll.current]);

  useEffect(() => {
    // 입력창에 포커스를 맞추는 부분
    inputRef.current.focus();

    container_scroll.current.scrollTop = container_scroll.current.scrollHeight;
  }, [inputHistory]);

  return (
    <MainContainer>
      <MainInputBarContainer>
        <Input
          placeholder="질문을 입력하세요"
          type="text"
          maxLength={50}
          ref={inputRef}
          onKeyPress={handleOnKeyPress}
        ></Input>
        <SubmitBtn onClick={handleSubmit}>SUBMIT</SubmitBtn>
      </MainInputBarContainer>

      <InputHistoryContainer ref={container_scroll}>
        {inputHistory.map((item, index) => (
          <InputHistorySecondContainer key={index}>
            <InputHistoryItem>{item}</InputHistoryItem>
            <ButtonContainer>
              <Modify>
                <FontAwesomeIcon icon={faPen} />
              </Modify>
              <Delete onClick={() => deleteInput(index)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </Delete>
            </ButtonContainer>
          </InputHistorySecondContainer>
        ))}
      </InputHistoryContainer>
      {inputHistory.length > 0 && (
        <BtnContainer>
          <Reset onClick={contentReset}>질문 초기화</Reset>
          <Start onClick={goToInterview}>모의 면접 시작</Start>
          <Store>질문 저장</Store>
        </BtnContainer>
      )}
    </MainContainer>
  );
}
