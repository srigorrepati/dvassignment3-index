document.getElementById('month').value=["Jan","Feb","March"];

function validation(){
    AllWrongs();
    let value1=0;
    let value2=0;
    let username=document.sampleForm.un.value;
    let email=document.sampleForm.ei.value;
    let phonenumber=document.sampleForm.phno.value;
    let password=document.sampleForm.pw.value;
    let confirmpassword=document.sampleForm.cpw.value;
    let value3 = document.sampleForm.music;
    for(let k=0;k<value3.length;k++){
        if(value3[k].checked){
            console.log(value3[k].value);
            value1++;
        }

    }
    let attribute=true;

    if(value1==0){
        document.getElementById('wrongmusic').innerHTML="Please Select <span style='color:orangered'>Music</span>";
        attribute=false;
    }

    if(username.length==0){
        document.getElementById('wrongusername').innerHTML="Please Enter <span style='color:orangered'>UserName</span>";
        attribute=false;
    }else if(username.length<4 || username.length >12){
        document.getElementById('wrongusername').innerHTML="Please Enter Valid <span style='color:orangered'>UserName</span>";
        attribute=false;
    }

    if (UpperCase(username)) {
        document.getElementById('wrongusername').innerHTML="Please Enter Valid <span style='color:orangered'>UserName</span>";
        attribute=false;
    }

    if (SpecialChar(username)) {
        document.getElementById('wrongusername').innerHTML="Please Enter Valid <span style='color:orangered'>UserName</span>";
        attribute=false;
    }

    if(email.length==0){
        document.getElementById('wrongemail').innerHTML="Please Enter <span style='color:orangered'>Email</span>";
        attribute=false;
    }else if(ValidEmail(email)){

    }else{
        document.getElementById('wrongemail').innerHTML="Please Enter Valid <span style='color:orangered'>Email</span>";
        attribute=false;
    }
    if(phonenumber.length==0){
        document.getElementById('wrongnumber').innerHTML="Please Enter <span style='color:orangered'>Phone Number</span>";
        attribute=false;
    }else if(phonenumber.length<12){
        document.getElementById('wrongnumber').innerHTML="Please Enter <span style='color:orangered'>Phone Number</span>";
        attribute=false;
    }else if(PhNumber(wrongnumber)){

    }else{
        document.getElementById('wrongnumber').innerHTML="Please Enter Valid <span style='color:orangered'>Phone Number</span>";
        attribute=false;
    }
    if(password.length==0){
        document.getElementById('wrongpassword').innerHTML="Please Enter <span style='color:orangered'>Password</span>";
        attribute=false;
    }else{
        if(UpperCase(password)){
            value2++;
        }
        if(LowerCase(password)){
            value2++;
        }

        if(PwChar(password)){
            value2++;
        }

        if(SpecialChar(password)){
            value2++;
        }

        if(value2<4){
            document.getElementById('wrongpassword').innerHTML="Please Enter Valid <span style='color:orangered'>Password</span>";
            attribute=false;
        }
    }

    const formula = document.sampleForm.gender;
    let count=0;
    for(const aws of formula){
        if(aws.checked){
            count++;
        }
    }
    if(count==0){
        document.getElementById('wronggender').innerHTML="Please Select <span style='color:orangered'>Gender</span>";
    }



    if(document.getElementById('day').value.length<1||document.getElementById('month').value.length<1||
        document.getElementById('year').value.length<1){
        document.getElementById('wrongbirthday').innerHTML="Please Enter <span style='color:orangered'>Birthday</span>";
        attribute=false;
    }else{
        document.getElementById('wrongbirthday').innerHTML="";
    }

    if(attribute){
        checkpw();
    }

}

function AllWrongs(){
    document.getElementById('wrongusername').innerHTML="";
    document.getElementById('wrongmusic').innerHTML="";
    document.getElementById('wrongemail').innerHTML="";
    document.getElementById('wrongnumber').innerHTML="";
    document.getElementById('wrongpassword').innerHTML="";
    document.getElementById('wronggender').innerHTML="";
    document.getElementById('wrongbirthday').innerHTML="";
}

function checkpw(){
    let password=document.sampleForm.pw.value;
    let confirmpassword=document.sampleForm.cpw.value;
    if(password!=confirmpassword){
        alert("password does not match");
    }else{
        window.location.href="index.html";
    }

}


function ValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function UpperCase(str) {
    return  /[A-Z]/.test(str);
}

function LowerCase(str) {
    return  /[a-z]/.test(str);
}


function PwChar(str) {
    return  /[0-9]/.test(str);
}

function SpecialChar(str) {
    return  /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/.test(str);
}

function PhNumber(str) {
    if(str[3]=='-'&&str[7]=='-'){
        return true;
    }else{
        return false;
    }
}

for(var l=1; l<=31; l++){
    var select = document.getElementById("day");
    var option = document.createElement("OPTION");
    select.options.add(option);
    option.text = l;
    option.value = l;
}

for(var j=1970; j<=2021; j++){
    var select = document.getElementById("year");
    var option = document.createElement("OPTION");
    select.options.add(option);
    option.text = j;
    option.value = j;
}