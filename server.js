const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// 设置根URL的GET路由
app.get("/", (req, res) => {
	res.send(
		`<b>Hello, World!</b> - <br>使用 VS Code 的 Five Server<br> 1. 在 VS Code 中安装 Five Server 扩展。<br> 2. 与 Live Server 类似，重启 VS Code，打开你的项目文件夹。<br> 3. 找到你的 HTML 文件，右键点击并选择“Open with Five Server”。`
	);
});

// 允许跨域请求
app.use(cors());

app.get("/events", (req, res) => {
	res.setHeader("Content-Type", "text/event-stream");
	res.setHeader("Cache-Control", "no-cache");
	res.setHeader("Connection", "keep-alive");

	// 发送消息到客户端
	const sendMessage = () => {
		const data = `服务器时间: ${new Date()}`;
		res.write(`data: ${data}\n\n`);

		// 每秒发送一次
		setTimeout(sendMessage, 1000);
	};

	sendMessage();
});

app.listen(PORT, () => {
	console.log(`服务器运行在 http://localhost:${PORT}`);
});
