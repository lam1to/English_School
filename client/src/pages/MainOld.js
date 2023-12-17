import React from 'react';
import StartMainImg from '../img/start_main_img.png';
import CirclesSvg from '../img/circles.svg';
import WhyEnglishImg from '../img/why_english_img.svg';
import '../Styles/main.css';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { REGISTR_ROUTE } from '../utils/consts';

const MainOld = observer(() => {
  return (
    <div>
      <div className="start_main">
        <div className="start_main_img">
          <img className="Sova_in_start_main" src={StartMainImg} alt="" />
        </div>
        <div className="start_main_learn_row">
          <div className="start_main_learn_title">
            Учите английский язык <br /> в “Easy English”
          </div>
          <div className="start_main_learn_text">
            Повышайте свои навыки,
            <br /> обучайтесь с удовольствием
          </div>
          <Link to={REGISTR_ROUTE} className="start_main_learn_buttom_link">
            <div className="start_main_learn_buttom_start blue_buttom">
              Начать
            </div>
          </Link>
        </div>
      </div>
      <div className="why_english">
        <div className="why_english_container _container">
          <p className="why_english_title">
            Почему вам точно <br /> понравится{' '}
            <span className="why_english_title-blue"> Easy English? </span>
          </p>
          <div className="why_english_block_main">
            <div className="why_english_list_one">
              <div className="why_english_block block_max">
                <div className="why_english_block-img_absolute">
                  <img src={CirclesSvg} alt="" />
                </div>
                <div className="why_english_block_for_title">
                  <div className="why_english_block-title">
                    Разделение по <br /> уровням знаний
                  </div>
                  <div className="why_english_block-text">
                    Баланс между комфортным <br /> обучением и сложностью <br />{' '}
                    заданий
                  </div>
                </div>
              </div>

              <div className="why_english_block">
                <div className="why_english_block-img_absolute">
                  <img src={CirclesSvg} alt="" />
                </div>
                <div className="why_english_block_for_title">
                  <div className="why_english_block-title">
                    Видео и познавательные <br /> рассказы
                  </div>
                  <div className="why_english_block-text">
                    Выбирайте то, что интересно <br /> именно вам и обучайтесь{' '}
                    <br /> с удовольствием
                  </div>
                </div>
              </div>
            </div>
            <div className="why_english_img">
              <img src={WhyEnglishImg} alt="" />
            </div>
            <div className="why_english_list_two">
              <div className="why_english_block block_max">
                <div className="why_english_block-img_absolute">
                  <img src={CirclesSvg} alt="" />
                </div>
                <div className="why_english_block_for_title">
                  <div className="why_english_block-title">
                    Возможность выбора <br /> раздела языка
                  </div>
                  <div className="why_english_block-text">
                    Тренируйте свои навыки в <br /> интересующей вас области
                  </div>
                </div>
              </div>

              <div className="why_english_block">
                <div className="why_english_block-img_absolute">
                  <img src={CirclesSvg} alt="" />
                </div>
                <div className="why_english_block_for_title">
                  <div className="why_english_block-title">
                    Просмотр прогресса <br />
                    обучения
                  </div>
                  <div className="why_english_block-text">
                    Следите за своими успехами <br /> и продолжайте развиваться
                    в <br /> изучении английского языка
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer_block">
        <div className="footer_container _container">
          <div className="footer_main-block">
            <p className="footer_titel">
              Начинайте свое обучение <br /> вместе с нами{' '}
              <span className="footer_titel_bold"> прямо сейчас!</span>
            </p>
            <Link to={REGISTR_ROUTE} className="footer_buttom-link ">
              <div className="footer_buttom_block blue_buttom">Начать</div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default MainOld;
