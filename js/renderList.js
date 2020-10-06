import renderListItem from './renderListItem.js';

function renderList(list) {


    let HTML = '';
    let countList = list.length;

    for (let i=0; i < countList; i++) {
        const item = list[i];
        HTML += renderListItem(item);
    }

    // console.log(HTML);

    const listDOM =document.querySelector('.row2-text2')
    // console.log(listDOM);

    listDOM.innerHTML = HTML;
}

export default renderList;