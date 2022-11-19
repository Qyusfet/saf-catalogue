const products = document.querySelectorAll('.products')
// const searchProduct = document.querySelector('#searchProduct')

const displayProducts = (values) =>{
    products.forEach(element =>{
        element.style.display = "none"
        const productName = element.querySelector('h2').innerHTML.toUpperCase();
        const productDesc = element.querySelector('p').innerHTML.toUpperCase();


        if (productName.includes(values) || productDesc.includes(values)){
            element.style.display = "block"

            alert(values)

            
        }
    })

    

}

searchProduct.addEventListener('input', (e) =>{
    displayProducts(e.target.value.toUpperCase())

    
})

