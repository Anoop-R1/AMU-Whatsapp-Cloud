import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{
      backgroundColor: '#f0f0f0', /* added background color */
      padding: '20px' /* added padding to create some space around the content */
    }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', marginRight: '20px', paddingTop: '20px' }}>
    <button>Flight about to depart</button>
    <button>Boarding started</button>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', marginRight: '20px', paddingTop: '20px' }}>
    <button>Checkin started</button>
    <button>Flight delay</button>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', marginRight: '20px', paddingTop: '20px' }}>
    <button>Safety cone</button>
    <button>Baggage Found</button>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', marginRight: '20px', paddingTop: '20px' }}>
    <button>Fire</button>
    <button>Contract expired</button>
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', marginRight: '20px', paddingTop: '20px' }}>
    <button>Login detected</button>
    <button>View report</button>
  </div>
</div>
  );
}

export default App;
