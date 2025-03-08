function main() {
    console.log("成绩公布暂时不开放");
    alert("成绩公布系统暂时不开放");
}

// 假设这是登录成功的处理函数
function handleLoginSuccess() {
    // 设置登录状态标记
    localStorage.setItem('isLoggedIn', 'true');
    // 跳转到用户主页或其他页面
    window.location.href = 'login.html';
}

// 在登录按钮点击事件中添加检查
document.querySelector('.login-button').addEventListener('click', function(e) {
    // 检查是否已经登录
    if (localStorage.getItem('isLoggedIn') === 'true') {
        e.preventDefault(); // 阻止默认跳转行为
        // 跳转到已登录用户页面
        //window.location.href = './user-profile.html';
        alert("您已经登录过了");
    }
});

