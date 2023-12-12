 const colorPicker = document.getElementById("color-picker")
 const colorScheme = document.getElementById("color-scheme")
 const getColorBtn = document.getElementById("get-color-btn")
 
 const colorHexValue1 = document.getElementById("color-hex-value1")
 const colorBackground1 = document.getElementById("color-background1")
 const colorHexValue2 = document.getElementById("color-hex-value2")
 const colorBackground2 = document.getElementById("color-background2")
 const colorHexValue3 = document.getElementById("color-hex-value3")
 const colorBackground3 = document.getElementById("color-background3")
 const colorHexValue4 = document.getElementById("color-hex-value4")
 const colorBackground4 = document.getElementById("color-background4")
 const colorHexValue5 = document.getElementById("color-hex-value5")
 const colorBackground5 = document.getElementById("color-background5")

 getColorBtn.addEventListener("click", function(){
     const ColorPickerValue = colorPicker.value
     const cleanColorPicker = ColorPickerValue.slice(1)
     const cleanColorScheme = colorScheme.value
           
     fetch(`https://www.thecolorapi.com/scheme?hex=${cleanColorPicker}&mode=${cleanColorScheme}&count=5`)
    .then(response => response.json())
    .then(data => {
                
         colorHexValue1.innerHTML = data.colors[0].hex.value
         colorBackground1.innerHTML = `
             <img src="${data.colors[0].image.bare}" class="color-img">
         `
         colorHexValue2.innerHTML = data.colors[1].hex.value
         colorBackground2.innerHTML = `
             <img src="${data.colors[1].image.bare}" class="color-img">
         `
         colorHexValue3.innerHTML = data.colors[2].hex.value
         colorBackground3.innerHTML = `
             <img src="${data.colors[2].image.bare}" class="color-img">
         `
         colorHexValue4.innerHTML = data.colors[3].hex.value
         colorBackground4.innerHTML = `
             <img src="${data.colors[3].image.bare}" class="color-img">
         `
         colorHexValue5.innerHTML = data.colors[4].hex.value
         colorBackground5.innerHTML = `
             <img src="${data.colors[4].image.bare}" class="color-img">
         `
    })
        
 })
 
 



