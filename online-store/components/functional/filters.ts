import { guitars } from "../guitars";
import { cards } from "../sections/cards/cards";
import * as noUiSlider from 'nouislider';

interface iFilters {
    type: string[];
    width: number[];
    color: string[];
    isPopular: boolean;
    amount: number[];
    year: number[]
}

export const filters: iFilters = {
    type: ['классическая', 'акустическая', 'электро-акустическая'],
    width: [45, 52],
    color: ['древесный', 'белый', 'чёрный'],
    isPopular: false,
    amount: [1, 12],
    year: [2010, 2022]  
}

let classicCheck  = document.getElementById('classic') as HTMLInputElement;
let acoustickCheck = document.getElementById('acoustic') as HTMLInputElement;
let electroAcoustickkCheck  = document.getElementById('electro-acoustic') as HTMLInputElement;
let narrowBar = document.getElementById('45mm') as HTMLInputElement;
let wideBar = document.getElementById('52mm') as HTMLInputElement;
let woodColor = document.getElementById('wood-color') as HTMLInputElement;
let whiteColor = document.getElementById('white-color') as HTMLInputElement;
let popularCheckbox = document.getElementById('popular-checkbox') as HTMLInputElement;
let blackColor = document.getElementById('black-color') as HTMLInputElement;
let searchground = document.querySelector('.searchground input') as HTMLInputElement;
let selectMenu = document.querySelector('.select-menu') as HTMLSelectElement;
let resetFiltersButton = document.querySelector('.reset-filters');

function doFilter() {
    let filteredGuitars = guitars.filter((elem) => 
                (elem.type === filters.type[0] || elem.type === filters.type[1] || elem.type === filters.type[2]) &&
                (elem.width === filters.width[0] || elem.width === filters.width[1]) &&
                (elem.color === filters.color[0] || elem.color === filters.color[1] || elem.color === filters.color[2]) &&
                (elem.amount >= filters.amount[0] && elem.amount <= filters.amount[1]) &&
                (elem.year >= filters.year[0] && elem.year <= filters.year[1])
            );
        if (filters.isPopular === true) filteredGuitars = filteredGuitars.filter(elem => elem.isPopular === 'да');
        let reg = new RegExp(`${searchground.value}`, 'i');
        filteredGuitars = filteredGuitars.filter(elem => reg.test(elem.title))
        cards(filteredGuitars); 
        let cardsContainer = document.querySelector('.cards__container');
        let onPageGuitars = Array.from(cardsContainer.childNodes);
        if (selectMenu.options[selectMenu.selectedIndex].text === "По названию, от A до Z") {
            let namesOfGuitars = onPageGuitars.map(elem => elem.firstChild.textContent).sort();
            onPageGuitars.sort((a, b) => namesOfGuitars.indexOf(a.firstChild.textContent) - namesOfGuitars.indexOf(b.firstChild.textContent));
        } else if (selectMenu.options[selectMenu.selectedIndex].text === "По названию, от Z до A") {
            let namesOfGuitars = onPageGuitars.map(elem => elem.firstChild.textContent).sort();
            onPageGuitars.sort((a, b) => namesOfGuitars.indexOf(b.firstChild.textContent) - namesOfGuitars.indexOf(a.firstChild.textContent));
        } else if (selectMenu.options[selectMenu.selectedIndex].text === "По году, по возрастанию") {
            onPageGuitars.sort((a, b) =>
            parseInt(a.childNodes[2].childNodes[1].textContent.slice(5)) - parseInt(b.childNodes[2].childNodes[1].textContent.slice(5)));
        } else if (selectMenu.options[selectMenu.selectedIndex].text === "По году, по убыванию") {
            onPageGuitars.sort((a, b) => 
            parseInt(b.childNodes[2].childNodes[1].textContent.slice(5)) - parseInt(a.childNodes[2].childNodes[1].textContent.slice(5)));
        }
        cardsContainer.append(...onPageGuitars);
}

