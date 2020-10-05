<template>
  <div class="profile">
        <header>
            <Navigation />    
        </header>
        
        <div class="profile-container">
            <img class="profile-img" src="../assets/profileairbean.svg" alt="profileairbean"/>  
            <h1>Välkommen till AirBean-familjen</h1>
            <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
            
                <form id="login-form" method="post" name="login-form">
                <label><p class="forms">Namn</p></label>
                <input type="text" name="username" id="username" placeholder="Sixten Kaffelövér"/>
                <label><p class="forms">Epost</p></label>
                <input type="email" name="email" id="email" placeholder="sixten.kaffelover@zocom.se"/>
                </form>

                <label class="gdpr">
                <input type="radio" name="gdpr-checkbox"/>
                <span>GDPR Ok!</span>
                </label>

                <button class="profile-btn">Brew me a cup!</button>
        </div>
      
  </div>
</template>


<script>
import Navigation from "../components/Navigation"

export default {
    name: 'Profile',
    
    components:{ 
    Navigation 
     }
}
</script>


<style scoped lang="scss">
.profile {  
    background: #2F2926;
    background-image: url("../assets/top.svg");
    min-height: 200px;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100vh;

        .profile-container {
        background: #F3E4E1;
        color:#2F2926;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25); 
        border-radius: 3px; 
        min-height:fit-content;
        width: 80%; 
        margin-left:7%;
        padding: 20px;

                .profile-img {
                    margin-left: 50%;
                }    
                h1 {
                    text-align: center;   
                }
                #login-form {
                    display:flex;
                    flex-direction: column;

                            label {
                                font-size: 12px;
                                  }
                            input {
                            padding: 10px; 
                                  }
                            .forms {
                                margin: 0.4rem;
                                font-size: 12px;
                                   }
                        }
                
                .gdpr  {
                    display: flex;
                    margin-top: 10px;
                    margin-bottom: 10px;

                            input {
                                height: 20px;
                                width: 20px;
                                -webkit-appearance: none;
                                -moz-appearance: none;
                                -o-appearance: none;
                                appearance: none;
                                border: 1px solid #34495E;
                                border-radius: 10px;
                                outline: none;
                                transition-duration: 0.3s;
                                background-color: #41B883;
                                }
                            input:checked {
                                border: 1px solid #34495E;
                                background-color: tomato;
                                 }
                            span {
                                margin-top: 5px;
                                font-size: 12px;
                                 }      
                        }

                .profile-btn {
                background: #2F2926;
                color: white;
                border-radius: 5rem;
                height: 3rem;
                width: 15rem;
                font-size: 1.4rem;
                cursor: pointer;
                border: none;
                }
         }

}    
</style>