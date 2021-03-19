import getApiData from './utils/API';

function App() {
  getApiData(200, 'us', 'name').then(res => {
    console.log(res[0]);
  });




  return (
    <div>
      Hellow World!
    </div>
  );
}

export default App;
