// JavaScript Intermediate - Promises and Async/Await
// Practice asynchronous JavaScript patterns

// Basic Promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "User " + userId });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 1000);
  });
}

// Using Promise with .then()
console.log("Fetching user data..."); // OUTPUT: Fetching user data...
fetchUserData(1)
  .then(user => {
    console.log("User data:", user); // OUTPUT: User data: { id: 1, name: 'User 1' }
    return user.id;
  })
  .then(id => {
    console.log("User ID:", id); // OUTPUT: User ID: 1
  })
  .catch(error => {
    console.error("Error:", error.message);
  });

// Async/Await
async function getUserData(userId) {
  try {
    const user = await fetchUserData(userId);
    console.log("User data (async/await):", user); // OUTPUT: User data (async/await): { id: 5, name: 'User 5' }
    return user;
  } catch (error) {
    console.error("Error (async/await):", error.message);
  }
}

// Multiple promises in parallel
async function fetchMultipleUsers() {
  try {
    const users = await Promise.all([
      fetchUserData(1),
      fetchUserData(2),
      fetchUserData(3)
    ]);
    console.log("All users:", users); // OUTPUT: All users: [ { id: 1, ... }, { id: 2, ... }, { id: 3, ... } ]
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
}

// Promise.race - first to complete
async function raceExample() {
  const fastest = await Promise.race([
    fetchUserData(1),
    fetchUserData(2),
    fetchUserData(3)
  ]);
  console.log("Fastest:", fastest); // OUTPUT: Fastest: { id: 1, name: 'User 1' }
}

// Example usage
getUserData(5);

/* OUTPUT:
Fetching user data...
User data: { id: 1, name: 'User 1' }
User ID: 1
User data (async/await): { id: 5, name: 'User 5' }
All users: [ { id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }, { id: 3, name: 'User 3' } ]
Fastest: { id: 1, name: 'User 1' }
*/

```
