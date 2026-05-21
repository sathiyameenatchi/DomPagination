const data = [];

for(let i = 1; i <= 100; i++) {
    data.push({
        id: i,
        name: `Name ${i}`,
        email: `user${i}@gmail.com`
    });
}

const rowsPerPage = 10;
let currentPage = 1;

function displayData(page){

    const tableContainer = document.getElementById("table-container");

    tableContainer.innerHTML = "";

    const table = document.createElement("table");

    table.setAttribute("class","table");

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
    `;

    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    const pageData = data.slice(start, end);

    pageData.forEach((item) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
        `;

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    tableContainer.appendChild(table);
}

function setupPagination(){

    const pagination = document.getElementById("pagination");

    pagination.innerHTML = "";

    const totalPages = Math.ceil(data.length / rowsPerPage);

    for(let i = 1; i <= totalPages; i++){

        const button = document.createElement("button");

        button.innerText = i;

        button.addEventListener("click", () => {
            currentPage = i;
            displayData(currentPage);
        });

        pagination.appendChild(button);
    }
}

displayData(currentPage);
setupPagination();