import React from 'react'
import "../Styling/Location.css"
export default function Review() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8915d545-15fa-4648-8fe8-b1f973b65ad9");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Thank you for your feedback!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    window.onload = () => {
      const mouseOnlyNumberInputField = document.getElementById("star");
      mouseOnlyNumberInputField.addEventListener("keypress", (event) => {
        event.preventDefault();
      });
    }
  
  return (
    <div className="container-form">
    <p className='subs-info inter'>Give us your honest opinion below </p>
    <form onSubmit={onSubmit} className="form">
    <textarea type="text" name="Recenzie" required className='text-area' placeholder='Quick feedback' />
        <input type="number" id="star" className="stars-area" name="stele" step="0.5" placeholder="Stars" min="0.5" max="5" />
        <button type="submit" className='button-submit'>
          <a href="" className="cta submit">
            <span>SEND Review</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </button>
    </form>
    <span>{result}</span>

  </div>
  )
}
