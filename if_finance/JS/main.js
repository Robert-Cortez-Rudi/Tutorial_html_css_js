function openModal () {
    const modal = document.querySelector(".modal")
    modal.style.display = 'flex'
}

function closeModal (event) {
    const modal = document.querySelector(".modal")
    if (event === undefined)
        return modal.style.display = 'none'

    if (event.target.className === 'modal') 
        return modal.style.display = 'none'
    
}


function handleSubmitAddTicker(event) {
    // Previne o comportamento padrão 
    event.preventDefault() 
    console.log( event.target.urlLogo)
    console.log( event.target.nameCompany)
    console.log( event.target.ticker)
    console.log( event.target.quantity)
    console.log( event.target.closedValue)
    
    

}
