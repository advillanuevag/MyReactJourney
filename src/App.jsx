import reactImg from "../src/assets/react-core-concepts.png"; 
import componenstImg from "./assets/components.png";                                                           

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']; 

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1)); 
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)] 
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept(props){ 
  return(
    <li>
      <img src={props.image} alt={props.title}/> 
      <h3>{props.title}</h3>
      <p>{props.description}</p>


    </li>
  )
}


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id = "core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept //Here you define the Props you wanna use, within the call to your component CoreConcepts */
              title = "Components" 
              description = "The Core IU Building Block"
              image = {componenstImg} //Here you use {} syntax to insert images as a Prop.
          />
          <CoreConcept title = "Props"/>
          <CoreConcept />
          <CoreConcept />


        </ul>


        </section>
        
      </main>
    </div>
  );
}

export default App;
