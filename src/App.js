import { useEffect } from "react";
import { useSelector } from "react-redux";
import Router from "./routes";

function App() {
   const { lang } = useSelector((state) => state);
 
   useEffect(() => {
     document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
   }, [lang])

   return (
      <Router />
   );
}

export default App;
