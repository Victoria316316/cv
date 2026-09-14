# 模块化个人作品集

这是一个无需构建工具、打开 `index.html` 即可运行的动态作品集网站。页面结构保留在 HTML 中，个人资料、技能、经历、作品和其他服务模块统一由 JavaScript 数据驱动生成。

## 文件结构

- `index.html`：页面骨架、导航、弹窗容器和脚本入口
- `assets/js/script.js`：内容数据、模块渲染和交互逻辑
- `assets/css/style.css`：响应式视觉样式

## 更新内容

打开 `assets/js/script.js` 顶部的 `portfolioData`，可以直接更新：

- `profile`：姓名、职位、简介、联系方式和统计数据
- `skills`：技能卡片
- `experience`：工作经历时间线
- `projects`：作品卡片、详情、标签、分类和链接
- `services`：其他内容模块

新增作品时，在 `projects` 数组中追加一个对象即可。`type` 用于筛选，`demo` 和 `code` 用于弹窗中的链接，`accent` 可填写 `mint`、`coral` 或 `blue` 来切换作品色块。

## 运行

直接双击 `index.html`，或用 VS Code 的 Live Server 打开。联系表单当前使用 `mailto` 打开本地邮件客户端，不需要后端服务；接入真实后端时，只需替换 `setupInteractions` 中表单提交部分。
