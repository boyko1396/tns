document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.js-profile-nav')) {
    // header dropdown toggle mobile
    const headerBtnToggle = document.querySelectorAll('.js-header-toggle');

    headerBtnToggle.forEach(function(button) {
      button.addEventListener('click', function() {
        document.body.classList.toggle('is-hidden-mobile');
        document.body.classList.toggle('is-open-menu-mobile');
      });
    });

    // header profile nav dropdown
    const headerProfileBtn = document.querySelector('.js-profile-nav');
    const headerProfileNav = document.querySelector('.header__top-aside-profile');

    headerProfileBtn.addEventListener('click', function(event) {
      if (headerProfileNav.classList.contains('is-open')) {
        headerProfileNav.classList.remove('is-open');
      } else {
        headerProfileNav.classList.add('is-open');
      }
      event.stopPropagation();
    });

    document.addEventListener('click', function() {
      if (event.target !== headerProfileBtn && !headerProfileBtn.contains(event.target)) {
        headerProfileNav.classList.remove('is-open');
      }
    });
  }

  if (document.querySelector('.js-block-b-f-close')) {
    const closeButtonBlockBF = document.querySelector('.js-block-b-f-close');
    // banner btn close

    closeButtonBlockBF.addEventListener('click', () => {
      const blockBF = closeButtonBlockBF.closest('.block-b-f');
      blockBF.classList.add('is-hidden');
    });
  }

  // btn bookmark toggle
  if (document.querySelector('.js-bookmark-btn')) {
    const bookmarkBtn = document.querySelectorAll('.js-bookmark-btn');

    bookmarkBtn.forEach(function(btn) {
      btn.addEventListener('click', function() {
        this.classList.toggle('is-active');
      });
    });
  }

  // modal action init
  if (document.querySelector('.modal-action')) {
    const modalActions = document.querySelectorAll('.modal-action');
    const modalActionDropdown = document.querySelector('.modal-action__dropdown');

    modalActions.forEach(function(modalAction) {
      const modalActionInit = modalAction.querySelector('.js-modal-action-init');

      modalActionInit.addEventListener('click', function(event) {
        modalAction.classList.toggle('is-active');

        modalActionInit.classList.toggle('is-active');

        event.stopPropagation();
      });

      document.addEventListener('click', function(event) {
        if (
          event.target !== modalAction &&
          event.target !== modalActionDropdown &&
          !modalAction.contains(event.target)
        ) {
          modalAction.classList.remove('is-active');
          modalActionInit.classList.remove('is-active');
        }
      });
    });
  }

  // btn-moore toggle
  if (document.querySelector('.js-btn-moore-toggle')) {
    const btnMooreTitle = document.querySelectorAll('.js-btn-moore-toggle');

    btnMooreTitle.forEach(function(btn) {
      btn.addEventListener('click', function() {
        this.classList.toggle('is-active');
      });
    });
  }
});