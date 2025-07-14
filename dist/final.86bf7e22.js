document.addEventListener('DOMContentLoaded', ()=>{
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (toggle && menu) toggle.addEventListener('click', ()=>{
        menu.classList.toggle('open');
        toggle.classList.toggle('open');
    });
});

//# sourceMappingURL=final.86bf7e22.js.map
