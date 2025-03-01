import Link from "next/link";
import { getData } from "../utils/getData";
import formatDate from "../utils/formatDate";

export default async function Page() {
  const newsData = getData("news");

  const [news] = await Promise.all([newsData]);

  return (
    <>
      <main className="main main--news">
        <div className="main__inner">
          <div className="modSectionMain modSectionMain--page modSectionMain--news">
            <div className="modSectionMain__contentWrapper modSectionMain__contentWrapper--page">
              <hgroup className="modSectionMain__content modSectionMain__content--page">
                <p className="modHeading modHeading--hero modHeading--animated">
                  <span>N</span>
                  <span>e</span>
                  <span>w</span>
                  <span>s</span>
                </p>
                <h1 className="modHeadingSub modHeadingSub--fs22 modHeadingSub--mt">
                  お知らせ
                </h1>
              </hgroup>
              <div className="modSectionMain__cartoon modSectionMain__cartoon--page modSectionMain__cartoon--news brushAnimate">
                <div className="modSectionMain__cartoon__movie">
                  <span className="line">
                    <span className="line__img">
                      <img
                        src="/img/pages/news/img_news_line.svg"
                        width="354"
                        height="243"
                        alt=""
                        loading="eager"
                      />
                    </span>
                  </span>
                  <span className="color">
                    <span className="color__img">
                      <img
                        src="/img/pages/news/img_news_color.png"
                        width="354"
                        height="243"
                        alt=""
                        loading="eager"
                      />
                    </span>
                    <video
                      className="js_inlineVideo mask"
                      poster="/img/pages/news/img_news.png"
                      muted=""
                      playsinline=""
                    >
                      <source src="/img/common/bg_movie.mp4" />
                    </video>
                  </span>
                  <svg
                    width="0"
                    height="0"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    viewBox="0 0 354 243"
                  >
                    <clipPath id="clip01" clipPathUnits="objectBoundingBox">
                      <path
                        transform="scale(0.002824858757062,0.004115226337449)"
                        d="M175.79,193.85c4.19,5.56-3.27,13.33-15.13,14.83s-18.46-.36-18.46-.36c0,0-1.48,3.63-9.55,5.32-12.14,2.54-53.76,1.97-66.41-3.41-8.18-3.48-8.34-6.15-7.5-7.64,1.09-1.95,5.19-4.13,8.5-5.63-.39-.99.06-2.11,1.03-2.55,12.2-5.51,23.81-7.89,35.17-7.11v-61.62l-5.6,1.29c-.15.03-.3.05-.45.05-.08,0-.16,0-.24-.01L2.85,115.55c-.95-.12-1.69-.89-1.75-1.84-.02-.29-2.06-29.67,2.34-55.39,3.63-21.16,17.18-32.44,28.08-38.22.2-.18.44-.33.72-.42.07-.02.14-.04.21-.06,4.8-2.44,9-3.82,11.47-4.5C58.63,11.06,160.6.78,164.93.34c1.11-.1,2.08.69,2.19,1.79.02.16,0,.31,0,.47,1.49.27,3.77.79,6.71,1.8.04-.12.09-.24.15-.36.53-.97,1.75-1.32,2.72-.79,16.7,9.17,33.61,32.01,33.61,57.89v.92l1.61-.46c.53-.15,1.08.15,1.24.68.15.53-.15,1.08-.68,1.24l-2.18.63c-.02,1.16-.05,2.32-.09,3.46.05-.02.1-.05.15-.07.5-.23,1.1,0,1.32.51.22.5,0,1.1-.51,1.32-.36.16-.71.32-1.05.48-.79,16.96-3.57,30.65-3.6,30.81-.16.77-.75,1.37-1.51,1.55l-76.33,17.61v65.64c15.67-2.65,31.83-.93,45.25,5.13.98.44,1.42,1.58,1.03,2.56.43.26.73.49.86.66l-.02.04ZM63.05,188.15c.14-.02.28-.05.42-.07.82-.12,1.39-.88,1.27-1.7-.12-.82-.88-1.39-1.7-1.27-4.99.72-9.84,2.42-14.2,4.96,1.02-5.75,3.64-11.17,7.54-15.54.45-.5.51-1.24.15-1.8-.36-.57-1.05-.82-1.69-.63-10.65,3.17-20.07,9.82-26.65,18.75-5.79-5.41-12.95-9.25-20.73-11.03-.71-.16-1.43.21-1.71.88s-.05,1.45.56,1.84c6.7,4.38,11.01,12.06,11.25,20.05.02.81.69,1.45,1.5,1.45h0s6.34,3.65,14.66,3.6c8.09-.05,16.46-2.14,18.34-3.49s.67-4.52,3.18-7.97c1.93-2.66,6.04-6.44,7.82-8.03h-.01ZM89.72,215.63c-.67-.05-1.29.34-1.52.97-.23.63-.02,1.33.51,1.73,5.63,4.17,9.1,11.11,9.06,18.11,0,.83.66,1.5,1.49,1.51h0c.14,0,.27-.02.39-.06,2.36,1.69,11.14-.73,11.56-4.14h.02c.76-.32,1.12-1.2.8-1.96-3.73-8.91-12.7-15.4-22.33-16.15h.02ZM338.18,195.72c1.7,2.33,3.73,6.01,3.69,10.31-.04,5.55-3.66,9.67-6.81,12.65-.3.28-.61.55-.93.81h0c-4.44,3.63-10.82,5.26-15.25,5.26h-.25c-5.56-.08-11.28-2.42-15.69-6.42-.11-.1-.17-.21-.24-.33-.4-.21-.71-.59-.79-1.07l-8.62-53.78c-1.72,1.2-4.21,2.2-7.21,3.03,2.16,7.26,15.09,50.55,15.9,52.14.5.98.66,2.46.71,3.57.43,0,.86.18,1.16.54.53.64.44,1.58-.2,2.11-13.61,11.3-30.42,17.72-47.32,18.08-.5,0-1.01.02-1.51.02-16.41,0-32.82-5.68-46.39-16.08-.66-.5-.78-1.45-.28-2.1.06-.07.12-.14.18-.2-1.2-.92-1.95-1.62-1.98-1.93-.05-.44-.02-1.31.07-2.51-.02,0-.04,0-.07,0-.07,0-.15,0-.22-.02-.82-.12-1.39-.88-1.27-1.7.69-4.73,1.33-9.33,1.95-13.85.13-.96.26-1.9.4-2.85-1.7.84-4.7,1.93-8.97,2.01-5.51.1-10.14-.92-11.87-1.36-.24.15-.52.24-.82.24h-.05c-.83-.03-1.48-.72-1.45-1.55.41-11.4-3.82-22.72-11.59-31.06-.48-.52-.54-1.31-.13-1.89.41-.58,1.17-.79,1.82-.51,12.31,5.37,20.73,13.04,25.07,22.84,2.7-3.74,4.73-5.46,7.41-7.2.49-.32,1.1-.31,1.57-.03.68-.41,1.33-.78,1.88-1.08,1.19-7.36,2.55-14.78,4.3-22.52.11-.47.42-.83.83-1.02.09-.09.19-.17.3-.24-.69-1.01-1.39-2.03-2.08-3.04-2.02-2.96-4.12-6.02-5.96-8.62-1.83-2.58-3.91-5.5-4.53-9.01-.63-3.58.69-8.06,4.43-9.71,2.78-1.22,6.34-.49,9.05,1.87,2.27,1.97,3.67,4.66,4.9,7.03l7.7,14.79c3.83-.76,8.19-1.35,12.99-1.73.13-7.17.05-15.01-.43-21.16h0v-.3c0-.06.02-.11.04-.16,0-.04.02-.08.03-.12,0-.03.03-.07.04-.1.02-.05.04-.11.07-.16.02-.03.04-.06.06-.09.03-.05.06-.1.1-.14.03-.04.07-.07.1-.1s.07-.07.1-.1.07-.04.1-.07c.05-.03.09-.07.14-.09.03-.02.06-.02.09-.04.06-.03.12-.05.19-.07h0c.05-.01.09-.01.14-.02.05,0,.09-.02.14-.03h.07c.31-.02.6.07.85.23.98-1.3,2.92-3.31,6.24-4.58,1.69-1.59,4.5-2.74,8.23-2.43,2.51.21,4.38.87,5.71,2.04,1.77,1.55,2.62,3.6,2.42,5.74.05.26.03.53-.07.79-.09.24-.18.5-.27.75-.09.26-.17.52-.28.77-1.96,5.45-3.89,12.04-5.61,19.03,1.7.04,3.38.1,5.02.2,4.4-7.05,9.56-13.44,15.11-19.07-.31-.2-.56-.49-.65-.88-.36-1.37-.81-3.44-.61-5.57.21-2.22,1.09-4.18,2.5-5.52,1.67-1.59,4.04-2.2,6.08-1.58.16-1.08.43-2.13.81-3.15.69-1.82,1.63-3.12,2.85-3.97,1.48-1.02,3.36-1.21,4.84-.55.16-.36.32-.72.52-1.05,1.33-2.23,3.59-3.71,5.91-3.85.93-.06,1.75.11,2.42.5.43.25.78.59,1.04.98.33-1.95,1.18-3.81,2.48-5.31,1.07-1.24,2.27-2.01,3.55-2.28,1.64-.35,3.39.17,4.58,1.35.73.72,1.2,1.66,1.39,2.65.98-1.64,2.3-3.07,3.9-4.13,1.57-1.04,3.13-1.54,4.62-1.46,2.05.09,3.84,1.34,4.46,3.11.51,1.48.18,3.22-.9,4.66-.37.5-.81.92-1.27,1.31.28.16.56.33.81.52,1.53,1.19,2.36,3.09,2.11,4.85-.33,2.38-2.43,3.97-4.37,4.5-.84.23-1.69.31-2.52.31-.92,0-1.81-.1-2.65-.2-.43,1.68-1.78,3.13-3.62,3.84-1.09.42-2.22.54-3.23.54-.64,0-1.24-.05-1.73-.1-.14-.02-.27-.06-.4-.11,0,.32-.01.64-.09.95-.38,1.68-1.72,3-3.97,3.93-1.41.59-2.89.97-4.39,1.2.14.39.12.84-.1,1.23-1.4,2.5-3.57,4.22-5.94,4.71-1.59.33-3.14.07-4.39-.65-.19.79-.46,1.57-.83,2.32-1.08,2.15-2.95,3.61-5,3.9-.23.03-.45.05-.67.05-2.36,0-4.55-1.7-4.87-3.91-.05-.36.03-.7.21-.99-.08-.13-.17-.25-.26-.38-9.96,10.09-18.14,22.06-23.04,34.37,4.19-.11,8-.35,11.4-.7.22-.39,1.62-2.74,4.07-5.44,4.13-4.54,8.56-7.76,8.75-7.9.36-.26.83-.35,1.26-.23,6.96,1.83,10.34,4.17,10.34,7.13,0,.12-.02.23-.04.35l.4,2.52c3.33-.14,6.1,1.87,8.65,3.96,8.74,7.16,17.5,14.58,26.02,22.06,2.43,2.13,5.18,4.54,7.34,7.5h.07ZM297.92,173.08l5.3,33.06s.04.05.06.08c3.27,5.56,9.24,9.37,15.2,9.69,6.48.36,12.72-3.62,14.21-9.04.06-.22.17-.4.3-.57-1.22-2.25-3.04-4.26-4.85-6.14-9.37-9.75-17.19-16.52-27.01-23.36-.58-.4-.78-1.14-.54-1.77l-2.67-1.95h0ZM288.01,109.82c.21.1.44.15.66.15.55,0,1.09-.31,1.35-.84,2.18-4.44,4.82-8.66,7.83-12.58-.04.27,0,.55.11.82.59,1.34,2.02,2.21,3.82,2.34.17.01.34.02.51.02,2.13,0,4.26-.96,5.66-2.56.95-1.09,1.55-2.48,1.75-3.92.63-.04,1.25-.19,1.83-.46,1.67-.78,2.85-2.43,3.15-4.31.11.02.21.06.32.06h.14c2.08-.19,3.96-1.56,4.78-3.48.26-.61.39-1.25.43-1.9.47.12.96.19,1.44.19,1.16,0,2.32-.35,3.29-1.03,1.6-1.12,2.52-3.03,2.42-4.98-.08-1.46-.73-2.83-1.77-3.82,1.74-.58,3.17-2.04,3.68-3.8.54-1.84.06-3.95-1.22-5.38-1.28-1.43-3.32-2.14-5.21-1.82-1.09.19-2.19.71-3.26,1.56-.26.2-.43.48-.51.77-1.88-1.36-4.53-1.49-6.35-.2-1.28.91-2.15,2.45-2.38,4.24-.1.78-.08,1.54,0,2.28-1.85-1.08-4.36-.98-6.29.35-1.75,1.2-2.95,3.3-3.3,5.74-.09.62-.12,1.24-.11,1.85-.11-.03-.22-.06-.33-.07-1.72-.15-3.47.71-4.6,2.2-.88,1.15-1.4,2.68-1.49,4.41-.01.28-.01.55,0,.82-.37-.34-.91-.49-1.43-.33-2.61.77-4.63,3.2-4.92,5.9-.29,2.7,1.18,5.5,3.57,6.8.23.12.47.18.72.18.04,0,.07-.01.11-.01-1.88,2.82-3.59,5.76-5.08,8.8-.36.74-.06,1.64.69,2.01h-.01ZM352.29,133.14c-.91-1.03-2.28-1.68-3.87-1.82-1.31-.13-2.58.1-3.66.32l-.43.09c-.08.02-.16.03-.23.05.01-.92-.22-1.83-.67-2.52-.86-1.31-2.43-2.13-4.21-2.2-1.51-.05-2.93.42-4,.84-.51.2-1.01.42-1.5.65-.77-1.94-2.83-3.05-4.69-3.16-2.06-.13-3.97.74-5.39,1.51-2.05,1.11-3.97,2.49-5.71,4.05-.06-.18-.12-.37-.2-.57.44-.34.67-.92.55-1.5-.28-1.28-1.42-2.32-2.85-2.58-1.14-.21-2.21.07-3.02.33-2.97.97-5.55,2.86-7.44,5.3h0c-1.97-.55-4.14-.19-5.81.99-1.67,1.18-2.75,3.09-2.9,5.13-.06.83.57,1.54,1.39,1.6h.03c-.03.08-.05.17-.08.24-13.52,4.56-24.47,11.83-31.72,21.1-.51.65-.4,1.6.26,2.11.27.21.6.32.92.32.45,0,.89-.2,1.18-.58,4.98-6.37,12.82-12.52,22.8-17.15.03.1.06.21.09.32-.13.03-.26.08-.39.15-.72.41-.96,1.33-.55,2.05,1.71,2.95,5.24,4.61,8.59,4.03,2.13-.36,4.03-1.59,5.29-3.3.93,1.37,2.19,2.48,3.68,3.21,1.21.59,2.49.89,3.72.89.44,0,.88-.04,1.3-.12,1.92-.36,3.55-1.54,4.37-3.16.05-.09.08-.19.11-.29.2,0,.4.03.6.03.45,0,.92-.04,1.41-.1,1.75-.25,3.14-1.5,3.94-2.85l.36.27c-.51.63-.43,1.55.19,2.08,1.53,1.32,3.14,2.17,4.79,2.53.58.13,1.16.19,1.73.19,1.46,0,2.85-.41,3.98-1.19,1.84-1.27,2.82-3.52,2.44-5.59-.09-.47-.24-.92-.46-1.35l.27-.07c.07.13.15.26.26.36,1.08,1.01,2.07,1.9,3.28,2.61,1.31.77,2.68,1.17,3.98,1.17.2,0,.41,0,.61-.03,1.91-.19,3.56-1.3,4.3-2.89.68-1.45.58-3.28-.27-5.02-.03-.06-.06-.11-.09-.16.39.16.81.25,1.25.25.27,0,.54-.03.81-.1.99-.24,1.86-.89,2.33-1.76.78-1.45.51-3.39-.66-4.72h0Z"
                      />
                    </clipPath>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="main__section main__section--news">
            <ul className="modListNews modListNews--newsPage">
              {news &&
                news.map((item) => (
                  <li class="modListNews__item" key={item.id}>
                    <Link
                      href={`news/${encodeURIComponent(item.id)}`}
                      className="modListNews__item__inner"
                    >
                      <date class="modListNews__item__date">
                        {formatDate(item.date)}
                      </date>
                      <p class="modListNews__item__news">
                        {item.title.rendered}
                      </p>
                    </Link>
                  </li>
                ))}
            </ul>
            <div className="main__section__pagination"></div>
          </div>
        </div>
      </main>
    </>
  );
}
