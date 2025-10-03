async function fetchUserData() {
    // Define API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch the data and parse JSON
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create and populate the user list
        const userList = document.createElement('ul');
        users.forEach(function(user) {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append list to container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Error handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Invoke when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
});
