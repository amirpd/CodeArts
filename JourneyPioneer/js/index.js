$(document).ready(function(){
   
    $('.slider-pac').slick({
      arrows:true,
      autoplay:true,
      dots: true,
      nextArrow:'.sl-prev',
      prevArrow:'.sl-next',
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });


  $(document).ready(function(){
   
    $('.sh').slick({
      arrows:true,
      autoplay:true,
      nextArrow:'.sll-prev',
      prevArrow:'.sll-next',
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });
  const button = document.getElementById('collapButton');
      const arrow = document.getElementById('arrowIcon');

      button.addEventListener('click', function () {
          if (button.getAttribute('aria-expanded') === 'true') {
              arrow.classList.remove('fa-angle-down');
              arrow.classList.add('fa-angle-up');
          } else {
              arrow.classList.remove('fa-angle-up');
              arrow.classList.add('fa-angle-down');
          }
          
      });

      // form 
      // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()