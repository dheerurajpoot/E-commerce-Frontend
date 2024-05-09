import React from "react";
import MetaTitle from "../components/MetaTitle";
import { Link } from "react-router-dom";

const TermsCondition = () => {
	return (
		<>
			<MetaTitle title={"Terms and Conditions"} />
			<div className='terms-container'>
				<div className='container'>
					<h1 className='shipping-heading'>Terms and Conditions</h1>
					<div className='shipping-polity-details'>
						{/* <h2>What is DR Store Terms and Conditions?</h2> */}
						<ul>
							Welcome to DR Store! <br /> <br />
							DR Store is managed and operated by{" "}
							<Link to={"https://dheeru.org/"} target={"_blank"}>
								Dheeru Rajpoot
							</Link>
							. Any natural or legal person who accesses and/or
							uses in any manner (“you” or “ your”) or uses any
							current or future service or functionality or offer
							made available on DR Store(“Service ”) will be
							subject to these terms and conditions for us (“
							Terms of Use”), as updated from time to time and
							such terms, guidelines and conditions as may be
							applicable to such Service (“ Service Terms”). If
							these Terms of Use are inconsistent with such
							Service Terms, the Service Terms will control to the
							extent of such inconsistency with respect to the
							applicable Service. <br /> <br /> These Terms of Use
							constitute an electronic record within the meaning
							of the applicable law. This electronic record is
							generated by a computer system and does not require
							any physical or digital signatures. Please read
							these Terms of Use carefully before using or
							accessing DR Store or availing any Service. By using
							the DR Store or availing any Service, you signify
							your agreement to be bound by these Terms of Use.
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default TermsCondition;
