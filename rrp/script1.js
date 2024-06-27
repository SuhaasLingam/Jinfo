// Sample data for notices (replace with actual data from backend)
const notices = [
    { title: 'Notice 1', content: 'This is the first notice.' },
    { title: 'Notice 2', content: 'This is the second notice.' },
    { title: 'Notice 3', content: 'This is the third notice.' }
];

// Function to display notices on the webpage
function displayNotices() {
    const noticesSection = document.getElementById('notices');
    noticesSection.innerHTML = '';

    notices.forEach(notice => {
        const noticeElement = document.createElement('article');
        noticeElement.innerHTML = `
            <h2>${notice.title}</h2>
            <p>${notice.content}</p>
        `;
        noticesSection.appendChild(noticeElement);
    });
}

// Call displayNotices function when the webpage loads
window.onload = displayNotices;
