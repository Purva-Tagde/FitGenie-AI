import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
function Dashboard() {

const navigate = useNavigate();

const user = JSON.parse(localStorage.getItem("user")) || {};

const [height, setHeight] = useState(user.height || "");
const [weight, setWeight] = useState(user.weight || "");
const [bmi, setBmi] = useState("");
const [category, setCategory] = useState("");
const [calories, setCalories] = useState("");
const [aiPlan, setAiPlan] = useState("");

const [water, setWater] = useState(
Number(localStorage.getItem("water")) || 0
);

const [steps, setSteps] = useState(
Number(localStorage.getItem("steps")) || 0
);

const logout = () => {
localStorage.removeItem("user");
navigate("/");
};
const generateAIPlan = async () => {

  const response = await fetch(
    "http://127.0.0.1:5000/generate-plan",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        age: user.age,
        height: user.height,
        weight: user.weight,
        goal: user.goal
      })
    }
  );

  const data = await response.json();

  setAiPlan(data.plan);
};
const calculateBMI = () => {


const h = height / 100;

const result = (weight / (h * h)).toFixed(2);


setBmi(result);

if (result < 18.5) {
  setCategory("Underweight");
} else if (result < 25) {
  setCategory("Normal Weight");
} else if (result < 30) {
  setCategory("Overweight");
} else {
  setCategory("Obese");
}

setCalories("");


};

const calculateCalories = () => {


let calorieValue = 0;

if (bmi < 18.5) {
  calorieValue = weight * 35;
} else if (bmi < 25) {
  calorieValue = weight * 30;
} else {
  calorieValue = weight * 25;
}

setCalories(Math.round(calorieValue));


};

const getDietPlan = () => {


if (bmi < 18.5) {
  return [
    "Banana Shake",
    "Milk",
    "Rice",
    "Eggs",
    "Peanut Butter"
  ];
}

if (bmi < 25) {
  return [
    "Poha",
    "Dal",
    "Chapati",
    "Salad",
    "Fruits"
  ];
}

return [
  "Oats",
  "Boiled Eggs",
  "Soup",
  "Salad",
  "Grilled Chicken"
];


};

const getWorkoutPlan = () => {


if (bmi < 18.5) {
  return [
    "Pushups - 10",
    "Squats - 15",
    "Jogging - 10 min"
  ];
}

if (bmi < 25) {
  return [
    "Walking - 30 min",
    "Jogging - 15 min",
    "Stretching"
  ];
}

return [
  "Walking - 45 min",
  "Jumping Jacks - 20",
  "Cycling - 20 min"
];


};

const getAdvice = () => {


if (bmi < 18.5) {
  return "Increase calorie intake and focus on strength training.";
}

if (bmi < 25) {
  return "Maintain your current healthy lifestyle.";
}

return "Focus on calorie deficit and regular cardio.";


};

