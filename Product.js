var products = [{
  id: '1',
  name: '<p>Sp1</p>',
  describe: '<p>Mo ta san pham 1</p>',
  img: '<img src="images/1.png" alt="">',
  price: '<p>100000</p>',
  btnadd: '<button type="">Add to Cart</button>'
},
{
  id: '2',
  name: '<p>Sp2</p>',
  describe: '<p>Mo ta san pham 2</p>',
  img: '<img src="images/2.png" alt="">',
  price: '<p>200000</p>',
  btnadd: '<button type="">Add to Cart</button>'
},
{
  id: '3',
  name: '<p>Sp3</p>',
  describe: '<p>Mo ta san pham 3</p>',
  img: '<img src="images/3.png" alt="">',
  price: '<p>300000</p>',
  btnadd: '<button type="">Add to Cart</button>'
},
{
  id: '4',
  name: '<p>Sp4</p>',
  describe: '<p>Mo ta san pham 4</p>',
  img: '<img src="images/4.png" alt="">',
  price: '<p>400000</p>',
  btnadd: '<button type="">Add to Cart</button>'
},
{
  id: '5',
  name: '<p>Sp5</p>',
  describe: '<p>Mo ta san pham 5</p>',
  img: '<img src="images/5.png" alt="">',
  price: '<p>500000</p>',
  btnadd: '<button type="">Add to Cart</button>'
},
{
  id: '6',
  name: '<p>Sp6</p>',
  describe: '<p>Mo ta san pham 6</p>',
  img: '<img src="images/6.png" alt="">',
  price: '<p>600000</p>',
  btnadd: '<button type="">Add to Cart</button>'
},
{
  id: '7',
  name: '<p>Sp7</p>',
  describe: '<p>Mo ta san pham 7</p>',
  img: '<img src="images/7.png" alt="">',
  price: '<p>700000</p>',
  btnadd: '<button type="">Add to Cart</button>'
},
{
  id: '8',
  name: '<p>Sp8</p>',
  describe: '<p>Mo ta san pham 1</p>',
  img: '<img src="images/8.png" alt="">',
  price: '<p>800000</p>',
  btnadd: '<button type="">Add to Cart</button>'
}
];

function displayTable(products) { // get the table to add rows to
  var table = document.getElementById('listproduct');

  // cycle through the array for each of the presidents
  for (var i = 0; i < products.length; ++i) { // keep a reference to an individual president object
    var product = products[i];

    // create a row element to append cells to
    var row = document.createElement('li');

    // properties of the array elements
    var properties = ['img','name', 'describe' , 'price', 'btnadd'];

    // append each one of them to the row in question, in order
    for (var j = 0; j < properties.length; ++j) { // create new data cell for names
      var cell = document.createElement('item');
      // set name of property using bracket notation (properties[i] is a string,
      // which can be used to access properties of president)
      cell.innerHTML = product[properties[j]];
      // add to end of the row
      row.appendChild(cell);
    }
    // add new row to table
    table.appendChild(row);
  }
}
displayTable(products);
