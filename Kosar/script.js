var cipo01=30000;
var cipo02=40000;
var cipo03=30000;

function kosarba(termek){
    db=Number(prompt('Hány darabot akarsz?'))
    localStorage,setItem(termek,db)
}
function torles(){
    localStorage
}
function kosar(){
var lista= " "
var termek = localStorage.key()
lista += "<tr><th>Név</th><th>Darab</th><th>Ár</th></tr>"
lista += "<tr><td>cipo01</td><td>2 db</td><td>10000"ft"<td></td>"
lista += "<tr><td>cipo02</td><td>2 db</td><td>10000"ft"<td></td>"
lista += "<tr><td>cipo03</td><td>2 db</td><td>10000"ft"<td></td>"



document.getElementById('table').innerHTML = lista
}
