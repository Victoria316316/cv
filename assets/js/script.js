import { portfolioData } from './content.js';

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
const tagList = (tags) => tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');

function renderPortfolio(data) {
  const { profile } = data;
  document.title = `${profile.name} — ${portfolioData.site.titleSuffix}`;
  document.getElementById('site-logo').textContent = profile.name;
  document.getElementById('footer-name').textContent = profile.name;

  document.getElementById('app').innerHTML = `
    <section class="hero" id="home">
      <div class="container hero-shell" data-anim>
        <div class="hero-art">
          <div class="shape balloon"></div>
          <div class="shape ring ring-a"></div>
          <div class="shape ring ring-b"></div>
          <div class="shape star star-a"></div>
          <div class="shape glove"></div>
          <div class="shape portrait"></div>
          <div class="shape hand"></div>
          <div class="shape pose"></div>
          <div class="shape heart heart-a"></div>
          <div class="shape blob green"></div>
          <div class="shape flower flower-a"></div>
        </div>

        <div class="hero-text-wrap">
          <h1>We built a better age<br>For your next big move</h1>
        </div>

        <div class="floating-nav" aria-label="Section navigation">
          <a href="#home" class="nav-pill active">Home</a>
          <a href="#projects" class="nav-pill">Case Studies</a>
          <a href="#services" class="nav-pill">Services</a>
          <a href="#insights" class="nav-pill">Insights</a>
          <a href="#about" class="nav-pill">About</a>
          <a href="#contact" class="nav-pill accent">Agency</a>
        </div>

        <div class="hero-bottom-bar">
          <button class="mini-cta" type="button">Upvote <span>26</span></button>
          <a class="main-cta" href="#contact">Open Live site</a>
        </div>
      </div>
    </section>

    <section id="about" class="section"><div class="container split-layout" data-anim><div class="section-intro"><p class="eyebrow">01 / ABOUT</p><h2>让每一次点击，<br><em>都有理由。</em></h2></div><div><p class="section-copy">${escapeHtml(profile.about)}</p><div class="stats">${profile.stats.map((stat) => `<div class="stat"><strong>${escapeHtml(stat.value)}</strong><span>${escapeHtml(stat.label)}</span></div>`).join('')}</div></div></div></section>

    <section id="skills" class="section alt"><div class="container" data-anim><div class="section-heading"><div><p class="eyebrow">02 / CAPABILITIES</p><h2>我能帮你把想法<br><em>做成现实。</em></h2></div><p class="section-aside">从一张草图开始，到一个真正被使用的产品。</p></div><div class="skills-grid">${data.skills.map((skill) => `<article class="skill-card"><span class="skill-number">${escapeHtml(skill.icon)}</span><h3>${escapeHtml(skill.title)}</h3><p>${escapeHtml(skill.description)}</p><span class="card-arrow">↗</span></article>`).join('')}</div></div></section>

    <section id="experience" class="section"><div class="container" data-anim><div class="section-heading"><div><p class="eyebrow">03 / EXPERIENCE</p><h2>一路走来，<br><em>一直在做。</em></h2></div></div><div class="timeline">${data.experience.map((item) => `<article class="timeline-item"><time>${escapeHtml(item.period)}</time><div>${item.category ? `<p class="timeline-category">${escapeHtml(item.category)}</p>` : ''}<h3>${escapeHtml(item.company)} <span>/ ${escapeHtml(item.role)}</span></h3><p>${escapeHtml(item.description)}</p></div></article>`).join('')}</div></div></section>

    <section id="projects" class="section projects-section alt"><div class="container" data-anim><div class="section-heading projects-heading"><div><p class="eyebrow">04 / SELECTED WORK</p><h2>一些值得<br><em>展开的项目。</em></h2></div><div class="project-filters" role="group" aria-label="筛选作品"><button class="filter-btn active" data-filter="全部">全部</button><button class="filter-btn" data-filter="产品">产品</button><button class="filter-btn" data-filter="实验">实验</button><button class="filter-btn" data-filter="开源">开源</button></div></div><div class="projects-grid" id="projects-grid"></div></div></section>

    <section class="section services-section"><div class="container" data-anim><div class="section-heading"><div><p class="eyebrow">05 / OTHER MODULES</p><h2>不止是<br><em>写代码。</em></h2></div></div><div class="services-grid">${data.services.map((service) => `<article class="service-item"><span>${escapeHtml(service.number)}</span><h3>${escapeHtml(service.title)}</h3><p>${escapeHtml(service.text)}</p></article>`).join('')}</div></div></section>

    <section id="resume" class="section resume-section"><div class="container" data-anim><div class="section-heading"><div><p class="eyebrow">06 / RESUME</p><h2>把经历整理成<br><em>清晰的路径。</em></h2></div><button class="btn primary" type="button" data-resume-download>下载简历 ↓</button></div><div class="resume-meta"><div><span class="resume-label">教育背景</span><strong>${escapeHtml(data.resume.education)}</strong>${data.resume.educationDetails.map((item) => `<p>${escapeHtml(item)}</p>`).join('')}</div><div><span class="resume-label">专业技能</span><strong>${data.resume.keywords.map(escapeHtml).join(' · ')}</strong><p>软件：Photoshop、Illustrator、After Effects、Procreate、剪映</p><p>语言：普通话、粤语、英语（雅思 6.0）</p></div></div></div></section>

    <section id="contact" class="section contact-section"><div class="container contact-layout" data-anim><div><p class="eyebrow">07 / CONTACT</p><h2>有个想法？<br><em>一起聊聊。</em></h2><p class="section-copy">${escapeHtml(profile.role)}，期待听到你的项目、问题或一个还在发芽的念头。</p><div class="contact-links">${profile.email ? `<a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>` : '<span>联系方式待补充</span>'}${profile.github ? `<a href="${escapeHtml(profile.github)}" target="_blank" rel="noopener">GitHub ↗</a>` : ''}</div></div><form id="contact-form" class="contact-form"><label><span>你的名字</span><input type="text" id="cf-name" placeholder="怎么称呼？" required></label><label><span>邮箱地址</span><input type="email" id="cf-email" placeholder="name@example.com" required></label><label><span>想聊什么</span><textarea id="cf-message" rows="4" placeholder="简单介绍一下你的想法..."></textarea></label><button id="cf-send" class="btn primary" type="submit">发送消息 <span>↗</span></button></form></div></section>
  `;
  renderProjects(data.projects);
}

