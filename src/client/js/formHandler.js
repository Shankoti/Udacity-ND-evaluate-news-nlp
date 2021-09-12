import { validateUrl } from './checkURL'
const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',

        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export const handleSubmit = async () => {
    let URL = document.getElementById('articleurl').value

    if (validateUrl(URL)) {
        console.log(URL)
        post('http://localhost:8083/api', { url: URL }).then((data) => {
            console.log(data)
            document.getElementById('text').innerHTML = `Text: ${data.text}`
            document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`
            document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`
            document.getElementById('irony').innerHTML = `Irony: ${data.irony}`
        })
    } else {
        alert(' not a valid URL.')
    }
}

export default handleSubmit
