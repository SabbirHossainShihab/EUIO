// import { useState } from 'react'
// import emailjs from 'emailjs-com'

// const initialState = {
//   name: '',
//   email: '',
//   message: '',
// }
export const Contact = (props) => {
  // const [{ name, email, message }, setState] = useState(initialState)

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setState((prevState) => ({ ...prevState, [name]: value }))
  // }
  // const clearState = () => setState({ ...initialState })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(name, email, message)
  //   emailjs
  //     .sendForm(
  //       'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //         clearState()
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }
  //     )
  // }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='section-title text-center'>
            <h1><b>Get In Touch</b></h1>
          </div>
          {/* <div className='col-md-4'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div> */}
          {props.data ? props.data.map((d, i) => (
            <div className='col-md-5 col-md-offset-1 contact-info'>
              <div className='contact-item'>
                <h1>{d.person}</h1>
                <h2>{d.name}</h2>
                <h4>{d.designation}</h4>
                <h4>{d.dept}</h4>
                <h4>{d.fact}</h4>
                <h4>{d.east}</h4>
                <p>
                  <span>
                    <i className='fa fa-map-marker'></i> Address
                  </span>
                  {d.address}
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-phone'></i> Phone
                  </span>{' '}
                  {d.phone}
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-envelope-o'></i> Email
                  </span>{' '}
                  {d.email}
                </p>
              </div>
            </div>
          ))
            : 'loading'}
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 Eastern University All Right Reserved{' '}
          </p>
        </div>
      </div>
    </div>
  )
}
