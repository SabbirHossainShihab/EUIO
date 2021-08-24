export const Schedule = (props) => {
  return (
    <div id='Schedule' className='text-center'>
      <div className='container'>
        <div className='section-title row col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-2'>
          <h2>SCHEDULE</h2>
        </div>
        <div className='row col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-2'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4'>
                {' '}
                <h2>{d.date}</h2>
                <div className='service-desc'>
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
