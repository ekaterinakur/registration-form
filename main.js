const form = document.querySelector('form');
const fullname = document.getElementById('fullname');
const hideInfo = document.getElementById('hide-info');
const wideInfo = document.getElementById('wide-info');
const phone = document.getElementById('phone');
const selectRegions = document.getElementById('region');
const labelCity = document.querySelector('label[for="city"]');
const selectCities = document.querySelector('select[name="city"]');
const optionsCities = document.querySelectorAll('select[name="city"] option.display-none');
const submit = document.querySelector('input[type="submit"]');

// Check inputs 'fullname' and 'phone'
form.addEventListener('input', checkPhoneAndName);

function checkPhoneAndName(e) {
  if (e.target !== phone && e.target !== fullname) { return; }

  const inputType = e.target.dataset.name;
  let check;

  switch (inputType) {
    case 'fullname':
      const fullnameValue = fullname.value.trim();
      const wordsNum = fullnameValue.split(' ').length;
      check = (wordsNum > 1) && (wordsNum < 4);
      break;
    case 'phone':
      const onlyNums = phone.value.replace(/[\s\-\(\)]/g, '');
      const match = onlyNums.match(/^((\+?3)?8)?0\d{9}$/);
      check = (match !== null);
  }

  if (check) {
    e.target.classList.remove('not-valid');
    e.target.classList.add('valid');
    e.target.nextElementSibling.classList.add('display-none');
  } else {
    e.target.classList.remove('valid');
    e.target.classList.add('not-valid');
  }
}

form.addEventListener('blur', (e) => {
  if (e.target !== phone && e.target !== fullname) { return; }

  if (e.target.classList.contains('not-valid')) {
    e.target.nextElementSibling.classList.remove('display-none');
  }
}, true);

// Checkbox - hide wide info (input 'phone' and select 'region'...)
hideInfo.addEventListener('change', () => {
    wideInfo.classList.toggle('display-none');
});

// Select region and city
selectRegions.addEventListener('change', () => {
  if (selectRegions.selectedIndex > 1) {
    labelCity.classList.remove('display-none');
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
  }
});

// Make "submit" able after form is complete
form.addEventListener('input', checkForm);

function checkForm() {
  const checkFullName = fullname.classList.contains('valid');
  const checkPhone = phone.classList.contains('valid');
  submit.setAttribute('disabled', 'disabled');

  if (checkFullName) {
    if (hideInfo.checked) {
      submit.removeAttribute('disabled');
    } else if (checkPhone && selectRegions.selectedIndex === 1) {
      submit.removeAttribute('disabled');
    } else if (checkPhone && selectRegions.selectedIndex > 1 && selectCities.selectedIndex > 0) {
      submit.removeAttribute('disabled');
    }
  }
}
