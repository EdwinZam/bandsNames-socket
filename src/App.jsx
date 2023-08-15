import { useContext} from "react";
import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";
import { useSocket } from "./hooks/useSocket";
import { SocketContext } from "./context/SocketContext";
import { BandChart } from "./components/BandChart";
//import { io } from "socket.io-client";

// const connectSocketServer=()=>{
//   const socket = io.connect('http://localhost:8080',{transports: ['websocket']});
//   return socket;
// }

function App() {
 
  const {online} = useContext(SocketContext)
  
  return (
    <div className="container">
      <div className="alert">
        <p>
          service status:  &nbsp; 
          {
            online ?<span className="text-success">Online</span> : <span className="text-danger">Offline</span>
          }
          
        </p>
      </div>

      <h1>BandNames</h1>
      <hr/>
      <div className="row">
          <div className="col">
            <BandChart />
          </div>
      </div>
      
      <div className="row">
        <div className="col-8">
          <BandList />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>

    </div>
    
  );
}

export default App;
