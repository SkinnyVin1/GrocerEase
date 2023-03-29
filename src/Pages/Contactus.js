import "./Contactus.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
    return (

        
      
        <div class="contactContainer">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">BGC Taguig</div>
              <div class="text-two">Metro-Manila</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+63912345678</div>
              <div class="text-two">+63912345678</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">grocerease@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text"><h1 id='contact'>CONTACT US</h1></div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi porro rerum cupiditate expedita distinctio nisi nulla ipsum libero molestiae minima Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,ipsum libero molestiae</p>

          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Enter your name"/>
            </div>
            <div class="input-box">
              <input type="text" placeholder="Enter your email"/>
            </div>
            <div class="input-box message-box">
            <input type="text" placeholder=""/>

            </div>
            <div class="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
        </div>
      </div>
      
    );
  };
  
  export default Contact;