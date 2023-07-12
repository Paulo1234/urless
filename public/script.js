const form = document.querySelector('form')
const urlCode = document.querySelector('input')
const urlGenerated = document.querySelector('p#urlcode')
const urlAlert = document.querySelector('div#alert-created')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            urlCode: urlCode.value
        })
    }).then((data) => data.json())
      .then((data) => showUrlInDOM(data))
})

function showUrlInDOM(value)
{
    urlAlert.style.display = ""
    urlGenerated.innerHTML = value.shortenUrl
}