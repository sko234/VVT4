/**
 * NEXUS - Discovery Page Logic
 * Search, filters, and user card rendering
 */

const Discover = {
    users: [],
    filters: { search: '', intent: 'all', gender: '', location: '' },

    init() {
        if (!Auth.requireProfile()) return;
        this.users = [...MOCK_USERS];
        this.populateLocationFilter();
        this.bindEvents();
        this.render();
    },

    populateLocationFilter() {
        const locations = [...new Set(this.users.map(u => u.location))].sort();
        const select = document.getElementById('locationFilter');
        locations.forEach(loc => {
            const opt = document.createElement('option');
            opt.value = loc;
            opt.textContent = loc;
            select.appendChild(opt);
        });
    },

    bindEvents() {
        // Search
        document.getElementById('searchInput')?.addEventListener('input',
            App.debounce(e => { this.filters.search = e.target.value.toLowerCase(); this.render(); }, 300)
        );

        // Intent pills
        document.querySelectorAll('.pill[data-type="intent"]').forEach(pill => {
            pill.addEventListener('click', () => {
                document.querySelectorAll('.pill[data-type="intent"]').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                this.filters.intent = pill.dataset.filter;
                this.render();
            });
        });

        // Gender filter
        document.getElementById('genderFilter')?.addEventListener('change', e => {
            this.filters.gender = e.target.value;
            this.render();
        });

        // Location filter
        document.getElementById('locationFilter')?.addEventListener('change', e => {
            this.filters.location = e.target.value;
            this.render();
        });

        // Modal close
        document.getElementById('closeModal')?.addEventListener('click', () => this.closeModal());
        document.getElementById('profileModal')?.addEventListener('click', e => {
            if (e.target.id === 'profileModal') this.closeModal();
        });

        // Sign out
        document.getElementById('signOutBtn')?.addEventListener('click', () => Auth.signOut());

        // My Profile
        document.getElementById('myProfileBtn')?.addEventListener('click', () => this.showMyProfile());
    },

    getFilteredUsers() {
        return this.users.filter(user => {
            if (this.filters.search) {
                const searchMatch = user.name.toLowerCase().includes(this.filters.search) ||
                    user.bio.toLowerCase().includes(this.filters.search);
                if (!searchMatch) return false;
            }
            if (this.filters.intent !== 'all' && user.intent !== this.filters.intent) return false;
            if (this.filters.gender && user.gender !== this.filters.gender) return false;
            if (this.filters.location && user.location !== this.filters.location) return false;
            return true;
        });
    },

    render() {
        const grid = document.getElementById('userGrid');
        const noResults = document.getElementById('noResults');
        const filtered = this.getFilteredUsers();

        if (filtered.length === 0) {
            grid.innerHTML = '';
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';
        grid.innerHTML = filtered.map((user, i) => `
      <div class="card user-card card-hover animate-fade-in-up" style="animation-delay: ${i * 0.05}s" data-user-id="${user.id}">
        <img src="${user.avatar}" alt="${user.name}" class="user-card-image" loading="lazy">
        <div class="user-card-content">
          <h3 class="user-card-name">${user.name}</h3>
          <div class="user-card-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            ${user.location}
          </div>
          <div class="user-card-meta">
            <span class="badge">${user.gender}</span>
            <span class="intent-badge intent-${user.intent}">${user.intent}</span>
          </div>
        </div>
      </div>
    `).join('');

        // Bind card clicks
        grid.querySelectorAll('.user-card').forEach(card => {
            card.addEventListener('click', () => {
                const user = this.users.find(u => u.id === parseInt(card.dataset.userId));
                if (user) this.openModal(user);
            });
        });
    },

    openModal(user) {
        document.getElementById('modalName').textContent = user.name;
        document.getElementById('modalAvatar').src = user.avatar;
        document.getElementById('modalLocation').textContent = user.location;
        document.getElementById('modalGender').textContent = user.gender;
        document.getElementById('modalIntent').textContent = user.intent;
        document.getElementById('modalIntent').className = `badge intent-badge intent-${user.intent}`;
        document.getElementById('modalBio').textContent = user.bio;

        // Social links
        const socialDiv = document.getElementById('socialLinks');
        let socialHTML = '';
        if (user.facebook) {
            socialHTML += `<a href="${user.facebook}" target="_blank" class="social-link" title="Facebook">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </a>`;
        }
        if (user.instagram) {
            socialHTML += `<a href="${user.instagram}" target="_blank" class="social-link" title="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      </a>`;
        }
        socialDiv.innerHTML = socialHTML;
        socialDiv.style.display = socialHTML ? 'flex' : 'none';

        const modal = document.getElementById('profileModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    closeModal() {
        document.getElementById('profileModal').classList.remove('active');
        document.body.style.overflow = '';
    },

    showMyProfile() {
        const user = Auth.getCurrentUser();
        if (user) {
            this.openModal({
                name: user.name,
                avatar: user.avatar,
                location: user.location,
                gender: user.gender,
                bio: user.bio,
                intent: user.intent,
                facebook: user.facebook,
                instagram: user.instagram
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => Discover.init());
