function showToast(msg, bgColor = '#1a56db', duration = 3000) {
let toast = document.getElementById('toast');
if (!toast) {
toast = document.createElement('div');
toast.id = 'toast';
toast.style.cssText = `
position:fixed; bottom:28px; right:28px;
color:white; padding:13px 20px; border-radius:8px;
font-size:.88rem; box-shadow:0 4px 14px rgba(0,0,0,.18);
opacity:0; transform:translateY(10px);
transition:opacity .3s,transform .3s;
pointer-events:none; z-index:9999;
font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
`;
document.body.appendChild(toast);
}
toast.textContent = msg;
toast.style.background = bgColor;
toast.style.opacity = '1';
toast.style.transform = 'translateY(0)';
clearTimeout(toast._timer);
toast._timer = setTimeout(() => {
toast.style.opacity = '0';
toast.style.transform = 'translateY(10px)';
}, duration);
}
function formatNIM(nim) {
return nim.replace(/\D/g, '')
.replace(/(\d{4})(?=\d)/g, '$1-');
}
function debounce(fn, delay = 300) {
let timer;
return function (...args) {
clearTimeout(timer);
timer = setTimeout(() => fn.apply(this, args), delay);
};
}
function highlight(text, query) {
if (!query) return text;
const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
return text.replace(re, '<mark>$1</mark>');
}
const Storage = {
get(key, fallback = null) {
try {
const v = localStorage.getItem(key);
return v !== null ? JSON.parse(v) : fallback;
} catch { return fallback; }
},
set(key, value) {
try { localStorage.setItem(key, JSON.stringify(value)); } catch { }
},
remove(key) { localStorage.removeItem(key); }
};
