let apps=[]

fetch("./apps.json")
.then(res=>res.json())
.then(data=>{

apps=data.apps
render(apps)

})

function render(list){

let container=document.getElementById("apps")

container.innerHTML=""

list.forEach(app=>{

container.innerHTML+=`

<div class="card">

<h2>${app.name}</h2>

<p>${app.price}</p>

<a href="${app.url}">
<button>Open</button>
</a>

</div>

`

})

           }
