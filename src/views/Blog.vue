<template>
  <div class="blog-page">
    <div class="container">
      <!-- Dynamic Header -->
      <header class="page-header">
        <div class="header-content">
          <h1 class="animated-title">Engineering Blog</h1>
          <div class="title-underline"></div>
          <p>Sharing insights, tutorials, and discoveries in technology</p>
        </div>
        <div class="blog-stats">
          <div class="stat-item">
            <span class="stat-number">{{ posts.length }}</span>
            <span class="stat-label">Articles</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ categories.length }}</span>
            <span class="stat-label">Categories</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ totalViews }}</span>
            <span class="stat-label">Total Views</span>
          </div>
        </div>
      </header>

      <!-- Category Filter -->
      <div class="filter-section">
        <div class="filter-tabs">
          <button 
            v-for="category in ['All', ...categories]" 
            :key="category"
            @click="activeFilter = category"
            :class="['filter-tab', { active: activeFilter === category }]"
          >
            {{ category }}
            <span class="category-count">
              {{ category === 'All' ? posts.length : posts.filter(p => p.category === category).length }}
            </span>
          </button>
        </div>
      </div>

      <!-- Featured Post -->
      <div v-if="featuredPost" class="featured-section">
        <h2 class="section-title">Featured Article</h2>
        <article class="featured-post card glow-effect">
          <div class="featured-image">
            <img :src="featuredPost.image" :alt="featuredPost.title" />
            <div class="featured-overlay">
              <div class="featured-badge">Featured</div>
            </div>
          </div>
          <div class="featured-content">
            <div class="post-meta">
              <span class="post-date">{{ formatDate(featuredPost.date) }}</span>
              <span class="post-category">{{ featuredPost.category }}</span>
              <span class="post-read-time">{{ featuredPost.readTime }} min read</span>
            </div>
            <h2>{{ featuredPost.title }}</h2>
            <p>{{ featuredPost.excerpt }}</p>
            <div class="post-tags">
              <span v-for="tag in featuredPost.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
            <button class="btn btn-primary read-more-btn">
              Read Full Article
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" stroke-width="2"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>
          </div>
        </article>
      </div>

      <!-- Blog Posts Grid -->
      <div class="posts-section">
        <h2 class="section-title">Recent Articles</h2>
        <div class="blog-posts">
          <article 
            v-for="post in filteredPosts" 
            :key="post.id" 
            class="blog-post card"
            @click="selectPost(post)"
          >
            <div class="post-image">
              <img :src="post.image" :alt="post.title" />
              <div class="post-overlay">
                <button class="btn btn-primary">Read Article</button>
              </div>
              <div class="post-status">
                <span :class="['status-badge', post.status.toLowerCase()]">
                  {{ post.status }}
                </span>
              </div>
            </div>
            <div class="post-content">
              <div class="post-meta">
                <span class="post-date">{{ formatDate(post.date) }}</span>
                <span class="post-category">{{ post.category }}</span>
                <span class="post-read-time">{{ post.readTime }} min read</span>
              </div>
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt }}</p>
              <div class="post-tags">
                <span v-for="tag in post.tags.slice(0, 3)" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
              <div class="post-footer">
                <div class="post-stats">
                  <div class="stat">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" stroke-width="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span>{{ post.views }}</span>
                  </div>
                  <div class="stat">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span>{{ post.comments }}</span>
                  </div>
                </div>
                <div class="difficulty-indicator">
                  <span class="difficulty-label">Level:</span>
                  <div class="difficulty-dots">
                    <div 
                      v-for="i in 3" 
                      :key="i" 
                      :class="['difficulty-dot', { active: i <= post.difficulty }]"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Newsletter Signup -->
      <div class="newsletter-section">
        <div class="newsletter-card card">
          <div class="newsletter-content">
            <div class="newsletter-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="newsletter-text">
              <h3>Stay Updated</h3>
              <p>Get notified when I publish new articles about engineering and technology</p>
            </div>
          </div>
          <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
            <input 
              type="email" 
              v-model="newsletterEmail"
              placeholder="Enter your email address"
              class="newsletter-input"
              required
            />
            <button type="submit" class="btn btn-primary newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- Article Modal -->
      <div v-if="selectedPost" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2"/>
              <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2"/>
            </svg>
          </button>
          <div class="modal-header">
            <img :src="selectedPost.image" :alt="selectedPost.title" />
            <div class="modal-meta">
              <span class="modal-category">{{ selectedPost.category }}</span>
              <span class="modal-date">{{ formatDate(selectedPost.date) }}</span>
              <span class="modal-read-time">{{ selectedPost.readTime }} min read</span>
            </div>
            <h2>{{ selectedPost.title }}</h2>
          </div>
          <div class="modal-body">
            <p class="modal-excerpt">{{ selectedPost.excerpt }}</p>
            <div class="modal-content-text">
              <p>{{ selectedPost.fullContent }}</p>
            </div>
            <div class="modal-tags">
              <h4>Tags:</h4>
              <div class="tags-list">
                <span v-for="tag in selectedPost.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeFilter = ref('All')
