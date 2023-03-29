import "./Team.css";
import Team1 from "../Images/team1.jpg";
import Team2 from "../Images/team2.png";
import Team3 from "../Images/vin.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section>
      <div class="row">
        <h1>Our Team</h1>
      </div>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={Team2} />
            </div>
            <h3>Emmanuel Galaroza</h3>
            <p>Web Developer</p>
            <p className='portfolio'><Link to='https://skinnyvin1.github.io/First-React-Deployment-Serrano/' target='_blank'>View Portfolio</Link></p>
            <div class="icons">
            <Link to='https://www.facebook.com/emmanuel.galaroza.7' target='_blank'>
                <i class="fa-brands fa-square-facebook"></i>
              </Link>
              <a href="#">
                <i class="fa-brands fa-discord"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-square-github"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={Team1} />
            </div>
            <h3>Atashia Almo</h3>
            <p>Web Developer</p>
            <p className='portfolio'><Link to='https://skinnyvin1.github.io/First-React-Deployment-Serrano/' target='_blank'>View Portfolio</Link></p>
            <div class="icons">
              <Link to='https://www.facebook.com/atashia.almo.399' target='_blank'>
                <i class="fa-brands fa-square-facebook"></i>
              </Link>
              <a href="#">
                <i class="fa-brands fa-discord"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-square-github"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={Team3} id="vin" />
            </div>
            <h3>Vincent Serano</h3>
            <p>Web Developer</p>
           <p className='portfolio'><Link to='https://skinnyvin1.github.io/First-React-Deployment-Serrano/' target='_blank'>View Portfolio</Link></p>
            <div class="icons">
              <Link to="https://www.fb.com/simon.vicente02" target='_blank'>
                <i class="fa-brands fa-square-facebook"></i>
              </Link>
              <Link to='https://discord.com/users/730440208557932614' target='_blank'>
                <i class="fa-brands fa-discord"></i>
              </Link>
              <Link to='https://github.com/SkinnyVin1' target='_blank'>
                <i class="fa-brands fa-square-github"></i>
              </Link>
              <Link to='https://www.linkedin.com/in/vincent-serrano-80009114b/' target='_blank'>
                <i class="fa-brands fa-linkedin"></i>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
