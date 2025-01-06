import React, { useContext } from "react";
import LanguageContext from "../context/langContext";

function Setting() {
    const { lang, setLang } = useContext(LanguageContext)
    const handleLanguageChange = (event) => {
        setLang(event.target.value);
        document.documentElement.dir = event.target.value === "ar" ? "rtl" : "ltr"; // Change direction dynamically
      };
    return (
        <>
            <nav className="navbar">
                <h1>{lang === "ar" ? "موقع الأفلام" : "Movie Site"}</h1>
                <select value={lang} onChange={handleLanguageChange} className="language-selector">
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                </select>
            </nav>
        </>
    )
}
export default Setting