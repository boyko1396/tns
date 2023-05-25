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

// btn bookmark toggle
const bookmarkBtn = document.querySelectorAll('.js-bookmark-btn');

bookmarkBtn.forEach(function(btn) {
  btn.addEventListener('click', function() {
    this.classList.toggle('is-active');
  });
});

// modal action init
const modalActions = document.querySelectorAll('.modal-action');
const modalActionDropdown = document.querySelector('.modal-action__dropdown');

modalActions.forEach(function(modalAction) {
  const modalActionInit = modalAction.querySelector('.js-modal-action-init');

  modalActionInit.addEventListener('click', function(event) {
    // Toggle the 'is-active' class on the current '.modal-action' element
    modalAction.classList.toggle('is-active');

    // Toggle the 'is-active' class on the '.js-modal-action-init' button
    modalActionInit.classList.toggle('is-active');

    event.stopPropagation(); // Stop further propagation of the click event
  });

  document.addEventListener('click', function(event) {
    // Check if the click occurred on elements not belonging to the current modal
    if (
      event.target !== modalAction &&
      event.target !== modalActionDropdown &&
      !modalAction.contains(event.target)
    ) {
      // Remove the 'is-active' class from the current '.modal-action' element
      modalAction.classList.remove('is-active');

      // Remove the 'is-active' class from the '.js-modal-action-init' button
      modalActionInit.classList.remove('is-active');
    }
  });
});

// btn-moore toggle
const btnMooreTitle = document.querySelectorAll('.js-btn-moore-toggle');

btnMooreTitle.forEach(function(btn) {
  btn.addEventListener('click', function() {
    this.classList.toggle('is-active');
  });
});

// input label
const inputLabels = document.querySelectorAll('.js-input-label');

function handleBlur() {
  if (this.value !== '') {
    this.nextElementSibling.classList.add('is-active');
  } else {
    this.nextElementSibling.classList.remove('is-active');
  }
}

inputLabels.forEach(function(inputLabel) {
  inputLabel.addEventListener('blur', handleBlur);
});

function updateInputLabels() {
  inputLabels.forEach(function(inputLabel) {
    if (inputLabel.value !== '') {
      inputLabel.nextElementSibling.classList.add('is-active');
    } else {
      inputLabel.nextElementSibling.classList.remove('is-active');
    }
  });
}

updateInputLabels();