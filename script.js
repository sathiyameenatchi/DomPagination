
// Create title
const title = document.createElement("h1");
title.id = "title";
title.innerText = "DOM Pagination";
document.body.appendChild(title);

// Create description
const description = document.createElement("p");
description.id = "description";
description.innerText = "Pagination using DOM Manipulation";
document.body.appendChild(description);

// Create data container
const dataContainer = document.createElement("div");
dataContainer.id = "data-container";
document.body.appendChild(dataContainer);

// Create pagination container
const pagination = document.createElement("div");
pagination.id = "pagination";
document.body.appendChild(pagination);

// Create sample data (1 to 100)
const data = [];

for (let i = 1; i <= 100; i++) {
    data.push({
        id: i,
        name: `User ${i}`,
        email: `user${i}@gmail.com`
    });
}

// Function to display data
function displayData(page) {
    dataContainer.innerHTML = "";

    const itemsPerPage = 10;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const pageData = data.slice(start, end);

    pageData.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>ID: ${item.id}</p>
            <p>Email: ${item.email}</p>
        `;

        dataContainer.appendChild(card);
    });

    // Active button highlight
    const buttons = document.querySelectorAll("#pagination button");
    buttons.forEach(btn => btn.classList.remove("active"));
    buttons[page - 1].classList.add("active");
}

// Create pagination buttons
for (let i = 1; i <= 10; i++) {
    const button = document.createElement("button");
    button.innerText = i;

    button.addEventListener("click", () => {
        displayData(i);
    });

    pagination.appendChild(button);
}

// Load first page by default
displayData(1);