class Search {


    render() {
        const html = `
    <div class="search">
    <input type="text" placeholder="Искать в Mango...">
    </div>
    `

        ROOT_SEARCH.innerHTML = html
    }
}

const searchModal = new Search()
