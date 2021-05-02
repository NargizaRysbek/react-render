import './App.css';
import {Card} from './Components/Card'
export const App = () => {
  
  const data = [
    {
      name: "Nargiza",
      position: "Frontend Developer",
      id: 1
    },
    {
      name: "Maksat",
      position: "Devops Engineer",
      id: 2
    },
    {
      name: "Alina",
      position: "Backend Developer",
      id: 3
    }
  ]
  return (
    <div className="App">
      {
        data.map((el, id) => {
          return <Card 
                   full_name={el.name}
                   position={el.position}
                   id={el.id} />
        })
      }
     
     {/* <div className="card">dgevrter</div> */}
    </div>
  );
}