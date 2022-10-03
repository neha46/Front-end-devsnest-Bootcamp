document.addEventListener("DOMContentLoaded",function(){

      document.querySelector("form").addEventListener("submit",function(event){
            //not want to refresh page
            event.preventDefault();
      console.log(event)
      const form=event.target;
      console.log(form.Username.value)
    const e=form.email.value
    console.log("email is is "+e)

      })
      document.getElementById("email").addEventListener("input",function(event)
      {
      const emailElemet = event.target;
      if( emailElemet.validity.typeMismatch )
            {emailElemet.setCustomValidity("please enter email");
            emailElemet.reportValidity();}
            else
                  emailElemet.setCustomValidity("");

      })
})
