var getCartValue = [];
getCartValue = JSON.parse(localStorage.getItem('add-cart'));

var table = document.getElementById('tablecart');
var properties = ['id', 'name', 'quantily', 'price', 'subtotal', 'btndel'];

function displayTable() {
  for (var i = 0; i < getCartValue.length; i++) {
    var product = getCartValue[i];
    var tr = document.createElement('tr');
    var id = document.createElement('td');
    var name = document.createElement('td');
    var quantily = document.createElement('td');
    var price = document.createElement('td');
    var subtotal = document.createElement('td');
    var btnadd = document.createElement('div');

    id.innerHTML = i + 1;
    name.innerHTML = product[properties[1]];
    quantily.innerHTML = ('<input type="text" value="1">');
    price.innerHTML = product[properties[3]];
    subtotal.innerHTML = ('<p></p>');
    btnadd.innerHTML = ('<button id="' + product[properties[0]] + '" onclick="deleteCart(' + i + ')">X</button>');

    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(quantily);
    tr.appendChild(price);
    tr.appendChild(subtotal);
    tr.appendChild(btnadd);

    table.appendChild(tr);
  }
}
displayTable();
//var total_price = '<tr><td colspan = "3"></td> <td> Total </td> <td class = "total-price">' + sum + ' </td><td></td></tr>';
//document.getElementById("tablecart").innerHTML += total_price;
function deleteCart(x) {
  getCartValue.splice(x, 1);
  localStorage.setItem('add-cart', JSON.stringify(getCartValue));
  location.reload();
}
