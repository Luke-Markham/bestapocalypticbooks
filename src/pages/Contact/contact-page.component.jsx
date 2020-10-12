import React from 'react';
import Fade from 'react-reveal';
import FormInput from '../../components/input/input.component';
import GeneralBtn from '../../components/generalBtn/generalBtn.component';

class ContactPage extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    sent: false,
  };

  handleForm = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      message: '',
      sent: true,
    });

    setTimeout(
      function () {
        this.setState({
          sent: false,
        });
      }.bind(this),
      3000
    );
  };

  handleFields = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact-page-container">
        <Fade duration={2000}>
          <form className="contact-form" onSubmit={this.handleForm}>
            {this.state.sent ? (
              <Fade>
                <h2 className="contact-page-title">
                  Thanks, we'll get back to you asap!
                </h2>
              </Fade>
            ) : (
              <>
                <Fade down>
                  <h2 className="contact-page-title">Contact us</h2>
                </Fade>
                <Fade left>
                  <FormInput
                    type="text"
                    value={name}
                    name="name"
                    label="Name"
                    onChange={this.handleFields}
                    required
                  />
                </Fade>
                <Fade right>
                  <FormInput
                    type="email"
                    value={email}
                    name="email"
                    label="Email"
                    onChange={this.handleFields}
                    required
                  />
                </Fade>
                <Fade left>
                  <textarea
                    value={message}
                    name="message"
                    rows="8"
                    onChange={this.handleFields}
                    placeholder="Enter Your Message..."
                    required
                  />
                </Fade>
                <Fade right>
                  <GeneralBtn
                    className="send-form"
                    colorClass="purchase"
                    text="Send"
                    type="submit"
                  />
                </Fade>
              </>
            )}
          </form>
        </Fade>
      </div>
    );
  }
}

export default ContactPage;
