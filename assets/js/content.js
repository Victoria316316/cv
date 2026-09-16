/* 作品集内容配置：日常更新优先修改本文件，页面会自动重新生成。 */
export const portfolioData = {
  site: {
    titleSuffix: '作品集',
    year: 2026,
    availability: '目前接受有趣的合作邀约'
  },
  profile: {
    name: '陈靖怡',
    role: '前端工程师 / 交互设计爱好者',
    location: '上海 · 可远程',
    intro: '我把复杂的产品需求，整理成清晰、快速且有温度的数字体验。',
    about: '专注于前端体验与设计工程，擅长把视觉语言转化为可维护的组件和流畅的交互。喜欢在细节中寻找效率，也持续关注无障碍、性能和可持续的协作方式。',
    email: 'hello@example.com',
    phone: '+86 138 0000 0000',
    github: 'https://github.com/USERNAME',
    stats: [
      { value: '5+', label: '年开发经验' },
      { value: '30+', label: '完成项目' },
      { value: '12', label: '长期合作伙伴' }
    ]
  },
  resume: {
    education: '计算机科学与技术 · 本科',
    keywords: ['前端架构', '交互体验', '设计系统', '性能优化']
  },
  skills: [
    { icon: '01', title: '前端开发', description: 'HTML、CSS、JavaScript、TypeScript、React、Vite，关注可维护性与加载性能。' },
    { icon: '02', title: '界面与交互', description: '响应式设计、微交互、动效和设计系统，让使用路径更自然。' },
    { icon: '03', title: '产品思维', description: '从目标、用户和数据出发拆解问题，把视觉决策连接到业务结果。' },
    { icon: '04', title: '协作交付', description: '熟悉 Figma、Git、CI/CD，与设计、产品和后端保持高效协作。' }
  ],
  experience: [
    { period: '2021.06 — 至今', company: '公司 A', role: '前端工程师', description: '负责核心产品的前端开发与性能优化，推动组件化改造，建立跨团队可复用的界面规范。' },
    { period: '2018.03 — 2021.05', company: '公司 B', role: '前端开发', description: '参与多个 B2B 项目的从 0 到 1，负责 UI 实现、数据可视化和跨团队联调。' }
  ],
  projects: [
    { id: 1, type: '产品', title: 'Northstar 工作台', description: '为复杂业务团队设计的任务与数据协同工作台。', details: '重新梳理信息架构和关键操作路径，将高频任务集中在一个可扫描、可追踪的工作台中。', tags: ['React', 'Design system', 'UX'], accent: 'mint', demo: '#', code: '#' },
    { id: 2, type: '实验', title: 'Pulse 数据叙事', description: '用轻量动效把抽象数据变成可理解的故事。', details: '探索 SVG、滚动状态和渐进式披露的结合，让仪表盘从“看数字”变成“理解变化”。', tags: ['D3', 'SVG', 'Motion'], accent: 'coral', demo: '#', code: '#' },
    { id: 3, type: '开源', title: 'Tiny Blocks', description: '一组面向内容型网站的无依赖 UI 小组件。', details: '沉淀常用的布局、提示和状态组件，强调语义化 HTML、低门槛接入和可读文档。', tags: ['Web components', 'Docs', 'Open source'], accent: 'blue', demo: '#', code: '#' }
  ],
  services: [
    { number: 'A', title: '产品界面', text: '从信息架构到高保真落地，建立清晰、可扩展的产品体验。' },
    { number: 'B', title: '设计工程', text: '把设计规范变成真正能被团队复用的组件、变量和代码。' },
    { number: 'C', title: '体验优化', text: '从性能、可访问性和交互细节入手，让已有产品变得更好用。' }
  ]
};
