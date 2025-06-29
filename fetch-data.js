 // Step 1: Initialize the async function
async function fetchUserData() {

    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');
  
    // Step 4: Fetch data using try-catch
    try {
      const response = await fetch(apiUrl); // Asynchronous fetch
      const users = await response.json();  // Parse JSON
  
      // Step 5: Clear the loading message
      dataContainer.innerHTML = '';
  
      // Step 6: Create and append the user list
      const userList = document.createElement('ul');
  
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
  
      dataContainer.appendChild(userList);
  
    } catch (error) {
      // Step 7: Error handling
      dataContainer.innerHTML = '';
      dataContainer.textContent = 'Failed to load user data.';
      console.error('Fetch error:', error);
    }
  }
  
  // Step 8: Invoke fetchUserData on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', fetchUserData);
  