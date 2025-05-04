import React from "react";
import { useLocation, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import news from '../images/news.png';

export default function Details() {
    const location = useLocation();
    const data = location.state;

    if (!data) {
        return <div className="text-center mt-5 text-muted">No data available</div>;
    }

    return (
        <>
            {/* Навигация */}
            <nav
                className="d-flex align-items-center justify-content-between px-4 py-3"
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                    backgroundColor: '#ffffff',
                    borderBottom: '1px solid #eaeaea',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                }}
            >
                <a href="/" className="d-flex align-items-center text-decoration-none">
                    <img
                        src={news}
                        alt="Logo"
                        style={{ height: '32px', objectFit: 'contain', marginRight: '12px' }}
                    />
                    <span style={{
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        color: '#222',
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: '-0.2px'
                    }}>
                        NewsFlow
                    </span>
                </a>
                <Link to="/">
                    <button className="btn btn-outline-dark rounded-pill px-4 py-1">
                        Go to Main Page
                    </button>
                </Link>
            </nav>

            {/* Контент */}
            <div style={{ backgroundColor: '#fcfafa', minHeight: '100vh', fontFamily: "'Inter', sans-serif", color: '#2c2c2c' }}>
                {data.urlToImage && (
                    <div style={{ height: '50vh', overflow: 'hidden' }}>
                        <img
                            src={data.urlToImage}
                            alt="Article Banner"
                            className="w-100"
                            style={{ objectFit: 'cover', height: '100%', filter: 'brightness(96%)' }}
                        />
                    </div>
                )}

                <div className="px-4 px-md-5 py-5" style={{ maxWidth: '960px', margin: '0 auto' }}>
                    <h2 className="fw-bold mb-4" style={{ fontSize: '2.3rem', letterSpacing: '-0.5px' }}>
                        {data.title}
                    </h2>

                    <p className="text-secondary mb-4" style={{ fontSize: '1.25rem', fontWeight: '300' }}>
                        {data.description}
                    </p>

                    <article style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
                        {data.content}
                    </article>

                    <div className="d-flex flex-wrap justify-content-between text-muted mt-5 small">
                        <span><strong>Author:</strong> {data.author}</span>
                        <span><strong>Published:</strong> {new Date(data.publishedAt).toLocaleDateString()}</span>
                        <span><strong>Source:</strong> {data.source?.name}</span>
                    </div>

                    <div className="mt-5">
                        <a
                            href={data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn px-4 py-2"
                            style={{
                                borderRadius: '999px',
                                backgroundColor: '#2c2c2c',
                                color: '#fff',
                                fontWeight: '500',
                                fontSize: '1rem',
                                transition: 'all 0.3s ease-in-out'
                            }}
                            onMouseOver={e => e.target.style.opacity = 0.9}
                            onMouseOut={e => e.target.style.opacity = 1}
                        >
                            Read Full Article
                        </a>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
