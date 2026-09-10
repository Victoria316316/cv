// 交互脚本：滚动动效、导航、模态
(function(){
  // 年份
  document.getElementById('year').textContent = new Date().getFullYear();

  // 交互式导航
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open? 'true':'false');
  });

  // 视差波与微交互
  const hero = document.querySelector('.hero');
  const wave = document.querySelector('.hero-wave');
  window.addEventListener('scroll', ()=>{
    const sc = window.scrollY;
    if(wave){
      wave.style.transform = `translateY(${sc * 0.05}px)`;
    }
  }, {passive:true});

  // IntersectionObserver 用于滚动出现动画
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  document.querySelectorAll('[data-anim]').forEach(el=>io.observe(el));

  // 项目卡片模态展示（简易）
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');
  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      const id = card.getAttribute('data-project');
      modalContent.innerHTML = `<h2>项目 ${id} 详情</h2><p>在此处补充项目详情、截图和链接。可展示技术栈、挑战与成果。</p><p><a href='#' class='btn outline'>查看演示</a> <a href='#' class='btn outline'>代码仓库</a></p>`;
      modal.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
    });
    card.addEventListener('keydown', (e)=>{ if(e.key === 'Enter'){ card.click(); } });
  });
  function closeModal(){ modal.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });

  // 联系表单（本地验证 + mailto 打开）
  const form = document.getElementById('contact-form');
  const send = document.getElementById('cf-send');
  send.addEventListener('click', ()=>{
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const msg = document.getElementById('cf-message').value.trim();
    if(!name || !email){
      alert('请填写姓名与邮箱。');
      return;
    }
    const subject = encodeURIComponent(`来自简历站点的联系：${name}`);
    const body = encodeURIComponent(`姓名: ${name}\n邮箱: ${email}\n\n${msg}`);
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  });

  // 为悬停提供微交互（鼠标移动时卡片光效）
  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left; const y = e.clientY - r.top;
      card.style.setProperty('--mx', x + 'px');
      card.style.setProperty('--my', y + 'px');
    });
  });
})();
