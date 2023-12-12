 const colorPicker = document.getElementById("color-picker")
 const colorScheme = document.getElementById("color-scheme")
 const getColorBtn = document.getElementById("get-color-btn")
 
 const colorHexValue = document.getElementById("color-hex-value")
 const colorBackground = document.getElementById("color-background")


 getColorBtn.addEventListener("click", function(){
     const ColorPickerValue = colorPicker.value
     const cleanColorPicker = ColorPickerValue.slice(1)
     const cleanColorScheme = colorScheme.value
     
     fetch(`https://www.thecolorapi.com/id?hex=${cleanColorPicker}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        colorHexValue.innerHTML = data.hex.value
        colorBackground.innerHTML = `
            <img src="${data.image.bare}" class="color-img">
        `
    })
        
 })
