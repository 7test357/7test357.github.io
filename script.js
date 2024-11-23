const correctUsername = '7357';
const correctPassword = 'test';

// 페이지 로드 시 자동으로 로그인
const username = prompt('아이디를 입력하세요:');
const password = prompt('비밀번호를 입력하세요:');

if (username === correctUsername && password === correctPassword) {
    window.location.href = 'indexpage/index.html';
} else {
    document.getElementById('message').textContent = '아이디 또는 비밀번호가 올바르지 않습니다.';
}
