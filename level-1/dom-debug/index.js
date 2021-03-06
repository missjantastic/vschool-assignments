const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }

    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    dropDown.addEventListener("change", function(e){
        e.target.parentElement.style.backgroundColor = e.target.value;
    })
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


