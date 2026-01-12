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
console.log("Fetching user data...");
fetchUserData(1)
  .then(user => {
    console.log("User data:", user);
    return user.id;
  })
  .then(id => {
    console.log("User ID:", id);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });

// Async/Await
async function getUserData(userId) {
  try {
    const user = await fetchUserData(userId);
    console.log("User data (async/await):", user);
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
    console.log("All users:", users);
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
  console.log("Fastest:", fastest);
}

// Example usage
getUserData(5);
