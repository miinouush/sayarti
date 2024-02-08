// hide show header on scroll
let header = document.querySelector('header');
let sellCircle = document.querySelector('.sell-circle');
window.addEventListener('scroll', function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > 80){
        header.style.top = '-100px';
        sellCircle.style.bottom = '-100px';
    }
    else{
        header.style.top = '0px';
        sellCircle.style.bottom = '60px';
    }
})
// 
// 
// start filter
let searchDiv = document.querySelector('header .search input');
let searchIcon = document.querySelector('header .search  i');
let searchMenu = document.querySelector('header .search .search-menu');
let brands = document.querySelectorAll('header .search .search-menu .brand');
searchDiv.addEventListener('click', function(){
    searchMenu.classList.add('active');
    searchIcon.classList.add('rotate');
})
brands.forEach(brand=>{
    brand.addEventListener('click',function(){
        let model = this.nextElementSibling;
        if(model.classList.contains('active')){
            model.classList.remove('active');
        }
        else{
            document.querySelectorAll('header .container .filters .search .search-menu .choice  .model.active').forEach(element=>{
                element.classList.remove('active');
            })
            model.classList.toggle('active');
            document.querySelectorAll('header .container .filters .search .search-menu .choice  .brand.active').forEach(element=>{
                element.classList.remove('active');
            })
            brand.classList.toggle('active');
        }
    })
})
// 
// 
// Start region settings
let regionSetDiv = document.querySelector('.region-settings');
let flagBtn = document.querySelector('header .flag-menu .flag');
let done = document.querySelector('.region-settings .header .done')
let countryImg = document.querySelector('.region-settings .header .country-img');
let countrySpan = document.querySelector('.region-settings .header .country');
let currencySpan = document.querySelector('.region-settings .header .currency');
let countries = document.querySelectorAll('.region-settings .body .country-infos .country');
let currencies = document.querySelectorAll('.region-settings .body .country-infos .currency');
let flagImg = document.querySelector('header .flag-menu .flag img');
let countryTitle = document.querySelector('.landing-section .country-name');
if((localStorage.getItem('country-option') && localStorage.getItem('currency-option') && localStorage.getItem('img-src') && localStorage.getItem('country-title')) !== null){
    countrySpan.innerHTML = localStorage.getItem('country-option');
    currencySpan.innerHTML = localStorage.getItem('currency-option');
    countryImg.src = localStorage.getItem('img-src');
    flagImg.src = localStorage.getItem('img-src');
    countryTitle.innerHTML = localStorage.getItem('country-title');
    document.querySelectorAll('.region-settings .body  button').forEach(element=>{
        element.classList.remove('active-btn');
        if(element.dataset.country === localStorage.getItem('country-option')){
            element.classList.add('active-btn');
        }
        if(element.dataset.country === localStorage.getItem('currency-option')){
            element.classList.add('active-btn');
        }
    })
}
flagBtn.addEventListener('click', function(){
    regionSetDiv.classList.toggle('active');
    overlay.style.display= 'block';
})
done.addEventListener('click', function(){
    regionSetDiv.classList.toggle('active');
    overlay.style.display= 'none';
})
countries.forEach(country =>{
    country.addEventListener('click',(e)=>{
        countrySpan.innerHTML = e.target.dataset.country;
        currencySpan.innerHTML = e.target.dataset.currency;
        countryTitle.innerHTML = e.target.dataset.country;
        countryImg.src = e.target.dataset.src;
        flagImg.src = e.target.dataset.src;
        localStorage.setItem('country-option', e.target.dataset.country);
        localStorage.setItem('currency-option', e.target.dataset.currency);
        localStorage.setItem('img-src', e.target.dataset.src);
        localStorage.setItem('country-title', e.target.dataset.country);
        document.querySelectorAll('.region-settings .body  button.active-btn').forEach(element =>{
            element.classList.remove('active-btn');
        })
        e.target.classList.add('active-btn');
    })
})
currencies.forEach(currency =>{
    currency.addEventListener('click',(e)=>{
        countrySpan.innerHTML = e.target.dataset.country;
        currencySpan.innerHTML = e.target.dataset.currency;
        countryTitle.innerHTML = e.target.dataset.country;
        countryImg.src = e.target.dataset.src;
        flagImg.src = e.target.dataset.src;
        localStorage.setItem('country-option', e.target.dataset.country);
        localStorage.setItem('currency-option', e.target.dataset.currency);
        localStorage.setItem('img-src', e.target.dataset.src);
        localStorage.setItem('country-title', e.target.dataset.country);
        document.querySelectorAll('.region-settings .body  button.active-btn').forEach(element =>{
            element.classList.remove('active-btn');
        })
        e.target.classList.add('active-btn');
    })
})
// 
// 
// handling right menu
let toggleMenu = document.querySelector('header .toggle-menu');
let hideBtn = document.querySelector('.right-sidebar .close-btn')
let sellBtn = document.querySelector('.right-sidebar  .sell-btn');
let backBtn = document.querySelector('.right-sidebar .back-btn');
let rigthSideBar = document.querySelector('.right-sidebar');
let menu = document.querySelector('.right-sidebar .body .menu');
let register = document.querySelector('.right-sidebar .body .register');
let sidebarTitle = document.querySelector('.right-sidebar .header h3');
let loginBtn = document.querySelector('.right-sidebar .body .menu .login-btn');
let login = document.querySelector('.right-sidebar .body .login');
let overlay = document.querySelector('.overlay');
function handleRightSideBar(){
    toggleMenu.addEventListener('click', function(){
        rigthSideBar.classList.add('active');
        overlay.style.display= 'block';
    })
    hideBtn.addEventListener('click', function(){
        rigthSideBar.classList.toggle('active');
        overlay.style.display= 'none';
    })
    sellBtn.addEventListener('click', function(){
        menu.classList.remove('go-right');
        menu.classList.add('go-left');
        backBtn.style.display= 'block';
        register.style.right = 0;
        sidebarTitle.innerHTML = 'register';
    })
    backBtn.addEventListener('click', function(){
        backBtn.style.display= 'none';
        menu.classList.add('go-right');
        register.style.right = '-100%';
        sidebarTitle.innerHTML = 'menu';
        login.style.right = '-100%';
    })
    loginBtn.addEventListener('click', function(){
        backBtn.style.display= 'block'; 
        sidebarTitle.innerHTML = 'Login';
        menu.classList.add('go-left');
        menu.classList.remove('go-right');
        login.style.right = 0;
    })
    sellCircle.addEventListener('click', function(){
        rigthSideBar.classList.add('active');
        overlay.style.display= 'block';
        backBtn.style.display= 'block'; 
        sidebarTitle.innerHTML = 'Login';
        menu.classList.add('go-left');
        menu.classList.remove('go-right');
        login.style.right = 0;
    })
}
handleRightSideBar();
// 
// 
// handling left side bar
let leftSBar = document.querySelector('.left-sidebar');
let filterBtn = document.querySelector('header .filters .filters-btn'); 
let cancel = document.querySelector('.left-sidebar .footer .cancel');
function handleLeftSideBar(){
    filterBtn.addEventListener('click', function(){
        leftSBar.classList.toggle('active');
        overlay.style.display= 'block';
    })
    cancel.addEventListener('click', function(){
        leftSBar.classList.toggle('active');
        overlay.style.display= 'none';
    })
}
handleLeftSideBar();
// 
// 
document.addEventListener('click',(e)=>{
    if(!leftSBar.contains(e.target) && !filterBtn.contains(e.target) && 
    !rigthSideBar.contains(e.target) && !toggleMenu.contains(e.target) && 
    !searchMenu.contains(e.target) && !searchDiv.contains(e.target) &&
    !flagBtn.contains(e.target) && !regionSetDiv.contains(e.target) &&
    !sellCircle.contains(e.target)){
        rigthSideBar.classList.remove('active');
        leftSBar.classList.remove('active');
        searchMenu.classList.remove('active');
        regionSetDiv.classList.remove('active');
        overlay.style.display= 'none';
        searchIcon.classList.remove('rotate');
    }
})
