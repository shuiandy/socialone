import AppSidebar from "./global/AppSidebar";
import AppNavbar from "./global/AppNavbar";

function App() {
  return (
    <div className='app'>
      <AppSidebar />
      <main
        className='content'
      >
        <AppNavbar />
      </main>
    </div>
  );
}

export default App;
