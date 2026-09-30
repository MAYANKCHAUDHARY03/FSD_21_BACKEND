const form = document.getElementById('requestForm');
const requestsList = document.getElementById('requestsList');
const reqIdInput = document.getElementById('reqId');
const clearBtn = document.getElementById('clearBtn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const requestData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        category: document.getElementById('category').value,
        description: document.getElementById('description').value,
        priority: document.getElementById('priority').value
    };

    const id = reqIdInput.value;
    
    if (id) {
        await fetch(`/api/requests/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });
    } else {
        await fetch('/api/requests', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });
    }
    
    form.reset();
    reqIdInput.value = '';
    loadRequests();
});

clearBtn.addEventListener('click', () => {
    form.reset();
    reqIdInput.value = '';
});

async function loadRequests() {
    const res = await fetch('/api/requests');
    const data = await res.json();
    
    requestsList.innerHTML = '';
    data.forEach(req => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>Name: ${req.name}</p>
            <p>Email: ${req.email}</p>
            <p>Category: ${req.category}</p>
            <p>Description: ${req.description}</p>
            <p>Priority: ${req.priority}</p>
            <button onclick="editRequest('${req.id}')">Edit</button>
            <button onclick="deleteRequest('${req.id}')">Delete</button>
            <hr>
        `;
        requestsList.appendChild(div);
    });
}

async function editRequest(id) {
    const res = await fetch(`/api/requests/${id}`);
    const req = await res.json();
    
    reqIdInput.value = req.id;
    document.getElementById('name').value = req.name;
    document.getElementById('email').value = req.email;
    document.getElementById('category').value = req.category;
    document.getElementById('description').value = req.description;
    document.getElementById('priority').value = req.priority;
}

async function deleteRequest(id) {
    await fetch(`/api/requests/${id}`, { method: 'DELETE' });
    loadRequests();
}

loadRequests();
