import React, { useState } from "react"
// import { PaystackButton } from "react-paystack"
// import "./App.css"
const App = () => {
  const publicKey = 'pk_test_204c9b2cde4a3294c5e246245cbcd45ee5567898'
  const amount = 1000000
  const [email, setEmail] = useState("kanuamani@gmail.com")
  const [name, setName] = useState("Amani Kanu")
  const [phone, setPhone] = useState("08160916203")
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }
  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <img />
          <div className="item-details">
            <p>Dancing Shoes</p>
            <p>{amount}</p>
          </div>
        </div>
        <div className="checkout-form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton {...componentProps} />
        </div>
      </div>
    </div>
  )
}
export default App