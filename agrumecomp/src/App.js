import Header from './Header'
import NavMenu from './NavMenu';
import Main from './Main';
import HomeProcedures from './HomeProcedures';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavMenu/>
      <main>
      <Main/>
      <HomeProcedures/>
      </main>
    </div>
  );
}

export default App;
