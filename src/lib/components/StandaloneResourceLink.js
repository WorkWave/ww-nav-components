import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	bar: {
		background: theme.white,
		padding: '1rem',
	},
	numbers: {
		fontSize: '14px',
		fontWeight: 600,
		color: theme.workwaveBlue,
		margin: '0 .75rem',
		transition: 'all .5s',
		'&:hover': {
			color: '#2F7FC1',
		},
	},
}));

const StandaloneResourceLink = ({
	link = 'Example',
	title = 'Example',
	internal = false,
	icon,
}) => {
	const classes = useStyles();
	return (
		<>
			{internal ? (
				<Link to={`/${link}`}>
					<Typography className={classes.numbers}>
						{icon && <FontAwesomeIcon icon={['fad', icon]} />}
						{title}
					</Typography>
				</Link>
			) : (
				<a
					href={link}
					target={icon === 'phone-alt' ? '_self' : '_blank'}
					rel='noopener'
					style={{ textDecoration: 'none' }}>
					<Typography className={classes.numbers}>
						{icon && <FontAwesomeIcon icon={['fad', icon]} />} {title}
					</Typography>
				</a>
			)}
		</>
	);
};

export default StandaloneResourceLink;
