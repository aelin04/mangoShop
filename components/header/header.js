class Header {
    handleBagOpenPage(){
        const productsStore = localStorageUtil.getProducts()
        bagPage.render(productsStore.length)
    }
    constructor() {
        this.classNameActive = '_active'
    }
    handleMenuOpenPage(element){
            element.classList.add(this.classNameActive)
            // menuOpen.render()
    }

    handleMenuClosePage (element) {
        element.classList.remove(this.classNameActive)

    }
    handleSearchOpenPage() {
        searchModal.render()
    }

    render(counter) {
        let activeClass = " " + this.classNameActive

        const html = `
        <div class="header__container">
            
            
            <div class="logo">
                <h3><a href="./index.html">MANGO</a></h3>
            </div>
            <div class="icons">
                <div class="search" onclick="headerPage.handleSearchOpenPage()">
                <p><i class="fal fa-search"></i></p>
                    <span>Искать</span>
                </div>
                <div class="signIn">
                <p><i class="fal fa-user"></i></p>
                <span>Вход</span>
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
