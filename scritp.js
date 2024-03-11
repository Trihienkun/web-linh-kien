const adressclose=document.querySelector('#adress-close')
const adressbtn=document.querySelector('#adress-form')
//console.log (adressbtn)
adressbtn.addEventListener("click", function() {
    document.querySelector('.adress-form').style.display="flex"
})
adressclose.addEventListener("click", function() {
    document.querySelector('.adress-form').style.display="none"
})
//---------------------------------------------------------------

const imgNuber=document.querySelectorAll('.slider-content-left-top img')
const rightbtn=document.querySelector('.fa-caret-right')
const leftbtn=document.querySelector('.fa-caret-left')
let index=0

rightbtn.addEventListener("click",function(){
    index = index+1
if(index>imgNuber.length-1){
    index=0
}
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})

leftbtn.addEventListener("click",function(){
    index = index-1
if(index<=imgNuber.length-1){
    index=0
}
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})

//---------------------------------------------------------------------------------
const imgNuberli=document.querySelectorAll('.slider-content-left-bottom li')
let imagective = document.querySelector('.active')
imgNuberli.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index *100+"%"
        image.classList.add("active")
    })
})
function removeactive(){
    let imagective = document.querySelector('.active')
    imagective.classList.remove("active")

}
//-----------------------------------------------------------------------

function imgauto(){
    index=index+1
    if(index>imgNuber.length-1){
        index=0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    imgNuberli[index].classList.add("active")
}
setInterval(imgauto,5000)
//------------------slider product--------------------------

const rightbtntwo=document.querySelector('.fa-caret-right-two')
const leftbtntwo=document.querySelector('.fa-caret-left-two')
const imgNubertwo=document.querySelectorAll('.slider-product-one-content-items img')

rightbtntwo.addEventListener("click",function(){
    index = index+1
if(index>imgNubertwo.length-1){
    index=0
}
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})

leftbtntwo.addEventListener("click",function(){
    index = index-1
if(index<=imgNubertwo.length-1){
    index= 0
}
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})

