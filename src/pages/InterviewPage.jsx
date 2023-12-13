import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const InterviewPageContainer = styled.div`
  margin-top: 110px;
  display: flex;
  width: 100vw;
  height: calc(100vh - 110px);
  align-items: center;
  justify-content: center;
`;

const InterviewContainer = styled.div`
  width: 900px;
  height: 600px;
`;

const PageCount = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: calc(100% - 20px);
  height: 50px;
  font-size: 30px;
  font-family: 'WantedSans-Bold';
  letter-spacing: 2px;
  color: #387d8c;
`;

const InterviewContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 470px;
  background-color: #387d8c;
  font-size: 50px;
  font-family: 'WantedSans-Bold';
  letter-spacing: 2px;
  color: #fff;
`;

const PreNextBtnContainer = styled.div`
  height: 80px;
`;

const PreBtn = styled.button`
  width: 50%;
  height: 100%;
  font-size: 30px;
  font-family: 'WantedSans-Bold';
  letter-spacing: 2px;
  background-color: #fff;
  border: 3px solid #387d8c;
  border-right: none;
  color: #387d8c;
  cursor: pointer;
`;

const NextBtn = styled.button`
  width: 50%;
  height: 100%;
  font-size: 30px;
  font-family: 'WantedSans-Bold';
  letter-spacing: 2px;
  background-color: #fff;
  border: 3px solid #387d8c;
  color: #387d8c;
  cursor: pointer;
`;

export default function InterviewPage() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem('inputHistory')) || [];

    // 로컬 스토리지에서 가져온 질문 배열을 랜덤으로 섞음
    const shuffledQuestions = [...storedQuestions].sort(
      () => Math.random() - 0.5,
    );
    setQuestions(shuffledQuestions);
  }, []);

  const showPreQuestion = () => {
    setQuestionIndex(
      (prevIndex) => (prevIndex - 1 + questions.length) % questions.length,
    );
  };

  const showNextQuestion = () => {
    setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  return (
    <InterviewPageContainer>
      <InterviewContainer>
        <PageCount>{`# ${questionIndex + 1} / ${questions.length}`}</PageCount>
        <InterviewContent>{questions[questionIndex]}</InterviewContent>
        <PreNextBtnContainer>
          <PreBtn onClick={showPreQuestion}>이전 질문</PreBtn>
          <NextBtn onClick={showNextQuestion}>다음 질문</NextBtn>
        </PreNextBtnContainer>
      </InterviewContainer>
    </InterviewPageContainer>
  );
}
