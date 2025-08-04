function event_listener(){
    document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const uniqueId = crypto.randomUUID();
  const data = {
    id: uniqueId,
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    address: document.getElementById("address").value.trim()
  };

  localStorage.setItem("contactData", JSON.stringify(data));
 
  window.location.href = "post_submit.html"

});

}

function displayContactData() {
  const userData = JSON.parse(localStorage.getItem("contactData"));
  const displayDiv = document.getElementById("userData");

  if (!displayDiv) return;

  if (userData && typeof userData === "object") {
    let output = "";
    for (let key in userData) {
      if (userData.hasOwnProperty(key)) {
        const label = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize
        output += `<p><strong>${label}:</strong> ${userData[key]}</p>`;
      }
    }
    displayDiv.innerHTML = output;
  } else {
    displayDiv.innerHTML = `<p>No user data found.</p>`;
  }
}