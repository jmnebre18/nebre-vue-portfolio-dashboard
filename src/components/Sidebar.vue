<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="logo">
        <div class="logo-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 22V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 7L12 12L22 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="logo-text">
          <h2>JM Nebre</h2>
          <p>Portfolio</p>
        </div>
      </div>
    </div>

    <nav class="navigation">
      <router-link
        v-for="item in navigationItems"
        :key="item.name"
        :to="item.path"
        class="nav-item"
        :class="{ active: $route.path === item.path }"
      >
        <component :is="item.icon" class="nav-icon" />
        <span>{{ item.name }}</span>
        <div class="nav-indicator"></div>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <div class="status-card">
        <div class="status-indicator"></div>
        <div class="status-text">
          <span class="status-label">Available for Internship</span>
          <span class="status-subtitle">Computer Engineering Student</span>
        </div>
      </div>
      <button class="sign-out-btn" @click="handleLogout">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 17L21 12L16 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Sign Out
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const UserIcon = defineComponent({
  render() {
    return h('svg', {
      width: 20,
      height: 20,
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', {
        d: 'M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21',
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      }),
      h('circle', {
        cx: 12,
        cy: 7,
        r: 4,
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      })
    ])
  }
})

const FolderIcon = defineComponent({
  render() {
    return h('svg', {
      width: 20,
      height: 20,
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', {
        d: 'M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z',
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      })
    ])
  }
})

const MailIcon = defineComponent({
  render() {
    return h('svg', {
      width: 20,
      height: 20,
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', {
        d: 'M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z',
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      }),
      h('polyline', {
        points: '22,6 12,13 2,6',
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      })
    ])
  }
})

const BookIcon = defineComponent({
  render() {
    return h('svg', {
      width: 20,
      height: 20,
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', {
        d: 'M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20',
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      }),
      h('path', {
        d: 'M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z',
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      })
    ])
  }
})

const navigationItems = [
  {
    name: 'Profile',
    path: '/portfolio/profile',
    icon: UserIcon
  },
  {
    name: 'Showcase',
    path: '/portfolio/showcase',
    icon: FolderIcon
  },
  {
    name: 'Contact',
    path: '/portfolio/contact',
    icon: MailIcon
  },
  {
    name: 'Creative',
    path: '/portfolio/creative',
    icon: BookIcon
  }
]

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  background: var(--card-bg);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  height: 100vh;
  backdrop-filter: blur(10px);
}

.sidebar-header {
  padding: 2rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-purple));
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.logo-icon::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

.logo-text h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--gray-900);
  margin: 0;
  line-height: 1.2;
}

.logo-text p {
  font-size: 0.875rem;
  color: var(--gray-500);
  margin: 0;
  line-height: 1.2;
}

.navigation {
  flex: 1;
  padding: 1.5rem 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  color: var(--gray-600);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  position: relative;
  margin: 0.25rem 0;
}

.nav-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-purple));
  transition: width 0.3s ease;
}

.nav-item:hover {
  background: linear-gradient(90deg, var(--blue-100), transparent);
  color: var(--primary-blue);
  transform: translateX(5px);
}

.nav-item:hover::before {
  width: 3px;
}

.nav-item.active {
  background: linear-gradient(90deg, var(--blue-100), transparent);
  color: var(--primary-blue);
  border-left-color: var(--primary-blue);
  transform: translateX(5px);
}

.nav-item.active::before {
  width: 3px;
}

.nav-item.active .nav-indicator {
  opacity: 1;
  transform: scale(1);
}

.nav-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: all 0.3s ease;
}

.nav-item:hover .nav-icon,
.nav-item.active .nav-icon {
  transform: scale(1.1);
}

.nav-indicator {
  position: absolute;
  right: 1rem;
  width: 6px;
  height: 6px;
  background: var(--primary-blue);
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s ease;
}

.sidebar-footer {
  padding: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.status-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, var(--blue-100), var(--gray-100));
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid var(--border-color);
}

.status-indicator {
  width: 12px;
  height: 12px;
  background: var(--accent-green);
  border-radius: 50%;
  animation: pulse 2s infinite;
  flex-shrink: 0;
}

.status-text {
  display: flex;
  flex-direction: column;
}

.status-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--gray-900);
  line-height: 1.2;
}

.status-subtitle {
  font-size: 0.75rem;
  color: var(--gray-600);
  line-height: 1.2;
}

.sign-out-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background: none;
  border: 2px solid var(--border-color);
  color: var(--gray-600);
  font-weight: 500;
  cursor: pointer;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.sign-out-btn:hover {
  background: linear-gradient(135deg, var(--accent-red), #DC2626);
  color: white;
  border-color: var(--accent-red);
  transform: translateY(-2px);
}

@keyframes shine {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
  
  .navigation {
    display: flex;
    overflow-x: auto;
    padding: 1rem 0;
  }
  
  .nav-item {
    white-space: nowrap;
    min-width: fit-content;
    border-left: none;
    border-bottom: 3px solid transparent;
    transform: none;
  }
  
  .nav-item:hover,
  .nav-item.active {
    transform: none;
    border-left: none;
    border-bottom-color: var(--primary-blue);
  }
  
  .nav-item::before {
    display: none;
  }
  
  .status-card {
    margin-bottom: 0.5rem;
  }
}
</style>