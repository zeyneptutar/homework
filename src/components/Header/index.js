import React from 'react';

const Header = (props) => {
  return (
      <div>
        <nav className="navbar navbar-inverse">
          <div>
            <div className="navbar-header">
              <a className="navbar-brand" href="http://sinerjisoft.com.tr/tr/index.html" without rel="noopener noreferrer" target="_blank">
                Sinerjisoft Homework
              </a>
            </div>
            {props.isLoggedIn &&
              <a className="navbar-brand" href="/" style={{float: "right"}}>Logout</a>
            }
          </div>
        </nav>
      </div>
    )
}



export default Header;
