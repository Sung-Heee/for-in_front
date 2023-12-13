import React, { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    // 페이지 진입 시 경고창 표시
    alert('준비 중입니다.');

    // 페이지 이동
    window.history.back();
  }, []);

  return <></>;
}
