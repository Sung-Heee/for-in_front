import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { createGlobalStyle } from 'styled-components';
import MyPage from './pages/MyPage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import InterviewPage from './pages/InterviewPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/mypage" element={<MyPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/interview" element={<InterviewPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
