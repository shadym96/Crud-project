var productName = document.getElementById(`productName`);
var productPrice = document.getElementById(`productPrice`);
var productCategory = document.getElementById(`productCategory`);
var productDesc = document.getElementById(`productDesc`);


var products ;

if (localStorage.getItem(`list`) != null) {
    
    products = JSON.parse(localStorage.getItem(`list`));
    displayProducts(products)
}
else {
    products = [];
}


function addProduct() {

    var product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        desc: productDesc.value
    }

    products.push(product);
    localStorage.setItem(`list`, JSON.stringify(products));

    displayProducts(products)
    clearForm()
}


function clearForm() {
        productName.value = ``;
        productPrice.value = ``;
        productCategory.value = ``;
        productDesc.value = ``;
}



function displayProducts(data) {

    var list = ``;
    for (var i=0; i< data.length; i++) {

        list += `<tr>
        <td>${data[i].name}</td>
        <td>${data[i].price}</td>
        <td>${data[i].category}</td>
        <td>${data[i].desc}</td>
        <td>
                <button class="btn btn-danger btn-sm" onclick="deleteProduct(${i})">
                    <i class="fa-solid fa-trash-can text-white"></i>
                </button>
            </td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="updateProduct(${i})">
                <i class="fa-solid fa-pen-to-square text-white"></i>
                </button>
            </td>
    </tr>`
    }
    document.getElementById(`list`).innerHTML = list;
}


function deleteProduct(index) {

    products.splice(index, 1);

    localStorage.setItem(`list`, JSON.stringify(products));

    displayProducts(products)
}



function updateProduct(index) {

    document.getElementById(`myBtn`).innerHTML = `update`;

        productName.value = products[index].name;
        productPrice.value = products[index].price;
        productCategory.value = products[index].category;
        productDesc.value = products[index].desc;

    }

function search(term) {

    var selected = [];

    for (var i=0 ; i< products.length; i++) {

        if (products[i].name.includes(term)) {
            selected.push(products[i]);
            console.log(selected);
            displayProducts(selected)
            
        }
        else {
            console.log(`not exsist`);
        }
    }
}

var searcInp = document.getElementById(`searchInp`);

searcInp.addEventListener(`input`, function(){
    search(this.value)
})

