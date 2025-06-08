<template>
  <div class="profile-page">
    <div class="container">
      <!-- Animated Header -->
      <header class="page-header">
        <div class="header-content">
          <h1 class="animated-title">Profile</h1>
          <div class="title-underline"></div>
          <p>Computer Engineering Student & Aspiring Developer</p>
        </div>
        <div class="floating-elements">
          <div class="float-element" style="--delay: 0s"></div>
          <div class="float-element" style="--delay: 1s"></div>
          <div class="float-element" style="--delay: 2s"></div>
        </div>
      </header>

      <div class="profile-content">
        <!-- Hero Profile Section -->
        <div class="profile-hero card glow-effect">
          <div class="hero-background"></div>
          <div class="profile-main">
            <div class="profile-avatar-container">
              <div class="avatar-ring"></div>
              <div class="profile-avatar">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" alt="John Michael Nebre" />
                <div class="avatar-status"></div>
              </div>
            </div>
            <div class="profile-info">
              <h2 class="name-title">John Michael Nebre</h2>
              <div class="job-title-container">
                <span class="job-title">Computer Engineering Student</span>
                <div class="university">Polytechnic University of the Philippines</div>
              </div>
              <p class="bio">
                Passionate Computer Engineering student with a keen interest in software development, 
                embedded systems, and emerging technologies. Currently pursuing my degree at PUP while 
                building practical skills in web development, programming, and system design. 
                Eager to contribute to innovative projects and grow as a technology professional.
              </p>
              <div class="status-badges">
                <span class="badge available">Available for Internship</span>
                <span class="badge learning">Continuous Learning</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats and Details Grid -->
        <div class="details-grid">
          <!-- Academic Info -->
          <div class="academic-card card">
            <div class="card-header">
              <div class="icon-container academic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 10V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10" stroke="currentColor" stroke-width="2"/>
                  <path d="M7 20H17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <path d="M12 16V20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <path d="M22 10L12 15L2 10L12 5L22 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Academic Information</h3>
            </div>
            <div class="academic-details">
              <div class="detail-row">
                <span class="label">Program:</span>
                <span class="value">Computer Engineering</span>
              </div>
              <div class="detail-row">
                <span class="label">University:</span>
                <span class="value">Polytechnic University of the Philippines</span>
              </div>
              <div class="detail-row">
                <span class="label">Year Level:</span>
                <span class="value">4th Year</span>
              </div>
              <div class="detail-row">
                <span class="label">Expected Graduation:</span>
                <span class="value">2025</span>
              </div>
            </div>
          </div>

          <!-- Personal Details -->
          <div class="personal-card card">
            <div class="card-header">
              <div class="icon-container personal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h3>Personal Details</h3>
            </div>
            <div class="personal-details">
              <div class="detail-row">
                <span class="label">Location:</span>
                <span class="value">Manila, Philippines</span>
              </div>
              <div class="detail-row">
                <span class="label">Email:</span>
                <span class="value">jmnebre@gmail.com</span>
              </div>
              <div class="detail-row">
                <span class="label">Phone:</span>
                <span class="value">+63 912 345 6789</span>
              </div>
              <div class="detail-row">
                <span class="label">Languages:</span>
                <span class="value">English, Filipino</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills Section -->
        <div class="skills-section card">
          <div class="section-header">
            <div class="icon-container skills">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="16,18 22,12 16,6" stroke="currentColor" stroke-width="2"/>
                <polyline points="8,6 2,12 8,18" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div>
              <h3>Technical Skills</h3>
              <p>Programming languages and technologies I'm proficient in</p>
            </div>
          </div>
          <div class="skills-grid">
            <div v-for="skill in skills" :key="skill.name" class="skill-item">
              <div class="skill-header">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-category">{{ skill.category }}</span>
                </div>
                <span class="skill-percentage">{{ skill.level }}%</span>
              </div>
              <div class="progress-bar">
                <div 
                  class="progress-fill" 
                  :style="{ width: isLoaded ? `${skill.level}%` : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="social-section card">
          <div class="section-header">
            <div class="icon-container social">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" stroke="currentColor" stroke-width="2"/>
                <path d="M9 9H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M9 13H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M9 17H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <h3>Connect With Me</h3>
              <p>Let's connect and collaborate on exciting projects</p>
            </div>
          </div>
          <div class="social-grid">
            <a href="#" class="social-link linkedin">
              <div class="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C18.2091 8 20.2091 8.79107 21.6569 10.2426C23.1046 11.6943 23.8957 13.6957 23.8957 16V21H19.1043V16C19.1043 15.0426 18.7239 14.1043 18.0457 13.4261C17.3674 12.7478 16.4291 12.3674 15.4717 12.3674C14.5143 12.3674 13.576 12.7478 12.8978 13.4261C12.2196 14.1043 11.8391 15.0426 11.8391 16V21H7.04783V16C7.04783 13.6957 7.83888 11.6943 9.28662 10.2426C10.7344 8.79107 12.7357 8 14.9448 8H16Z" stroke="currentColor" stroke-width="2"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="2"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="social-info">
                <span class="social-name">LinkedIn</span>
                <span class="social-handle">@johnmichaelnebre</span>
              </div>
            </a>
            <a href="#" class="social-link github">
              <div class="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19C4 20.5 4 16.5 2 16M22 16V22C22 22.5304 21.7893 23.0391 21.4142 23.4142C21.0391 23.7893 20.5304 24 20 24H16C15.4696 24 14.9609 23.7893 14.5858 23.4142C14.2107 23.0391 14 22.5304 14 22V18.13C14.05 17.32 13.78 16.53 13.26 15.9C15.99 15.58 18.84 14.55 18.84 9.5C18.8381 8.25044 18.3362 7.04767 17.46 6.17C17.8769 5.1128 17.8769 3.9372 17.46 2.88C17.46 2.88 16.42 2.58 14 4.17C11.7573 3.64118 9.40271 3.64118 7.16 4.17C4.74 2.58 3.7 2.88 3.7 2.88C3.28312 3.9372 3.28312 5.1128 3.7 6.17C2.82381 7.04767 2.32193 8.25044 2.32 9.5C2.32 14.55 5.17 15.58 7.9 15.9C7.38 16.53 7.11 17.32 7.16 18.13V22" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="social-info">
                <span class="social-name">GitHub</span>
                <span class="social-handle">@jmnebre</span>
              </div>
            </a>
            <a href="#" class="social-link email">
              <div class="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="social-info">
                <span class="social-name">Email</span>
                <span class="social-handle">jmnebre@gmail.com</span>
              </div>
            </a>
            <a href="#" class="social-link portfolio">
              <div class="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M8 14S9.5 16 12 16S16 14 16 14" stroke="currentColor" stroke-width="2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9" stroke="currentColor" stroke-width="2"/>
                  <line x1="15" y1="9" x2="15.01" y2="9" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="social-info">
                <span class="social-name">Portfolio</span>
                <span class="social-handle">jmnebre.dev</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

