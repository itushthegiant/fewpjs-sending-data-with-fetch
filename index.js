// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
      };
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
     return fetch('http://localhost:3000/users', configurationObject)
    .then(resp => resp.json())
    .then(data => {
      document.body.innerHTML = data["id"]
    })
    
    .catch(function(error) {
      alert('Unauthorized Access');
      console.log(error.message);
      document.body.innerHTML = error.message;
    }); 
}
