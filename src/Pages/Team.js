import "./Team.css";
import Team1 from "../Images/team1.jpg";
import Team2 from "../Images/team2.png";
import Team3 from "../Images/vin.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
            <p>Developer</p>
            <div class="icons">
              <a href="#">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
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
            <p>Developer</p>
            <div class="icons">
              <a href="#">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
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
            <p>Developer</p>
            <div class="icons">
              <a href="#">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
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
      </div>
    </section>
  );
};

export default Team;
