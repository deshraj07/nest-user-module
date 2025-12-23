const http = require('http');

http.get('http://localhost:5005/users/suspended/all', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log('SUSPENDED USERS:');
    console.log(data);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

http.get('http://localhost:5005/users/banned/all', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log('BANNED USERS:');
    console.log(data);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
