var modalWriteUs=document.querySelector(".modal-write-us");
var buttonWriteUs=document.querySelector(".button-write-us");
var closeWriteUs=modalWriteUs.querySelector(".modal-close");
var userName=modalWriteUs.querySelector("#user-name");
var userMail=modalWriteUs.querySelector("#user-e-mail");
var userMessage=modalWriteUs.querySelector("#user-message");
var form=modalWriteUs.querySelector(".form");

var modalMap=document.querySelector(".modal-map");
var map=document.querySelector(".contacts .map");
var closeMap=modalMap.querySelector(".modal-close");

var serviceSlider=document.querySelector(".service-slider_slider-slides");
var buttonDelivery=document.querySelector(".button-delivery");
var buttonWarranty=document.querySelector(".button-warranty");
var buttonCredit=document.querySelector(".button-credit");

var productSlider=document.querySelector(".product-slider_slides");
var buttonSlide1=document.querySelector(".slide-1");
var buttonSlide2=document.querySelector(".slide-2");
var buttonSlide3=document.querySelector(".slide-3");

var yandexMap=document.querySelector(".yandex-map");

buttonWriteUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWriteUs.classList.add("show-modal");
    userName.focus();
});

closeWriteUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalWriteUs.classList.remove("show-modal");
    modalWriteUs.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
    if(evt.keyCode === 27) {
        if(modalWriteUs.classList.contains("show-modal")) {
            evt.preventDefault();
            modalWriteUs.classList.remove("show-modal");
            modalWriteUs.classList.remove("modal-error");
        }
    }
});

form.addEventListener("submit", function(evt) {
    if(!userName.value || !userMail.value || !userMessage.value) {
        evt.preventDefault();
        modalWriteUs.classList.remove("modal-error");
        modalWriteUs.offsetWidth=modalWriteUs.offsetWidth;
        modalWriteUs.classList.add("modal-error");
    }
})

map.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.add("show-modal");
    closeMap.focus();
})

closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.remove("show-modal");
    map.focus();
});

window.addEventListener("keydown", function(evt) {
    if(evt.keyCode === 27) {
        if(modalMap.classList.contains("show-modal")) {
            evt.preventDefault();
            modalMap.classList.remove("show-modal");
        }
    }
});

buttonDelivery.addEventListener("click", function(evt) {
    evt.preventDefault();
    serviceSlider.style.transform="translateX(0)";
    
    buttonDelivery.classList.add("active");
    buttonWarranty.classList.remove("active");
    buttonCredit.classList.remove("active");
});

buttonWarranty.addEventListener("click", function(evt) {
    evt.preventDefault();
    serviceSlider.style.transform="translateX(-33.33%)";
    
    buttonDelivery.classList.remove("active");
    buttonWarranty.classList.add("active");
    buttonCredit.classList.remove("active");
});

buttonCredit.addEventListener("click", function(evt) {
    evt.preventDefault();
    serviceSlider.style.transform="translateX(-66.66%)";
    
    buttonDelivery.classList.remove("active");
    buttonWarranty.classList.remove("active");
    buttonCredit.classList.add("active");
});

buttonSlide1.addEventListener("click", function(evt) {
    evt.preventDefault();
    productSlider.style.transform="translateX(0)";
    
    buttonSlide1.classList.add("active");
    buttonSlide2.classList.remove("active");
    buttonSlide3.classList.remove("active");
});

buttonSlide2.addEventListener("click", function(evt) {
    evt.preventDefault();
    productSlider.style.transform="translateX(-33.33%)";
    
    buttonSlide1.classList.remove("active");
    buttonSlide2.classList.add("active");
    buttonSlide3.classList.remove("active");
});

buttonSlide3.addEventListener("click", function(evt) {
    evt.preventDefault();
    productSlider.style.transform="translateX(-66.66%)";
    
    buttonSlide1.classList.remove("active");
    buttonSlide2.classList.remove("active");
    buttonSlide3.classList.add("active");
});

yandexMap.addEventListener("load", function() {
    yandexMap.classList.add("show");
    
});
