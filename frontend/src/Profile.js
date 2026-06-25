import "./Profile.css";
function Profile() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
  <div className="profile-container">
    <div className="profile-card">
      <h1>User Profile</h1>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Height:</strong> {user.height} cm</p>
      <p><strong>Weight:</strong> {user.weight} kg</p>
      <p><strong>Goal:</strong> {user.goal}</p>
    </div>
  </div>
);
}

export default Profile;