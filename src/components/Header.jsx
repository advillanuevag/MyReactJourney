import reactImg from "../assets/react-core-concepts.png"; /*Tells React where to look for
                                                                 the header Image (The atom). */

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']; /* We cut and pasted this
                                                                 sentence for reactDescriptions
                                                                 array to be available for Header
                                                                 component.*/

function genRandomInt(max) { /* We cut and pasted this
                                function for its code to be available to Header component.*/
    return Math.floor(Math.random() * (max + 1)); 
  }

export default function Header() { /* We must export this components so it´s code can be 
                                   available for react*/
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