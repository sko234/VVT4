/**
 * NEXUS - Authentication System
 * Mock Google Sign-In and session management
 */

const Auth = {
    STORAGE_KEY: 'nexus-user',
    SESSION_KEY: 'nexus-session',

    // Check if user is authenticated
    isAuthenticated() {
        return !!localStorage.getItem(this.SESSION_KEY);
    },

    // Check if user has completed profile setup
    hasCompletedProfile() {
        const user = this.getCurrentUser();
        return user && user.profileComplete === true;
    },

    // Get current user data
    getCurrentUser() {
        const userData = localStorage.getItem(this.STORAGE_KEY);
        return userData ? JSON.parse(userData) : null;
    },

    // Mock Google Sign-In
    async signInWithGoogle() {
        // Simulate API delay
        await this.delay(800);

        // Check if returning user
        const existingUser = this.getCurrentUser();

        if (existingUser && existingUser.profileComplete) {
            // Returning user - create session
            localStorage.setItem(this.SESSION_KEY, 'active');
            return { isNewUser: false, user: existingUser };
        }

        // New user - create basic profile from "Google"
        const googleProfile = {
            id: this.generateId(),
            email: 'user@example.com',
            googleName: 'New User',
            createdAt: new Date().toISOString(),
            profileComplete: false
        };

        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(googleProfile));
        localStorage.setItem(this.SESSION_KEY, 'active');

        return { isNewUser: true, user: googleProfile };
    },

    // Update user profile
    updateProfile(profileData) {
        const currentUser = this.getCurrentUser() || {};
        const updatedUser = {
            ...currentUser,
            ...profileData,
            profileComplete: true,
            updatedAt: new Date().toISOString()
        };
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedUser));
        return updatedUser;
    },

    // Sign out
    signOut() {
        localStorage.removeItem(this.SESSION_KEY);
        window.location.href = 'index.html';
    },

    // Route protection
    requireAuth() {
        if (!this.isAuthenticated()) {
            window.location.href = 'index.html';
            return false;
        }
        return true;
    },

    // Require completed profile
    requireProfile() {
        if (!this.requireAuth()) return false;
        if (!this.hasCompletedProfile()) {
            window.location.href = 'profile-setup.html';
            return false;
        }
        return true;
    },

    // Helper: delay
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    // Helper: generate ID
    generateId() {
        return 'user_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    }
};
