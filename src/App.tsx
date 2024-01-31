import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="direct-link">
        <a href="#mainContent">본문 바로가기</a>
        <a href="#gnbContent">메뉴 바로가기</a>
      </div>
      <div className="container-doc">
        <Header />
        <div className="container-search">
          <div className="sub_tit">
            <strong>DKTechin 구인 현황</strong>
            <div className="wrap_search">
              <div className="bundle_inp">
                <input type="text" />
                <button type="button"><span className="ir_pm">검색</span></button>
              </div>
            </div>
            <p>검색 결과 <em>3</em>건</p>
          </div>
        </div>
        <main className="doc-main">
          <section className="inner-main">
            <h2 className="screen_out">채용 데모 페이지 본문</h2>
            <div className="main-content">
              <article id="mainContent" className="content-article">
                <h3 className="screen_out">채용 목록</h3>
                <ul className="list_job">
                  <li className="new">
                    <div className="title_job">
                      <a href="#none" className="link_title">
                        <strong>프론트엔드 개발자<em>FT팀</em></strong>
                      </a>
                      <span className="bundle_badge">
                        <a href="#none">WEB DEVELOPMENT</a>
                        <a href="#none">REACT</a>
                        <a href="#none">VUE</a>
                        <a href="#none">ES6</a>
                      </span>
                    </div>
                    <div className="desc_job">
                      <span className="badge_type">Front-end</span>
                      <div className="wrap_txt">
                        <span className="txt_day">Today</span>
                        <span className="txt_location">제주</span>
                      </div>
                    </div>
                  </li>
                  <li className="new">
                    <div className="title_job">
                      <a href="#none" className="link_title">
                        <strong>웹 디자이너<em>UX팀</em></strong>
                      </a>
                      <span className="bundle_badge">
                        <a href="#none">UX</a>
                        <a href="#none">UI</a>
                        <a href="#none">SKETCH APP</a>
                        <a href="#none">ZEPLIN</a>
                        <a href="#none">ILLUSTRATOR</a>
                        <a href="#none">PHOTOSHOP</a>
                      </span>
                    </div>
                    <div className="desc_job">
                      <span className="badge_type">Design</span>
                      <div className="wrap_txt">
                        <span className="txt_day">2 days ago</span>
                        <span className="txt_location">판교</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="title_job">
                      <a href="#none" className="link_title">
                        <strong>UI 개발자<em>FT3팀</em></strong>
                      </a>
                      <span className="bundle_badge">
                        <a href="#none">WEB DEVELOPMENT</a>
                        <a href="#none">SCSS</a>
                        <a href="#none">HTML5</a>
                      </span>
                    </div>
                    <div className="desc_job">
                      <span className="badge_type">Front-end</span>
                      <div className="wrap_txt">
                        <span className="txt_day">2021.08.01</span>
                        <span className="txt_location">가산</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </article>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
