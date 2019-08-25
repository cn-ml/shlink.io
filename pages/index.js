import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Jumbotron from "../components/Jumbotron";
import FakeBrowser from "../components/FakeBrowser";
import Terminal from "../components/Terminal";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollTo = props.scrollTo || React.createRef();
  }

  render() {
    return (
      <Layout>
        <Jumbotron scrollTo={this.scrollTo}/>

        <section className="wrapper" ref={this.scrollTo}>
          <div className="inner alt">
            <Terminal id="cli-example">
              <h3>
                <Link href="/command-line-interface"><a>Command line interface</a></Link>
              </h3>
              <p>
                Generate and manage short URLs from the command line.<br />
                List short codes, see visits or get the URL behind a short code.
              </p>
            </Terminal>

            <Terminal id="rest-example">
              <h3>
                <Link href="/api-docs"><a>REST API</a></Link>
              </h3>
              <p>Access your shortened URLs from anywhere.<br />Simple authentication and easy to integrate.</p>
            </Terminal>

            <FakeBrowser inBrowser={<img src="/static/images/shlink-web-client.gif" alt="Shlink web client"/>}>
              <h3>Progressive web application</h3>
              <p>Manage shlink using this beautiful and intuitive <a target="_blank" href="https://app.shlink.io">progressive
                web application</a>, or build your own.</p>
            </FakeBrowser>

            <section className="special">
              <p>Shlink will track all the visits to your short URLs, saving detailed information and then
                transparently redirecting the visitor to the long URL:</p>
              <ul className="icons labeled">
                <li><span className="icon fa-arrow-circle-o-right"><span className="label">Referer</span></span></li>
                <li><span className="icon fa-laptop"><span className="label">Remote IP address</span></span></li>
                <li><span className="icon fa-globe"><span className="label">Location of the visitor</span></span></li>
                <li><span className="icon fa-chrome"><span className="label">User agent</span></span></li>
              </ul>
            </section>

            <section className="special">
              <header>
                <h4>What makes Shlink different</h4>
                <p>Shlink adds a lot of features which are not usually available in other free services.</p>
              </header>
              <ul className="actions">
                <li>
                  <Link  href="/features">
                    <a className="button special icon fa-bolt">Features</a>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </section>

        <section className="wrapper style2 special">
          <header className="major">
            <h2>Why shlink?</h2>
            <p>
              The name is an abbreviation for "short link", but if you get the words "shrink" and "link" together,
              the result is <b>shlink</b> too.<br />
              It is also the sound made by a sword being unsheathed.
            </p>
          </header>
          <p>
            Shlink is a PHP-based open source project, distributed under the <a
            href="https://opensource.org/licenses/MIT" target="_blank">MIT</a> license and hosted on <a
            href="https://github.com/shlinkio/shlink" target="_blank">Github</a>.<br />
            It is built with cutting edge technologies, such as <a
            href="https://docs.zendframework.com/zend-expressive/" target="_blank">Zend Expressive</a>, <a
            href="http://www.doctrine-project.org/projects/orm.html" target="_blank">Doctrine</a> or <a
            href="http://symfony.com/doc/current/components/console.html" target="_blank">Symfony</a>.
          </p>
        </section>
      </Layout>
    );
  }
}

export default Home;
