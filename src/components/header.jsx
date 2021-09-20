

export const Header = (props) => {
  console.log(props.data);
  return (
    <header id='header' className='text-center'>
      <img id="my_img" src="img/portfolio/LOGO_EU_Web.png" alt="Nothing shown" />

      <div id='wb'>

      </div>
      <div className='row' id='mybtn1'>
        <a
          href='https://tinyurl.com/tsd6mu58'
          className='btn btn-custom btn-lg page-scroll' id='mybtn2'
        >
          REGISTER NOW
        </a>{' '}
      </div>




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