export function doFilters() {
    // Фильтры по типу
    classicCheck.addEventListener('change', () => {
        if (classicCheck.checked === true) {
            if (filters.type.length === 3) {
                filters.type = [];
                filters.type.push('классическая');
            } else {
                filters.type.push('классическая');
            }
        } else filters.type.splice(filters.type.indexOf('классическая'), 1); 
        if (filters.type.length === 0) filters.type = ['классическая', 'акустическая', 'электро-акустическая'];
        doFilter();
    });
    acoustickCheck.addEventListener('change', () => {
        if (acoustickCheck.checked === true) {
            if (filters.type.length === 3) {
                filters.type = [];
                filters.type.push('акустическая'); 
            } else {
                filters.type.push('акустическая'); 
            }
        } else filters.type.splice(filters.type.indexOf('акустическая'), 1);
        if (filters.type.length === 0) filters.type = ['классическая', 'акустическая', 'электро-акустическая'];
        doFilter();
    });
    electroAcoustickkCheck.addEventListener('change', () => {
        if (electroAcoustickkCheck.checked === true) {
            if (filters.type.length === 3) {
                filters.type = [];
                filters.type.push('электро-акустическая');
            } else {
                filters.type.push('электро-акустическая');  
            }
        } else filters.type.splice(filters.type.indexOf('электро-акустическая'), 1);
        if (filters.type.length === 0) filters.type = ['классическая', 'акустическая', 'электро-акустическая'];
        doFilter();
    });

    // Фильтры по ширине грифа
    narrowBar.addEventListener('change', () => {
        if (narrowBar.checked === true) {
            if (filters.width.length === 2) {
                filters.width = [];
                filters.width.push(45);
            } else {
                filters.width.push(45);
            }
        } else filters.width.splice(filters.width.indexOf(45), 1);
        if (filters.width.length === 0) filters.width = [45, 52];
        doFilter();
    });
    wideBar.addEventListener('change', () => {
        if (wideBar.checked === true) {
            if (filters.width.length === 2) {
                filters.width = [];
                filters.width.push(52);
            } else {
                filters.width.push(52);
            }
        } else filters.width.splice(filters.width.indexOf(52), 1);
        if (filters.width.length === 0) filters.width = [45, 52];
        doFilter();
    });

    // Фильтры цвета
    woodColor.addEventListener('change', () => {
        if (woodColor.checked === true) {
            if (filters.color.length === 3) {
                filters.color = [];
                filters.color.push('древесный');
            } else {
                filters.color.push('древесный');
            }
        } else filters.color.splice(filters.color.indexOf('древесный'), 1);
        if (filters.color.length === 0) filters.color = ['древесный', 'белый', 'чёрный'];
        doFilter();
    });
    whiteColor.addEventListener('change', () => {
        if (whiteColor.checked === true) {
            if (filters.color.length === 3) {
                filters.color = [];
                filters.color.push('белый');
            } else {
                filters.color.push('белый');
            }
        } else filters.color.splice(filters.color.indexOf('белый'), 1);
        if (filters.color.length === 0) filters.color = ['древесный', 'белый', 'чёрный'];
        doFilter();
    });
    blackColor.addEventListener('change', () => {
        if (blackColor.checked === true) {
            if (filters.color.length === 3) {
                filters.color = [];
                filters.color.push('чёрный'); 
            } else {
                filters.color.push('чёрный');
            }
        } else filters.color.splice(filters.color.indexOf('чёрный'), 1);
        if (filters.color.length === 0) filters.color = ['древесный', 'белый', 'чёрный'];
        doFilter();
    });

    // Фильтр по популярности;
    popularCheckbox.addEventListener('change', () => {
        if (popularCheckbox.checked === true) filters.isPopular = true;
        else filters.isPopular = false;
        doFilter();
    });

    // Фильтры по диапазону
    const sliderAmount = document.getElementById('slider-amount');
    const sliderYear = document.getElementById('slider-year');

    if (sliderAmount) {
        noUiSlider.create(sliderAmount, {
            start: [1, 12],
            connect: true,
            step: 1,
            range: {
                'min': 1,
                'max': 12
            }
        });

        const amountMin = document.getElementById('amount-min') as HTMLInputElement;
        const amountMax = document.getElementById('amount-max') as HTMLInputElement;

        (sliderAmount as noUiSlider.target).noUiSlider?.on('update', () => {
            const values = (sliderAmount as noUiSlider.target).noUiSlider?.get(true) as Array<number>;
            amountMin.value = Math.round(values[0]).toString();
            amountMax.value = Math.round(values[1]).toString();
            filters.amount[0] = Math.round(values[0]);
            filters.amount[1] = Math.round(values[1]);
            doFilter();
        })
            resetFiltersButton.addEventListener('click', () => {
                (sliderAmount as noUiSlider.target).noUiSlider.set([1, 12])
            })
    }
    
    if (sliderYear) {
        noUiSlider.create(sliderYear, {
            start: [2010, 2022],
            connect: true,
            step: 1,
            range: {
                'min': 2010,
                'max': 2022
            }
        });

        const yearMin = document.getElementById('year-min') as HTMLInputElement;
        const yearMax = document.getElementById('year-max') as HTMLInputElement;

        (sliderYear as noUiSlider.target).noUiSlider?.on('update', () => {
            const values = (sliderYear as noUiSlider.target).noUiSlider?.get(true) as Array<number>;
            yearMin.value = Math.round(values[0]).toString();
            yearMax.value = Math.round(values[1]).toString();
            filters.year[0] = Math.round(values[0]);
            filters.year[1] = Math.round(values[1]);
            doFilter();
        })

        resetFiltersButton.addEventListener('click', () => {
            (sliderYear as noUiSlider.target).noUiSlider.set([2010, 2022])
        })
    }

    // Фильтр по поиску
    window.addEventListener('load', () => {
        searchground.focus();
    })
    searchground.addEventListener('input', doFilter);
}

