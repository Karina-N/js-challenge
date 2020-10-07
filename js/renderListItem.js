function renderListItem(list) {
    // console.log(list);
    return `<div class="item">
                <h4 class="list-header"><span id="itemNo">${list.itemNo}</span>${list.header}</h4>
                <p class="list-p">${list.paragraph}</p>
            </div>`;
}

export default renderListItem;
