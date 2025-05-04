import React, {useEffect, useRef, useState} from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Sidebar from "./Sidebar";
import News from "./News";
import Footer from "./Footer";

export default function Main() {
    const [news, setNews] = useState([]);
    const [menu, setMenu] = useState("");
    const [search, setSearch] = useState("");

    const searchRef = useRef(null);

    const getNews = async () => {
        try {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=${menu || "politics"}&sortBy=popularity&apiKey=36176c0f71514e8381b7f53516ea656f`
            );
            const json = await response.json();
            if (json.articles) {
                setNews(json.articles);
            }
        } catch (err) {
            console.error("Error fetching news:", err);
        }
    };

    useEffect(() => {
        getNews();
    }, [menu]);

    return (
        <div>
            <Navbar setMenu={setMenu} setSearch={setSearch} searchRef={searchRef} />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <Home news={news} num="6" />
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <Sidebar news={news} />
                    </div>
                </div>
            </div>
            <News news={news} search={search} searchRef={searchRef} />
            <Footer />
        </div>
    );
}
