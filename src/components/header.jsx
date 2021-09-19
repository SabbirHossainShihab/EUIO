export const Header = (props) => {
  console.log(props.data);
  return (
    <header id='header'>
      <img id="my_img" src="img/portfolio/LOGO_EU_Web.png" alt="Nothing shown" />



      <div id='bwb'>
        <img id="wb" src="img/portfolio/wb_.jpg" alt="Nothing shown" />
      </div>
      <a
        href='https://www.easternuni.edu.bd/'
        className='btn btn-custom btn-lg page-scroll' id='mybtn'
      >
        REGISTER NOW
      </a>{' '}




      {/* <div className='col-md-8 col-md-offset-2 intro-text'> */}
      {/* <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}

      {/* </div> */}

    </header>
  )
}
