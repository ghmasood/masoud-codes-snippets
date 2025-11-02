import './App.css';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <>
      <div>
        <a href='https://masoud.codes' target='_blank'>
          <img
            src=' https://www.masoud.codes/images/logo.svg'
            className='logo'
            alt='masoud codes logo'
          />
        </a>
      </div>
      <h1>Easy Theme Changer</h1>
      <div className='card'>
        <ThemeToggle />
      </div>
      <p className='footer'>
        You can visit my
        <strong>
          {' '}
          <a href='https://masoud.codes' target='_blank'>
            website
          </a>{' '}
        </strong>
        and
        <strong>
          {' '}
          <a href='https://github.com/ghmasood' target='_blank'>
            GitHub
          </a>{' '}
        </strong>
        to see more of my front-end development work.
      </p>
    </>
  );
}

export default App;
