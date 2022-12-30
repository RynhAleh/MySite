$(document).ready(function() {
  // MODAL
  var modalText = {
    nika: {
      title: 'NikaSoft',
      tag: 'ACCOUNTING SYSTEM',
      detail:
        'I wanted to creare a program that could provide accounting of enterprise by one person, an I succeed! NikaSoft does it in three enterprises and meets all accountatns needs: from payroll to equipment accounting',
      link: '#'
    },
    forex: {
      title: 'Forex trading',
      tag: 'AUTOMATED TRADING SYSTEMS',
      detail: 'About a hundred of forex robots written have given me experience and some money. My automated advisor was sold to people all over the world and helped them earn money as well. My robot "Double Extremum" took 8th place on sql5.com in 2018',
      link: '#'
    },
    melarossa: {
      title: 'Melarossa',
      tag: 'GRADUATING FROM IT-SCOOL',
      detail:
        'Software Testing: Test plan; Testing of documentation and requirements; Creating checklists; Designing tests; Developing tests; Test cases; Finding and documenting defects; TRR; Usability testing and testing of web applications; Automated testing; Software development methodologies (including Agile); Working with Jira, Postman, SQL, etc.',
      link: 'https://melarossa.by/'
    },
    /*roambi*/django: {
      title: 'DJango Project',
      tag: 'ONLINE SHOP',
      detail:
        'Create, View, Change, Delete items. Work with SQLite3. Relationships one-to-many. Multiple filters. Two view modes.',
      link: '#'
    },
    overone: {
      title: 'IT-OVERONE',
      tag: 'GRADUATING FROM IT-SCOOL',
      detail:
        'The way of Python: GIT, GitHub; Constructions of Python; Functional oriented & Object oriented programming; Databases; HTML & SCC; Django; Application architecture; JWT authorization; Website developing on Django; Flask; Website developing on Flask; Requests, etc.',
      link: 'https://overone.by/'
    },
    /*powur*/flask: {
      title: 'Flask Project',
      tag: 'ONLINE SHOP',
      detail:
        'Using bootstrap themes, JavaScripts. Work with SQLite3. Relationships one-to-many. Added payment module.',
      link: '#'
    }/*,
    mystand: {
      title: 'MyStand',
      tag: 'CROWD-FUNDED CHARITY.',
      detail:
        'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.'
    },
    never: {
      title: 'NeverSurrender',
      tag: 'ALS AWARENESS.',
      detail:
        'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.'
    },
    themall: {
      title: 'The Mall',
      tag: 'PEER GUIDED SHOPPING.',
      detail:
        'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.'
    }*/
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
