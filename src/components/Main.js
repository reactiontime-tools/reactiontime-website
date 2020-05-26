import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import jimmy from '../images/jimmy.jpg'
import tony from '../images/tony.jpg'
import christian from '../images/christian.jpg'
import jae from '../images/jae.jpg'

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
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Download</h2>
          <span className="image main">
            <img src={pic02} alt="" />
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
              <button>Mac/OSX</button>
            </li>
            <li>
              <button>Windows</button>
            </li>
          </ul>
          {close}
        </article>

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
              display:'flex',
              textAlign: "center",
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <span>
              <img src={jimmy} alt="jimmy" />
              <p>Jimmy Phong</p>
              <img src={tony} alt="tony" />
              <p>Tony Shen</p>
            </span> 
            <span>
              <img src={christian} alt="christian" />
              <p>Christian Hubbard</p>
              <img src={jae} alt="jae" />
              <p>Jae Myung</p>
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
                <input type="submit" value="Send Message" className="special" />
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
