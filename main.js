screenWidth=$(window).width()
bigScreen= undefined
brek= 650
callUs=$('.info p:last')


/* 
item=0
list=['images/img1a.jpg','images/img1b.jpg','images/img1c.jpg']
setInterval(function(){
    $('.wrapper').css({'background': `url(${list[item]}) no-repeat center`, 'background-size': 'cover  '})
    item++
    if (item>2){item=0}
},2500) */

//$('.ul-cont ul').addClass('disappear')


function diffsize(x){ //piece of genius
    if(screenWidth>brek && bigScreen!=true){
        console.log('big screen')
        $('.ul-cont ul').slideDown()
        $('.menu .info-p').fadeOut(0)
        bigScreen=true
    }
    else if(screenWidth<brek && bigScreen!=false){
        console.log('small screen')
        $('.menu').prepend(callUs.clone())
        $('.ul-cont ul').slideUp(0)
        $('.fa-bars').unbind('click').click(function(){$('.ul-cont ul').slideToggle();console.log(x)})
        bigScreen=false
    }
}

function animator(ele1,ele2,pos,clas){
    if($(window).scrollTop()>=$(ele1).offset().top-($(window).height()*pos)){
        $(ele2).addClass(clas)
    }
}

diffsize('one')

$(window).scroll(function(){
    animator('.about','.about img',(1/2),'aboutImg')
    animator('.about','.about p',(1/2),'aboutP')
    animator('.about','.about h2',(1/2),'aboutH')
    for(i=0;i<5;i++){
        animator(`.sev:eq(${i})`,`.sev:eq(${i}) i`,(3/4),'sevI')
        animator(`.sev:eq(${i})`,`.sev:eq(${i}) p`,(3/4),'sevP')
    }
    
})

$(window).resize(function(){
    screenWidth=$(window).width()

    diffsize('two')
})