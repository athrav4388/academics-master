function sendEmail(){

    var fname = document.getElementById("Fname").value;
    var lname = document.getElementById("Lname").value;
    var eaddress = document.getElementById("Eaddress").value;
    var tel = document.getElementById("Tel").value;
    var message = document.getElementById("Message").value;
    

    var body = "Fname: " + fname + "<br/> Lname:" + lname + "<br/> Eaddress:" + eaddress + "<br/> Tel:" + tel +  "<br/> Message:" + message;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "p38000166@gmail.com",
        Password : "263259E33A977D7F9E0AAFE04A57FDDFAE47",
        To : 'p38000166@gmail.com',
        From : 'p38000166@gmail.com',
        Subject : "Form Enquiry",
        Body : body
    }).then(
        message => {
            if (message == "OK"){
                Swal.fire({
                    title: "ThankYou",
                    text: "Form has been Submitted Succesfully",
                    icon: "success"
                  });
        }
        else{
            Swal.fire({
                title: "Something Went Wrong",
                text: "Fill the Form Again",
                icon: "error"
              });

        }
    

      }
    );


}




