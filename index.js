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
    fetch('http://localhost:3000/users', configurationObject)
    .then(resp => resp.json())
    .then(data => {
        let id = data["id"]
        const body = document.querySelector('body')
        body.innerHTML = id;
    })
    
    .catch(function(error) {
      alert('Unauthorized Access');
      console.log(error.message);
    }); 
}
 submitData("etamar", "gadshgdfv")

