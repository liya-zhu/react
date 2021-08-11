import react from "react";

export default function hobbies() {
  let time = new Date().toTimeString();

  return (
    <div class="Hobbies">
      <p>The time is: {time}</p>
    </div>
  );
}
