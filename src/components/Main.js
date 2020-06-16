import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'
import clock from '../images/clock.jpg'
import downloadourstuff from '../images/downloadourstuff.jpg'
import jimmyphong from '../images/jimmyphong.jpg'
import tshen from '../images/tshen.jpg'
import christianhubbard from '../images/christianhubbard.jpg'
import jaemyung from '../images/jaemyung.jpg'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* Intro Section */}
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img style={{ opacity: 0.75 }} src={clock} alt="" />
          </span>

          <h4> What can ReactionTime currently do? </h4>
          <p>
            ReactionTime allows quick tests code snippets to be generated for the experimental Concurrent Mode,
            streamlining testing with existing JavaScript Testing Framework, such as Jest and Enzyme.

          </p>

          <h4> Current Limitations </h4>
          <p>
            ReactionTime is an on-going project continously under construction.
            At the current moment, our application assist with generating tests to ensure
            Concurrent mode is enabled properly through several venues.
          </p>

          <h4> The Future of ReactionTime </h4>
          <p>
            The ReactionTime team is looking to integrate additional feature in the near future to improve developer experience, such as
            adding a npm package that quickly injects tests to existing test frameworks in the near future,
            utilizing a cross-platform application for prototyping code for seamless integration to your application,
            and creating clear visual relationships to see all component connections with Concurrent Mode.
          </p>
          {close}
        </article>

        {/* downloadourstuff Section */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Download</h2>
          <span className="image main">
            <img style={{ opacity: 0.6 }} src={downloadourstuff} alt="" />
          </span>
          <p>
            Please click one of the links below to download the version of ReactionTime associated with your operating system:
          </p>
          <ul style={
            {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              listStyleType: 'none',
              paddingRight: '30px',
              paddingTop: '10px'
            }
          }>
            <li>
              <button>
                <a href="https://github.com/oslabs-beta/ReactionTime/releases/download/1.0/ReactionTime-1.1.0.dmg">
                  <p>Mac/OSX</p>
                </a>
              </button>
            </li>
            <li>
              <button>
                <a href="https://github.com/oslabs-beta/ReactionTime/releases/download/1.0/ReactionTime.Setup.1.1.0.exe">
                  <p>Windows</p>
                </a>
              </button>
            </li>
          </ul>
          {close}
        </article>

        {/* About Section */}
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          {/* <span className="image minor" */}
          <span
            style={{
              display: 'flex',
              textAlign: "center",
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <span>
              {/* Begin jimmyphong */}
              <img src={jimmyphong} alt="jimmyphong" />
              {/* Start Logo Position */}
              <div className="" style={{
                display: 'flex',
                textAlign: "center",
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingRight: '4rem',
                paddingLeft: '4rem'
              }}>
                {/* End Logo Position */}
                {/*Start Logos to Contact jimmyphong */}
                <a href="https://github.com/jayacados" target="_blank" className="btn-icon-only rounded-circle ml-1 btn btn-info">
                  <i class="fa fa-github"></i>
                </a>
                <a href="http://www.linkedin.com/in/jphongmph/" target="_blank" className="btn-icon-only rounded-circle ml-1 btn btn-info">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              {/* End Logos to Contact jimmyphong */}
              <p>Jimmy Phong</p>
              {/* End jimmyphong */}

              {/* Begin tshen */}
              <img src={tshen} alt="tshen" />
              {/* Start Logo Position */}
              <div className="" style={{
                display: 'flex',
                textAlign: "center",
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingRight: '4rem',
                paddingLeft: '4rem'
              }}>
                {/* End Logo Position */}
                {/*Start Logos to Contact tshen */}
                <a href="https://github.com/tshen815" target="_blank" className="btn-icon-only rounded-circle ml-1 btn btn-info">
                  <i class="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/shaoshen815/" target="_blank" className="btn-icon-only rounded-circle ml-1 btn btn-info">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              {/* End Logos to Contact tshen */}
              <p>Tony Shen</p>
              {/* End tshen */}

            </span>
            <span>
              {/* Begin christianhubbard */}
              <img src={christianhubbard} alt="christianhubbard" />
              {/* Start Logo Position */}
              <div className="" style={{
                display: 'flex',
                textAlign: "center",
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingRight: '4rem',
                paddingLeft: '4rem'
              }}>
                {/* End Logo Position */}
                {/*Start Logos to Contact christianhubbard */}
                <a href="https://github.com/christianhubbard" target="_blank" className="btn-icon-only rounded-circle ml-1 btn btn-info">
                  <i class="fa fa-github"></i>
                </a>
                <a href="http://www.linkedin.com/in/christianbegor/" target="_blank" className="btn-icon-only rounded-circle ml-1 btn btn-info">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              {/* End Logos to Contact christianhubbard */}
              <p>Christian Hubbard</p>
              {/* End christianhubbard */}

              {/* Begin jaemyung */}
              <img src={jaemyung} alt="jaemyung" />
              {/* Start Logo Position */}
              <div className="" style={{
                display: 'flex',
                textAlign: "center",
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingRight: '4rem',
                paddingLeft: '4rem'
              }}>
                {/* End Logo Position */}
                {/*Start Logos to Contact jaemyung */}
                <a href="https://github.com/jhm304" target="_blank" className="btn-icon-only rounded-circle ml-1 btn btn-info">
                  <i class="fa fa-github"></i>
                </a>
                <a href="http://www.linkedin.com/in/jaemyung/" target="_blank" className="btn-icon-only rounded-circle ml-1 btn btn-info">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              {/* End Logos to Contact jaemyung */}
              <p>Jae Myung</p>
              {/* End jaemyung */}
            </span>
          </span>
          <p>
          </p>
          <p>
            We built ReactionTime in order to simplify testing in React's concurrent mode. While building our own concurrent applications, we realized that
            the testing procedure is a little complicated. We wanted to build lightweight, straightforward tests that could be dropped into any concurrent application, while still being useful.
            You can still unit test your components in the same way you always would in React; our tests are specifically testing concurrency setup, component suspension, and fallback.
            We're proud of the tests we currently offer, but also plan to add more tests soon. ReactionTime is an open source project. If you would like to contribute, please
            visit our GitHub. Thanks!
          </p>
          {close}
        </article>

        {/* Contact Section */}
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Got a Question?</h2>
          <h3 className="">Let us know below, or contact us directly on <a href="https://github.com/oslabs-beta/ReactionTime">GitHub</a>.</h3>
          <h3></h3>
          <br />
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="reset" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {/* <ul className="icons">
            <li>
              <a
                href="https://twitter.com/"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/oslabs-beta/ReactionTime"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
