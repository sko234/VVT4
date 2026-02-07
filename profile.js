/**
 * NEXUS - Profile Management
 * Form validation, avatar upload, and profile persistence
 */

const Profile = {
    avatarData: null,

    init() {
        if (!Auth.isAuthenticated()) {
            window.location.href = 'index.html';
            return;
        }
        if (Auth.hasCompletedProfile()) {
            window.location.href = 'discover.html';
            return;
        }
        this.bindEvents();
    },

    bindEvents() {
        // Avatar upload
        const avatarInput = document.getElementById('avatarInput');
        const avatarUpload = document.getElementById('avatarUpload');

        avatarInput?.addEventListener('change', (e) => this.handleAvatarUpload(e));

        // Intent selector
        document.querySelectorAll('.intent-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.intent-option').forEach(o => o.classList.remove('active'));
                option.classList.add('active');
                option.querySelector('input').checked = true;
                this.updateProgress();
            });
        });

        // Form inputs for progress
        ['name', 'location', 'gender', 'bio'].forEach(id => {
            document.getElementById(id)?.addEventListener('input', () => this.updateProgress());
        });

        // Form submission
        document.getElementById('profileForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitProfile();
        });
    },

    handleAvatarUpload(e) {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            App.showToast('Please upload an image file', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            this.avatarData = event.target.result;
            const preview = document.getElementById('avatarPreview');
            const uploadIcon = document.querySelector('.avatar-upload-icon');
            const uploadText = document.querySelector('.avatar-upload-text');

            preview.src = this.avatarData;
            preview.style.display = 'block';
            if (uploadIcon) uploadIcon.style.display = 'none';
            if (uploadText) uploadText.style.display = 'none';

            document.getElementById('avatarError').style.display = 'none';
            this.updateProgress();
        };
        reader.readAsDataURL(file);
    },

    updateProgress() {
        const hasAvatar = !!this.avatarData;
        const hasBasicInfo = ['name', 'location', 'gender'].every(id => document.getElementById(id)?.value);
        const hasBioIntent = document.getElementById('bio')?.value && document.querySelector('input[name="intent"]:checked');

        document.getElementById('prog2')?.classList.toggle('active', hasAvatar && hasBasicInfo);
        document.getElementById('prog3')?.classList.toggle('active', hasAvatar && hasBasicInfo && hasBioIntent);
    },

    validateForm() {
        let isValid = true;
        const showError = (id, show) => {
            const el = document.getElementById(id + 'Error');
            const input = document.getElementById(id);
            if (el) el.style.display = show ? 'block' : 'none';
            if (input) input.classList.toggle('error', show);
            if (show) isValid = false;
        };

        // Avatar
        if (!this.avatarData) {
            document.getElementById('avatarError').style.display = 'block';
            isValid = false;
        }

        // Required fields
        showError('name', !document.getElementById('name').value.trim());
        showError('location', !document.getElementById('location').value.trim());
        showError('gender', !document.getElementById('gender').value);
        showError('bio', !document.getElementById('bio').value.trim() || document.getElementById('bio').value.length < 20);

        // Intent
        if (!document.querySelector('input[name="intent"]:checked')) {
            document.getElementById('intentError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('intentError').style.display = 'none';
        }

        return isValid;
    },

    submitProfile() {
        if (!this.validateForm()) {
            App.showToast('Please fill in all required fields', 'error');
            return;
        }

        const profileData = {
            avatar: this.avatarData,
            name: document.getElementById('name').value.trim(),
            location: document.getElementById('location').value.trim(),
            gender: document.getElementById('gender').value,
            bio: document.getElementById('bio').value.trim(),
            intent: document.querySelector('input[name="intent"]:checked').value,
            facebook: document.getElementById('facebook').value.trim() || null,
            instagram: document.getElementById('instagram').value.trim() || null
        };

        Auth.updateProfile(profileData);
        App.showToast('Profile saved successfully!');

        setTimeout(() => {
            window.location.href = 'discover.html';
        }, 500);
    }
};

document.addEventListener('DOMContentLoaded', () => Profile.init());
