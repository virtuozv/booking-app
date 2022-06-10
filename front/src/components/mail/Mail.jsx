import './mail.css';

const Mail = () => {
  return (
    <div className="mail">
            <h1 className="mailBigTitle">Save time, save money!</h1>
            <span className="mailTitle">Sign up and we'll send the best deals to you.</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your email" className="mailEmail" />
                <button className="subscribeMail">Subscribe</button>
            </div>
            <div className="formMail">
                <input type="checkbox" />
                <div className="checkMailTitle">Send me a link to get the FREE Booking.com app!</div>
            </div>
        </div>
  )
}

export default Mail