// 模拟的用户数据
const users = [
    { username: '23081501', password: '23081501' },
    { username: '23081502', password: '23081502' },
    { username: '23081503', password: '23081503' },
    { username: '23081504', password: '23081504' },
    { username: '23081505', password: '23081505' },
    { username: '23081506', password: '23081506' },
    { username: '23081507', password: '23081507' },
    { username: '23081508', password: '23081508' },
    { username: '23081509', password: '23081509' },
    { username: '23081510', password: '23081510' },
    { username: '23081511', password: '23081511' },
    { username: '23081512', password: '23081512' },
    { username: '23081513', password: '23081513' },
    { username: '23081514', password: '23081514' },
    { username: '23081515', password: '23081515' },
    { username: '23081516', password: '23081516' },
    { username: '23081517', password: '23081517' },
    { username: '23081518', password: '23081518' },
    { username: '23081519', password: '23081519' },
    { username: '23081520', password: '23081520' },
    { username: '23081521', password: '23081521' },
    { username: '23081522', password: '23081522' },
    { username: '23081523', password: '23081523' },
    { username: '23081524', password: '23081524' },
    { username: '23081525', password: '23081525' },
    { username: '23081526', password: '23081526' },
    { username: '23081527', password: '23081527' },
    { username: '23081528', password: '23081528' },
    { username: '23081529', password: '23081529' },
    { username: '23081530', password: '23081530' },
    { username: '23081531', password: '23081531' },
    { username: '23081532', password: '23081532' },
    { username: '23081533', password: '23081533' },
    { username: '23081534', password: '23081534' },
    { username: '23081535', password: '23081535' },
    { username: '23081536', password: '23081536' },
    { username: '23081537', password: '23081537' },
    { username: '23081538', password: '23081538' },
    { username: '23081539', password: '23081539' },
    { username: '23081540', password: '23081540' },
    { username: '23081541', password: '23081541' },
    { username: '23081542', password: '23081542' },
    { username: '23081543', password: '23081543' },
    { username: '23081544', password: '23081544' },
    { username: '23081545', password: '23081545' },
    { username: '23081546', password: '23081546' },
    { username: '23081547', password: '23081547' },
    { username: '23081548', password: '23081548' },
    { username: '23081549', password: '23081549' },
    // 更多用户...
];

// 用于存储登录状态
let isLoggedIn = false;

function validateCredentials() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // 检查用户名和密码是否为空
    if (username.trim() === "" || password === "") {
        messageElement.textContent = "Username and password cannot be empty";
        return;
    }

    // 查找匹配的用户
    const user = users.find(u => u.username === username && u.password === password);


    if (user) {
         // 如果用户已经登录，跳转到已登录页面
         if (isLoggedIn) {
            messageElement.textContent = "你已经登录过了"
            messageElement.style.color = "orange";
            // 可选：跳转到已登录页面
            //window.location.href = 'Main Page.html';
        } else {
            // 登录成功，设置登录状态
            isLoggedIn = true;
            messageElement.textContent = "Login successful";
            messageElement.style.color = "green";
            // 登录成功后跳转到主页
            window.location.href = 'https://celeste946.github.io/XimC815/Main%20page.html';
            // 隐藏元素
            document.addEventListener("DOMContentLoaded", function () {
                const loginButton = document.querySelector(".nav-link svg");
                if (loginButton) {
                    loginButton.remove(); // 移除按钮
                }
            });
        }
    } else {
        messageElement.textContent = "Username or password is incorrect";
        messageElement.style.color = "red";
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateCredentials();
});

// 获取登录状态的函数
function getLoginStatus() {
    // 从localStorage中获取isLoggedIn标记
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    // 返回布尔值表示登录状态
    return isLoggedIn === 'true';
}
if (getLoginStatus()) {
    console.log('用户已登录');
    // 执行已登录状态下的操作
    alert("您已经登录过了");
} else {
    console.log('用户未登录');
    window.location.href = 'Main page.html';
    // 执行未登录状态下的操作
}