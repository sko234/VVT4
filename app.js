/**
 * NEXUS - Core Application Logic
 * Theme management and shared utilities
 */

const App = {
    init() {
        this.initTheme();
        this.initNavigation();
    },

    initTheme() {
        const savedTheme = localStorage.getItem('nexus-theme') || 'light';
        this.setTheme(savedTheme);
        const toggleBtn = document.querySelector('.theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggleTheme());
        }
    },

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('nexus-theme', theme);
        this.updateThemeIcon(theme);
    },

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        this.setTheme(current === 'light' ? 'dark' : 'light');
    },

    updateThemeIcon(theme) {
        const icon = document.querySelector('.theme-toggle-icon');
        if (!icon) return;
        icon.innerHTML = theme === 'dark'
            ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'
            : '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    },

    initNavigation() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                navbar.style.boxShadow = window.scrollY > 10 ? 'var(--shadow-md)' : 'none';
            });
        }
    },

    navigateTo(url) {
        window.location.href = url;
    },

    debounce(func, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    },

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        Object.assign(toast.style, {
            position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
            padding: '12px 24px', background: 'var(--bg-card)', border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-lg)', zIndex: '9999'
        });
        document.body.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
    },

    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
