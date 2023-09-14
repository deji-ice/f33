import NavBar from './components/NavBar'
import './App.css'
import Card from './components/Card'
import { Welcome } from './components/Welcome'

const App = () => {
  const data = [
    {
      "description": "Software Engineer with a passion for building scalable web applications.",
      "position": "Software Engineer",
      "company": "TechCorp",
      "name": "Alice Johnson",
     
    },
    {
      "description": "Marketing Specialist with expertise in digital marketing strategies.",
      "position": "Marketing Specialist",
      "company": "Marketing Pro",
      "name": "Bob Smith",

    },
    {
      "description": "Experienced Project Manager skilled in leading cross-functional teams.",
      "position": "Project Manager",
      "company": "Project Solutions Inc.",
      "name": "Carol Davis",

    },
    {
      "description": "Creative Graphic Designer known for delivering stunning visuals.",
      "position": "Graphic Designer",
      "company": "DesignMasters",
      "name": "David Brown",

    }
  ]

 const hey = ()=>{
  alert("you clicked me")
 }
const text ="how are you?"
    
  return (
    <div className=''>
      <NavBar />
      <Welcome alert={hey} data={data} />

      {
        data.map((item, index) => (
          <Card
          alert={hey}
            key={index}
            description={item.description}
            position={item.position}
            company={item.company}
            name={item.name}
            image={item.image} />
        ))
      }



    </div>
  )
}

export default App
