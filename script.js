const allButtons = document.querySelectorAll('.containerButtons button')


const allCards = document.querySelectorAll('.containerCards .card')




allButtons.forEach((el) => {

    el.addEventListener('click', function () {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove('active')
        }
        el.classList.add('active')

        allCards.forEach((card) => {
            card.classList.add('hide')


            if (card.dataset.name === el.dataset.name || el.dataset.name === 'all') {
                card.classList.remove('hide')

            }
        })

    })






})


































/* allButtons.forEach((el) => {
    el.addEventListener('click', function () {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove('active')
        }
        el.classList.add('active')


        allCards.forEach((card) => {
            card.classList.add('hide')
            if (card.dataset.name === el.dataset.name || el.dataset.name === 'all') {
                card.classList.remove('hide')
            }
        })


    })
})
 */



































console.log(allButtons, allCards)