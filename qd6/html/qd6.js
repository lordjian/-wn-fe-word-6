window.onload=function(){
    $('word').onkeyup=function(){
        var word=this.vlaue;
        $('content').innerHTML=' ';
        if(word.length==0){
            $('content').style.display='none';
            return;
        }
        $.get('search.php','word='+word,function(msg){
            var length=msg.length;
            if(length>0)
            $('content').style.display='block';
            else
            $('content').style.display='none';
            for(var i=0;i<length;i++){
                var name=msg[i].name;
                var div=document.createElement('div');
                div.onmouseover=function(){
                    this.style.backgroundColor='#cc6699';
                }
                div.onmouseout=function(){
                    this.style.backgroundColor='ffffff';
                }
                div.onclick=function(){
                    $('word').vlaue=this.innerHTML;
                    $('content').style.display='none';
                };
                div.innerHTML=name;
                $('content').appendChild(div);
            }
        },'json');
    };
};