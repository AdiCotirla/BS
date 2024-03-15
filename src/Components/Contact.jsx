import React from 'react'
import "../Styling/Contact.css"
export default function Contact() {
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
      setResult("Your request has been submited with success!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
         <div className="container-form-contact">
      <p className='subs-info'>Contact us </p>
      <form onSubmit={onSubmit} className="form-contact">
        <div className='div-info'>
      <input type="text" name="Nume" required className='text-nume general-text' placeholder='First Name' />
      <input type="text" name="Prenume" required className='text-nume general-text'  placeholder='Last Name' />
      <input type="tel" name="Numar telefon" required className='text-nume general-text'  placeholder='Number' />
        </div>

        <div className='div-problema'>
      <input type="email" name="Email" required className='text-mail general-text' placeholder='Email adress' />
      <textarea type="Text" name="Problema" required className='text-problema general-text' placeholder='Message' />
          
        </div>
          <button type="submit" className='button-submit'>
            <a href="" className="cta submit">
              <span>Submit</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </button>
      </form>
      <span>{result}</span>

    </div>
    </div>
  )
}
