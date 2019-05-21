const form = document.querySelector('form');
const fullname = document.getElementById('fullname');
const errors = document.querySelectorAll('.error');
const hideInfo = document.getElementById('hide-info');
const wideInfo = document.getElementById('wide-info');
const phone = document.getElementById('phone');
const selectRegions = document.getElementById('region');
const labelCity = document.querySelector('label[for="city"]');
const selectCities = document.querySelector('select[name="city"]');
const optionsCities = document.querySelectorAll('select[name="city"] option.display-none');
const submit = document.querySelector('input[type="submit"]');

// Input full name
fullname.addEventListener('focus', (e) => {
  e.target.classList.remove('not-valid');
  e.target.classList.remove('valid');
});

fullname.addEventListener('blur', () => {
  const fullnameValue = fullname.value.trim();
  const wordsNum = fullnameValue.split(' ').length;

  if (wordsNum > 1 && wordsNum < 4) {
    fullname.classList.remove('not-valid');
    fullname.classList.add('valid');
    errors[0].classList.add('display-none');
  } else {
    fullname.classList.add('not-valid');
    errors[0].classList.remove('display-none');
  }
});

// Checkbox - hide wide info (input 'phone' and select 'region'...)
hideInfo.addEventListener('change', () => {
  if (hideInfo.checked) {
    wideInfo.classList.add('display-none');
  } else {
    wideInfo.classList.remove('display-none');
  }
});


// Input phone
phone.addEventListener('focus', (e) => {
  e.target.classList.remove('not-valid');
  e.target.classList.remove('valid');
});

phone.addEventListener('blur', () => {
  const onlyNums = phone.value.replace(/[\s\-\(\)]/g, '');

  if (onlyNums.match(/^((\+?3)?8)?0\d{9}$/) !== null) {
    phone.classList.remove('not-valid');
    phone.classList.add('valid');
    errors[1].classList.add('display-none');
  } else {
    phone.classList.add('not-valid');
    errors[1].classList.remove('display-none');
  }
});

// Select region and city
selectRegions.addEventListener('change', () => {
  if (selectRegions.selectedIndex > 1) {
    labelCity.classList.remove('display-none');
    selectCities.classList.remove('display-none');
    selectCities.value = '';

    for (let city of optionsCities) {
        if (city.dataset.region === selectRegions.value.toLowerCase()) {
        city.classList.remove('display-none');
        } else {
        city.classList.add('display-none');
        }
    }  
  } else {
    labelCity.classList.add('display-none');
    selectCities.classList.add('display-none');
  }
});

// Make "submit" able after form is complete
form.addEventListener('change', checkForm);

function checkForm() {
  const checkFullName = fullname.classList.contains('valid');
  const checkPhone = phone.classList.contains('valid');

  if (checkFullName) {
    if (hideInfo.checked) {
      submit.removeAttribute('disabled');
    } else if (checkPhone && selectRegions.selectedIndex === 1) {
      submit.removeAttribute('disabled');
    } else if (checkPhone && selectRegions.selectedIndex > 1 && selectCities.selectedIndex > 0) {
      submit.removeAttribute('disabled');
    } else {
      submit.setAttribute('disabled', 'disabled');
    }
  }
}