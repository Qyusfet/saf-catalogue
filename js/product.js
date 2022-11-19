const products = document.querySelectorAll('.products')
const searchProduct = document.querySelector('#searchProduct')

const displayProducts = (values) =>{
    products.forEach(element =>{
        element.style.display = "none"
        const productName = element.querySelector('h2').innerHTML.toUpperCase();
        const productDesc = element.querySelector('p').innerHTML.toUpperCase();


        if (productName.includes(values) || productDesc.includes(values)){
            element.style.display = "block"
        }
    })

    viewAll.style = 'font-weight: 700'
    viewAll.disabled = true
    viewAll.style = 'background-color: #DD5353'
    viewAll.style.color = 'white'
    
    individual.style = 'background-color: white'
    individual.style.color = 'black'
    individual.style = 'font-weight: 700'
    individual.disabled = false
    
    corporate.style = 'background-color: white'
    corporate.style.color = 'black'
    corporate.style = 'font-weight: 700'
    corporate.disabled = false
    
    investment.style = 'background-color: white'
    investment.style.color = 'black'
    investment.style = 'font-weight: 700'
    investment.disabled = false
    
    document.querySelector('#all-product').style.display = 'block'
    document.querySelector('#individual').style.display = 'none'
    document.querySelector('#corporate').style.display = 'none'
    document.querySelector('#investment').style.display = 'none'
    document.querySelector('#financing').style.display = 'none'

}

searchProduct.addEventListener('input', (e) =>{
    displayProducts(e.target.value.toUpperCase())
})