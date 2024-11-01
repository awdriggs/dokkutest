console.log("frontend working bro");

//form data
let newComment = {

};

//push to the servre
let submitButton = document.querySelector('#push');
submitButton.addEventListener('click', ()=> {

  //add type to data
  newComment.name = document.querySelector('#name').value;
  newComment.text = document.querySelector('#msg').value;

  console.log(newComment);

  //push to sever
  //clear form inputs
  document.querySelector('#name').innerHTML = '';
  document.querySelector('#msg').innerHTML = '';

  postData('/api/comments', newComment)
    .then(responseData => {
      console.log('Response from server:', responseData);
      //render a new location
      let d = responseData.comment 

      let wrapper = document.querySelector("#comments");
      let p = document.createElement("p");
      p.innerHTML = d.name + " says " + d.text;
      wrapper.append(p);

      //clear newSighting data
      newComment = {
      };    //clear
    })
    .catch(error => {
      console.error('Error:', error);
    });
})

//async api function
async function getAllComments(url) {
  try {
    const response = await fetch(url); // Await the API response

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Await and parse the response as JSON
    return data; // Return the data
  } catch (error) {
    console.error('Error fetching data:', error); // Handle any errors
  }
}
//push new location to mongodb
async function postData(url = '', data = {}) {
  try {
    // Send a POST request to the specified URL with the provided data
    const response = await fetch(url, {
      method: 'POST', // Specifies the HTTP method
      headers: {
        'Content-Type': 'application/json' // The content type is set to JSON
      },
      body: JSON.stringify(data) // Convert JavaScript object to a JSON string
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse and return the response JSON data
    const result = await response.json();
    return result;

  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}

// fetch all comments
const apiUrl = 'api/comments';

getAllComments(apiUrl).then(data => {
  console.log(data); // Log the data to the console
  let wrapper =document.querySelector("#comments");
  for(let d of data){
    let p = document.createElement("p");
    p.innerHTML = d.name + " says " + d.text;
    wrapper.append(p);
  }
});

