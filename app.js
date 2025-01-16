// Sample data - In a real application, this would come from an API
const featuredGames = [
  {
    title: "Pixel Dreams",
    developer: "Dream Studio Games",
    description: "A mesmerizing puzzle platformer with a unique art style.",
    tags: ["Puzzle", "Platformer", "Artistic"]
  },
  {
    title: "Neon Nights",
    developer: "Cyber Punk Labs",
    description: "Race through a cyberpunk city in this high-octane adventure.",
    tags: ["Racing", "Action", "Cyberpunk"]
  },
  {
    title: "Forest Quest",
    developer: "Nature Games",
    description: "Explore a magical forest filled with mysteries and creatures.",
    tags: ["Adventure", "RPG", "Fantasy"]
  }
];

const galleryGames = [
  {
    title: "Space Explorers",
    developer: "Stellar Games",
    tags: ["Space", "Strategy"]
  },
  {
    title: "Medieval Tales",
    developer: "Kingdom Studios",
    tags: ["RPG", "Adventure"]
  },
  {
    title: "Robot Wars",
    developer: "Tech Games",
    tags: ["Action", "Sci-Fi"]
  },
  {
    title: "Ocean Dreams",
    developer: "Deep Blue Games",
    tags: ["Adventure", "Puzzle"]
  }
];

const newsItems = [
  {
    title: "Indie Game Festival 2023 Announced",
    date: "2023-06-15",
    summary: "The biggest indie game celebration returns this fall."
  },
  {
    title: "Rising Stars in Indie Development",
    date: "2023-06-10",
    summary: "Meet the newest talents shaping the future of gaming."
  },
  {
    title: "Funding Opportunities for Indie Developers",
    date: "2023-06-05",
    summary: "New grants and programs to support indie game development."
  }
];

const articles = [
  {
    title: "From Concept to Release: The Making of Pixel Dreams",
    author: "Sarah Chen",
    date: "2023-06-12",
    readTime: "5 min read"
  },
  {
    title: "The Rise of Solo Game Development",
    author: "James Wilson",
    date: "2023-06-08",
    readTime: "8 min read"
  },
  {
    title: "Art Direction in Indie Games",
    author: "Maria Garcia",
    date: "2023-06-03",
    readTime: "6 min read"
  }
];

// Create game cards for featured section
function createFeaturedGameCard(game) {
  return `
    <div class="game-card">
      <div class="game-card-content">
        <h3 class="game-title">${game.title}</h3>
        <p class="game-developer">by ${game.developer}</p>
        <p class="game-description">${game.description}</p>
        <div class="game-tags">
          ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// Create game cards for gallery section
function createGalleryGameCard(game) {
  return `
    <div class="game-card">
      <div class="game-card-content">
        <h3 class="game-title">${game.title}</h3>
        <p class="game-developer">by ${game.developer}</p>
        <div class="game-tags">
          ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// Create news items
function createNewsItem(news) {
  return `
    <div class="news-item">
      <h3>${news.title}</h3>
      <p class="date">${news.date}</p>
      <p>${news.summary}</p>
    </div>
  `;
}

// Create article items
function createArticleItem(article) {
  return `
    <div class="article-item">
      <h3>${article.title}</h3>
      <p class="article-meta">By ${article.author} • ${article.date} • ${article.readTime}</p>
    </div>
  `;
}

// Initialize the page
function initializePage() {
  // Populate featured games
  document.getElementById('featured-games').innerHTML = 
    featuredGames.map(game => createFeaturedGameCard(game)).join('');

  // Populate gallery
  document.getElementById('gallery-games').innerHTML = 
    galleryGames.map(game => createGalleryGameCard(game)).join('');

  // Populate news
  document.getElementById('news-items').innerHTML = 
    newsItems.map(news => createNewsItem(news)).join('');

  // Populate articles
  document.getElementById('article-items').innerHTML = 
    articles.map(article => createArticleItem(article)).join('');

  // Mobile menu functionality
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  
  mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);
