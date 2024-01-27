function display(val){
    if(val=="+"||val=="-"||val=="/"||val=="*"){
        let str = document.getElementById("result").value;
        let length = str.length;
        if(str.charAt(length-1)=="+"||str.charAt(length-1)=="-"||str.charAt(length-1)=="/"||str.charAt(length-1)=="*"){
            val="";
        }
        if(length==0){
            val="";
        }
    }
    if(val!="c"&&val!="="){
        document.getElementById("result").value += val; 
    }
   else if(val=="c"){
        document.getElementById("result").value = "";
   }

}
function calculate(){
    let x = document.getElementById("result").value;
    document.getElementById("result").value=eval(x);
}