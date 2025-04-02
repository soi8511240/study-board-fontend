import { useState } from 'react';

export function ModalCorrectPassword({
  correctPassword,
  callBack,
}: {
  correctPassword: string;
  callBack: () => void;
}) {
  const [password, setPassword] = useState('');

  const handleClick = () => {
    if (password === correctPassword) {
      callBack();
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
}
