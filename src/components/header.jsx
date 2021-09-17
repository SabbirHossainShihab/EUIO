export const Header = (props) => {
  console.log(props.data);
  return (
    <header id='header'>
      <img id="my_img" src="img/portfolio/LOGO_EU_Web.png" alt="Nothing shown" />
      <div className='intro'>
        <div className='overlay'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='https://www.easternuni.edu.bd/'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  REGISTER NOW
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
