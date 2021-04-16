// Add your code here
function submitData(name, email) {
    fetch('http://localhost:3000/users', configurationObject)
    .then(resp => resp.json())
    .then(data => console.log(data))
}



let formData = {
    name: "Steve",
    email: "steve@steve.com"
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };