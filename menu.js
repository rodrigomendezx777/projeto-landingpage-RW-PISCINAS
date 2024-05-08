window.addEventListener("scroll",function(){
    let navigation = this.document.querySelector('.navigation')
    navigation.classList.toggle('rolagem',window.scrollY > 200)
})