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
    slug: '01.Order-summary-component',
    tags: ['html', 'css'],
    description:
      "Build a detailed Order Summary card that closely matches the provided design. Focus on layout and design precision.",
  },
  {
    name: 'Social-links-profile',
    slug: '02.Social-links-profile',
    tags: ['html', 'css'],
    description:
      'Create a Social Links Profile card that replicates the design given. Emphasize accurate styling and layout techniques.',
  },
  {
    name: 'FAQ accordion',
    slug: '03.FAQ-accordion',
    tags: ['html', 'css'],
    description:
      'Develop an interactive FAQ accordion component based on the design specs. Ensure smooth transitions and responsive design.',
  },
  {
    name: 'Base Apparel coming soon page',
    slug: '04.Base-apparel-coming-soon',
    tags: ['html', 'css', 'js'],
    description:
      "Construct a Coming Soon page for Base Apparel. Pay attention to CSS details and implement basic form validation for the email input.",
  },
  {
    name: 'Advice generator app',
    slug: '05.Advice-generator-app',
    tags: ['html', 'css', 'js'],
    description: 
      "Build an interactive Advice Generator app using an API to fetch and display random advice. Focus on styling with CSS and ensure a responsive design and smooth user experience with JavaScript."
  }

];
const projectsList = document.querySelector('.js-projects-list');
const projectsHtml = projects.reverse().map(projectToHtml).join('');

// Init
projectsList.innerHTML = projectsHtml;
