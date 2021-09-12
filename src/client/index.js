import { handleSubmit } from './js/formHandler'

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

window.addEventListener('DOMContentLoaded', () => {
    const butn = document.getElementById('SUB')
    let formText = document.getElementById('articleurl').value

    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=b84d44130ec4335d5e28b9537db50885&url=${
        document.getElementById('articleurl').value
    }&lang=en`

    butn.addEventListener('click', () => {
        handleSubmit()
    })
})
