import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import Cart from "./components/Country/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };

  return (
    <div className="App">
      <h3>Country load {countries.length}</h3>
      <h5>Country add: {cart.length}</h5>
      <Cart cart={cart}></Cart>
      {countries.map((country) => (
        <Country
          handleAddCountry={handleAddCountry}
          country={country}
          key={country.alpha2Code}
        ></Country>
      ))}
    </div>
  );
}

export default App;
