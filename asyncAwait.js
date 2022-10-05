// Synchronous vs Asynchronous functions
// Example: fetch request

// Synchronous function
function getApiSync() {
    fetch('https://www.url.com/api')
        .then(response => response.json())
        .then(data => {
              console.log(data)
              console.log('Sync Test')
        })
        
}

// Asynchronous function
async function getApiAsync() {
    const response = await fetch('https://www.url.com/api')
    const data = await response.json()
    console.log(data)
    console.log('Async Test')
}

getApiSync()
getApiAsync()