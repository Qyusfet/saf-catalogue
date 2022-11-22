const viewAll = document.querySelector('.ViewAll')
const individual = document.querySelector('.Individuals')
const corporate = document.querySelector('.Corporate')
const investment = document.querySelector('.Investments')
const financing = document.querySelector('.Financing')

viewAll.style = 'background-color: #DD5353'
viewAll.style.color = 'white'

all = () => 
{
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

financing.style = 'background-color: white'
financing.style.color = 'black'
financing.style = 'font-weight: 700'
financing.disabled = false

document.querySelector('#all-product').style.display = 'block'
document.querySelector('#individual').style.display = 'none'
document.querySelector('#corporate').style.display = 'none'
document.querySelector('#investment').style.display = 'none'
document.querySelector('#financing').style.display = 'none'
}
viewAll.addEventListener("click", all);


individuals = () => 
{
individual.style = 'font-weight: 700'
individual.disabled = true
individual.style = 'background-color: #DD5353'
individual.style.color = 'white'

viewAll.style = 'background-color: white'
viewAll.style.color = 'black'
viewAll.style = 'font-weight: 700'
viewAll.disabled = false

corporate.style = 'background-color: white'
corporate.style.color = 'black'
corporate.style = 'font-weight: 700'
corporate.disabled = false

investment.style = 'background-color: white'
investment.style.color = 'black'
investment.style = 'font-weight: 700'
investment.disabled = false

financing.style = 'background-color: white'
financing.style.color = 'black'
financing.style = 'font-weight: 700'
financing.disabled = false

document.querySelector('#all-product').style.display = 'none'
document.querySelector('#individual').style.display = 'block'
document.querySelector('#corporate').style.display = 'none'
document.querySelector('#investment').style.display = 'none'
document.querySelector('#financing').style.display = 'none'
}
individual.addEventListener("click", individuals);


corporates = () => 
{
corporate.style = 'font-weight: 700'
corporate.disabled = true
corporate.style = 'background-color: #DD5353'
corporate.style.color = 'white'

individual.style = 'background-color: white'
individual.style.color = 'black'
individual.style = 'font-weight: 700'
individual.disabled = false

viewAll.style = 'background-color: white'
viewAll.style.color = 'black'
viewAll.style = 'font-weight: 700'
viewAll.disabled = false

investment.style = 'background-color: white'
investment.style.color = 'black'
investment.style = 'font-weight: 700'
investment.disabled = false

financing.style = 'background-color: white'
financing.style.color = 'black'
financing.style = 'font-weight: 700'
financing.disabled = false

document.querySelector('#all-product').style.display = 'none'
document.querySelector('#individual').style.display = 'none'
document.querySelector('#corporate').style.display = 'block'
document.querySelector('#investment').style.display = 'none'
document.querySelector('#financing').style.display = 'none'
}
corporate.addEventListener("click", corporates);


investments = () => 
{
investment.style = 'font-weight: 700'
investment.disabled = true
investment.style = 'background-color: #DD5353'
investment.style.color = 'white'

individual.style = 'background-color: white'
individual.style.color = 'black'
individual.style = 'font-weight: 700'
individual.disabled = false

corporate.style = 'background-color: white'
corporate.style.color = 'black'
corporate.style = 'font-weight: 700'
corporate.disabled = false

viewAll.style = 'background-color: white'
viewAll.style.color = 'black'
viewAll.style = 'font-weight: 700'
viewAll.disabled = false

financing.style = 'background-color: white'
financing.style.color = 'black'
financing.style = 'font-weight: 700'
financing.disabled = false

document.querySelector('#all-product').style.display = 'none'
document.querySelector('#individual').style.display = 'none'
document.querySelector('#corporate').style.display = 'none'
document.querySelector('#investment').style.display = 'block'
document.querySelector('#financing').style.display = 'none'
}
investment.addEventListener("click", investments);


financings = () => 
{
financing.style = 'font-weight: 700'
financing.disabled = false
financing.style = 'background-color: #DD5353'
financing.style.color = 'white'

investment.style = 'font-weight: 700'
investment.disabled = true
investment.style = 'background-color: white'
investment.style.color = 'black'

individual.style = 'background-color: white'
individual.style.color = 'black'
individual.style = 'font-weight: 700'
individual.disabled = false

corporate.style = 'background-color: white'
corporate.style.color = 'black'
corporate.style = 'font-weight: 700'
corporate.disabled = false

viewAll.style = 'background-color: white'
viewAll.style.color = 'black'
viewAll.style = 'font-weight: 700'
viewAll.disabled = false

document.querySelector('#all-product').style.display = 'none'
document.querySelector('#individual').style.display = 'none'
document.querySelector('#corporate').style.display = 'none'
document.querySelector('#investment').style.display = 'none'
document.querySelector('#financing').style.display = 'block'
}
financing.addEventListener("click", financings);
