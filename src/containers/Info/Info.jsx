import React from "react";

import {CABINET_ROUTES} from "../../config/constants";

import './Info.scss';


const Info = () => {
  return (
    <section id='info' className="info" >
      <div className="container">
        <h2 className="title info__title">
          Основна інформація
        </h2>

        <div className="info__items">
          <div className="info-item">
            <div className="info-item__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480.276 480.276">
                <path
                  d="M468.259 211.026l-.145-.145c-32.914-34.482-99.788-91.429-178.678-91.429-45.453 0-94.563 19.853-141.584 57.469a381.386 381.386 0 00-45.453 42.318 265.995 265.995 0 00-19.331-33.437c-23.51-35.004-48.065-52.767-72.62-52.767C4.678 133.036 0 137.714 0 143.485v193.306c0 5.771 4.678 10.449 10.449 10.449 24.555 0 49.11-17.763 72.62-52.767a265.976 265.976 0 0019.331-33.437 381.386 381.386 0 0045.453 42.318c47.02 37.616 96.131 57.469 141.584 57.469 78.89 0 145.763-56.947 178.678-91.429 16.158-16.077 16.222-42.21.144-58.368zM87.771 242.75c-11.494 25.078-35.526 72.098-66.873 82.024V155.501c31.347 9.927 55.38 56.947 67.396 82.024a17.79 17.79 0 00-.523 5.225zm201.666 97.176c-84.637 0-157.78-76.8-177.633-99.788 19.853-22.988 92.996-99.788 177.633-99.788 29.71.801 58.77 8.874 84.637 23.51-23.51 12.539-40.229 42.318-40.229 76.278s16.718 63.739 40.229 76.278a181.83 181.83 0 01-84.637 23.51zm164.049-84.637a389.766 389.766 0 01-55.38 46.498c-24.033-1.567-43.363-28.735-43.363-61.649s19.331-60.082 43.363-61.649a389.766 389.766 0 0155.38 46.498c7.837 8.58 7.837 21.721 0 30.302z"/>
                <path
                  d="M400.718 202.521c-15.293 0-27.69 12.397-27.69 27.69s12.397 27.69 27.69 27.69 27.69-12.397 27.69-27.69c0-15.292-12.397-27.69-27.69-27.69zm0 34.482a6.792 6.792 0 110-13.584 6.792 6.792 0 010 13.584z"/>
              </svg>
            </div>

            <h6 className="info-item__title">
              Види риби
            </h6>

            <div className="info-item__lists">
              <ul className="info-item__list">
                <li>Щука</li>
                <li>Судак</li>
                <li>Окунь</li>
                <li>Товстолоб</li>
                <li>Короп</li>
              </ul>

              <ul className="info-item__list">
                <li>Линь</li>
                <li>Карась</li>
                <li>Билий амур</li>
                <li>Плітва</li>
              </ul>
            </div>


            <p className='info-item__text'>Плавають трофеї, які можуть досягати 17-18 кілограм</p>
          </div>

          <div className="info-item">
            <div className="info-item__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
                <path
                  d="M413.656 34.344l-32-32A8 8 0 00376 0H72a8 8 0 00-8 8v432a8 8 0 002.344 5.656l32 32A8 8 0 00104 480h304a8 8 0 008-8V40a8 8 0 00-2.344-5.656zM312 27.312L388.688 104H312V27.312zM400 464H107.312L80 436.688V16h216v96a8 8 0 008 8h96v344zm0-371.312L323.312 16h49.376L400 43.312v49.376z"/>
                <path
                  d="M344 136H136a8 8 0 000 16h208a8 8 0 000-16zM344 184H136a8 8 0 000 16h208a8 8 0 000-16zM344 232H136a8 8 0 000 16h208a8 8 0 000-16zM344 280H136a8 8 0 000 16h208a8 8 0 000-16zM344 328H136a8 8 0 000 16h208a8 8 0 000-16zM344 376H136a8 8 0 000 16h208a8 8 0 000-16zM240 56c-17.673 0-32 14.327-32 32s14.327 32 32 32c17.673 0 32-14.327 32-32s-14.327-32-32-32zm0 48c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z"/>
              </svg>
            </div>

            <h6 className="info-item__title">
              Правила рибалки
            </h6>

            <ul className="info-item__list">
              <li>Можно мати 2 удилища по 1 крючку</li>
              <li>Максимальний улов, що можна з собою взяти - 3кг</li>
              <li>Подсака та мат - обов'язковий атрибут</li>
              <li>Трофеї більші ніж 3кг - відпускаються</li>
            </ul>
          </div>

          <div className="info-item">
            <div className="info-item__icon">
              <svg height="512" viewBox="0 0 511.969 511.969" width="512" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M426.523 283.917l-76.444-119.836c10.831-5.692 18.24-17.05 18.24-30.112 0-14.297-8.875-26.553-21.402-31.57l23.158-80.964a10.001 10.001 0 00-2.543-9.821c-15.405-15.404-40.469-15.404-55.874 0-3.685 3.685-8.584 5.714-13.795 5.714s-10.11-2.029-13.818-5.738l-.049-.049c-15.35-15.352-40.371-15.395-55.783-.091l-.287.286c-7.607 7.553-19.962 7.531-27.541-.049l-.073-.073c-15.405-15.404-40.469-15.404-55.874 0a10.004 10.004 0 00-2.542 9.828l23.208 80.938c-12.554 5.004-21.453 17.273-21.453 31.59 0 13.062 7.408 24.42 18.24 30.112L85.446 283.917c-29.574 46.36-31.448 102.826-5.013 151.045s75.047 77.007 130.038 77.007h91.026c54.99 0 103.602-28.788 130.038-77.007 26.435-48.219 24.562-104.685-5.012-151.045zM186.169 25.756l.073.073c15.352 15.351 40.372 15.393 55.783.091l.287-.286c7.606-7.553 19.961-7.531 27.564.072l.049.049c15.405 15.404 40.469 15.404 55.874 0 6.268-6.268 15.775-7.371 23.183-3.309L326.81 99.969H185.22l-22.23-77.524c7.408-4.061 16.912-2.956 23.179 3.311zm227.829 399.592c-22.87 41.716-64.926 66.622-112.5 66.622h-91.026c-47.574 0-89.63-24.905-112.5-66.622-22.87-41.716-21.249-90.566 4.336-130.675l80.825-126.704h27.852c5.523 0 10-4.477 10-10s-4.477-10-10-10h-33.334c-7.72 0-14-6.28-14-14s6.28-14 14-14H334.318c7.72 0 14 6.28 14 14s-6.28 14-14 14h-33.333c-5.523 0-10 4.477-10 10s4.477 10 10 10h27.851l80.826 126.704c25.585 40.108 27.206 88.958 4.336 130.675z"/>
                <path
                  d="M273.615 326.579c-2.509-.887-5.07-1.81-7.63-2.769v-45.322c6.78 1.995 11.308 5.23 11.5 5.37 4.399 3.295 10.64 2.421 13.964-1.966 3.335-4.402 2.47-10.674-1.932-14.01-.587-.445-9.885-7.347-23.532-9.96v-9.952c0-5.523-4.477-10-10-10s-10 4.477-10 10v9.88a51.689 51.689 0 00-5.151 1.259c-14.074 4.229-24.594 16.265-27.455 31.411-2.611 13.83 1.82 27.169 11.564 34.811 5.288 4.147 11.895 7.934 21.042 11.956v57.996c-7.875-.498-13.143-2.29-21.925-8.035-4.621-3.025-10.82-1.728-13.843 2.894-3.024 4.622-1.728 10.819 2.894 13.843 12.806 8.377 21.477 10.75 32.874 11.311v10.341c0 5.523 4.477 10 10 10s10-4.477 10-10v-11.38c21.414-4.69 33.938-22.559 36.748-39.275 3.673-21.854-7.756-40.853-29.118-48.403zm-36.329-16.986c-3.844-3.015-5.474-8.902-4.254-15.363 1.122-5.942 5.12-13.107 12.953-15.758v36.623c-3.288-1.753-6.255-3.585-8.699-5.502zm45.723 62.072c-1.44 8.565-7.221 17.649-17.025 21.663v-48.239c.326.116.635.229.965.346 17.929 6.337 16.826 21.679 16.06 26.23zM255.985 167.969c2.63 0 5.21-1.07 7.07-2.93s2.93-4.44 2.93-7.07-1.07-5.21-2.93-7.07-4.44-2.93-7.07-2.93-5.21 1.07-7.07 2.93-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07 4.439 2.93 7.07 2.93z"/>
              </svg>
            </div>

            <h6 className="info-item__title">
              Ціни
            </h6>

            <ul className="info-item__list">
              <li>Рибалка (1 чол.) 7:00 - 20:00 — <span>600 грн</span></li>
              <li>Аренда бесідки (до 6 чол.) — <span>600 грн</span></li>
              <li>Мангал + дрова — <span>150 грн</span></li>
              <li>Аренда великої бесідки + посуд + меблі (з 1 чол.) — <span>150 грн</span></li>
            </ul>
          </div>
        </div>

        <a
          href={CABINET_ROUTES.viber}
          target="_blank"
          className="link-btn link-btn--light info__link-btn"
          rel="noopener noreferrer"
        >
            <span>
              Написати нам
            </span>

          <svg width="21" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.225 12.735c.657-5.524-.315-9.012-2.068-10.59h.001C15.33-.55 5.776-.95 2.392 2.264.872 3.837.337 6.145.278 9.001c-.059 2.857-.128 8.21 4.86 9.661h.004l-.005 2.218s-.034.898.54 1.079c.656.212.953-.205 2.995-2.643 3.413.296 6.035-.382 6.333-.481.69-.231 4.59-.747 5.22-6.1zm-11.217 5.02s-2.16 2.695-2.832 3.394c-.22.228-.461.207-.458-.244 0-.297.017-3.682.017-3.682-4.229-1.212-3.98-5.77-3.934-8.153.046-2.386.483-4.34 1.77-5.655C6.54.632 14.915 1.254 17.049 3.26c2.609 2.312 1.68 8.846 1.686 9.07-.536 4.467-3.697 4.75-4.278 4.944-.249.082-2.554.675-5.449.482z" fill="#fff"/><path d="M10.204 3.939c-.353 0-.353.55 0 .554 2.738.022 4.993 1.93 5.017 5.43 0 .37.541.366.537-.004h-.001c-.03-3.772-2.492-5.959-5.553-5.98z" fill="#fff"/><path d="M13.805 9.344c-.008.364.532.382.536.012.045-2.08-1.237-3.793-3.647-3.973-.353-.026-.39.529-.038.554 2.09.159 3.191 1.585 3.15 3.407zM13.228 11.71c-.453-.263-.914-.1-1.105.158l-.399.516c-.202.262-.58.227-.58.227C8.38 11.881 7.64 8.99 7.64 8.99s-.033-.392.22-.602l.498-.412c.25-.198.407-.675.153-1.143-.678-1.226-1.134-1.648-1.366-1.973-.243-.305-.61-.374-.991-.168h-.009c-.793.464-1.66 1.332-1.383 2.226.474.942 1.345 3.946 4.12 6.216 1.305 1.073 3.37 2.173 4.246 2.427l.008.013c.863.288 1.703-.614 2.151-1.43v-.007c.2-.395.133-.77-.157-1.014-.516-.502-1.293-1.057-1.903-1.413z" fill="#fff"/><path d="M11.072 7.429c.88.051 1.308.511 1.354 1.456.016.37.552.344.536-.025-.059-1.234-.702-1.922-1.861-1.986-.353-.021-.386.534-.03.555z" fill="#fff"/></svg>
        </a>
      </div>
    </section>
  )
};

export default Info;
