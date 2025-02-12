import reactImg from "../src/assets/react-core-concepts.png"; /*Tells React where to look for
                                                                 the header Image (The atom). */
import componenstImg from "./assets/components.png";   /*Tells React where to look for
                                                         Component Image. */
import { CORE_CONCEPTS } from "./data";    /*Tells React where to look for
                                             CORE_CONPCEPT (array of data). */                                                    

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

function CoreConcept({ image, title, description }){ /*Here we use Destructuring JS feature
  to set the CORE_CONCEPTS values as Props for the CoreConcept Component. */
  return(
    <li>
      <img src={image} alt={title}/> 
      <h3>{title}</h3>
      <p>{description}</p>


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
              title = {CORE_CONCEPTS[0].title}
              description = {CORE_CONCEPTS[0].description}
              image = {CORE_CONCEPTS[0].image} //Here you use {} syntax to insert images as a Prop.
          />
          <CoreConcept 
             {...CORE_CONCEPTS[1]} /*Use JS Spread Operator ... to access 
                                     the values contained in CORE_CONCEPTS array
                                     index 1. */                                   
          />
          <CoreConcept 
            {...CORE_CONCEPTS[2]}
          
          />
          <CoreConcept 
            {...CORE_CONCEPTS[1]}
          />

        </ul>


        </section>
        
      </main>
    </div>
  );
}

export default App;
