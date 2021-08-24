export const Prize = (props) => {
  return (
    <div id='Prize' className='text-center'>
      <div className='container container-fluid'>
        <div className='row col-md-10 col-md-offset-1'>
          <h2>PRIZES</h2>
          <p>
            Attractive Prizes are waiting for you!
          </p>
        </div>
        <div className='row col-md-10 col-md-offset-1'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4 team'>
                <div className='thumbnail'>
                  {' '}
                  <h2>{d.prizenum}<sup>{d.position}</sup> PRIZE</h2>
                  <div className='caption'>
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
        <div className='row col-md-10 col-md-offset-1'>
          <div className='col-md-12 team'>
            <h3>For 4<sup>th</sup> - 10<sup>th</sup> positions BDT 1,000/= each & Free Course for Top 60 Students on Web Design and Development with HTML & Bootstrap
            </h3>
          </div>

        </div>
      </div>
    </div>
  )
}
