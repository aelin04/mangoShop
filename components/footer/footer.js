class Footer {
    render() {
        const html = `
        <footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="section1" >
        <h6>О нас</h6>
        <p class="text-justify">«Mango» — испанская компания по дизайну и производству одежды, основанная в Барселоне, Испания братьями, Исаком и Нахманом Андик.</p>
      </div>

      <div class="section" >
        <h6>Каталог</h6>
        <ul class="footer-links">
          <li><a href="#">Женская одежда</a></li>
          <li><a href="#">Мужская одежда</a></li>
          <li><a href="#">Детская одежда</a></li>
        </ul>
      </div>

      <div class="section" >
        <h6>Наши ссылки</h6>
        <ul class="footer-links">
          <li><a href="#">Обслуживание клиентов</a></li>
          <li><a href="#">Мои покупки</a></li>
          <li><a href="#">Возврат</a></li>
          <li><a href="#">Франчайзинг</a></li>
          <li><a href="#">Приложение</a></li>
        </ul>
      </div>
    </div>
    <hr>
  </div>
  <div class="container">
    <div class="row">
      <div >
        <p class="copyright-text"> ⓒ MANGO 2021
          <a href="#">Условия продажи</a>.
        </p>
      </div>

      <div >
        <ul class="social-icons">
          <li><a class="facebook" href="https://www.facebook.com/MangoManCollection" target="_blank"><img src="../../img/icon/instagram.png" width="20" /></a></li>
          <li><a class="twitter" href="https://www.instagram.com/mango_man/" target="_blank"><img src="../../img/icon/fb.png" width="25" /></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
        `

        ROOT_FOOTER.innerHTML = html
    }
    
}

const footerPage = new Footer