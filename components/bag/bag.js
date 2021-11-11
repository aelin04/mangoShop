class Bag {

    closeShoppingPage() {
        ROOT_BAG.innerHTML = ''
    }

    render(counter) {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        let sumCatalog = 0
        
        

        CATALOG.forEach(({id, name, img, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr>
                <td class="shopping__element--img"><img src="${img}"></td>
                <td class="shopping__element--name">${name}</td>
                <td class="shopping__element--price">${price.toLocaleString()} сом</td>
                </tr>
                `

                sumCatalog += price
            }
        })


        const html = `
        <div class="shopping__container">
       <div class="shopping__top">
        <span>Корзина(${counter})</span>
        <div class="shopping__close" onclick="bagPage.closeShoppingPage()">
        <img width=20 src="./img/icon/close.png">
        </div>
        </div>
        <div class="shopping__button">
        <button><a href="./bag.html">Посмотреть корзину</a></button>
        <button><a href="#">Купить</a></button>
        </div>
        <table>
        
        

        <tr class="shopping__bottom">
       
            <td class="shopping__element--name">Сумма: </td>
            <td class="shopping__element--price">${sumCatalog.toLocaleString()} сом</td>
        </tr>
        ${htmlCatalog}
        </table>
        
        
        </div>
        `
        ROOT_BAG.innerHTML = html
    }
}

const bagPage = new Bag()