const selectedPost = ref(null)
const newsletterEmail = ref('')

const categories = ['Computer Engineering', 'Web Development', 'Embedded Systems', 'Academic Projects', 'Technology Trends']

const posts = [
  {
    id: 1,
    title: 'Getting Started with Arduino Programming for Computer Engineering Students',
    excerpt: 'A comprehensive guide to Arduino programming fundamentals, covering basic concepts, circuit design, and practical projects for engineering students.',
    fullContent: 'Arduino programming is an essential skill for computer engineering students. This article covers the fundamentals of Arduino IDE, basic programming concepts, digital and analog I/O, and how to build your first projects. We\'ll explore practical applications in embedded systems and IoT development.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: new Date('2024-01-15'),
    category: 'Embedded Systems',
    status: 'Published',
    readTime: 8,
    views: 1250,
    comments: 23,
    difficulty: 2,
    tags: ['Arduino', 'Programming', 'Embedded Systems', 'IoT', 'Beginner']
  },
  {
    id: 2,
    title: 'Building Responsive Web Applications with Vue.js and Modern CSS',
    excerpt: 'Learn how to create modern, responsive web applications using Vue.js framework combined with advanced CSS techniques and best practices.',
    fullContent: 'Modern web development requires understanding of both frontend frameworks and responsive design principles. This tutorial walks through building a complete web application using Vue.js, implementing responsive design with CSS Grid and Flexbox, and optimizing for performance across all devices.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: new Date('2024-02-08'),
    category: 'Web Development',
    status: 'Published',
    readTime: 12,
    views: 890,
    comments: 15,
    difficulty: 3,
    tags: ['Vue.js', 'CSS', 'Responsive Design', 'Frontend', 'JavaScript']
  },
  {
    id: 3,
    title: 'Digital Signal Processing in MATLAB: From Theory to Implementation',
    excerpt: 'Explore digital signal processing concepts and their practical implementation in MATLAB for engineering applications and research.',
    fullContent: 'Digital Signal Processing is a core subject in computer engineering. This article bridges the gap between theoretical concepts and practical implementation using MATLAB. We cover FFT, filtering techniques, signal analysis, and real-world applications in communication systems.',
    image: 'https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: new Date('2024-01-22'),
    category: 'Academic Projects',
    status: 'Published',
    readTime: 15,
    views: 675,
    comments: 8,
    difficulty: 3,
    tags: ['MATLAB', 'DSP', 'Signal Processing', 'Engineering', 'Academic']
  },
  {
    id: 4,
    title: 'The Future of IoT in Smart Cities: A Computer Engineering Perspective',
    excerpt: 'Analyzing the role of IoT technologies in developing smart city infrastructure and the opportunities for computer engineering graduates.',
    fullContent: 'Smart cities represent the future of urban development, heavily relying on IoT technologies. This article examines current trends, challenges, and opportunities in smart city development from a computer engineering perspective, including sensor networks, data analytics, and system integration.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: new Date('2024-02-20'),
    category: 'Technology Trends',
    status: 'Published',
    readTime: 10,
    views: 1100,
    comments: 31,
    difficulty: 2,
    tags: ['IoT', 'Smart Cities', 'Technology', 'Future', 'Engineering']
  },
  {
    id: 5,
    title: 'Database Design Principles for Engineering Applications',
    excerpt: 'Understanding database design fundamentals and their application in engineering projects and data management systems.',
    fullContent: 'Effective database design is crucial for engineering applications that handle large amounts of data. This comprehensive guide covers normalization, indexing, query optimization, and best practices for designing databases that support engineering workflows and data analysis.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: new Date('2024-01-30'),
    category: 'Computer Engineering',
    status: 'Published',
    readTime: 11,
    views: 720,
    comments: 12,
    difficulty: 3,
    tags: ['Database', 'SQL', 'Data Management', 'Engineering', 'Design']
  },
  {
    id: 6,
    title: 'Machine Learning Applications in Engineering: A Beginner\'s Guide',
    excerpt: 'Introduction to machine learning concepts and their practical applications in various engineering disciplines.',
    fullContent: 'Machine learning is transforming engineering practices across all disciplines. This beginner-friendly guide introduces fundamental ML concepts, popular algorithms, and practical applications in engineering, including predictive maintenance, optimization, and data analysis.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: new Date('2024-02-12'),
    category: 'Technology Trends',
    status: 'Draft',
    readTime: 14,
    views: 450,
    comments: 6,
    difficulty: 3,
    tags: ['Machine Learning', 'AI', 'Engineering', 'Data Science', 'Python']
  }
]

