import React, { useEffect} from 'react'
import '../styles/testimonial.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import $ from 'jquery'
import img1 from '../assets/2.jpeg'
import img2 from '../assets/3.jpeg'
import img3 from '../assets/4.jpeg'
import img4 from '../assets/5.jpeg'

const Testimonial = () =>{
    useEffect(() => {
      Aos.init({duration: 1500})
    }, []);
    return(
    <div class="cards">
        <h2>Seminars</h2>

    <div data-aos="fade-up" class="card">
    <div class="card__image-holder">
      <img class="card__image" src={img1} alt="wave" />
    </div>
    <div class="card-title">
      <a href="#" class="toggle-info btn">
        <span class="left"></span>
        <span class="right"></span>
      </a>
      <h2>
          Seminar
          <small>A seminar held at...</small>
      </h2>
    </div>
    <div class="card-flap flap1">
      <div class="card-description">
        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
      <div class="card-flap flap2">
        <div class="card-actions">
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
    </div>
  </div>

    <div data-aos="fade-up" class="card">
    <div class="card__image-holder">
      <img class="card__image" src={img2} alt="beach" />
    </div>
    <div class="card-title">
      <a href="#" class="toggle-info btn">
        <span class="left"></span>
        <span class="right"></span>
      </a>
      <h2>
          Seminar
          <small>A seminar held at...</small>
      </h2>
    </div>
    <div class="card-flap flap1">
      <div class="card-description">
        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
      <div class="card-flap flap2">
        <div class="card-actions">
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
    </div>
  </div>

    <div data-aos="fade-up" class="card">
    <div class="card__image-holder">
      <img class="card__image" src={img3} alt="mountain" />
    </div>
    <div class="card-title">
      <a href="#" class="toggle-info btn">
        <span class="left"></span>
        <span class="right"></span>
      </a>
      <h2>
          Seminar
          <small>A seminar held at...</small>
      </h2>
    </div>
    <div class="card-flap flap1">
      <div class="card-description">
        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
      <div class="card-flap flap2">
        <div class="card-actions">
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
    </div>
  </div>

    <div data-aos="fade-up" class="card">
    <div class="card__image-holder">
      <img class="card__image" src={img4} alt="field" />
    </div>
    <div class="card-title">
      <a href="#" class="toggle-info btn">
        <span class="left"></span>
        <span class="right"></span>
      </a>
      <h2>
          Seminar
          <small>A seminar held at...</small>
      </h2>
    </div>
    <div class="card-flap flap1">
      <div class="card-description">
        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
      <div class="card-flap flap2">
        <div class="card-actions">
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
    </div>
  </div>

    <div data-aos="fade-up" class="card">
    <div class="card__image-holder">
      <img class="card__image" src={img2} alt="water" />
    </div>
    <div class="card-title">
      <a href="#" class="toggle-info btn">
        <span class="left"></span>
        <span class="right"></span>
      </a>
      <h2>
          Seminar
          <small>A seminar held at...</small>
      </h2>
    </div>
    <div class="card-flap flap1">
      <div class="card-description">
        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
      <div class="card-flap flap2">
        <div class="card-actions">
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
    </div>
  </div>

    <div data-aos="fade-up" class="card">
    <div class="card__image-holder">
      <img class="card__image" src={img3} alt="river" />
    </div>
    <div class="card-title">
      <a href="#" class="toggle-info btn">
        <span class="left"></span>
        <span class="right"></span>
      </a>
      <h2>
          Seminar
          <small>A seminar held at...</small>
      </h2>
    </div>
    <div class="card-flap flap1">
      <div class="card-description">
        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
      </div>
      <div class="card-flap flap2">
        <div class="card-actions">
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
    </div>
  </div>

  </div>
)
}

$(document).ready(function(){
    var zindex = 10;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.cards").hasClass("showing")) {
        // a card is already in view
        $("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          // this card was showing - reset the grid
          $("div.cards")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });

export default Testimonial;