import React, { Component } from "react";
import {FontAwesomeIcon} from "react-icons/fa";
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <FontAwesomeIcon icon={faHeart} /> by{" "}
			<a href="http://www.4geeksacademy.com">Alex Fazakas</a>
		</p>
	</footer>
);
