const avesomeimage = document.getElementById('avesomeimage')
const proprice = document.querySelector('.proprice')
const sortproducts = document.getElementById('sortproducts')
const productkind = document.getElementById('productkind')


function avesomeProducts() {
    let page = 1
    let limit = 9
    let skip = (page - 1) * limit
    axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/food/products?page=${page}&limit=${limit}&skip=${skip}`)
        .then(res => {
            image = res.data
            image.map(item => {
                
                const imgBox = document.createElement('div')
                imgBox.className = 'proimg'
                imgBox.innerHTML = `
                <img src="${item.image}" alt="">
                <button onclick = "addToBasket(${item.id})">Add to Basket </button>
        `
                avesomeimage.appendChild(imgBox)
            })
            page++
        })
}
avesomeProducts();

function addToBasket(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(image.find(item => item.id == id))
    localStorage.setItem('cart',JSON.stringify(cart))
}

function sortedProducts() {
    sortproducts.innerHTML = ''
    avesomeimage.style.display = 'none'
    sortproducts.style.display = 'flex'
    let selectvalue = productkind.value

   if(selectvalue==="1"){
    axios.get('https://65680f2a9927836bd97406ef.mockapi.io/food/products')
    .then(res => {
        db = res.data
        console.log(db);
        let sortedData = db.sort((a, b) => a.price - b.price)    
        sortedData.map(item => {
            const sortBox = document.createElement('div')
            sortBox.className = 'proimg'
            sortBox.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.price}</p>
    `
            sortproducts.appendChild(sortBox)
        })
        
    })
   }
}


productkind.addEventListener('change',sortedProducts)



