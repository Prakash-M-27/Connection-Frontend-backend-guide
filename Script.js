const apiURL = 'http://localhost:3000';

// Load mentors
async function loadMentors() {
    const response = await fetch(`${apiURL}/mentors`);
    const mentors = await response.json();

    const mentorList = document.getElementById('mentorList');
    mentorList.innerHTML = '';

    mentors.forEach((mentor) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${mentor.name}</strong><br>
            Expertise: ${mentor.expertise}<br>
            Email: ${mentor.email}
        `;

        mentorList.appendChild(li);
    });
}

// Add mentor
async function addMentor() {
    const name = document.getElementById('name').value;
    const expertise = document.getElementById('expertise').value;
    const email = document.getElementById('email').value;

    await fetch(`${apiURL}/addMentor`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, expertise, email })
    });

    alert('Mentor Added Successfully');

    loadMentors();
}

loadMentors();
