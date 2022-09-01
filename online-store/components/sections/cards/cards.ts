interface IGuitar {
    title: string;
    amount: number;
    year: number;
    color: string;
    width: number;
    type: string;
    isPopular: string;
    image: string;
    id: number;
    isChecked: boolean;
}

function createProp(description: string, property: string | number, parent: HTMLElement) {
    let prop = document.createElement('p');
    parent.append(prop);
    prop.textContent = `${description}: ${property}`
}

export function cards(guitars: IGuitar[]) {
    let cardsSection = document.querySelector('.cards') as HTMLElement;
    let cardsContainer = document.querySelector('.cards__container') as HTMLElement;
    cardsSection.removeChild(cardsContainer);
    cardsContainer = document.createElement('div');
    cardsContainer.classList.add('container');
    cardsContainer.classList.add('cards__container');
    cardsSection.append(cardsContainer);
    for (let i = 0; i < guitars.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        if (guitars[i].isChecked === true) {
            card.classList.add('card-check');
        } 
        cardsContainer.append(card);
        let cardTitle = document.createElement('h4')
        cardTitle.classList.add('title');
        card.append(cardTitle);
        cardTitle.textContent = guitars[i].title;
        let imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper');
        card.append(imageWrapper);
        imageWrapper.innerHTML = `<img src=${guitars[i].image}>`;
        let props = document.createElement('div');
        props.classList.add('props');
        card.append(props);
        createProp('Количество', guitars[i].amount, props);
        createProp('Год', guitars[i].year, props);
        createProp('Цвет', guitars[i].color, props);
        createProp('Ширина грифа', guitars[i].width, props);
        createProp('Тип', guitars[i].type, props);
        createProp('Популярная', guitars[i].isPopular, props);
    }

}
