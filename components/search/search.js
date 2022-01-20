class Search {
    handleSearchClose() {
        ROOT_SEARCH.innerHTML = ''

    }

    inp(element) {
        const newObj = CATALOG.filter(item => {
            if (item.type == "man") {
                return item.name.toLowerCase().includes(element.value.toLowerCase())
            }
        })
        console.log(newObj);
    }

    render() {
        const html = `
        <div class="mmm">
    <div class="search">
    <input type="text" placeholder="Искать в Mango..." onChange="searchModal.inp(this)">
    
    </div>
    <img width=20 src="./img/icon/close.png" onclick="searchModal.handleSearchClose()">
    </div>
    `

        ROOT_SEARCH.innerHTML = html
    }
}
const searchModal = new Search()
