function openModal (id) {
    const modal = document.querySelector(id)
    modal.style.display = 'flex'
}

function closeModal (event, id) {
    const modal = document.querySelector(id)
    if (event === null)
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

    const tickerData = {
        url_logo,
        name_company,
        ticker,
        quantity,
        closed_value
    }
    
    addOrUpdateTicker(tickerData)

    closeModal(null, '#modal_addTicker')

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



function removeCard(event) {
    // closest(...): busca nos ascendentes de um elemento
    const card_ticker = event.target.closest('.card_ticker')
    
    // .remove(): deleta o elemento do HTML
    card_ticker.remove()
}



function editTicker(event) {
    const cardTicker = event.target.closest('.card_ticker')

    const imgLogo = cardTicker.querySelector('header img')
    const urllogo = imgLogo.getAttriute('src')
    document.querySelector('#edit_urlLogo').value = urllogo

    const nameCompany = cardTicker.querySelector('header h4')
    document.querySelector('#edit_nameCompany').value = nameCompany

    const ticker = cardTicker.querySelector('header span').innerText
    document.querySelector('#edit_ticker').value = ticker

    const quantity = cardTicker.querySelector('main p span').innerText
    document.querySelector('#edit_quantity').value = quantity

    const closed_value = cardTicker.querySelector('main p span').innerText
    document.querySelector('#edit_closedValue').value = closed_value.split(' ')[0]

    openModal('#modal_editTicker')
}




function updateTicker(event) {
    event.preventDefault()

    const cardList = document.querySelector('#card_list')


    // event.target (form)
    const url_logo =  event.target.edit_urlLogo.value
    const name_company = event.target.edit_nameCompany.value
    const ticker = event.target.edit_ticker.value
    const quantity = event.target.edit_quantity.value
    const closed_value = event.target.edit_closedValue.value

    const tickerData = {
        url_logo,
        name_company,
        ticker,
        quantity,
        closed_value
    }

    addOrUpdateTicker(tickerData)

    closeModal(null, '#modal_editTicker')

}

function addOrUpdateTicker(tickerData) {
    const ticker = document.querySelector(`#${tickerData.ticker}`)

    if (ticker) {
        // Update
        ticker.querySelector('header img').setAttribute('src', tickerData.urlLogo)
        ticker.querySelector('header h4').innerHTML = tickerData.name_company
        ticker.querySelector('main p span').innerHTML = tickerData.closed_value + " "
        ticker.querySelector('footer p span').innerHTML = tickerData.quantity 
        ticker.querySelector('footer p:last-child span ').innerHTML = 'R$ ' +  (+tickerData.quantity * +tickerData.closed_value)


    }
    else {
        // Create
        const card_list = document.querySelector("#card_list")


    
        card_list.innerHTML += ` <div class="card_ticker" onmouseenter="showCardOptions(event)" onmouseleave="hideCardOptions(event)">
                                <header>
                                    <img src="${tickerData.url_logo}" alt="Logo">
                                    <h4>${tickerData.name_company}</h4>
                                    <span>${ticker}</span>
                                </header>

                                <main>
                                    <p>Valor: <span style="color: #1EBD1E;">${tickerData.closed_value} <span>▲ ▼</span></span></p>
                                </main>

                                <footer>
                                    <p>Quantidade: <span>${tickerData.quantity}</span></p>
                                    <p>Posição: <span>R$ ${+tickerData.quantity * +tickerData.closed_value}</span></p>
                                </footer>

                                <div class="card_options">
                                    <button onclick="editTicker(event)">Editar</button>
                                    <button onclick="removeCard(event)">Excluir</button>
                                </div>
                            </div>`

        
    }
}