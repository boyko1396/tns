// select init
const selectElements = document.querySelectorAll('.select-el');

selectElements.forEach((selectEl) => {
  const selectedOption = selectEl.querySelector('.select-el__selected');
  const dropdown = selectEl.querySelector('.select-el__dropdown');
  const options = selectEl.querySelectorAll('.select-el__dropdown .select-el__dropdown-line');

  const toggleDropdown = () => {
    selectEl.classList.toggle('is-open');
  };

  const setSelectedOption = (option) => {
    options.forEach((opt) => {
      opt.classList.remove('is-selected');
    });

    option.classList.add('is-selected');

    const title = option.querySelector('.select-el__dropdown-line-title')?.textContent || '';
    const subtitle = option.querySelector('.select-el__dropdown-line-subtitle')?.textContent || '';

    selectedOption.innerHTML = `
      <div class="select-el__dropdown-line">
        <div class="select-el__dropdown-line-title">${title}</div>
        <div class="select-el__dropdown-line-subtitle">${subtitle}</div>
      </div>
    `;

    toggleDropdown();
    setTimeout(updateSelectClass, 0);
  };

  const updateSelectClass = () => {
    const isAnyOptionSelected = selectEl.querySelector('.select-el__dropdown-line.is-selected');
    if (isAnyOptionSelected) {
      selectEl.classList.add('is-selected');
    } else {
      selectEl.classList.remove('is-selected');
    }
  };

  options.forEach((option) => {
    option.addEventListener('click', () => {
      setSelectedOption(option);
    });
  });

  selectedOption.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleDropdown();
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    const isSelect = selectEl.contains(target);
    if (!isSelect && selectEl.classList.contains('is-open')) {
      toggleDropdown();
    }
  });

  // setTimeout(updateSelectClass, 0);
});