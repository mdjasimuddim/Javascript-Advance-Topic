console.clear();
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id:1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
.then((res) => {
    if(!res.ok){
        const message =  `Error:${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res) => console.log(res))
.catch((err) => console.log(err));