import "./App.css"; 
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <div className="Content_app">
        <Header />
        <Content title="$ cat about-me.txt">
          <p>
            Привет! Я Данила, и я занимаюсь веб-разработкой и администрированием
            сайтов. Веб-технологии и код для меня — это не просто работа, а
            настоящее увлечение. Я люблю создавать что-то новое и эффективное, а
            также совершенствовать уже существующие решения. Каждый проект для
            меня — это шанс сделать интернет более удобным и функциональным для
            пользователей.
          </p>
        </Content>

        <Content title="$ skp-md-viewer skills.md">
          <div className="lang_tools">
            <ul>
              <h4 className="lang-title title-blue">Languages/Frameworks</h4>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>SQL</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <h4 className="lang-title title-green">Tools/Others</h4>
              <li>Git</li>
              <li>Postman</li>
              <li>VS Code</li>
              <li>GitHub</li>
            </ul>
          </div>
        </Content>

        <Content title="$ skp-md-viewer personal-projects.md">
        <div className="lang_tools">
            <ul>
              <h4 className="lang-title title-yellow">A few of my Open Source projects</h4>
              <li></li>
              <a href=""><li>В разработке</li></a>
              <a href=""><li>В разработке</li></a>
              <a href=""><li>В разработке</li></a>
              <a href="https://kc-export.ru/"><li>Korea Car Export</li></a>
            </ul>
            </div>
        </Content>

        <Content title="$ skp-md-viewer contact-me.md">
  <div className="lang_tools">
    <ul>
      <h4 className="lang-title title-blue">Professional</h4>
      <li className="list-item">
        <img src="/img/git-svgrepo-com.svg" alt="GitHub Icon" />
        <a href="https://github.com/DanilMochalov">GitHub</a>
      </li>
      <li className="list-item">
        <img src="/img/codewars-svgrepo-com.svg" alt="CodeWars Icon" />
        <a href="https://www.codewars.com/users/DanilMochalov">CodeWars</a>
      </li>
      <li className="list-item">
        <img src="/img/min-hh-white.png" alt="HH Icon" />
        <a href="https://hh.ru/resume/af58b579ff0e12ce510039ed1f6f616b617031">HH.ru</a>
      </li>
    </ul>
    <ul>
      <h4 className="lang-title title-green">Social</h4>
      <li className="list-item">
        <img src="/img/telegram-svgrepo-com.svg" alt="Social Icon" />
        <a href="https://t.me/ebmwrtIT">Telegram</a>
      </li>
      <li className="list-item">
        <img src="/img/instagram-svgrepo-com.svg" alt="Social Icon" />
        <a href="https://www.instagram.com/wardeannan/">Inst</a>
      </li>
      <li className="list-item">
        <img src="/img/vk-outline-svgrepo-com.svg" alt="Social Icon" />
        <a href="#">VK</a>
      </li>
    </ul>
  </div>
</Content>

      </div>
    </div>
  );
}

export default App;
