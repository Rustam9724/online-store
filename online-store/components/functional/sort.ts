export function sort() {
    let selectMenu = document.querySelector('.select-menu') as HTMLSelectElement;
    selectMenu.addEventListener('change', () => {
        let cards = document.querySelector('.cards__container');
        let onPageGuitars = Array.from(cards.childNodes);
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
        cards.append(...onPageGuitars);
    });
}