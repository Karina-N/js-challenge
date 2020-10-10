function renderListItem(list, i) {
    // console.log(list);
    // if (i<9) {

    // } else reuturn i;

    return `<div class="item">
                <h4 class="list-header"><span id="itemNo">0${i+1}</span>${list.header}</h4>
                <p class="list-p">${list.paragraph}</p>
            </div>`;
}

export default renderListItem;
