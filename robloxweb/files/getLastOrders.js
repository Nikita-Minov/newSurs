fetch('/lastorders').then(res => res.json()).then(res => {
    let inner = '';
    res.result.forEach(obj => {
      inner += `
      <div class="rx_buysline_item-block">
                  <div class="rx_buysline_item">
                    <div
                      class="d-flex justify-content-between align-items-center"
                      style="margin-bottom: 18px"
                    >
                      <div class="rx_buysline_item_amount">${obj.amountOfRobux} R$</div>
                    </div>
                    <div class="rx_buysline_item_buyer">
                      ${obj.username}
                      <span class="rx_buysline_item_method"
                        >${obj.type === 'group' ? '<i class="fad fa-users"></i>' : '<i class="fad fa-exchange-alt"></i>'}
                      </span>
                    </div>
                  </div>
                </div>
                `
    })
    document.querySelector('.rx_buysline').innerHTML = inner
  })