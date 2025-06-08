<template>
  <div class="contact-page">
    <div class="container">
      <!-- Animated Header -->
      <header class="page-header">
        <div class="header-content">
          <h1 class="animated-title">Let's Connect</h1>
          <div class="title-underline"></div>
          <p>Ready to collaborate on exciting projects and opportunities</p>
        </div>
        <div class="floating-elements">
          <div class="float-element" style="--delay: 0s"></div>
          <div class="float-element" style="--delay: 1.5s"></div>
          <div class="float-element" style="--delay: 3s"></div>
        </div>
      </header>

      <div class="contact-content">
        <!-- Contact Info Cards -->
        <div class="contact-info-grid">
          <div class="info-card card glow-effect">
            <div class="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p>jmnebre@gmail.com</p>
            <div class="card-action">
              <a href="mailto:jmnebre@gmail.com" class="btn btn-primary">Send Email</a>
            </div>
          </div>

          <div class="info-card card glow-effect">
            <div class="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>Location</h3>
            <p>Manila, Philippines</p>
            <div class="card-action">
              <button class="btn btn-primary">View Map</button>
            </div>
          </div>

          <div class="info-card card glow-effect">
            <div class="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 21.1 16.92H22Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>Phone</h3>
            <p>+63 912 345 6789</p>
            <div class="card-action">
              <a href="tel:+639123456789" class="btn btn-primary">Call Now</a>
            </div>
          </div>

          <div class="info-card card glow-effect">
            <div class="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C18.2091 8 20.2091 8.79107 21.6569 10.2426C23.1046 11.6943 23.8957 13.6957 23.8957 16V21H19.1043V16C19.1043 15.0426 18.7239 14.1043 18.0457 13.4261C17.3674 12.7478 16.4291 12.3674 15.4717 12.3674C14.5143 12.3674 13.576 12.7478 12.8978 13.4261C12.2196 14.1043 11.8391 15.0426 11.8391 16V21H7.04783V16C7.04783 13.6957 7.83888 11.6943 9.28662 10.2426C10.7344 8.79107 12.7357 8 14.9448 8H16Z" stroke="currentColor" stroke-width="2"/>
                <rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="2"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3>LinkedIn</h3>
            <p>@johnmichaelnebre</p>
            <div class="card-action">
              <a href="#" class="btn btn-primary">Connect</a>
            </div>
          </div>
        </div>

        <!-- Main Contact Section -->
        <div class="main-contact-section">
          <!-- Contact Form -->
          <div class="contact-form-container">
            <form @submit.prevent="submitForm" class="contact-form card">
              <div class="form-header">
                <h3>Send a Message</h3>
                <p>I'd love to hear about your project ideas and opportunities</p>
              </div>
              
              <div class="form-grid">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    class="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    class="form-input"
                    placeholder="+63 912 345 6789"
                  />
                </div>

                <div class="form-group">
                  <label for="subject">Subject</label>
                  <select
                    id="subject"
                    v-model="form.subject"
                    required
                    class="form-input"
                  >
                    <option value="">Select a subject</option>
                    <option value="internship">Internship Opportunity</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="freelance">Freelance Work</option>
                    <option value="academic">Academic Project</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="form-input"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <div class="form-footer">
                <div class="form-note">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>I typically respond within 24 hours</span>
                </div>
                <button type="submit" class="btn btn-primary submit-btn" :disabled="isSubmitting">
                  <span v-if="!isSubmitting">Send Message</span>
                  <span v-else>Sending...</span>
                  <svg v-if="!isSubmitting" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" stroke-width="2"/>
                    <polygon points="22,2 15,22 11,13 2,9 22,2" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <!-- Availability & Info -->
          <div class="availability-section">
            <div class="availability-card card">
              <div class="availability-header">
                <div class="status-indicator"></div>
                <h3>Currently Available</h3>
              </div>
              <p>I'm actively seeking internship opportunities and exciting projects to work on.</p>
              
              <div class="availability-details">
                <div class="detail-item">
                  <div class="detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Response Time</h4>
                    <p>Within 24 hours</p>
                  </div>
                </div>

                <div class="detail-item">
                  <div class="detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Preferred Contact</h4>
                    <p>Email or LinkedIn</p>
                  </div>
                </div>

                <div class="detail-item">
                  <div class="detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                      <path d="M2 12H22" stroke="currentColor" stroke-width="2"/>
                      <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Time Zone</h4>
                    <p>GMT+8 (Manila)</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="interests-card card">
              <h3>Areas of Interest</h3>
              <div class="interests-grid">
                <div class="interest-item">
                  <div class="interest-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                      <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/>
                      <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <span>Web Development</span>
                </div>
                <div class="interest-item">
                  <div class="interest-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                      <rect x="9" y="9" width="6" height="6" stroke="currentColor" stroke-width="2"/>
                      <line x1="9" y1="1" x2="9" y2="4" stroke="currentColor" stroke-width="2"/>
                      <line x1="15" y1="1" x2="15" y2="4" stroke="currentColor" stroke-width="2"/>
                      <line x1="9" y1="20" x2="9" y2="23" stroke="currentColor" stroke-width="2"/>
                      <line x1="15" y1="20" x2="15" y2="23" stroke="currentColor" stroke-width="2"/>
                      <line x1="20" y1="9" x2="23" y2="9" stroke="currentColor" stroke-width="2"/>
                      <line x1="20" y1="14" x2="23" y2="14" stroke="currentColor" stroke-width="2"/>
                      <line x1="1" y1="9" x2="4" y2="9" stroke="currentColor" stroke-width="2"/>
                      <line x1="1" y1="14" x2="4" y2="14" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <span>Embedded Systems</span>
                </div>
                <div class="interest-item">
                  <div class="interest-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" stroke-width="2"/>
                      <path d="M12 22V12" stroke="currentColor" stroke-width="2"/>
                      <path d="M2 7L12 12L22 7" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <span>IoT Projects</span>
                </div>
                <div class="interest-item">
                  <div class="interest-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <span>Signal Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isSubmitting = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  console.log('Form submitted:', form.value)
  alert('Thank you for your message! I\'ll get back to you within 24 hours.')
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
}
</script>

