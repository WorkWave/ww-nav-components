import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/core/styles';
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	link: {
		textDecoration: 'none',
		color: theme.workwaveBlue,
	},
}));

export const FaMobileNavItem = ({ link, closeNav, index }) => {
	const classes = useStyles();
	return (
		<>
			<Link className={classes.link} to={`/${link.slug.current}`}>
				<MenuItem key={index} onMouseUp={(e) => closeNav(e)}>
					{' '}
					<FontAwesomeIcon
						icon={['fad', link.faIcon]}
						style={{
							height: '35px',
							width: '35px',
							marginRight: '5px',
							border: `1px solid #F1F2F5`,
							background: '#F1F2F5',
							borderRadius: '5px',
							padding: '5px',
							color: link.iconColor?.hexValue ?? '#002D5C',
						}}
					/>{' '}
					<span style={{ fontSize: '1.2rem', fontWeight: 400 }}>
						{link.title}
					</span>
				</MenuItem>
			</Link>
		</>
	);
};
