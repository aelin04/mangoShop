class Header {
    // handleBagOpenPage(){
    //     bagPage.render()
    // }
    // handleMenuOpenPage() {
    //     menuOpen.render()
    // }
    handleSearchOpenPage() {
        searchModal.render()
    }

    render(counter) {
        const iconMenu = document.querySelector('.menu')
        const menuBody = document.querySelector('.menu__body')
        if (iconMenu) {
            iconMenu.addEventListener('click', (e) => {
                iconMenu.classList.toggle('_active')
                menuBody.classList.toggle('_active')
            })
        }
        const html = `
        <div class="header__container">
            
            <div class="menu">
                <span></span>
                </div>
                <nav class="menu__body">
                <ul class="menu__list">
                    <li>Женская</li>
                    <li>Мужская</li>
                    <li>Детская</li>
                </ul>
                </nav>
            <div class="logo">
                <h3>MANGO</h3>
            </div>
            <div class="icons">
                <div class="search" onclick="headerPage.handleSearchOpenPage()">
                <p><i class="fal fa-search"></i></p>
                    <span>Искать</span>
                </div>
                <div class="signIn">
                <p><i class="fal fa-user"></i></p>
                    <a href="./components/signIn/signIn.js">Вход</a>
                </div>
                <div class="bag" onclick="headerPage.handleBagOpenPage()">
                <p><i class="fal fa-shopping-bag"></i></p>
                    <span>Корзина</span>
                    <div class="basket-radius">
              <span>${counter}</span>
              </div>
                </div>
            </div>
           
        </div>
        `
        ROOT_HEADER.innerHTML = html
    }
}
const headerPage = new Header()
const productsStore = localStorageUtil.getProducts()