const skills = [
  { name: 'C/C++', level: 85, category: 'Programming' },
  { name: 'Python', level: 80, category: 'Programming' },
  { name: 'JavaScript', level: 75, category: 'Web Development' },
  { name: 'HTML/CSS', level: 85, category: 'Web Development' },
  { name: 'Vue.js', level: 70, category: 'Framework' },
  { name: 'Arduino/Embedded', level: 80, category: 'Hardware' },
  { name: 'MATLAB', level: 75, category: 'Engineering' },
  { name: 'Git/GitHub', level: 78, category: 'Tools' }
]

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 800)
})
</script>

<style scoped>
.profile-page {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
}

.page-header {
  position: relative;
  margin-bottom: 3rem;
  text-align: center;
  overflow: hidden;
}

.header-content {
  position: relative;
  z-index: 2;
}

.animated-title {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  animation: titleGlow 3s ease-in-out infinite alternate;
}

.title-underline {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-blue), var(--accent-purple));
  margin: 0 auto 1rem;
  border-radius: 2px;
  animation: underlineExpand 2s ease-out;
}

.page-header p {
  color: var(--gray-600);
  font-size: 1.25rem;
  font-weight: 500;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.float-element {
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, var(--primary-blue), var(--accent-purple));
  border-radius: 50%;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
  animation-delay: var(--delay);
}

.float-element:nth-child(1) { top: 20%; left: 10%; }
.float-element:nth-child(2) { top: 60%; right: 15%; }
.float-element:nth-child(3) { bottom: 30%; left: 20%; }

.profile-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-hero {
  position: relative;
  padding: 3rem;
  overflow: hidden;
  background: linear-gradient(135deg, var(--card-bg) 0%, var(--gray-100) 100%);
}

.hero-background {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--primary-blue)20, transparent 70%);
  border-radius: 50%;
  opacity: 0.1;
}

.profile-main {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  position: relative;
  z-index: 2;
}

