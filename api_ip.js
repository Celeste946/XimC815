// 获取用户进入网页的时间
const entryTime = new Date().toLocaleString();

// 调用第三方 API 获取 IP 地址
fetch('https://res.abeim.cn/api-ip_get?export=json')
  .then(response => response.json())
  .then(data => {
        const userIP = data.ip;
        console.log(`用户 IP 地址: ${userIP}`);
        console.log(`用户进入网页的时间: ${entryTime}`);
        // 这里可以将 IP 地址和时间发送到后端进行存储
        // 示例：使用 fetch 发送 POST 请求到后端
        // fetch('/log-entry', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ ip: userIP, time: entryTime })
        // })
        // .then(response => response.json())
        // .then(result => console.log(result))
        // .catch(error => console.error('发送请求时出错:', error));
    })
  .catch(error => {
        console.error('获取 IP 地址时出错:', error);
    });