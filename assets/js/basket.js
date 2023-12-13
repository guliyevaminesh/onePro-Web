const deleteproducts = document.getElementById('deleteproducts')

function delProducts() {

    deleteproducts.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(cart);
    console.log('cart');
            cart.map((item,index) => {
                const imgBox = document.createElement('div')
                imgBox.className = 'delimg'
                imgBox.innerHTML = `
        <img src="${item.image}" alt="">
        <button onclick = "removeBasket(${index})">remove to Basket </button>
        `
                deleteproducts.appendChild(imgBox)
            })
        
        }
        delProducts();  

    function removeBasket(index){
        let cart = JSON.parse(localStorage.getItem('cart')) || []
        cart.splice(index,1)
        localStorage.setItem('cart',JSON.stringify(cart))
        delProducts()
    }


