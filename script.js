// Functions
function projectToHtml({ name, slug, tags, description }) {
  const tagsHtml = tags
    .map(tag => `<li class="tag tag-${tag}">${tag.toUpperCase()}</li>`)
    .join('');

  return `<li class="projects-list__item">
      <a class="projects-list__link" href="./${slug}">
        <div class="projects-list__item-contents">
          <div class="projects-list__image-container">
            <img
              class="projects-list__image"
              src="./${slug}/design/desktop-preview.jpg"
              alt="${name}"
              width="900"
              height="660"
            />
            <ul class="projects-list__tags">${tagsHtml}</ul>
          </div>
          <div class="projects-list__info">
            <h3>${name}</h3>
            <p class="projects-list__description">${description}</p>
          </div>
        </div>
      </a>
    </li>`;
}

// Variables
const projects = [
  {
    name: 'Order-summary-component',
    slug: 'order-summary-component',
    tags: ['html', 'css'],
    description:
      "Build a detailed Order Summary card that closely matches the provided design. Focus on layout and design precision.",
  },
  {
    name: 'Social-links-profile',
    slug: 'social-links-profile',
    tags: ['html', 'css'],
    description:
      'Create a Social Links Profile card that replicates the design given. Emphasize accurate styling and layout techniques.',
  },
  {
    name: 'FAQ accordion',
    slug: 'fAQ accordion',
    tags: ['html', 'css'],
    description:
      'Develop an interactive FAQ accordion component based on the design specs. Ensure smooth transitions and responsive design.',
  },
  {
    name: 'Base Apparel coming soon page',
    slug: 'base-apparel-coming-soon',
    tags: ['html', 'css', 'js'],
    description:
      "Construct a Coming Soon page for Base Apparel. Pay attention to CSS details and implement basic form validation for the email input.",
  },

];
const projectsList = document.querySelector('.js-projects-list');
const projectsHtml = projects.reverse().map(projectToHtml).join('');

// Init
projectsList.innerHTML = projectsHtml;