.profile-avatar-container {
  position: relative;
  flex-shrink: 0;
}

.avatar-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 3px solid transparent;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-blue), var(--accent-purple), var(--accent-green)) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: rotate 3s linear infinite;
}

.profile-avatar {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--card-bg);
}

.profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-status {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background: var(--accent-green);
  border: 3px solid var(--card-bg);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.profile-info {
  flex: 1;
}

.name-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--gray-900), var(--primary-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.job-title-container {
  margin-bottom: 1.5rem;
}

.job-title {
  display: block;
  font-size: 1.25rem;
  color: var(--primary-blue);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.university {
  color: var(--gray-600);
  font-size: 1rem;
  font-style: italic;
}

.bio {
  color: var(--gray-700);
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.status-badges {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 2px solid;
}

.badge.available {
  background: linear-gradient(135deg, var(--accent-green), #059669);
  color: white;
  border-color: var(--accent-green);
  animation: glow 2s ease-in-out infinite alternate;
}

.badge.learning {
  background: linear-gradient(135deg, var(--accent-purple), #7C3AED);
  color: white;
  border-color: var(--accent-purple);
}

.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.icon-container {
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.icon-container.academic {
  background: linear-gradient(135deg, var(--accent-purple), #7C3AED);
}

.icon-container.personal {
  background: linear-gradient(135deg, var(--primary-blue), #2563EB);
}

.icon-container.skills {
  background: linear-gradient(135deg, var(--accent-green), #059669);
}

.icon-container.social {
  background: linear-gradient(135deg, var(--accent-orange), #D97706);
}

.academic-card,
.personal-card {
  padding: 2rem;
}

.card-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gray-900);
}

.academic-details,
.personal-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: var(--gray-100);
  border-radius: 0.75rem;
  border-left: 4px solid var(--primary-blue);
  transition: all 0.3s ease;
}

.detail-row:hover {
  transform: translateX(5px);
  background: var(--gray-200);
}

.label {
  color: var(--gray-600);
  font-weight: 500;
}

.value {
  color: var(--gray-900);
  font-weight: 600;
}

.skills-section {
  padding: 2rem;
}

.section-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.section-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 0.25rem;
}

.section-header p {
  color: var(--gray-600);
  font-size: 0.875rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  padding: 1.5rem;
  background: var(--gray-100);
  border-radius: 1rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-2px);
  border-color: var(--primary-blue);
  box-shadow: 0 8px 25px rgba(96, 165, 250, 0.2);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.skill-info {
  display: flex;
  flex-direction: column;
}

.skill-name {
  font-weight: 600;
  color: var(--gray-900);
  font-size: 1.1rem;
}

.skill-category {
  font-size: 0.75rem;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skill-percentage {
  font-weight: 700;
  color: var(--primary-blue);
  font-size: 1.25rem;
}

.social-section {
  padding: 2rem;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--gray-100);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  text-decoration: none;
  color: var(--gray-700);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.1), transparent);
  transition: left 0.5s;
}

.social-link:hover::before {
  left: 100%;
}

.social-link:hover {
  transform: translateY(-3px);
  border-color: var(--primary-blue);
  box-shadow: 0 8px 25px rgba(96, 165, 250, 0.2);
}

.social-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.social-link.linkedin .social-icon {
  background: linear-gradient(135deg, #0077B5, #005885);
}

.social-link.github .social-icon {
  background: linear-gradient(135deg, #333, #000);
}

.social-link.email .social-icon {
  background: linear-gradient(135deg, var(--accent-red), #DC2626);
}

.social-link.portfolio .social-icon {
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-purple));
}

.social-info {
  display: flex;
  flex-direction: column;
}

.social-name {
  font-weight: 600;
  color: var(--gray-900);
  font-size: 1rem;
}

.social-handle {
  color: var(--gray-600);
  font-size: 0.875rem;
}

@keyframes titleGlow {
  0% { filter: brightness(1); }
  100% { filter: brightness(1.2); }
}

@keyframes underlineExpand {
  0% { width: 0; }
  100% { width: 100px; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes glow {
  0% { box-shadow: 0 0 5px var(--accent-green); }
  100% { box-shadow: 0 0 20px var(--accent-green), 0 0 30px var(--accent-green); }
}

@media (max-width: 768px) {
  .profile-page {
    padding: 1rem;
  }
  
  .animated-title {
    font-size: 2rem;
  }
  
  .profile-main {
    flex-direction: column;
    text-align: center;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
  }
}
</style>