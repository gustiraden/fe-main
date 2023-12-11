/* ============= Vision & Mission Accordion ============= */
const accordionGoalsItem = document.querySelectorAll('.goals_item');

accordionGoalsItem.forEach((item) =>{
    const accordionHeader = item.querySelector('.goals_header');

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open');

        toggleItem(item);

        if(openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.goals_content');

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}