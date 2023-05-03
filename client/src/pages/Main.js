import React from 'react'
import StartMainImg from '../img/start_main_img.png'
import CirclesSvg from '../img/circles.svg'
import WhyEnglishImg from '../img/why_english_img.svg'
import '../Styles/main.css'

const Main = () => {
  return (
    <div>
      <div class="start_main">
            <div class="start_main_img">
                    <img class="Sova_in_start_main" src= {StartMainImg} alt=""/>
            </div>
            <div class="start_main_learn_row">
            
                <div class="start_main_learn_title">
                    Учите английский язык <br/> в  “Easy English”
                </div>
                <div class="start_main_learn_text">
                    Повышайте свои навыки,<br/> обучайтесь с удовольствием
                </div>
                <a class="start_main_learn_buttom_link" href="">
                    <div class="start_main_learn_buttom_start blue_buttom">
                        Начать
                    </div>    
                </a>
            </div>
        </div>
        <div class="why_english">
            <div class="why_english_container _container">
                <p class="why_english_title">
                    Почему вам точно <br/> понравится <span class="why_english_title-blue"> Easy English? </span>
                </p>
                <div class="why_english_block_main">
                    <div class="why_english_list_one">
                        <div class="why_english_block block_max">
                            <div class="why_english_block-img_absolute">
                                <img src= {CirclesSvg} alt=""/>
                            </div>
                            <div class="why_english_block_for_title">
                                <div class="why_english_block-title">
                                    Разделение по <br/> уровням знаний
                                </div>
                                <div class="why_english_block-text">
                                    Баланс между комфортным <br/> обучением и сложностью <br/> заданий
                                </div>
                            </div>
                        </div>
    
                        <div class="why_english_block">
                            <div class="why_english_block-img_absolute">
                                <img src= {CirclesSvg} alt=""/>
                            </div>
                            <div class="why_english_block_for_title">
                                <div class="why_english_block-title">
                                   Видео и познавательные <br/> рассказы
                                </div>
                                <div class="why_english_block-text">
                                    Выбирайте то, что интересно <br/> именно вам и обучайтесь <br/> с удовольствием
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="why_english_img">
                        <img src={WhyEnglishImg} alt=""/>
                    </div>
                    <div class="why_english_list_two">
                        <div class="why_english_block block_max">
                            <div class="why_english_block-img_absolute">
                                <img src= {CirclesSvg} alt=""/>
                            </div>
                            <div class="why_english_block_for_title">
                                <div class="why_english_block-title">
                                    Возможность выбора <br/> раздела языка
                                </div>
                                <div class="why_english_block-text">
                                    Тренируйте свои навыки в <br/> интересующей вас области 
                                </div>
                            </div>
                        </div>
    
                        <div class="why_english_block">
                            <div class="why_english_block-img_absolute">
                                <img src= {CirclesSvg} alt=""/>
                            </div>
                            <div class="why_english_block_for_title">
                                <div class="why_english_block-title">
                                    Просмотр прогресса <br/>
                                    обучения
                                </div>
                                <div class="why_english_block-text">
                                    Следите за своими успехами <br/> и продолжайте развиваться в <br/> изучении английского языка
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        <footer class="footer_block">
            <div class="footer_container _container">
                <div class="footer_main-block">
                    <p class="footer_titel">
                        Начинайте свое обучение <br/> вместе с нами <span class="footer_titel_bold"> прямо сейчас!</span>
                    </p>
                    <a href="" class="footer_buttom-link ">
                        <div class="footer_buttom_block blue_buttom">
                            Начать
                        </div>
                    </a>
                   
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Main