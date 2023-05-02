import { ReactComponent as LOGO } from "../icons/Logo for footer-light.svg";
import { ReactComponent as FacebookIcon } from "../icons/Icon-Facebook.svg";
import { ReactComponent as Instagram } from "../icons/Icon-Instagram.svg";
import { ReactComponent as Whatsapp } from "../icons/Icon-Whatsapp.svg";

export default function Footer() {
    return (
        <>
            <footer className="site-footer">
                <div className="footer-container">
                    <div className="footer-logo-container">
                        <LOGO className="icon-logo" />
                    </div>
                    <section className="footer-section">
                        <h2 className="section-title">客戶服務</h2>
                        <div className="section-content">
                            {/* eslint-disable-next-line */}
                            <a className="page-link" href="#">運送說明</a>
                            {/* eslint-disable-next-line */}
                            <a className="page-link" href="#">退換貨相關</a>
                            {/* eslint-disable-next-line */}
                            <a className="page-link" href="#">付款資訊</a>
                            {/* eslint-disable-next-line */}
                            <a className="page-link" href="#">FAQ</a>
                        </div>
                    </section>
                    <section className="footer-section">
                        <h2 className="section-title">關於我們</h2>
                        <div className="section-content">
                            {/* eslint-disable-next-line */}
                            <a className="page-link" href="#">品牌故事</a>
                            {/* eslint-disable-next-line */}
                            <a className="page-link" href="#">媒體聯繫</a>
                            {/* eslint-disable-next-line */}
                            <a className="page-link" href="#">Press kit</a>
                        </div>
                    </section>
                    <section className="footer-section">
                        <h2 className="section-title">資訊</h2>
                        <div className="section-content">
                            {/* eslint-disable-next-line */}
                            <a className="page-link" href="#">隱私權政策</a>
                            {/* eslint-disable-next-line */}
                            <a className="page-link" href="#">Cookie</a>
                            {/* eslint-disable-next-line */}
                            <a className="page-link" href="#">GDPR</a>
                        </div>
                    </section>
                    <section className="footer-section">
                        <h2 className="section-title">追蹤 ALPHA Shop</h2>
                        <div className="section-content">
                            <div className="tel-info">+886 02123-45678</div>
                            <div className="social-icon-group">
                                <FacebookIcon className="social-icon cursor-point" />
                                <Instagram className="social-icon cursor-point" />
                                <Whatsapp className="social-icon cursor-point" />
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    )
}