const featuredPost = computed(() => posts.find(post => post.id === 1))

const filteredPosts = computed(() => {
  const nonFeaturedPosts = posts.filter(post => post.id !== 1)
  if (activeFilter.value === 'All') {
    return nonFeaturedPosts
  }
  return nonFeaturedPosts.filter(post => post.category === activeFilter.value)
})

const totalViews = computed(() => {
  return posts.reduce((total, post) => total + post.views, 0)
})

const selectPost = (post) => {
  selectedPost.value = post
}

const closeModal = () => {
  selectedPost.value = null
}

const subscribeNewsletter = () => {
  console.log('Newsletter subscription:', newsletterEmail.value)
  alert('Thank you for subscribing! You\'ll receive updates about new articles.')
  newsletterEmail.value = ''
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.blog-page {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.header-content {
  margin-bottom: 2rem;
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
  width: 140px;
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

.blog-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-blue);
  line-height: 1;
}

.stat-label {
  color: var(--gray-600);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.filter-section {
  margin-bottom: 3rem;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--border-color);
  background: var(--card-bg);
  color: var(--gray-600);
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-tab:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
}

.filter-tab.active {
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-purple));
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
}

.category-count {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.filter-tab.active .category-count {
  background: rgba(255, 255, 255, 0.3);
}

.featured-section,
.posts-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 2rem;
  text-align: center;
}

.featured-post {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  overflow: hidden;
  background: var(--card-bg);
}

