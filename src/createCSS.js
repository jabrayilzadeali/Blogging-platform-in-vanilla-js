const baseCssElement = document.querySelector('link[href="style/base.css"')
const styleElement = document.createElement('style')
styleElement.setAttribute('type', 'text/css')

const cssRules = [
    `
        .my-red {
            background-color: red;
        }
    `,
    `
        .my-green {
            background-color: green;
        }
    `
]

console.log('okay')
for (const spacing of ["p", "m"]) {
    for (let i = 1; i <= 5; i++) {
        let cssClass = `
            .${spacing}-${i} {
                ${spacing === "p" ? 'padding' : 'margin'}: ${i}rem;
            }

            .${spacing}x-${i} {
                ${spacing === "p" ? 'padding' : 'margin'}-left: ${i}rem;
                ${spacing === "p" ? 'padding' : 'margin'}-right: ${i}rem;
            }

            .${spacing}y-${i} {
                ${spacing === "p" ? 'padding' : 'margin'}-top: ${i}rem;
                ${spacing === "p" ? 'padding' : 'margin'}-bottom: ${i}rem;
            }

            .${spacing}t-${i} {
                ${spacing === "p" ? 'padding' : 'margin'}-top: ${i}rem;
            }

            .${spacing}r-${i} {
                ${spacing === "p" ? 'padding' : 'margin'}-right: ${i}rem;
            }

            .${spacing}b-${i} {
                ${spacing === "p" ? 'padding' : 'margin'}-bottom: ${i}rem;
            }

            .${spacing}l-${i} {
                ${spacing === "p" ? 'padding' : 'margin'}-left: ${i}rem;
            }
        `
        cssRules.push(cssClass)
    }
}

// console.log(cssRules)
console.log(cssRules.join(' '))


styleElement.innerText = cssRules.join(' ')
baseCssElement.parentNode.insertBefore(styleElement, baseCssElement.nextSibling)
