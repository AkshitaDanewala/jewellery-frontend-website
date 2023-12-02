var full = document.querySelector(".full-screen")
var menu = document.querySelector(".menu")
var check = 0
menu.addEventListener("click",function(){
    if(check == 0){
        full.style.top = `0`
        menu.innerHTML = `<i class="ri-close-line"></i>`
        check = 1
    }else{
        full.style.top = `-100%`
        menu.innerHTML = `<i class="ri-menu-line menu"></i>`
        check = 0
    }
   
})

var arrow1 = document.querySelector(".ar1")
var arrow2 = document.querySelector(".ar2")
var box1 = document.querySelector("#box1")
var box2 = document.querySelector("#box2")
var box3 = document.querySelector("#box3")
var box4 = document.querySelector("#box4")
var box2h2 = document.querySelector(".box2-h2")
var box4h2 = document.querySelector(".box4-h2")
arrow1.addEventListener("click",function(){
    box1.innerHTML = '<img src="https://img.joomcdn.net/4ff976145b55f2d02cb2898c358012d5bc6aceb3_original.jpeg" alt="" class="box1-img"></img>'
    box3.innerHTML =  ' <img src="https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/b56ee288-f80b-40fb-8de6-b2af5d919fab/e584f5b8-f19c-41cc-863b-f14009cdb5b5/media._SL480_.jpeg" alt="" class="box3-img">'
box2h2.innerHTML = " THE RING"
box4h2.innerHTML = " THE BRACELET"
})

arrow2.addEventListener("click",function(){
    box2h2.innerHTML = "THE NECKLACE"
box4h2.innerHTML = "THE EARING"
box1.innerHTML = '  <img src="https://i.etsystatic.com/26895544/r/il/4fb868/3610032609/il_fullxfull.3610032609_fdlm.jpg" alt="" class="box1-img">'
box3.innerHTML = ' <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXDiOtIKnHr2XTj8Us8kQzjM-ymRswq53KQ&usqp=CAU" alt="" class="box3-img">'
})


// var container = document.querySelector(".container")
// var sp1 = document.querySelector(".sp1")
// var sp2 = document.querySelector(".sp2")
// var swipping = 0
// sp2.addEventListener("click",function(){
//     swipping +=150
//     container.scrollTo(swipping, 0)
// })
// sp1.addEventListener("click",function(){
//     swipping -=150
//     container.scrollTo(swipping, 0)
// })



var ring = document.querySelector(".ring")
var ringpg = document.querySelector(".ringssection")
var closepg = document.querySelector(".close1")
var like = document.querySelector(".ri-heart-fill")
like.addEventListener("click",function(){
    like.style.color = "red"
})
ring.addEventListener("click",function(){
    ringpg.style.left = `5%`

})

closepg.addEventListener("click",function(){
    ringpg.style.left = "-100%"
})

var bracelet = document.querySelector(".bracelets")
var braceletpg = document.querySelector(".braceletsection")
var closepg = document.querySelector(".close2")

bracelet.addEventListener("click",function(){
    braceletpg.style.left = `5%`

})

closepg.addEventListener("click",function(){
    braceletpg.style.left = "-100%"
})

var necklace = document.querySelector(".necklaces")
var necklacepg = document.querySelector(".necklacesection")
var closepg = document.querySelector(".close3")

necklace.addEventListener("click",function(){
    necklacepg.style.left = `5%`

})

closepg.addEventListener("click",function(){
    necklacepg.style.left = "-100%"
})

var earring = document.querySelector(".earring")
var earringpg = document.querySelector(".earringsection")
var closepg = document.querySelector(".close4")

earring.addEventListener("click",function(){
    earringpg.style.left = `5%`

})

closepg.addEventListener("click",function(){
    earringpg.style.left = "-100%"
})

var anklet = document.querySelector(".anklet")
var ankletpg = document.querySelector(".ankletsection")
var closepg = document.querySelector(".close5")

anklet.addEventListener("click",function(){
    ankletpg.style.left = `5%`

})

closepg.addEventListener("click",function(){
    ankletpg.style.left = "-100%"
})

var choker = document.querySelector(".choker")
var chokerpg = document.querySelector(".chokersection")
var closepg = document.querySelector(".close6")

choker.addEventListener("click",function(){
    chokerpg.style.left = `5%`

})

closepg.addEventListener("click",function(){
    chokerpg.style.left = "-100%"
})


var btn1 = document.querySelector(".btn1")
var btn2 = document.querySelector(".btn2")
var form = document.querySelector(".form")
var signup = document.querySelector(".signup")
var login = document.querySelector(".login")
var signfullpg = document.querySelector(".sign-fullpg")
var signbtn = document.querySelector(".signbtn")
var pghatao1 = document.querySelector(".hatao1")
var logfullpg = document.querySelector(".login-fullpg")
var logbtn = document.querySelector(".logbtn")
var pghatao2 = document.querySelector(".hatao2")

btn2.addEventListener("click",function(){
    form.style.transform = "translatex(23vmax)"
    login.style.top = `100%`
    login.style.display = "none"
})
btn1.addEventListener("click",function(){
    form.style.transform = "translatex(1vmax)"
    login.style.top = `0`
    login.style.display = "initial"
    login.style.display = "flex"
})

    signbtn.addEventListener("click",function(){
        setTimeout(function(){
            signfullpg.style.top = `0`
            signfullpg.style.display = "initial"
        },1000)
    })
    pghatao1.addEventListener("click",function(){
        signfullpg.style.top = "-100%"
        signfullpg.style.display = "none"
    })

    logbtn.addEventListener("click",function(){
        setTimeout(function(){
            logfullpg.style.top = `0`
            logfullpg.style.display = "initial"
        },1000)
       
    })

    pghatao2.addEventListener("click",function(){
        logfullpg.style.top = "-100%"
        logfullpg.style.display = "none"
    })
    