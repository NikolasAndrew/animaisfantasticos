function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');


    if(tabContent.length && tabMenu.length){
        tabContent[0].classList.add('ativo')

        function activeTab(index){
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) =>{
            itemMenu.addEventListener('click', () =>{
                activeTab(index);
            })
        })
    }
}

initTabNav();

function initAccordion(){
    const accordionLista = document.querySelectorAll('.js-accordion dt')

    if(accordionLista.length){
        accordionLista[0].classList.add('ativo')
        accordionLista[0].nextElementSibling.classList.add('ativo')

        function activeAccordion(){
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')

        }


        accordionLista.forEach((item) =>{
            item.addEventListener('click', activeAccordion)
        })
    }
}

initAccordion();


function initScrollSuave(){
    const linksInternos  = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block:'start',
        })
    }

    linksInternos.forEach((link) =>{
        link.addEventListener('click', scrollToSection)
    })
}
initScrollSuave();


function initAnimacaoScroll(){

    const sections = document.querySelectorAll('.js-scroll')

    if(sections.length){
        const windowMetade = window.innerHeight * 0.8

        function animaScroll(){
            sections.forEach((section) =>{
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - windowMetade) < 0
                if(isSectionVisible){
                    section.classList.add('ativo')
                }
            })

        }

        animaScroll()

        window.addEventListener('scroll', animaScroll)

    }
}

initAnimacaoScroll();
