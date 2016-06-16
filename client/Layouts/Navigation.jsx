import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Navigation extends Component {
  componentDidMount(){


  }

  checkCurrentPage(page) {
    return (Session.get('currentPage')===page) ? true : false
  }


  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  render(){
    return (
      <ul className="header-subnav">
          <li>
              <a href="/" className={this.checkCurrentPage('HomePage') ? 'is-active':''}>Home</a>
          </li>
          <li>
              <a href="/Registration" className={this.checkCurrentPage('Registration') ? 'is-active':''}> Registration </a>
          </li>
          <li>
              <a href="/Abstracts" className={this.checkCurrentPage('Abstracts') ? 'is-active':''} >Abstracts</a>
          </li>
          <li>
            <a href="/Program" className={this.checkCurrentPage('Program') ? 'is-active':''}>Program</a>
          </li>
          <li>
              <a href="/About" className={this.checkCurrentPage('About') ? 'is-active':''}>About</a>
          </li>
        </ul>
    )
  }
}
