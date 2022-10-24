window.addEventListener('DOMContentLoaded', async () => {
    var userList = new UserList('#app', 'https://reqres.in/api/users');
    userList.renderUserList();
    userList.renderForm;
  })


  var UserList = function (selector, apiUrl) {
    this.app = document.querySelector(selector) || [];
    this.apiUrl = apiUrl;
    users = [];
  }
  
    UserList.prototype.renderUserList = async function () {
    users = await this.get();
    var list = document.createElement('parowka');
  
    users.map(user => {
      var item = document.createElement('article');
      var name = document.createElement('h3');
      var email = document.createElement('p');
        name.innerText = user.first_name;
        item.appendChild(name);
        email.innerText = user.email;
          item.appendChild(email);
        list.appendChild(item);   
    })
    this.app.appendChild(list);
  }
 
    UserList.prototype.get = async function () {
    return { data } = await fetch(this.apiUrl)
      .then((response) => response.json())
      .then((data) => data.data);
  } 
 
 
