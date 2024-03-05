## Server-Sent Events (SSE) 示例

> 这个项目演示了如何使用 Server-Sent Events (SSE) 实现从服务器到客户端的实时数据流。它包括一个简单的 Node.js 服务器，使用 Express 框架设置 SSE 端点，以及一个 HTML 页面，通过 EventSource 接口接收来自服务器的消息。

### 开始之前

> 确保你的系统已经安装了 Node.js。你可以从 Node.js 官网 下载并安装最新版本。

### 安装

```javascript
npm install express cors
```

> 首先，克隆或下载这个项目到你的本地机器。然后，打开终端或命令提示符，导航到项目目录，并运行以下命令来安装必要的依赖：
> 这将安装 Express 框架和 CORS 中间件。

### 运行服务器

```javascript
node server.js
```

> 在项目目录中，运行以下命令来启动服务器：
> 你将看到控制台输出，表明服务器已经在 http://localhost:3000 上运行。

### 查看客户端页面

> 在服务器运行的同时，用浏览器打开 index.html 文件或通过 http://localhost:3000 访问（如果你设置了静态文件服务）。你将看到一个页面，显示从服务器接收到的实时消息。

- 使用 VS Code 的 Five Server

1. 在 VS Code 中安装 Five Server 扩展。
2. 与 Live Server 类似，重启 VS Code，打开你的项目文件夹。
3. 找到你的 HTML 文件，右键点击并选择“Open with Five Server”。

   > 功能描述
   > 服务器 (server.js): 设置一个 SSE 端点 /events，每秒向客户端发送当前时间。
   > 客户端 (index.html): 使用 EventSource 接口连接到 SSE 端点，并在页面上显示接收到的消息。
   > 技术栈
   > Node.js: 服务器环境。
   > Express: Node.js 的 web 应用框架，用于设置 SSE 端点。
   > CORS: 用于解决跨域请求的问题。
   > HTML/JavaScript: 客户端页面和逻辑。

### 总结 - 快速启动

```javascript
npm start
```

## 贡献

> 如果你有任何改进的建议或想要贡献代码，请随时创建 pull 请求或提交问题。
