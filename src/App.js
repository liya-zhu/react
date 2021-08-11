import React from "react"; //Lets us use JSX
import Time from "./components/Time.js";

export default function App() {
  return (
    <div class="body">
      <Time />
      <Introduction />
      <div>
        <h1>My name is Googogle</h1>
      </div>
    </div>
  );
}
//Component = function that returns HTML
//When things get complicated, break it down.
function Introduction() {
  return (
    <div>
      <h1> Hi my name is Googogle</h1>
      <img src="https://www.google.com/search?q=image&sxsrf=ALeKk01bg4n-nsXXYvErrQJ_xsibnHhyCg:1628632230460&tbm=isch&source=iu&ictx=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_&vet=1&usg=AI4_-kReDzFRmzDAOj_DsRSOvMu2NwesqQ&sa=X&ved=2ahUKEwjOv8Pst6fyAhWMXc0KHSsHDAAQ9QF6BAgVEAE#imgrc=gxFxsvFBmxeZ9M" />
    </div>
  );
}

/*
Common errors: forget to import React - can't use JSX
Unterminated JSX: you forgot to close a tag
Don't return multiple elements from one fucntion
unexpected token - forgot to close some type of bracket
Make sure you export the function
Don't name everything the same thing
useEffect
*/
