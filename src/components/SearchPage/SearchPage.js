import React, { useState } from "react";
import styles from "./SearchPage.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../image/logo.svg";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState();

  const closeSearch = () => {
    document.getElementById("SearchPage").style.width = "0";
    document.getElementById("SearchInsights").style.width = "0";
  };

  const handleKeyPress = (e) => {
    setSearchText(e.target.value);
    e.preventDefault();
  };

  const handleEnterPress = (e) => {
    // e.preventDefault();

    navigate(`/search/${searchText}`);
  };

  return (
    <div className={styles.SearchPage} id="SearchPage">
      <div className={styles.container}>
        <div className={styles.SideHead}>
          <button onClick={closeSearch}>
            <AiOutlineClose className={styles.Icons} />
          </button>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.WebrazziSearch}>
          <div className={styles.SearchLists}>
            <form onSubmit={handleEnterPress}>
              <input
                type="text"
                placeholder="Webrazzi'de arayın..."
                value={searchText}
                onChange={handleKeyPress}
              />
            </form>
            <p> SON EKLENENLER</p>
            <div className={styles.SearchList}>
              <ul>
                <li>
                  {" "}
                  <a href="/">
                    {" "}
                    BAYC'nin yaratıcısı Yuga Labs, CryptoPunks ve MeeBits'i
                    satın aldı{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/">
                    {" "}
                    Gemius'tan kadın kullanıcılara odaklanan verilerle
                    internetin demografik kırılımı{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/">
                    {" "}
                    Türkiye Varlık Fonu'nun, Turkcell'deki ve Türk Telekom'daki
                    konumu{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/">
                    {" "}
                    Apple, Oculus Move'daki VR fitness istatistiklerini tek
                    yerde görmenizi mümkün kılıyor{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/">
                    {" "}
                    Google asistan ile park yeri ücretlerini ödemek mümkün{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.SearchInsights} id="SearchInsights">
            <div className={styles.Insights}>
              <div className={styles.InsightsHead}>
                <img
                  src="https://webrazzi.com/v8/img/wbrands/insights_dark.svg"
                  alt="insgiht-logo"
                />
                <p>
                  Insights kapsamlı içerikleri ve raporlarıyla içgörü yaratıyor,
                  stratejilere yön veriyor. Popüler Insights içeriklerine göz
                  atın.{" "}
                </p>
              </div>
              <div className={styles.InsightsBody}>
                <ul>
                  <li>
                    {" "}
                    <a href="/">
                      Sosyal medyadan alışveriş motivasyonu artıyor{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">
                      Google, hastaların sağlık verilerini düzenlemeye yardımcı
                      olan yapay zeka aracı Conditions'ı duyurdu{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">
                      Insurtech'ler için "açık sigortacılık" yapısının öne
                      çıkacağı tahmin ediliyor{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">
                      Gizlilik ve güvenlik girişimlerinin yatırımları, geçen
                      senenin aynı dönemine göre büyüme gösterdi{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">
                      Metaverse kategorisindeki mobil uygulama adedinde son 3
                      ayda artış var{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.InsightsFooter}>
                <p>
                  Son teknolojinin etkilerini Webrazzi merceğiyle inceleyin,
                  detayları görün, güçlü stratejiler yaratın. Özel makaleler ve
                  raporlara erişmek için hemen harekete geçin{" "}
                </p>
                <button className={styles.Avantaj}>
                  {" "}
                  Avantajları ve Paketleri inceleyin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
