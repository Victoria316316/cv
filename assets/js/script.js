/* 内容数据：后续更新作品集时，优先修改这里，不需要改 HTML。 */
const portfolioData = {
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

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
const tagList = (tags) => tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');

function renderPortfolio(data) {
  const { profile } = data;
  document.title = `${profile.name} — ${profile.role}`;
  document.getElementById('site-logo').textContent = profile.name;
  document.getElementById('footer-name').textContent = profile.name;

  document.getElementById('app').innerHTML = `
    <section class="hero" id="home">
      <div class="container hero-inner">
        <div class="hero-left" data-anim>
          <p class="eyebrow">PORTFOLIO / 2026</p>
          <h1>你好，我是 <span class="accent">${escapeHtml(profile.name)}</span></h1>
          <p class="lead">${escapeHtml(profile.intro)}</p>
          <p class="cta"><a class="btn primary" href="#projects">浏览作品 <span>↗</span></a><a class="btn outline" href="#contact">和他聊聊</a></p>
        </div>
        <div class="hero-right" data-anim>
          <div class="profile-card"><div class="avatar" role="img" aria-label="${escapeHtml(profile.name)}的头像"><span>${escapeHtml(profile.name.slice(0, 1))}</span></div><div class="bio"><h3>${escapeHtml(profile.name)}</h3><p>${escapeHtml(profile.location)}</p><p class="small">${escapeHtml(profile.role)}</p></div></div>
          <div class="availability"><span class="status-dot"></span>目前接受有趣的合作邀约</div>
        </div>
      </div>
      <div class="hero-note">SCROLL TO EXPLORE <span>↓</span></div>
    </section>

    <section id="about" class="section"><div class="container split-layout" data-anim><div class="section-intro"><p class="eyebrow">01 / ABOUT</p><h2>让每一次点击，<br><em>都有理由。</em></h2></div><div><p class="section-copy">${escapeHtml(profile.about)}</p><div class="stats">${profile.stats.map((stat) => `<div class="stat"><strong>${escapeHtml(stat.value)}</strong><span>${escapeHtml(stat.label)}</span></div>`).join('')}</div></div></div></section>

    <section id="skills" class="section alt"><div class="container" data-anim><div class="section-heading"><div><p class="eyebrow">02 / CAPABILITIES</p><h2>我能帮你把想法<br><em>做成现实。</em></h2></div><p class="section-aside">从一张草图开始，到一个真正被使用的产品。</p></div><div class="skills-grid">${data.skills.map((skill) => `<article class="skill-card"><span class="skill-number">${escapeHtml(skill.icon)}</span><h3>${escapeHtml(skill.title)}</h3><p>${escapeHtml(skill.description)}</p><span class="card-arrow">↗</span></article>`).join('')}</div></div></section>

    <section id="experience" class="section"><div class="container" data-anim><div class="section-heading"><div><p class="eyebrow">03 / EXPERIENCE</p><h2>一路走来，<br><em>一直在做。</em></h2></div></div><div class="timeline">${data.experience.map((item) => `<article class="timeline-item"><time>${escapeHtml(item.period)}</time><div><h3>${escapeHtml(item.company)} <span>/ ${escapeHtml(item.role)}</span></h3><p>${escapeHtml(item.description)}</p></div></article>`).join('')}</div></div></section>

    <section id="projects" class="section projects-section alt"><div class="container" data-anim><div class="section-heading projects-heading"><div><p class="eyebrow">04 / SELECTED WORK</p><h2>一些值得<br><em>展开的项目。</em></h2></div><div class="project-filters" role="group" aria-label="筛选作品"><button class="filter-btn active" data-filter="全部">全部</button><button class="filter-btn" data-filter="产品">产品</button><button class="filter-btn" data-filter="实验">实验</button><button class="filter-btn" data-filter="开源">开源</button></div></div><div class="projects-grid" id="projects-grid"></div></div></section>

    <section class="section services-section"><div class="container" data-anim><div class="section-heading"><div><p class="eyebrow">05 / OTHER MODULES</p><h2>不止是<br><em>写代码。</em></h2></div></div><div class="services-grid">${data.services.map((service) => `<article class="service-item"><span>${escapeHtml(service.number)}</span><h3>${escapeHtml(service.title)}</h3><p>${escapeHtml(service.text)}</p></article>`).join('')}</div></div></section>

    <section id="contact" class="section contact-section"><div class="container contact-layout" data-anim><div><p class="eyebrow">06 / CONTACT</p><h2>有个想法？<br><em>一起聊聊。</em></h2><p class="section-copy">${escapeHtml(profile.role)}，期待听到你的项目、问题或一个还在发芽的念头。</p><div class="contact-links"><a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a><a href="${escapeHtml(profile.github)}" target="_blank" rel="noopener">GitHub ↗</a></div></div><form id="contact-form" class="contact-form"><label><span>你的名字</span><input type="text" id="cf-name" placeholder="怎么称呼？" required></label><label><span>邮箱地址</span><input type="email" id="cf-email" placeholder="name@example.com" required></label><label><span>想聊什么</span><textarea id="cf-message" rows="4" placeholder="简单介绍一下你的想法..."></textarea></label><button id="cf-send" class="btn primary" type="submit">发送消息 <span>↗</span></button></form></div></section>
  `;
  renderProjects(data.projects);
}

function renderProjects(projects, filter = '全部') {
  const visibleProjects = filter === '全部' ? projects : projects.filter((project) => project.type === filter);
  document.getElementById('projects-grid').innerHTML = visibleProjects.map((project) => `<article class="project-card ${escapeHtml(project.accent)}" tabindex="0" data-project="${project.id}"><div class="project-thumb"><span>${escapeHtml(project.type)}</span><b>${String(project.id).padStart(2, '0')}</b></div><div class="project-body"><p class="project-type">${escapeHtml(project.type)}</p><h3>${escapeHtml(project.title)}</h3><p class="muted">${escapeHtml(project.description)}</p><div class="tags">${tagList(project.tags)}</div></div></article>`).join('');
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => openProject(Number(card.dataset.project)));
    card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); card.click(); } });
  });
}

