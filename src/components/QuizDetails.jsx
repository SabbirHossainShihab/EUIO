export const QuizDetails = (props) => {

  return (
    <div id='QuizDetails' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-2 section-title'>
          <h2>QUIZ DETAILS</h2>
        </div>
        <div className='row col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-2'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className='col-sm-4 col-xs-12'>
                {' '}

                <h3><b>{d.title}</b></h3>
                <p>{d.text}</p>
              </div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
};
