import Image from 'react-bootstrap/Image'

export const Header = (props) => {
  console.log(props.data);
  return (
    <header id='header'>
      <img id="my_img" src="img/portfolio/LOGO_EU_Web.png" alt="Nothing shown" />



      <div id='bwb'>
        <Image src="img/portfolio/wb_.jpg" thumbnail />
        {/* <img id="wb" src="img/portfolio/wb_.jpg" alt="Nothing shown" className="responsive" /> */}
      </div>
      <a
        href='https://tinyurl.com/tsd6mu58'
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
