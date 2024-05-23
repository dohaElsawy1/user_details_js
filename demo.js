async function execute() {
    try {
      var response = await fetch("https://jsonplaceholder.typicode.com/users");
      var data = await response.json();
      var buttonsContainer = document.querySelector(".btn");
      var userDetailsContainer = document.getElementById("user-details");
  
      function displayUserDetails(user) {
        return function() {
          userDetailsContainer.innerHTML = '<div class="user-details-content">' +
          '<h2 id="user">User Details</h2>' +
          '<p class="user-name"><strong>Name:</strong> ' + user.name + '</p>' +
          '<p class="user-username"><strong>Username:</strong> ' + user.username + '</p>' +
          '<p class="user-email"><strong>Email:</strong> ' + user.email + '</p>' +
          '<p class="user-address"><strong>Address:</strong> ' + user.address.street + ', ' + user.address.city + ', ' + user.address.zipcode + '</p>' +
          '<p class="user-phone"><strong>Phone:</strong> ' + user.phone + '</p>' +
          '</div>';
        };
      }

      for (var i = 0; i < data.length; i++) {
        var button = document.createElement("button");
        button.textContent = data[i].name;
        button.addEventListener("click", displayUserDetails(data[i]));
        buttonsContainer.appendChild(button);
      }
    } catch (error) {
      console.log(error);
    }
  }
execute();