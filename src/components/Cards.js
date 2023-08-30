import CardItem from "./CardItem";
import "./Cards.css";
import img2 from "./images/personal-website.png";
import img3 from "./images/todo-app.png";
import img4 from "./images/FuelPredictionApp.png";
import img5 from "./images/MedicalApp.png";

function Cards() {
  return (
    <div className="cards">
      <h1> Personal Projects </h1>
      <div className="cards__container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src={img2}
              alt=""
              text="Created own personal website for showing resume..."
              label="Personal Website"
            />
            <a href="https://khuedo276.github.io/todo-app/">
              <CardItem
                src={img3}
                alt=""
                text="Created todo-app for adding, editting and deleting tasks."
                label="To-do app"
              />
            </a>
          </ul>
        </div>
      </div>
      <h1> Academic Projects</h1>
      <div className="cards__container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <a href="https://github.com/KhueDo276/FuelPredictionApp ">
              <CardItem
                src={img4}
                alt=""
                text="Created user-centric app: APIs, React UI, led Agile fuel prediction."
                label="Fuel-Rate Prediction Application "
              />
            </a>
            <a href="https://github.com/KhueDo276/MedicalClinic ">
              <CardItem
                src={img5}
                alt=""
                text="Built MySQL CRUD, tailored authentication, and user-friendly interface."
                label="Medical Clinic Database Application"
              />
            </a>
          </ul>
        </div>
      </div>
      <div className="cards__container">
        <a
          className="aca-project"
          href="https://github.com/KhueDo276/StudentManagementSystem "
        >
          Student Management System
        </a>
        <div className="aca-info">
          <ul>
            • Created program using Python to collect and analyze information of
            students from data sets.{" "}
          </ul>{" "}
          <ul>
            • Generated three different csv files to identify students who
            qualify for scholarships according to GPA and other credentials.
          </ul>{" "}
          <ul>
            • Formulated system to analyze data sets of 1,000+ students’
            information.
          </ul>
        </div>
        <h1></h1>
        <a
          className="aca-project"
          href="https://github.com/KhueDo276/TamagotchiPetGame"
        >
          Tamagotchi Pet Game
        </a>
        <div className="aca-info">
          <ul>
            • Created game using C++ to load menu for users to choose pet types
            and name pet.{" "}
          </ul>{" "}
          <ul>
            • Coded game to allow pet customization, feeding, caring for and
            other status changes and store data.
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}

export default Cards;
