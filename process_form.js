document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Send the form data to the server
    fetch("/", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        console.log(result); // Log the server's response
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
