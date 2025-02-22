
import componenstImg from "./assets/components.png";   /*Tells React where to look for
                                                         Component Image. */
import { CORE_CONCEPTS } from "./data";    /*Tells React where to look for
                                             CORE_CONPCEPT (array of data). */  
import Header from "./components/Header"; /*Tells React where to look for
                                            Header component code. */

import CoreConcept from "./components/CoreConcept";/*Tells React where to look for
                                                     CoreConcept component code. */
import TabButton from "./components/TabButton";


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

        <section id="examples"> /* We added a new Section here to create
                                   the next part of our app which will
                                   contain four tab buttons */
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>


        </section>
        
      </main>
    </div>
  );
}

export default App;
