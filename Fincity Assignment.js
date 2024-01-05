function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

function addProject() {
    // Get project details from the user input using a form
    const projectNameInput = document.getElementById('projectName');
    const projectDescriptionInput = document.getElementById('projectDescription');

    const projectName = projectNameInput.value;
    const projectDescription = projectDescriptionInput.value;

    // Validate that both project name and description are provided
    if (!projectName || !projectDescription) {
        alert('Please enter both project name and description.');
        return;
    }

    // Create a new project element
    const projectElement = document.createElement('div');
    projectElement.classList.add('project-item'); // Optional: Apply a class for styling

    projectElement.innerHTML = `
        <h3>${projectName}</h3>
        <p>${projectDescription}</p>
    `;

    // Append the project element to the projects-view section
    document.getElementById('projects-view').appendChild(projectElement);

    // Clear the form fields after adding the project
    projectNameInput.value = '';
    projectDescriptionInput.value = '';
}