const viewAll = document.querySelector('.ViewAll')
const individual = document.querySelector('.Individuals')
const corporate = document.querySelector('.Corporate')
const investment = document.querySelector('.Investments')

all = () => 
{
alert ('all selected')
viewAll.style = 'background-color: #DD5353'
viewAll.style.color = 'black'
viewAll.style = 'font-weight: 700'
viewAll.disabled = true

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
viewAll.addEventListener("click", all);


individuals = () => 
{
alert ('individual selected')
individual.style = 'background-color: #DD5353'
individual.style.color = 'black'
individual.style = 'font-weight: 700'
individual.disabled = true

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

document.querySelector('#all-product').style.display = 'none'
document.querySelector('#individual').style.display = 'block'
document.querySelector('#corporate').style.display = 'none'
document.querySelector('#investment').style.display = 'none'
document.querySelector('#financing').style.display = 'none'
}
individual.addEventListener("click", individuals);


corporates = () => 
{
    alert ('corporate selected')
corporate.style = 'background-color: #DD5353'
corporate.style.color = 'black'
corporate.style = 'font-weight: 700'
corporate.disabled = true

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

document.querySelector('#all-product').style.display = 'none'
document.querySelector('#individual').style.display = 'none'
document.querySelector('#corporate').style.display = 'block'
document.querySelector('#investment').style.display = 'none'
document.querySelector('#financing').style.display = 'none'
}
corporate.addEventListener("click", corporates);


investments = () => 
{
    alert ('investment selected')
investment.style = 'background-color: #DD5353'
investment.style.color = 'black'
investment.style = 'font-weight: 700'
investment.disabled = true

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
document.querySelector('#investment').style.display = 'block'
document.querySelector('#financing').style.display = 'none'
}
investment.addEventListener("click", investments);
