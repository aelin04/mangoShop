class Slides {
    render() {
        const html = ` 
        <main class="page-content">
            <div class="card">
              <div class="content">
                <h2 class="title">New Trends</h2>
                <p class="copy"></p>
                <button class="btn">Узнать больше</button>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <h2 class="title">#MangoGirls</h2>
                <p class="copy">Вдохновляйтесь с mangogirls</p>
                <button class="btn">Узнать больше</button>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <h2 class="title">Black Friday</h2>
                <p class="copy">Скидки до -50%</p>
                <button class="btn">Узнать больше</button>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <h2 class="title">Waddings & parties</h2>
                <p class="copy">Seriously, straight up, just blast off into outer space today</p>
                <button class="btn">Узнать больше</button>
              </div>
            </div>
          </main>
        `
        ROOT_SLIDES.innerHTML = html
    }
}

const slidesPage = new Slides