import React from "react";


 
export default class RegisterForm extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
          fullName: "",
          number: "",
          email: "",
      }
      this.handleSubmit=this.handleSubmit.bind(this)
  }

  handlerName = (event) => {
      this.setState({
          fullName: event.target.value
      })
  }
  handlerNumber = (event) => {
      this.setState({
          number: event.target.value
      })
  }
  handlerEmail = (event) => {
      this.setState({
          email: event.target.value
      })
  }

 

  handleSubmit = (event) => {
      alert(`${this.state.fullName} ${this.state.number} ${this.state.email}`)
      console.log(this.state);
      this.setState({
          fullName: "",
          number: "",
          email: '',
      })
   event.preventDefault()
      
  }

  render() {
      return (
          <div className="register-div">
              <form className="register-form" onSubmit={this.handleSubmit}>
                  <h1>Form Registration</h1>
                  <label>FullName :</label> <input type="text" value={this.state.fullName} onChange={this.handlerName} /> 
                  <label>Number :</label> <input type="text" value={this.state.number} onChange={this.handlerNumber} />
                  <label>Email :</label> <input type="email" value={this.state.email} onChange={this.handlerEmail} />           
                  <input type="submit" value="Submit" />
              </form>
          </div>
      )
  }
}

 