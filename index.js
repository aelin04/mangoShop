function render() {
    const productsStore = localStorageUtil.getProducts()

    headerPage.render(productsStore.length)

    productsPage.render()
    slidesPage.render()

    footerPage.render()
}

render()

let menu = document.querySelector('.menu')
let menuBody = document.querySelector('.menu__body')


menu.addEventListener('click', () => {
    menu.classList.toggle('_active');
    menuBody.classList.toggle('_active')
})

window.addEventListener('scroll', () => {
    let header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY - 0)
})