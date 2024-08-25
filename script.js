function sendMail(){
    var params ={
        name : document.getElementById("name").value,
        email:document.getElementById("email").value,
       
        message:document.getElementById("message").value,
    }
    const serviceID ="service_qsv3mtd";
const templateID ="template_6y19m1d";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
       
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your mail was sent successfully")
    }
)
.catch((err)=>console.log(err));
}