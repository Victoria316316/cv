# 模块化动态作品集

这是一个无需构建工具即可运行的动态作品集网站。页面结构由 `assets/js/script.js` 渲染，内容集中在 `assets/js/content.js`，适合持续更新个人简历、作品和其他内容模块。

包含文件：

- index.html — 主页面
- assets/css/style.css — 样式表（响应式、动效、色彩方案）
- assets/js/content.js — 个人信息、简历、经历、作品和其他模块的数据源
- assets/js/script.js — 动态渲染和交互脚本

特点：
- 清晰的版块：关于、技能、经历、项目、联系方式
- 滚动进入动画（IntersectionObserver）
- 悬停与按键可访问的项目卡片，带模态详情
- 响应式布局（桌面 / 平板 / 手机）
- 可替换的头像与联系方式

## 更新内容

日常只需要编辑 `assets/js/content.js`：

- `profile`：姓名、职位、简介、联系方式和统计数据
- `resume`：教育背景和关注方向
- `skills`：能力卡片
- `experience`：工作经历
- `projects`：作品、标签、详情和链接
- `services`：其他服务或内容模块

页面会自动生成对应区块，作品筛选、详情弹窗和“下载简历”也会复用同一份数据。

## 本地运行

直接打开 `index.html` 即可查看。若浏览器限制本地 ES module，可在项目根目录运行：

```powershell
npx serve .
```