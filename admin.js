function renderProjects () {
    const projects = JSON.parse(localStorage.getItem('project')) || [];
    const tableBody = document.querySelector('#projectTable tbody');
    tableBody.innerHTML = '';
    projects.forEach(project => {
        const row = document.createElement('tr');
        row.innerHTML = `
           <th>${project.name}</th>
           <th>
                <button class="editButton" data-id="${project.id}">Delete</button>
                <button class="editButton" data-id="${project.id}">Update</button>
            </th>
        `;
        tableBody.appendChild(row);
    });     
}

function addProject(name) {
    const project = JSON.parse(localStorage.getItem('project')) || [];
    const newProject = {
        id: date.now(),
        name: name
    };
    project.push(newProject);
    localStorage.setItem('project', JSON.stringify(project));
    renderProjects();
}

document.querySelector('#projectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const projectName = document.querySelector('#projectName').value;
    addProject(ProjectName);
}); 

renderProjects();