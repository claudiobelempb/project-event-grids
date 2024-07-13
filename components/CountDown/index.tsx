export const CountDown: React.FC = () => {
  return (
    <section className='countdown content sd'>
      <div className='countdown__content sd'>
        <div className='countdown__content--day'>
          <div>
            <p>364</p>
            <p>Days</p>
          </div>
          <p>:</p>
        </div>
        <div className='countdown__content--hour'>
          <div>
            <p>23</p>
            <p>Hours</p>
          </div>
          <p>:</p>
        </div>
        <div className='countdown__content--minute'>
          <div>
            <p>59</p>
            <p>Minutes</p>
          </div>
          <p>:</p>
        </div>
        <div className='countdown__content--second'>
          <div>
            <p>59</p>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </section>
  );
};
