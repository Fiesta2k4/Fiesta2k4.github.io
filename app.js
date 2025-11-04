// Lightweight interactions for the portfolio

document.addEventListener('DOMContentLoaded', function(){
	// year
	const yearEl = document.getElementById('year');
	if(yearEl) yearEl.textContent = new Date().getFullYear();

	// nav toggle for small screens
	const nav = document.getElementById('nav');
	const navToggle = document.getElementById('nav-toggle');
	if(navToggle && nav){
		navToggle.addEventListener('click', ()=>{
			nav.classList.toggle('open');
			const expanded = nav.classList.contains('open');
			navToggle.setAttribute('aria-expanded', expanded);
			if(expanded) nav.style.display = 'flex'; else nav.style.display = '';
		});
	}

	// smooth scroll for internal links
	document.querySelectorAll('a[href^="#"]').forEach(a=>{
		a.addEventListener('click', function(e){
			const href = this.getAttribute('href');
			if(href.length>1){
				e.preventDefault();
				const el = document.querySelector(href);
				if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
			}
		});
	});

	// theme toggle (stores preference in localStorage)
	const themeToggle = document.getElementById('theme-toggle');
	const body = document.body;
	const saved = localStorage.getItem('theme');
	if(saved==='light') body.setAttribute('data-theme','light');

	if(themeToggle){
		themeToggle.addEventListener('click', ()=>{
			const isLight = body.getAttribute('data-theme')==='light';
			if(isLight){
				body.removeAttribute('data-theme');
				localStorage.removeItem('theme');
			} else {
				body.setAttribute('data-theme','light');
				localStorage.setItem('theme','light');
			}
		});
	}
});