<style scoped>
.contact-page {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
}

.page-header {
  position: relative;
  text-align: center;
  margin-bottom: 4rem;
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
  width: 120px;
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
  width: 15px;
  height: 15px;
  background: linear-gradient(45deg, var(--primary-blue), var(--accent-purple));
  border-radius: 50%;
  opacity: 0.4;
  animation: float 8s ease-in-out infinite;
  animation-delay: var(--delay);
}

.float-element:nth-child(1) { top: 20%; left: 15%; }
.float-element:nth-child(2) { top: 70%; right: 20%; }
.float-element:nth-child(3) { bottom: 40%; left: 25%; }

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-card {
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  background: var(--card-bg);
}

.info-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-purple));
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
}

.info-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 0.5rem;
}

.info-card p {
  color: var(--gray-600);
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.card-action {
  margin-top: auto;
}

.main-contact-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.contact-form {
  padding: 2.5rem;
  background: var(--card-bg);
}

.form-header {
  margin-bottom: 2rem;
}

.form-header h3 {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 0.5rem;
}

.form-header p {
  color: var(--gray-600);
  line-height: 1.6;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group:nth-child(4) {
  grid-column: 1 / -1;
}

.form-group label {
  font-weight: 500;
  color: var(--gray-700);
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-input {
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid var(--border-color);
  border-radius: 0.75rem;
  font-size: 1rem;
  background: var(--gray-100);
  color: var(--gray-900);
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-blue);
  background: var(--card-bg);
  box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.1);
}

.form-input::placeholder {
  color: var(--gray-500);
}

textarea.form-input {
  resize: vertical;
  min-height: 150px;
  font-family: inherit;
}

select.form-input {
  cursor: pointer;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.form-note {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-600);
  font-size: 0.875rem;
}

.submit-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.availability-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.availability-card {
  padding: 2rem;
  background: var(--card-bg);
}

.availability-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.status-indicator {
  width: 12px;
  height: 12px;
  background: var(--accent-green);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.availability-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--gray-900);
}

.availability-card p {
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.availability-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.detail-icon {
  width: 2.5rem;
  height: 2.5rem;
  background: var(--blue-100);
  color: var(--primary-blue);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.detail-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 0.25rem;
}

.detail-item p {
  color: var(--gray-600);
  font-size: 0.875rem;
  margin: 0;
}

.interests-card {
  padding: 2rem;
  background: var(--card-bg);
}

.interests-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 1.5rem;
}

.interests-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--gray-100);
  border-radius: 0.75rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.interest-item:hover {
  background: var(--blue-100);
  border-color: var(--primary-blue);
  transform: translateY(-2px);
}

.interest-icon {
  color: var(--primary-blue);
  flex-shrink: 0;
}

.interest-item span {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray-700);
}

@keyframes titleGlow {
  0% { filter: brightness(1); }
  100% { filter: brightness(1.2); }
}

@keyframes underlineExpand {
  0% { width: 0; }
  100% { width: 120px; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-25px) rotate(180deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
}

@media (max-width: 768px) {
  .contact-page {
    padding: 1rem;
  }
  
  .animated-title {
    font-size: 2rem;
  }
  
  .contact-info-grid {
    grid-template-columns: 1fr;
  }
  
  .main-contact-section {
    grid-template-columns: 1fr;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .form-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .interests-grid {
    grid-template-columns: 1fr;
  }
}
</style>