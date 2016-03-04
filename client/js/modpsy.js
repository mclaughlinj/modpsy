$( document ).ready(function() {

  //get('https://prioritymomentsapi-lb.ref.o2.co.uk/offerService/geosearch/0,0/447700000401/5405f475e4b0d6d7e08299ee', succeeded, 'testing');

  // Fade in
  $('.page__header__h1').fadeIn(2000, function() {
      $('.content__article, .home__section__mainContent, .portfolio__section__mainContent').fadeIn( 2000, function() {
      //$('.portfolio__section__img').css('width','480px');
      });
      $('nav').fadeIn( 2000 );
      $('footer').fadeIn( 3000 );
    });

  $('.page__nav__reveal__div').mouseenter(function() {
    $('nav').addClass('page__nav__open');
    $('html').addClass('tapable');
    $('.page__nav__reveal__div').fadeOut( 200 );
  });

  $('nav').mouseleave(function() {
    closeNav();
  });

  $('html.tapable').tap(function() {
    alert('tap');
  });

  $('.imgTwo').click(function() {
    alert($(this).attr('class'));
    $('.imgOne').removeClass('imgOne').addClass('imgTwo');
    $(this).removeClass('imgTwo').addClass('imgOne');
  });

  $('.imgThree').click(function() {
    alert($(this).attr('class'));
    $('.imgOne').removeClass('imgOne').addClass('imgThree');
    $(this).removeClass('imgThree').addClass('imgOne');
  });

});

function succeeded(output) {
  alert(output);
}

function closeNav() {
  $('html').removeClass('tapable');
    $('nav').removeClass('page__nav__open');
    $('.page__nav__reveal__div').fadeIn( 400 );
}

function get(url, success, loadingMessage) {
  var startTime;
  $.ajax({
    dataType: 'json',
    type: 'GET',
    url: url,
    success: function(res) {
      if (loadingMessage) {
        setTimeout(function() {
          success(res);
          loadingDialogElement.remove();
        }, 1500 - (Date.now() - startTime));
      } else {
        success(res);
      }
    },
    error: function() {
      window.location.replace('/error');
    }
  });
}

function post(url, data, success, loadingMessage) {
  var startTime;
  $.ajax({
    dataType: 'json',
    type: 'POST',
    url: url,
    data: data,
    success: function(res) {
      if (loadingMessage) {
        setTimeout(function() {
          success(res);
          loadingDialogElement.remove();
        }, 1500 - (Date.now() - startTime));
      } else {
        success(res);
      }
    },
    error: function() {
      window.location.replace('/error');
    }
  });
}