export function resetFilters() {
    resetFiltersButton.addEventListener('click', () => {
        cards(guitars);
        [classicCheck, acoustickCheck, electroAcoustickkCheck, electroAcoustickkCheck, narrowBar, wideBar, woodColor, whiteColor, blackColor, popularCheckbox]
            .forEach(elem => elem.checked = false);  
        let cardsContainer = document.querySelector('.cards__container');
        let onPageGuitars = Array.from(cardsContainer.childNodes);
        if (selectMenu.options[selectMenu.selectedIndex].text === "По названию, от A до Z") {
            let namesOfGuitars = onPageGuitars.map(elem => elem.firstChild.textContent).sort();
            onPageGuitars.sort((a, b) => namesOfGuitars.indexOf(a.firstChild.textContent) - namesOfGuitars.indexOf(b.firstChild.textContent));
        } else if (selectMenu.options[selectMenu.selectedIndex].text === "По названию, от Z до A") {
            let namesOfGuitars = onPageGuitars.map(elem => elem.firstChild.textContent).sort();
            onPageGuitars.sort((a, b) => namesOfGuitars.indexOf(b.firstChild.textContent) - namesOfGuitars.indexOf(a.firstChild.textContent));
        } else if (selectMenu.options[selectMenu.selectedIndex].text === "По году, по возрастанию") {
            onPageGuitars.sort((a, b) =>
            parseInt(a.childNodes[2].childNodes[1].textContent.slice(5)) - parseInt(b.childNodes[2].childNodes[1].textContent.slice(5)));
        } else if (selectMenu.options[selectMenu.selectedIndex].text === "По году, по убыванию") {
            onPageGuitars.sort((a, b) => 
            parseInt(b.childNodes[2].childNodes[1].textContent.slice(5)) - parseInt(a.childNodes[2].childNodes[1].textContent.slice(5)));
        }
        cardsContainer.append(...onPageGuitars);
    })
}