import logo from "./logo.svg";
import "./App.css";

function App() {
  const token =
    "EAAGiTB4jRXQBOwaBfnDdFgmZBHDHNi2jITIr8wVbAnGBZAeDwzut9MXjKsZCyArg4XnjtOVrGcSXBLtqYHCSTQs5rIkDb2HVXJFjQONREjh8VeZBsWNxpZBInYZBYF2oqryiHyZABJ0Y7V2mWpuJ3OrxHZAowHUWS9jmAkrGkaOornmAJv4YZAeR3eErEOgrnuUpAmZAcYp3QtZBh6r3iK8Bntl";
  const phoneNo = 918129265497;
  const baseUrl = "https://graph.facebook.com/v20.0/339765119229228";

  const flightDepart = (message) => {
    fetch(baseUrl + "/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: phoneNo,
        type: "text",
        text: {
          preview_url: false,
          body: message,
        },
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {})
      .catch((error) => {});
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0" /* added background color */,
        padding:
          "20px" /* added padding to create some space around the content */,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "20px",
          marginRight: "20px",
          paddingTop: "20px",
        }}
      >
        <button
          onClick={() => {
            flightDepart(
              `*Your Flight Booking Confirmation*
Dear Arun, 
  
Thank you for booking with AI 123. We are pleased to confirm your flight details as follows: 
  
  Passenger Name: *Arun* 
  Flight Number: *AI 123*
  Departure Date: *05-May-2023* 
  Departure Time: *1100* 
  Departure Airport: *CCJ* 
  Arrival Airport: *MCT* 
  
Please arrive at the airport at least 2 hours before your scheduled departure time to allow enough time for check-in and security procedures.`
            );
          }}
        >
          Flight booking confirmation
        </button>
        <button onClick={() => {
            flightDepart(
              "Your boarding pass is now being issued. Please check your email or the app for your boarding pass details."
            );
          }}>Boarding Pass Issuing Started</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "20px",
          marginRight: "20px",
          paddingTop: "20px",
        }}
      >
        <button>Checkin started</button>
        <button>Flight delay</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "20px",
          marginRight: "20px",
          paddingTop: "20px",
        }}
      >
        <button>Safety cone</button>
        <button>Baggage Found</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "20px",
          marginRight: "20px",
          paddingTop: "20px",
        }}
      >
        <button>Fire</button>
        <button>Contract expired</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "20px",
          marginRight: "20px",
          paddingTop: "20px",
        }}
      >
        <button>Login detected</button>
        <button>View report</button>
      </div>
    </div>
  );
}

export default App;
