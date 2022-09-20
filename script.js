const P = document.getElementById('prettier')
const M = document.getElementById('matrix')
const C = document.getElementById('cyberpunk')
const L = document.getElementById('light')

M.addEventListener('click', matrixFunc)
P.addEventListener('click', prettierFunc)
C.addEventListener('click', cyberpunkFunc)
L.addEventListener('click', lightFunc)

function prettierFunc() {
    document.documentElement.style.setProperty('--M', 'orbitron')
    document.documentElement.style.setProperty('--font-color', 'white')
    document.documentElement.style.setProperty('--background', '#1a2b34')
    document.documentElement.style.setProperty('--gray', '#465862')
    document.documentElement.style.setProperty('--red', '#ea5e5e')
    document.documentElement.style.setProperty('--yellow', '#f7ba3e')
    document.documentElement.style.setProperty('--green', '#56b3b4')
    document.documentElement.style.setProperty('--blue', '#4b98c1')
    document.documentElement.style.setProperty('--purple', '#bf85bf')
}

function matrixFunc(params) {
    document.documentElement.style.setProperty('--M', 'matrix')
    document.documentElement.style.setProperty('--font-color', '#00b700')
    document.documentElement.style.setProperty('--background', 'black')
    document.documentElement.style.setProperty('--gray', '#465862')
    document.documentElement.style.setProperty('--red', '#00b700')
    document.documentElement.style.setProperty('--yellow', '#00b700')
    document.documentElement.style.setProperty('--green', '#00b700')
    document.documentElement.style.setProperty('--blue', '#00b700')
    document.documentElement.style.setProperty('--purple', '#00b700')
}

function cyberpunkFunc(params) {
    document.documentElement.style.setProperty('--M', 'cyberpunk')
    document.documentElement.style.setProperty('--font-color', '#fcee0a')
    document.documentElement.style.setProperty('--background', '#3c373d')
    document.documentElement.style.setProperty('--gray', '#fcee0a')
    document.documentElement.style.setProperty('--red', '#ff0082')
    document.documentElement.style.setProperty('--yellow', '#ff0082')
    document.documentElement.style.setProperty('--green', '#01ff11')
    document.documentElement.style.setProperty('--blue', '#00ffed')
    document.documentElement.style.setProperty('--purple', '#a400ff')
}

function lightFunc(params) {
    document.documentElement.style.setProperty('--M', 'orbitron')
    document.documentElement.style.setProperty('--font-color', 'black')
    document.documentElement.style.setProperty('--background', '#white')
    document.documentElement.style.setProperty('--gray', '#d4d3dc')
    document.documentElement.style.setProperty('--red', '#ea5e5e')
    document.documentElement.style.setProperty('--yellow', '#f7ba3e')
    document.documentElement.style.setProperty('--green', '#56b3b4')
    document.documentElement.style.setProperty('--blue', '#4b98c1')
    document.documentElement.style.setProperty('--purple', '#bf85bf')
}