.featured-image {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.featured-badge {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--accent-orange), #D97706);
  color: white;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.featured-content {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-content h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.featured-content p {
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.blog-posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
}

.blog-post {
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  background: var(--card-bg);
}

.blog-post:hover {
  transform: translateY(-6px);
}

.post-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.blog-post:hover .post-overlay {
  opacity: 1;
}

.blog-post:hover .post-image img {
  transform: scale(1.1);
}

.post-status {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.status-badge {
  padding: 0.375rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-badge.published {
  background: var(--accent-green);
  color: white;
}

.status-badge.draft {
  background: var(--accent-orange);
  color: white;
}

.post-content {
  padding: 2rem;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.post-date {
  color: var(--gray-500);
  font-size: 0.875rem;
  font-weight: 500;
}

.post-category {
  padding: 0.25rem 0.75rem;
  background: var(--blue-100);
  color: var(--primary-blue);
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.post-read-time {
  color: var(--gray-500);
  font-size: 0.875rem;
  font-weight: 500;
}

.post-content h3 {
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.post-content p {
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, var(--gray-200), var(--gray-300));
  color: var(--gray-700);
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.tag:hover {
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-purple));
  color: white;
  transform: translateY(-1px);
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.post-stats {
  display: flex;
  gap: 1rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--gray-500);
  font-size: 0.875rem;
}

.difficulty-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.difficulty-label {
  color: var(--gray-500);
  font-size: 0.75rem;
  font-weight: 500;
}

.difficulty-dots {
  display: flex;
  gap: 2px;
}

.difficulty-dot {
  width: 6px;
  height: 6px;
  background: var(--gray-300);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.difficulty-dot.active {
  background: linear-gradient(135deg, var(--primary-blue), var(--accent-purple));
}

.read-more-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
}

.newsletter-section {
  margin-bottom: 3rem;
}

.newsletter-card {
  padding: 3rem;
  background: linear-gradient(135deg, var(--card-bg) 0%, var(--gray-100) 100%);
  text-align: center;
}

.newsletter-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.newsletter-icon {
  color: var(--primary-blue);
}

.newsletter-text h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 0.5rem;
}

.newsletter-text p {
  color: var(--gray-600);
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

.newsletter-input {
  flex: 1;
  padding: 1rem 1.25rem;
  border: 2px solid var(--border-color);
  border-radius: 0.75rem;
  font-size: 1rem;
  background: var(--card-bg);
  color: var(--gray-900);
  transition: all 0.3s ease;
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.1);
}

.newsletter-btn {
  padding: 1rem 2rem;
  white-space: nowrap;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background: var(--card-bg);
  border-radius: 1.5rem;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid var(--border-color);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  background: var(--gray-200);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--gray-600);
  transition: all 0.3s ease;
  z-index: 10;
}

.modal-close:hover {
  background: var(--accent-red);
  color: white;
}

.modal-header {
  position: relative;
}

.modal-header img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.modal-meta {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.modal-category {
  padding: 0.375rem 0.75rem;
  background: var(--primary-blue);
  color: white;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.modal-date,
.modal-read-time {
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
}

.modal-header h2 {
  padding: 2rem 2rem 1rem;
  font-size: 2rem;
  font-weight: 700;
  color: var(--gray-900);
  line-height: 1.3;
}

.modal-body {
  padding: 0 2rem 2rem;
}

.modal-excerpt {
  font-size: 1.125rem;
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-style: italic;
}

.modal-content-text p {
  color: var(--gray-700);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.modal-tags {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.modal-tags h4 {
  color: var(--gray-900);
  font-weight: 600;
  margin-bottom: 1rem;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@keyframes titleGlow {
  0% { filter: brightness(1); }
  100% { filter: brightness(1.2); }
}

@keyframes underlineExpand {
  0% { width: 0; }
  100% { width: 140px; }
}

@media (max-width: 768px) {
  .blog-page {
    padding: 1rem;
  }
  
  .animated-title {
    font-size: 2rem;
  }
  
  .blog-stats {
    gap: 2rem;
  }
  
  .featured-post {
    grid-template-columns: 1fr;
  }
  
  .featured-content {
    padding: 2rem;
  }
  
  .blog-posts {
    grid-template-columns: 1fr;
  }
  
  .filter-tabs {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  
  .newsletter-content {
    flex-direction: column;
    text-align: center;
  }
  
  .newsletter-form {
    flex-direction: column;
    max-width: 100%;
  }
  
  .modal-overlay {
    padding: 1rem;
  }
  
  .modal-content {
    max-height: 95vh;
  }
}
</style>
