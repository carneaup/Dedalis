// bibliographie.js - Component to render the bibliography section

export function renderBibliographie() {
  return `
    <section id="bibliographie" class="section">
      <div class="container">
        <h2>Bibliographie</h2>
        
        <!-- Thesis Section -->
        <div class="bibliographie-section">
          <h3>Thèse</h3>
          <div id="these-container" class="publication-list"></div>
        </div>
        
        <!-- Articles Section -->
        <div class="bibliographie-section">
          <h3>Articles Scientifiques</h3>
          <div id="articles-container" class="publication-list"></div>
        </div>
        
        <!-- Projects Section -->
        <div class="bibliographie-section">
          <h3>Projets & Références</h3>
          <div id="projets-container" class="publication-list"></div>
        </div>
      </div>
    </section>
    
    <style>
      #bibliographie {
        padding: 80px 0;
        background-color: #f8f9fa;
      }
      
      #bibliographie h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 50px;
        color: #2c3e50;
      }
      
      .bibliographie-section {
        margin-bottom: 40px;
      }
      
      .bibliographie-section h3 {
        font-size: 1.8rem;
        margin-bottom: 25px;
        color: #34495e;
        border-bottom: 2px solid #3498db;
        padding-bottom: 10px;
      }
      
      .publication-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      
      .publication-item {
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .publication-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 20px rgba(0,0,0,0.15);
      }
      
      .publication-item h4 {
        margin: 0 0 10px 0;
        font-size: 1.3rem;
        color: #2c3e50;
      }
      
      .publication-item .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 10px;
        font-size: 0.95rem;
        color: #7f8c8d;
      }
      
      .publication-item .meta span {
        display: flex;
        align-items: center;
        gap: 5px;
      }
      
      .publication-item .meta span::before {
        content: ";";
        color: #3498db;
      }
      
      .publication-item .meta span:first-child::before {
        content: "";
      }
      
      .publication-item .resume {
        margin-top: 15px;
        line-height: 1.6;
        color: #34495e;
      }
      
      .publication-item .links {
        margin-top: 15px;
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
      }
      
      .publication-item .links a {
        color: #3498db;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
      }
      
      .publication-item .links a:hover {
        color: #2980b9;
        text-decoration: underline;
      }
      
      .publication-item .coauteurs {
        font-size: 0.9rem;
        color: #95a5a6;
        font-style: italic;
      }
    </style>
  `;
}

export function loadBibliographieData() {
  return fetch('/data/bibliographie.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load bibliography data');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error loading bibliography:', error);
      return {
        these: [],
        articles: [],
        projets: []
      };
    });
}

export function renderBibliographieItems(data) {
  // Render Thesis
  const theseContainer = document.getElementById('these-container');
  if (theseContainer && data.these && data.these.length > 0) {
    theseContainer.innerHTML = data.these.map(these => `
      <div class="publication-item">
        <h4>${these.titre}</h4>
        <div class="meta">
          <span>${these.annee}</span>
          ${these.etablissement ? `<span>${these.etablissement}</span>` : ''}
        </div>
        ${these.resume ? `<p class="resume">${these.resume}</p>` : ''}
        ${these.lien ? `<div class="links"><a href="${these.lien}" target="_blank">View Thesis</a></div>` : ''}
      </div>
    `).join('');
  }
  
  // Render Articles
  const articlesContainer = document.getElementById('articles-container');
  if (articlesContainer && data.articles && data.articles.length > 0) {
    // Sort by year (newest first)
    const sortedArticles = [...data.articles].sort((a, b) => 
      parseInt(b.annee) - parseInt(a.annee)
    );
    
    articlesContainer.innerHTML = sortedArticles.map(article => `
      <div class="publication-item">
        <h4>${article.titre}</h4>
        <div class="meta">
          <span>${article.annee}</span>
          ${article.revue ? `<span>${article.revue}</span>` : ''}
        </div>
        ${article.coauteurs && article.coauteurs.length > 0 ? 
          `<p class="coauteurs">Co-authors: ${article.coauteurs.join(', ')}</p>` : ''}
        ${article.resume ? `<p class="resume">${article.resume}</p>` : ''}
        ${article.liens && article.liens.length > 0 ? `
          <div class="links">
            ${article.liens.map(link => `
              <a href="${link}" target="_blank">
                ${link.includes('doi.org') ? 'DOI' : 
                 link.includes('researchgate') ? 'ResearchGate' : 
                 link.includes('wikipedia') ? 'Wikipedia' : 'Link'}
              </a>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `).join('');
  }
  
  // Render Projects
  const projetsContainer = document.getElementById('projets-container');
  if (projetsContainer && data.projets && data.projets.length > 0) {
    projetsContainer.innerHTML = data.projets.map(projet => `
      <div class="publication-item">
        <h4>${projet.titre}</h4>
        <div class="meta">
          <span>${projet.annee}</span>
        </div>
        ${projet.description ? `<p class="resume">${projet.description}</p>` : ''}
        ${projet.lien ? `<div class="links"><a href="${projet.lien}" target="_blank">View Project</a></div>` : ''}
      </div>
    `).join('');
  }
}

// Initialize bibliography on DOM load
export function initBibliographie() {
  loadBibliographieData().then(data => {
    renderBibliographieItems(data);
  });
}