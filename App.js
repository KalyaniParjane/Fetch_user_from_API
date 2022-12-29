let box = document.getElementById("users");

let API = async () => {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let file = await response.json();
  let info = file.data
    .map((element) => {
      return `
      <div class="user">
        <div class="user-img">
        </div>
        <div class="user1-img">
            <img src="${element.avatar}" alt="">
        </div>
        <div class="user-info">
            <h3>${element.first_name} ${element.last_name}</h3>
            <h3>${element.email}</h3>
            <h2>User ID: ${element.id}</h2>
        </div>
    </div>`;
    })
    .join("");
  users.innerHTML = info;
};

let Btn = document.getElementById("user-btn");
Btn.addEventListener("click", () => {
  users.innerHTML = `<h1>Scanning Users Data ........</h1>`;
  setTimeout(() => {
    API();
  }, 2000);
});