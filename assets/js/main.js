// Khi scroll header thành fixed
function onHead(){
    const nav = document.querySelector('.header__logo__nav__container');
    window.addEventListener('scroll', function() {
      const offset = window.pageYOffset;
      
      if(offset > 0)
        nav.classList.add('stuck')
      else if(offset < 10)
        nav.classList.remove('stuck')
    });
  };
  onHead();




  document.addEventListener( 'DOMContentLoaded', function () {  
  new Splide( '.splide', {
    type    : 'loop',
      perPage : 1,
      pagination : false,
      speed: 600,
      rewindSpeed: 0,
      classes: {
      arrow : 'splide__arrow whyChooseUs__box__slides__app__arrow',
    }
  } ).mount();

} );

// Thứ viện menudropdown by: henhpropd
function menuDropDownMobile(options) {
    var menuShowMobile = document.querySelector(options.menuShowMobile);
    const body = document.querySelector('body');
    if (menuShowMobile) {
      var btnShowMenus =  document.querySelector(options.btnShowMenus);
      var closeAll = document.querySelectorAll(options.closeMenus);
      // Xử lý sự kiện Đóng mở Menus
      if (btnShowMenus) {
        // Mở Menus
          btnShowMenus.onclick = function() {
          menuShowMobile.classList.toggle('show-nav');
          body.classList.add('ghim')
          closeAll.forEach(function(close){
            close.classList.add('on')
          })
  
        }
        // Xử lý sợ kiện mở đóng menu Dropdown
        var btnSub = menuShowMobile.querySelectorAll(options.btnShowMenuSub);
        var subMenuAll = menuShowMobile.querySelectorAll(options.subMenu);
        if (btnSub) {
          btnSub.forEach(function (btn){
            var subMenus = btn.parentElement.querySelector(options.subMenu);
            btn.onclick = function() {
              btn.classList.toggle('quay');
              subMenus.classList.toggle('show');
            }
          });
        }
  
        // Đóng Menus + dropdown-menu
        if(closeAll) {
          for (let i = 0; i < closeAll.length; i++) {
            // Tắt ghim body and đóng menu
            closeAll[i].onclick = function() {
              menuShowMobile.classList.remove('show-nav');
              body.classList.remove('ghim');
              // Đóng menu-sub
              for (let i = 0; i < btnSub.length; i++) {
                btnSub[i].classList.remove('quay');
                subMenuAll[i].classList.remove('show');
              }
              // Tắt nút X và lớp fill X;
              for (let i = 0; i < closeAll.length; i++) {
                closeAll[i].classList.remove('on');
              }
            }
          }
        }
      };
    }
  }