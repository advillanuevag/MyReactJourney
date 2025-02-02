import reactImg from "../src/assets/react-core-concepts.png"; //This code is a leaner 
                                                          // way to insert images in your app.
                                                          // and then in line 21, you use
                                                          // {} syntax to insert the image
                                                          // associated with reactImg variable.

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']; //This code creates an array of values

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1)); //This function generates a random index for
                                                //later traverse the array created previously
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)] //This line keeps the jsx code cleaner,
                                                        // and easy to understand by using the
                                                        // variable description to hold the call
                                                        // of the genRandomInt() function.
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


function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
