import Styles from "./component/Style.module.css"
import './App.css'

function App() {
  
  const numbers = [2, 46, 1, 38, 4];
  const results ="result :"
  return (
      <div className={Styles.line}>
        <h1 className={Styles.result}>{results}</h1>
        <h1 className={Styles.style}>
          {numbers.map(number => number * 2).join(' , ')}
        </h1>


        <h1 className={Styles.result}>{results}</h1>
          <h1 className={Styles.style}>
            {numbers.filter((number) => number > 10).join(' , ')}
          </h1>

          <h1 className={Styles.result}>{results}</h1>
          <h1 className={Styles.style}>
            {numbers.reduce((sum, num) => sum + num, 0)}
          </h1>


          <h1 className={Styles.result}>{results}</h1>
          <h1 className={Styles.style}>
            {numbers.find((number) => number > 10)}
          </h1>


          <h1 className={Styles.result}>{results}</h1>
          <h1 className={Styles.style}>
            {numbers.findIndex((number) => number > 10)}
          </h1>
      </div>
  );
}

export default App
