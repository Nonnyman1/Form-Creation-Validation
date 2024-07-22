document.addEventListener('DOMContentLoaded', async function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    async function fetchUserData() {
        try {
            const response = await fetch(apiUrl);
            const users = await response.json();

            dataContainer.innerHTML = ''; // Clear the loading message

            const userList = document.createElement('ul');

            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);
        } catch (error) {
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    fetchUserData();
});
