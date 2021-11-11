class Search {
    handleSearchClose(){
        ROOT_SEARCH.innerHTML = ''
    }

    render() {
        const html = `
        <div class="mmm">
    <div class="search">
    <input type="text" placeholder="Искать в Mango...">
    
    </div>
    <img width=20 src="./img/icon/close.png" onclick="searchModal.handleSearchClose()">
    </div>
    `

        ROOT_SEARCH.innerHTML = html
    }
}

const searchModal = new Search()
