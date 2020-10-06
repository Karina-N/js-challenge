function renderTestimonialItem(testimonial) {

    const maxGallerySize = 3;
    let HTML = '';
    
    for (let i=0; i< maxGallerySize; i++) {
        if (i===0) {
        HTML += `<div class="testimonials testimonials1">
        <img class="avatar" src="./images/${testimonial[i].photo}" alt="User profile picture">
        <h5 class="test-author">${testimonial[i].name}</h5>
        <p class="test-p">${testimonial[i].text}</p>
        </div>`;
        }
        else {
        HTML += `<div class="testimonials">
        <img class="avatar" src="./images/${testimonial[i].photo}" alt="User profile picture">
        <h5 class="test-author">${testimonial[i].name}</h5>
        <p class="test-p">${testimonial[i].text}</p>
        </div>`;
        }

    }   

        return HTML;

}

export default renderTestimonialItem;