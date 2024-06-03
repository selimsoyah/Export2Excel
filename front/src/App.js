import React from 'react';

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formEle = e.target;
    const formData = new FormData(formEle);

    fetch("https://script.google.com/macros/s/AKfycbxujvEVl9guyuLIv6Wa8Fa7QLcb35vZ42oqpTlAuMUKL9fxdbABl2tMTXSONVkiF1ZZ/exec", {
      method: "POST",
      body: formData,
      mode: 'no-cors',
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="App">
      <h1>Contact Me form</h1>
      <h2>This demonstrates how to send data from a website form to Google Sheet in React or Vanilla JS</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Your Name" name="Name" type="text" required />
        <input placeholder="Your Email" name="Email" type="email" required />
        <input placeholder="Your Message" name="Message" type="text" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