function renderProjects(projects, filter = '全部') {
  const visibleProjects = filter === '全部' ? projects : projects.filter((project) => project.type === filter);
  document.getElementById('projects-grid').innerHTML = visibleProjects.map((project) => `<article class="project-card ${escapeHtml(project.accent)}" tabindex="0" data-project="${project.id}"><div class="project-thumb"><span>${escapeHtml(project.type)}</span><b>${String(project.id).padStart(2, '0')}</b></div><div class="project-body"><div class="project-meta"><p class="project-type">${escapeHtml(project.type)}</p><p class="project-client">${escapeHtml(project.client || 'Client')}</p></div><h3>${escapeHtml(project.title)}</h3><p class="muted">${escapeHtml(project.description)}</p><div class="tags">${tagList(project.tags)}</div></div></article>`).join('');
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

function downloadResume() {
  const { profile, resume, experience, skills, projects } = portfolioData;
  const lines = [
    profile.name,
    profile.role,
    `${profile.location} | ${profile.email} | ${profile.phone}`,
    '',
    '个人简介', profile.about,
    '',
    '教育背景', resume.education,
    '',
    '工作经历', ...experience.map((item) => `${item.period} ${item.company} / ${item.role}\n${item.description}`),
    '',
    '能力', ...skills.map((skill) => `${skill.title}: ${skill.description}`),
    '',
    '作品', ...projects.map((project) => `${project.title}: ${project.description}`)
  ];
  const file = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = `${profile.name}-简历.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function setupInteractions() {
  document.getElementById('year').textContent = new Date().getFullYear();
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); navToggle.setAttribute('aria-expanded', String(open)); });
  nav.addEventListener('click', (event) => { if (event.target.matches('a')) nav.classList.remove('open'); });
  document.querySelectorAll('.filter-btn').forEach((button) => button.addEventListener('click', () => { document.querySelector('.filter-btn.active').classList.remove('active'); button.classList.add('active'); renderProjects(portfolioData.projects, button.dataset.filter); }));
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.querySelectorAll('[data-resume-download], #resume-download').forEach((button) => button.addEventListener('click', downloadResume));
  document.getElementById('project-modal').addEventListener('click', (event) => { if (event.target.id === 'project-modal') closeModal(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
  document.getElementById('contact-form').addEventListener('submit', (event) => { event.preventDefault(); if (!portfolioData.profile.email) { window.alert('请先在 assets/js/content.js 中补充接收邮件的邮箱地址。'); return; } const name = document.getElementById('cf-name').value.trim(); const email = document.getElementById('cf-email').value.trim(); const message = document.getElementById('cf-message').value.trim(); const subject = encodeURIComponent(`来自作品集的联系：${name}`); const body = encodeURIComponent(`姓名：${name}\n邮箱：${email}\n\n${message}`); window.location.href = `mailto:${portfolioData.profile.email}?subject=${subject}&body=${body}`; });
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
  document.querySelectorAll('[data-anim]').forEach((element) => observer.observe(element));
}

renderPortfolio(portfolioData);
setupInteractions();