function openProject(id) {
  const project = portfolioData.projects.find((item) => item.id === id);
  if (!project) return;
  document.getElementById('modal-content').innerHTML = `<p class="eyebrow">${escapeHtml(project.type)} / PROJECT ${String(project.id).padStart(2, '0')}</p><h2>${escapeHtml(project.title)}</h2><p>${escapeHtml(project.details)}</p><div class="tags">${tagList(project.tags)}</div><p class="modal-actions"><a href="${escapeHtml(project.demo)}" class="btn primary">查看演示 ↗</a><a href="${escapeHtml(project.code)}" class="btn outline">代码仓库 ↗</a></p>`;
  document.getElementById('project-modal').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() { document.getElementById('project-modal').setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }

function setupInteractions() {
  document.getElementById('year').textContent = new Date().getFullYear();
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); navToggle.setAttribute('aria-expanded', String(open)); });
  nav.addEventListener('click', (event) => { if (event.target.matches('a')) nav.classList.remove('open'); });
  document.querySelectorAll('.filter-btn').forEach((button) => button.addEventListener('click', () => { document.querySelector('.filter-btn.active').classList.remove('active'); button.classList.add('active'); renderProjects(portfolioData.projects, button.dataset.filter); }));
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('project-modal').addEventListener('click', (event) => { if (event.target.id === 'project-modal') closeModal(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
  document.getElementById('contact-form').addEventListener('submit', (event) => { event.preventDefault(); const name = document.getElementById('cf-name').value.trim(); const email = document.getElementById('cf-email').value.trim(); const message = document.getElementById('cf-message').value.trim(); const subject = encodeURIComponent(`来自作品集的联系：${name}`); const body = encodeURIComponent(`姓名：${name}\n邮箱：${email}\n\n${message}`); window.location.href = `mailto:${portfolioData.profile.email}?subject=${subject}&body=${body}`; });
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
  document.querySelectorAll('[data-anim]').forEach((element) => observer.observe(element));
}

renderPortfolio(portfolioData);
setupInteractions();
