import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	link: {
		color: theme.workwaveBlue,
		cursor: 'pointer',
		marginRight: '8px',
		height: '64px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		// marginTop: '12px',
		textDecoration: 'none',
		position: 'relative',
		transition: 'all .5s',
		'&:hover': {
			color: '#2F7FC1',
		},
	},
}));

export const StandaloneNavLink = ({ title, link, internal, icon }) => {
	const classes = useStyles();
	return (
		<Typography>
			{internal ? (
				<Link to={`/${link.toLowerCase()}`} className={classes.link}>
					{title}
				</Link>
			) : (
				<a
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					className={classes.link}>
					{icon && <FontAwesomeIcon icon={['fad', icon]} />} {title}
				</a>
			)}
		</Typography>
	);
};
