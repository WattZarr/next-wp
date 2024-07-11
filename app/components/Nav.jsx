export default function Nav() {
  return (
    <header class="header">
      <div class="header__nav">
        <div class="header__nav__inner">
          <a href="/" class="header__nav__logo">
            <img
              src="/img/common/header/img_logo.png"
              alt="ロゴ"
              width="215"
              height="53"
              loading="eager"
            />
          </a>
          <ul class="header__nav__itemWrapper">
            <li class="header__nav__item">
              <a href="/service" class="link">
                サービス
              </a>
            </li>
            <li class="header__nav__item">
              <a href="/recruit" class="link">
                採用情報
              </a>
            </li>
            <li class="header__nav__item">
              <a href="/about" class="link">
                会社概要
              </a>
            </li>
            <li class="header__nav__item">
              <a href="/news" class="link">
                お知らせ
              </a>
            </li>
            <li class="header__nav__item">
              <a href="/contact" class="modBtn modBtn--header">
                <span>お問い合わせ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="spNavigation">
        <a href="/" class="spNavigation__logo">
          <img
            src="/img/common/header/img_logo.png"
            alt="ロゴ"
            width="215"
            height="53"
            loading="eager"
          />
        </a>
        <ul class="spNavigation__list">
          <li class="spNavigation__list__item">
            <a href="/service" class="link">
              サービス
            </a>
          </li>
          <li class="spNavigation__list__item">
            <a href="/recruit" class="link">
              採用情報
            </a>
          </li>
          <li class="spNavigation__list__item">
            <a href="/about" class="link">
              会社概要
            </a>
          </li>
          <li class="spNavigation__list__item">
            <a href="/news" class="link">
              お知らせ
            </a>
          </li>
          <li class="spNavigation__list__item spNavigation__list__item--contact">
            <a href="/contact" class="modBtn modBtn--spNav">
              <span>お問い合わせ</span>
            </a>
          </li>
          <div class="spNavigation__img">
            <figure class="spNavigation__img__plant">
              <img
                src="img/top/sp/spNavigationPlant.png"
                width="56"
                height="91.5"
                alt=""
              />
            </figure>
          </div>
        </ul>

        <div class="openbtn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
