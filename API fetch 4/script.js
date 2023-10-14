var data = fetch("https://jsonplaceholder.typicode.com/users")
data.then((data1) => data1.json().then((data2) => foo(data2)));

var container = document.createElement("div");
container.className = "container"
var row = document.createElement("div");
row.className = "row"

container.append(row);


function foo(data2) {
    

    for (var i = 0; i < data2.length; i++) {

        row.innerHTML += `
        <div class="col-md-3">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Name : ${data2[i].username}</div>
    <div class="card-body text-primary">
    <p class="card-text">Email : ${data2[i].email}</p>
      <p class="card-text">Street : ${data2[i].address.street}</p>
      <p class="card-text">City : ${data2[i].address.city}</p>
    </div>
    </div>`
    }
    document.body.append(container)
}