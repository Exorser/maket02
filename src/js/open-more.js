const btnShowAll = document.querySelectorAll('.main__section_btn');
const sectionList = document.querySelectorAll('.main__section-list');
const mainDescriptionReadMore = document.querySelector('.main__description-read-more');
const mainDescriptionSize = document.querySelector('.main__description-size');
const mainDescriptionItem = document.querySelector('.main__description-item');

const SCREEN_WIDTH = 768;
const MAX_HEIGHT_DESCRIPTION = 160 + 'px';

btnShowAll.forEach((btn, i) => {
  btn.addEventListener('click', function() {
    toggleSectionDisplay(i);
  });
});

mainDescriptionReadMore.addEventListener('click', function() {
  toggleMainDescriptionDisplay();
});

function toggleSectionDisplay(index) {
  if (!btnShowAll[index].classList.contains('show-all')) {
    sectionList[index].style.height = 'auto';
    btnShowAll[index].classList.add('show-all');
    btnShowAll[index].textContent = 'Скрыть';
  } else {
    sectionList[index].style.height = MAX_HEIGHT_DESCRIPTION;
    btnShowAll[index].classList.remove('show-all');
    btnShowAll[index].textContent = 'Показать все';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  for (let i = 0; i < sectionList.length; i++) {
    if (btnShowAll[i] && sectionList[i]) {
      sectionList[i].style.height = MAX_HEIGHT_DESCRIPTION;
      btnShowAll[i].classList.remove('show-all');
      btnShowAll[i].textContent = 'Показать все';
    }
  }
});

function toggleMainDescriptionDisplay() {
  if (!mainDescriptionReadMore.classList.contains('show-all')) {
    mainDescriptionSize.style.height = 'auto';
    mainDescriptionReadMore.classList.add('show-all');
    mainDescriptionReadMore.textContent = 'Скрыть';
  } else {
    openReadMore();
    mainDescriptionReadMore.classList.remove('show-all');
    mainDescriptionReadMore.textContent = 'Читать дальше';
  }
}

function openReadMore() {
  if (window.innerWidth >= SCREEN_WIDTH) {
    mainDescriptionSize.style.height = MAX_HEIGHT_DESCRIPTION;
  } else {
    mainDescriptionSize.style.height = mainDescriptionItem.clientHeight + 'px';
  }
}
openReadMore();

window.addEventListener('resize', function() {
  openReadMore();
});
