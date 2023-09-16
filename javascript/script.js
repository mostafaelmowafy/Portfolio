window.addEventListener("load",()=>{
    function reveal() {
        var ic = document.getElementById("ic");
        var icons = document.getElementsByClassName("co");
        var bo = document.querySelector(".social");
        var socials = document.getElementsByClassName("so");
        var p4 = document.querySelector("#pageFour");
        var table = document.querySelectorAll("table")
        for (var i = 0; i < icons.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = ic.getBoundingClientRect().top;
            var elementVisible = 5;
        
            if (elementTop < windowHeight - elementVisible) {
                icons[i].classList.add("icon-animation");
            } else {
                icons[i].classList.remove("icon-animation");
            }
        }
        
        for (let i = 0; i < socials.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = bo.getBoundingClientRect().top;
            var elementVisible = 5;
                if (elementTop < windowHeight - elementVisible) {
                    socials[i].classList.add("social-animation");
                } else {
                    socials[i].classList.remove("social-animation");
                }
            
        }
        for (var i = 0; i < table.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = p4.getBoundingClientRect().top;
            var elementVisible = 270;
        
            if (elementTop < windowHeight - elementVisible) {
                table[i].classList.add("table-animation");
            } else {
                table[i].classList.remove("table-animation");
            }
        }
    }
    window.addEventListener("scroll", reveal);


        var mode = document.getElementById("mode");
        var root = document.querySelector(":root");
        console.log(root.style.setProperty)
        mode.addEventListener("click",()=>{
        if(mode.children[0].classList[0] === "sun"){
            mode.innerHTML = `<i class="moon fa-solid fa-moon fa-2xl"></i>`;
            window.localStorage.setItem('mode','<i class="moon fa-solid fa-moon fa-2xl"></i>');

            root.style.setProperty('--pagecolor', '#111827');
            window.localStorage.setItem('--pagecolor', '#111827');
            
            root.style.setProperty('--bodyColor', '#030712');
            window.localStorage.setItem('--bodyColor', '#030712');

            root.style.setProperty('--mainColor', '#D1D5DB');
            window.localStorage.setItem('--mainColor', '#D1D5DB');

            root.style.setProperty('--headColor', '#F9FAFB');
            window.localStorage.setItem('--headColor', '#F9FAFB');

            root.style.setProperty('--tableColor', '#1F2937');
            window.localStorage.setItem('--tableColor', '#1F2937');
        }else{
            mode.innerHTML =`<i class="sun fa-solid fa-sun fa-xl" ></i>`;
            window.localStorage.setItem('mode','<i class="sun fa-solid fa-sun fa-xl" ></i>')
            
            root.style.setProperty('--pagecolor', '#F9FAFB');
            window.localStorage.setItem('--pagecolor', '#F9FAFB');
            
            root.style.setProperty('--bodyColor', 'white');
            window.localStorage.setItem('--bodyColor', 'white');

            root.style.setProperty('--mainColor', '#4B5563');
            window.localStorage.setItem('--mainColor', '#4B5563');

            root.style.setProperty('--headColor', '#111827');
            window.localStorage.setItem('--headColor', '#111827');

            root.style.setProperty('--tableColor', 'white');
            window.localStorage.setItem('--tableColor', 'white');
        }
    });
    if(window.localStorage.getItem('--mainColor')){
        mode.innerHTML =window.localStorage.getItem('mode');
            
        root.style.setProperty('--pagecolor',window.localStorage.getItem('--pagecolor'));

        root.style.setProperty('--bodyColor',window.localStorage.getItem('--bodyColor'));
        

        root.style.setProperty('--mainColor',window.localStorage.getItem('--mainColor'));
        

        root.style.setProperty('--headColor',window.localStorage.getItem('--headColor'));
        

        root.style.setProperty('--tableColor',window.localStorage.getItem('--tableColor'));
    }
});
// localStorage.clear()