return (
<>
<nav className="custom-navbar">

  <div className="navbar-top">
    <h1 className="navbar-title">
      💪 FitGenie AI
    </h1>

    <p className="navbar-subtitle">
      Personalized Fitness & Diet Planner
    </p>
  </div>

  <div className="navbar-bottom">

    <button
      className="btn btn-light"
      onClick={() => navigate("/profile")}
    >
      View / Edit Profile
    </button>

    <button
      className="btn btn-danger"
      onClick={logout}
    >
      Logout
    </button>

  </div>

</nav>

<div className="container dashboard-container">


    <div className="card shadow p-4">

      <h1>FitGenie AI Dashboard</h1>

      <p className="text-muted">
        Small daily improvements are the key to success.
      </p>

      <div className="alert alert-info">
        <h3>Welcome, {user.name} 👋</h3>
        <p>Let's achieve your fitness goals today!</p>
      </div>
<div className="stats-grid">

  <div className="stat-card">
    <h3>💧 Water</h3>
    <h2>{water}/8</h2>
  </div>

  <div className="stat-card">
    <h3>👣 Steps</h3>
    <h2>{steps}</h2>
  </div>

  <div className="stat-card">
    <h3>⚖ BMI</h3>
    <h2>{bmi || "--"}</h2>
  </div>

  <div className="stat-card">
    <h3>🔥 Calories</h3>
    <h2>{calories || "--"}</h2>
  </div>

</div>
      <div className="row mb-4">

        <div className="col-md-4">
          <div className="card bg-primary text-white p-3">
            <h5>BMI</h5>
            <h2>{bmi || "--"}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-success text-white p-3">
            <h5>Water</h5>
            <h2>{water}/8</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-warning text-dark p-3">
            <h5>Steps</h5>
            <h2>{steps}</h2>
          </div>
        </div>

      </div>

      <div className="card p-3 mb-4">
        <h4>User Information</h4>

        <p>Age: {user.age}</p>
        <p>Height: {user.height} cm</p>
        <p>Weight: {user.weight} kg</p>
        <p>Goal: {user.goal}</p>
      </div>

      <h4>Goal Progress</h4>
<div className="goal-card">

  <h3>🎯 Weight Goal</h3>

  <p>Current Weight: {user?.weight} kg</p>

  <p>Goal Weight: 50 kg</p>

  <progress
    value={user?.weight}
    max="80"
  />

</div>
      <div className="progress mb-3">
        <div
          className="progress-bar bg-info"
          style={{
            width: `${Math.min((water / 8) * 100, 100)}%`
          }}
        >
          Water
        </div>
      </div>

      <div className="progress mb-4">
        <div
          className="progress-bar bg-success"
          style={{
            width: `${Math.min((steps / 10000) * 100, 100)}%`
          }}
        >
          Steps
        </div>
      </div>

      <h3>BMI Calculator</h3>

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        type="number"
        className="form-control mb-3"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={calculateBMI}
      >
        Calculate BMI
      </button>

      {bmi && (
        <>
          <div className="alert alert-success mt-4">
            <h4>Your BMI: {bmi}</h4>
            <h4>{category}</h4>
          </div>

          <div className="row">

            <div className="col-md-6">
              <div className="card p-3 mb-3">
                <h4>🥗 Diet Plan</h4>

                <ul>
                  {getDietPlan().map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card p-3 mb-3">
                <h4>🏋 Workout Plan</h4>

                <ul>
                  {getWorkoutPlan().map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          <button
            className="btn btn-warning"
            onClick={calculateCalories}
          >
            Calculate Calories
          </button>

          

      {calories && (
        <div className="alert alert-warning mt-3">
          <h4>Daily Calories Needed</h4>
          <h3>{calories} kcal</h3>
        </div>
      )}
<div className="card p-3 mt-3">
            <h4>🤖 AI Advice</h4>
            <p>{getAdvice()}</p>
            <button
  className="btn btn-primary mt-3"
  onClick={generateAIPlan}
>
  Generate AI Fitness Plan
</button>
          </div>
        </>
      )}
      {aiPlan && (
  <div className="card p-3 mt-3">
    <h4>🤖 AI Generated Fitness Plan</h4>

    <div className="ai-plan-box">
  {aiPlan.split("\n").map((line, index) => (
    <p key={index}>{line}</p>
  ))}
</div>
  </div>
)}
      <div className="card p-3 mt-4">
        <h4>💧 Water Tracker</h4>

        <p>{water} Glasses</p>

        <button
          className="btn btn-info"
          onClick={() => {
            const newWater = water + 1;
            setWater(newWater);
            localStorage.setItem("water", newWater);
          }}
        >
          + Drink Water
        </button>
      </div>
      {water < 8 && (
  <div className="alert-card">
    ⚠ Drink more water today!
  </div>
)}

      <div className="card p-3 mt-3">
        <h4>👣 Step Tracker</h4>

        <p>{steps} Steps</p>

        <button
          className="btn btn-success me-2"
          onClick={() => {
            const newSteps = steps + 100;
            setSteps(newSteps);
            localStorage.setItem("steps", newSteps);
          }}
        >
          +100 Steps
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            setSteps(0);
            localStorage.setItem("steps", 0);
          }}
        >
          Reset
        </button>
        <div className="schedule-card">

<h2>📅 Weekly Plan</h2>

<ul>
<li>Monday - Cardio</li>
<li>Tuesday - Strength</li>
<li>Wednesday - Yoga</li>
<li>Thursday - Cardio</li>
<li>Friday - Strength</li>
<li>Saturday - HIIT</li>
<li>Sunday - Rest</li>
</ul>


</div>
      </div>

          </div>

    </div>



</>
);

}

export default Dashboard;