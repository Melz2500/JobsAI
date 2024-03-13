document.addEventListener('DOMContentLoaded', function () {
    const jobCardsContainer = document.getElementById('jobCardsContainer');
    const applicationId = '13343a75';
    const applicationKey = '9b30233edb751d90faee9e6ee349700b';
    const country = 'za';
  
  const apiUrl = `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=${applicationId}&app_key=${applicationKey}&results_per_page=100000000000&content-type=application/json`;
  
    function createJobCard(job) {
        const card = document.createElement('div');
        card.classList.add('cards');
  
        const container = document.createElement('div');
        container.classList.add('container');
  
        function createHeading(type, text) {
            const heading = document.createElement(type);
            heading.textContent = text;
            return heading;
        }
        
  
        const title = createHeading('h1', job.title);
  
        const icons = document.createElement('div');
        icons.classList.add('icons');
  
        const ul = document.createElement('ul');
        icons.appendChild(ul);
  
        const description = document.createElement('div');
        description.classList.add('description');
      description.innerHTML = `<p>${job.description}</p>`;
  
        const salary = createHeading('p', job.salary);
        const location = createHeading('p', job.location);
        const company = createHeading('p', job.company);
      const createdAt = createHeading('p', `Created At: ${job.created}`);


      // Create a clickable link with the dynamically generated URL
    const redirectUrl = document.createElement('a');
    const searchQuery = encodeURIComponent(job.title);
    redirectUrl.href = `https://www.adzuna.co.za/search?q=${searchQuery}`;
    redirectUrl.textContent = 'Learn More About This Job Post';
    redirectUrl.target = "_blank"; // Open link in a new tab

  
        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
  
        function createButton(text) {
            const button = document.createElement('button');
            button.textContent = text;
            return button;
        }
  
        buttons.appendChild(createButton('Ask for resume'));
        buttons.appendChild(createButton('Get Advice'));
        buttons.appendChild(createButton('Ask for Cover letter'));
  
        container.appendChild(title);
        container.appendChild(icons);
        //container.appendChild(description);
        container.appendChild(salary);
        container.appendChild(location);
        container.appendChild(company);
     
      container.appendChild(createdAt);
      container.appendChild(redirectUrl);
      container.appendChild(createHeading('h2', 'Description'));
      
    container.appendChild(createHeading('p', job.description)); 
    container.appendChild(redirectUrl);
    

      container.appendChild(buttons);
        card.appendChild(container);
  
        jobCardsContainer.appendChild(card);
    }
    
    
  
    
   function performSearch(query) {
        // Function to perform search
        const searchUrl = `${apiUrl}&what=${query}`;
        fetch(searchUrl)
            .then(response => response.json())
            .then(data => {
                const jobData = data.results || [];
                jobCardsContainer.innerHTML = ''; // Clear existing job cards
                jobData.forEach(job => {
                    createJobCard(job);
                });
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
    }

    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        const searchInput = searchForm.querySelector('input[name="search"]');
        const query = searchInput.value.trim();
        if (query !== '') {
            performSearch(query);
        }
    });
  
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const jobData = data.results || [];
            console.log('API Response:', data);
  
            //Generate cards for each job post
          jobData.forEach((job) => {
              console.log('Job Data:', job);
              createJobCard({
                  title: job.title,
                  posted: 'Posted: ' + job.created,
                  deadline: 'Deadline: ' + job.contract_time,
                  description: job.description,
                  salary: `Salary: ${job.salary_min} - ${job.salary_max}`,
                  location: `Location: ${job.location.display_name}`,
                  company: `Company: ${job.company.display_name}`,
                  // Add more details as needed
                  category: `Category: ${job.category.label}`,
                  contractType: `Contract Type: ${job.contract_type}`,
                  createdAt: `Created At: ${job.created}`,
                  redirectUrl: `Redirect URL: ${job.redirect_url}`
              });
          });
        })
  
       .catch(error => {
            console.error('Error:', error.message);
        });
        });

        // toggle button
  
  document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.getElementById("sidebarToggle");
    const navbar = document.getElementById("navbar");
  
    sidebarToggle.addEventListener("click", function () {
        // Toggle the visibility of the navbar
        navbar.style.display = navbar.style.display === "none" ? "block" : "none";
    });
  });