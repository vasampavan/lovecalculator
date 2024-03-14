var noOfButtons=document.querySelectorAll("button").length;
for(var i=0;i<noOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonname=this.innerHTML;
    buttonClicked(buttonname);
    }); 
}
function buttonClicked(buttonname){
    switch(buttonname){
        case "Calculate LOVE":
            var yourname=document.getElementsByName("Your_Name")[0].value;
            var crushname=document.getElementsByName("Crush_Name")[0].value;
            var res=calculatelove(yourname,crushname);
            document.getElementsByName("love_score")[0].value=res;
            givedescription(res);
            break;
        case "Clear":
            clearClicked();
            break;
        default:
            console.log("Error");
        }
}
function calculatelove(yourname,crushname){
    var pattern = /^[a-z]+$/;
    yourname=yourname.toLowerCase();
    crushname=crushname.toLowerCase();
    if(yourname===""){
        alert("Please, Enter Your Name");
        return;
    }
    else if(crushname===""){
        alert("Please, Enter Your Crush Name");
        return; 
    }
    else if(!pattern.test(yourname)){
        alert("Your Name:: Only letters allowed");
        return;
    }
    else if(!pattern.test(crushname)){
        alert("Crush Name:: Only letters allowed");
        return;
    }
    else if(yourname===crushname){
        alert("ante meeru meeru");
        return;     
    }
    
    var yourname=yourname.split('').sort().join('');
    var crushname=crushname.split('').sort().join('');
    var matchingNoofchar=0;
    var temp="";
    if(yourname.length<=crushname.length){
        var firstStr=yourname;
        var secondstr=crushname;
    }
    else{
        var firstStr=crushname;
        var secondstr=yourname;
    }
    for(var i=0;i<firstStr.length;i++){
        if(secondstr.includes(firstStr[i]) && !temp.includes(firstStr[i])){
            matchingNoofchar+=Math.min(firstStr.split(firstStr[i]).length - 1,secondstr.split(secondstr[i]).length - 1);
            temp+=firstStr[i];
        }
    }
   
    var totalChar=yourname.length+crushname.length;
    var notMatchingchar=totalChar-matchingNoofchar;
    matchingNoofchar=matchingNoofchar*2;
    if(notMatchingchar>=matchingNoofchar){
    var res=Math.floor((matchingNoofchar/notMatchingchar)*100);
    }
    else{
        var res=Math.floor((notMatchingchar/matchingNoofchar)*100);  
    }
    return Math.max(16,res);
    
}
function givedescription(res){
    if(res<30){
    document.getElementsByName("description")[0].value="Very Weak";
    
    }
    else if(res>=30 && res<50){
        document.getElementsByName("description")[0].value="Weak";
    }
    else if(res>=50 && res<75){
        document.getElementsByName("description")[0].value="Moderate";
    }
    else if(res>=75 && res<90){
        document.getElementsByName("description")[0].value="Strong";
    }
    else if(res>=90 && res<=100){
        document.getElementsByName("description")[0].value="Very Strong";
       
    }

}
function clearClicked(){
    document.getElementsByName("Your_Name")[0].value="";
    document.getElementsByName("Crush_Name")[0].value="";
    document.getElementsByName("love_score")[0].value="";
    document.getElementsByName("description")[0].value="";
}