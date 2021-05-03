/*const getImage = () => {
    return fetch(`https://source.unsplash.com/random`)
    .then(res=>res.json())
}
const makeImageHtml = (image) => {
    const html = document.createElement(`html`)
   
    
    html.appendChild(html)
    return html
}
    getImage().then(image => {
        console.log(image.content);
        appendImage(makeImageHtml(image))
    })

const appendImage = (quoteDiv) => {
    const imageContainer = document.getElementById(`image-container`)
    imageContainer.appendChild(imageHtml)
}*/
const getQuote = () => {
    return fetch(`https://api.quotable.io/random`)
    .then(res=>res.json())
}   

getQuote().then(quote => {
    const quoteDiv=makeQuoteDiv(quote)
    console.log(quote.content);
    appendQuote(makeQuoteDiv(quote))
})


const makeQuoteDiv = (quote) => {
    const div = document.createElement(`div`)
    const h4 = document.createElement(`h4`)
    const p = document.createElement(`p`)
    h4.innerText = quote.content
    p.innerText = quote.author
    div.appendChild(h4)
    div.appendChild(p)
    return div
    
}
 
const appendQuote = (quoteDiv) => {
    const quoteContainer = document.getElementById(`quote-container`)
    quoteContainer.appendChild(quoteDiv)
}