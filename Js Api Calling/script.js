// console.clear();

//event - onload(), onerror()
//property 
//function


// const makeRequest = (method, url, data) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);

//     xhr.setRequestHeader('Content-Type', 'application/json');

//     xhr.onload  = () => {
//         let data = xhr.response;
//         console.log(JSON.parse(data));
//     }
//     xhr.onerror = () => {
//         console.log('Error is here');
//     }
//     xhr.send(JSON.stringify(data));
// }

// const getData = () => {
//     makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
// }
// const sendData = () => {
//     makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     });
// }
// const updateData = () => {
//     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
//         id:1,
//         title: 'fooss',
//         body: 'barMa',
//         userId: 1,
//     });
// }

// const updateSingleData = () => {
//     makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
//         title: 'I have changed title from id 1',
//     });
// }

// const deleteData = () => {
//     makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
// }

// deleteData();

// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery 

//fetch() has replaced XMLHttpRequest
//fetch() - global method for making HTTP Request
// 2 ways to call - then, async await

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser

// console.clear();
// console.log(window);

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// })
// .then((response) => {
//     if(!response.ok){
//         const message = `Status:${response.status}`;
//         throw new Error(message)
//     }
//     return response.json()
//   })
//   .then((json) => console.log(json))
//   .catch(err => console.log(err));


//async and await
// const makeRequest = async(url, config) => {
//     const res = await fetch(url, config);
//     if(!res.ok){
//         const message = `Error:${res.status}`
//         throw new Error(message)
//     }
//     const data = await res.json();
//     return data;
// }

// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// }

// const sendData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// }
// const updateData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
//         method: 'DELETE',
//         })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// }

// updateData();


//axios is a js library
//it helps to make request from browser  (plain js/ vue / vanilla/ React / Angular), node.js
// very easy to use
// it supports all modern browser including IE
// it returns promise
// throws error briliantly
// No need to set header cause axios is intelligent

// console.log(window);

// axios.post('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     })
//   })
// .then((res) => console.log(res.data))


// axios.put('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'POST',
//     body: JSON.stringify({
//         id:1,
//       title: 'fooma',
//       body: 'barma',
//       userId: 1,
//     })
//   })
// .then((res) => console.log(res.data))


// axios.patch('https://jsonplaceholder.typicode.com/posts/1',{
//     body: JSON.stringify({
//       title: 'foommmmaaaa',
//     })
//   })
// .then((res) => console.log(res.data))

// axios.delete('https://jsonplaceholder.typicode.com/posts/1')
// .then((res) => console.log(res.data))


// const makeRequest = (config) => {
//     return axios(config);
// }

// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
// };

// getData();


// add jquery library cdn
//ajax - asynchronous javascript and xml

const makeRequest = async(url, method, data) => {
    try{
        const result = await $.ajax({
            url:url,
            method:method,
            data : data,
        });
        return result;
    } catch(err){
        console.log(err);
    }
}
//getting a resource
// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts", "GET")
//     .then((res) => console.log(res))
// }


// creating a source 

// const createData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts", "POST",{
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       })
//       .then((res) => console.log(res))
// }


// const upDateData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT",{
//         title: 'foossssssas',
//       })
//       .then((res) => console.log(res))
// }

const deleteData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE")
      .then((res) => console.log(res))
}

deleteData();