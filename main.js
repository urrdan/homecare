x=0
list=['images/img1a.jpg','images/img1b.jpg','images/img1c.jpg']
setInterval(function(){
    $('.wrapper').css({'background': `url(${list[x]}) no-repeat`, 'background-size': 'cover  '})
    x++
    if (x>2){x=0}
},2500)
function animator(ele1,ele2,pos,clas){
    if($(window).scrollTop()>=$(ele1).offset().top-($(window).height()*pos)){
        $(ele2).addClass(clas)
    }
}

$(window).scroll(function(){
    animator('.about','.about img',(1/2),'aboutImg')
    animator('.about','.about p',(1/2),'aboutP')
    animator('.about','.about h2',(1/2),'aboutH')
    for(i=0;i<5;i++){
        animator(`.sev:eq(${i})`,`.sev:eq(${i}) i`,(3/4),'sevI')
        animator(`.sev:eq(${i})`,`.sev:eq(${i}) p`,(3/4),'sevP')
    }
    
})