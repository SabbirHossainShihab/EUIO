export const Schedule = (props) => {
  return (
    <div id='Schedule' className='text-center'>
      <div className='container'>
        <div className='section-title row col-md-10 col-md-offset-1'>
          <h1><u>SCHEDULE</u></h1>
        </div>
        <div className='row col-md-10 col-md-offset-1'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-12'>
                {' '}
                <div className='service-desc'>
                  <h2>{d.name}</h2>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : 'loading!!!!!'}
        </div>
      </div>
    </div>
  )
}
