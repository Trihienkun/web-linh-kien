const btn=document.querySelectorAll("button")
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("H1").innerText
    var productPrice = product.querySelector("span").innerText
    addCart(productPrice,productImg,productName)
    }})
})
function addCart(productPrice,productImg,productName) {
    var addTr = document.createElement("tr")
    var trContent = '<tr><td style="display: flex;align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt="">'+productName+'</td><td><p><span>'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;">Xóa</td></tr>'
    addCart.innerHTML = trContent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addTr)

    cartTotal()
}
/*---------------------------------------------------------------*/
function cartTotal(){
    var cartItem = document.querySelector("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector("span").innerText
        totalA = inputValue*productPrice*1000
        totalB = totalA.toLocaleString('de-DE')
        totalC = totalC+totalB

    }
}