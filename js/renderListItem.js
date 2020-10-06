function renderListItem(list) {
    // console.log(list);
    return `<div class="item">
                <span class="itemNo">${list.itemNo}</span>
                <h4 class="list-header">${list.header}</h4>
                <p class="list-p">${list.paragraph}</p>
            </div>`;
}

export default renderListItem;
