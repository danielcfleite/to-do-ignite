import "./global.css";
import style from "./App.module.css";
import { Header } from "./components/header/header";
import { AppContent } from "./components/Appcontent/content";

function App() {
  return (
    <>
      <div className={style.wrapper}>
        <Header />
        <AppContent />
      </div>
    </>
  );
}

export default App;
