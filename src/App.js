import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import GamePage from "./pages/Game/GamePage";
import HomePage from "./pages/Home/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import { IntlProvider } from "react-intl";
import { createContext, useEffect, useState } from "react";
import English from "./lang/en.json";
import Spanish from "./lang/es.json";
import Header from "./components/Header/Header";

export const LanguageSelector = createContext();

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(English);

  useEffect(() => {
    switch (locale) {
      case "es-ES":
        setMessages(Spanish);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);
  return (
    <div className="App">
      <LanguageSelector.Provider value={{ language: locale, setLanguage: setLocale }}>
        <IntlProvider messages={messages} locale={locale}>
          <HashRouter>
            <Header></Header>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/items/:id/:type" element={<MovieDetailPage></MovieDetailPage>}></Route>
              <Route path="/game" element={<GamePage></GamePage>}></Route>
            </Routes>
          </HashRouter>
        </IntlProvider>
      </LanguageSelector.Provider>
    </div>
  );
}

export default App;
