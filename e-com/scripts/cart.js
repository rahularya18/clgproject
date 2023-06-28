let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartItems);

let cartSubTotal = document.getElementById("cartSubTotal") 
let totalTotal = document.getElementById("totalTotal")
let cartT = 0;
let totalT = 0;
let cartContainer = document.getElementById("cartContainer");
displayData(cartItems)
function displayData(cartItems){

    cartItems.map((elm, i) =>{
        // [{"_id":"649b309aaa29c4af8ef5ab74","name":"Space T Shirt","description":"Presenting all new cotton t shirts","price":1600,"ratings":0,"images":[{"public_id":"sample id","url":"https://github.com/OfficialSiddharthBisht/e-com/blob/main/img/products/f1.jpg?raw=true","_id":"649b309aaa29c4af8ef5ab75"}],"categories":"Cotton","stock":0,"numOfReviews":0,"user":"643e70a6e7e0cc5b888bfef5","reviews":[],"createdAt":"2023-06-27T18:55:22.297Z","__v":0,"qty":1}]
        let tableRow = document.createElement("tr");
        let circle = document.createElement("td");
        circle.innerHTML = `<a href="#"><i class="far fa-times-circle"></i></a></i>`;
        circle.addEventListener('click',()=>{
            console.log("remove");
        })
        // let imageTd = document.createElement("td");
        // let image = document.createElement("img");
        // image.src = elm.images[0].url;
        // imageTd.append(image);
        let title = document.createElement("td");
        title.innerText = elm.name;
        let price = document.createElement("td");
        price.innerHTML = elm.price;
        let qty = document.createElement("td");
        qty.innerHTML = `<input type="number" value="1">`
        qty.setAttribute("id","quantity")
        let subtotal = elm.price + (elm.price * (18 / 100));
        cartT += subtotal; 
        let subT = document.createElement("td");
        subT.innerHTML= subtotal;
        tableRow.append(circle, title, price,qty,subT);
        cartContainer.append(tableRow);
        totalT+= parseInt(subtotal)+1;
        cartSubTotal.innerHTML = cartT;
        totalTotal.innerHTML = totalT
    }
    )
}