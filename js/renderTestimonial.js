import renderTestimonialItem from './renderTestimonialItem.js';


function renderTestimonial(testimonial) {
    

    let HTML = renderTestimonialItem(testimonial);

    const testDOM=document.querySelector('.testimonials');
    testDOM.innerHTML = HTML;
}
export default renderTestimonial;



