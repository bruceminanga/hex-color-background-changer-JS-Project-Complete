(function() {
    const button = document.querySelector('#btn')
    const body = document.querySelector('body')
    const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    const value = document.querySelector('#hex-value')

    button.addEventListener('click', changeHex)

    function changeHex(){
      // looping over an array
        let hex = '#'

        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*hexValues.length)
            hex += hexValues[index]
        }
      // change text 
        value.textContent = hex
      // change body style
        body.style.backgroundColor = hex
    }
} )()
