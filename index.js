function display(value){
    if(value=='='){
        let ans=eval($("textarea").val())
        $("textarea").text(ans)
    }
    else if (value=='C') {
        $("textarea").text("")
    } else {
        
        $("textarea").text($("textarea").val()+value)
    }
    
}

function cal(){
    let ans=eval($("textarea").val())
    $("textarea").text(ans)
}

