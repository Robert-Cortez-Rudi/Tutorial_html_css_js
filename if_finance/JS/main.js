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


function AddTicker(event) {
    //previne o comportamento padrão de recarregar a página ou enviar para algum endereço (action)
    event.preventDefault() 

    const card_list = document.querySelector("#card_list")


    const url_logo =  event.target.urlLogo.value
    const name_company = event.target.nameCompany.value
    const ticker = event.target.ticker.value
    const quantity = event.target.quantity.value
    const closed_value = event.target.closedValue.value
    
    card_list.innerHTML += ` <div class="card_ticker" onmouseenter="showCardOptions(event)" onmouseleave="hideCardOptions(event)">
                                <header>
                                    <img src="${url_logo}" alt="Logo">
                                    <h4>${name_company}</h4>
                                    <span>${ticker}</span>
                                </header>

                                <main>
                                    <p>Valor: <span style="color: #1EBD1E;">${closed_value} <span>▲ ▼</span></span></p>
                                </main>

                                <footer>
                                    <p>Quantidade: <span>${quantity}</span></p>
                                    <p>Posição: <span>R$ ${+quantity * +closed_value}</span></p>
                                </footer>

                                <div class="card_options">
                                    <button>Editar</button>
                                    <button>Excluir</button>
                                </div>
                            </div>`

    closeModal()

    event.target.reset()
}


function showCardOptions(event) {

    const cardoptions = event.target.querySelector('.card_options')
    cardoptions.style.display = 'flex'


}

function hideCardOptions(event) {
    const cardoptions = event.target.querySelector('.card_options')
    cardoptions.style.display = 'none'
}
