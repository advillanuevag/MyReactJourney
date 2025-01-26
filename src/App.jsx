const reactDescriptions = ['Fundamental', 'Crucial', 'Core']; //This code creates an array of values

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1)); //This function generates a random index for
                                                //later traverse the array created previously
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are going to build!
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
