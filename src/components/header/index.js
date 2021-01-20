import React, { useState } from 'react';
import Logo from 'assets/images/logo.png'
import { Link } from 'react-router-dom'
import './index.css'

function Header() {

	const [searchVal, onSearchValChange] = useState('')

	return (
		<div className="header-wrap">
			<div className="header clearfix">
				<img className="fl" src={Logo} />
				<div className="search-input fl">
					<input value={searchVal} onChange={(e) => onSearchValChange(e.target.value)}/>
				</div>
				<span className="regist-btn fr">注册</span>
				<span className="login-btn fr">
          <Link to="/login">登录</Link>
        </span>
			</div>
		</div>
	);
}

export default Header;
