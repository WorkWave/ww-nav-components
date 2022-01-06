import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	standaloneLinkContainer: {
		padding: '15px 0',
		borderBottom: `1px ${theme.white} solid`,
	},
	standaloneLink: {
		textDecoration: 'none',
		color: theme.white,
	},
}));

export const MobileStandaloneNavLink = ({
	link,
	icon,
	internal,
	closeNav,
	title,
}) => {
	const classes = useStyles();
	return (
		<>
			{internal ? (
				<Link to={`/${link.toLowerCase()}`} className={classes.standaloneLink}>
					<Grid
						container
						alignItems='center'
						onMouseUp={(e) => closeNav(e)}
						className={classes.standaloneLinkContainer}>
						<FontAwesomeIcon
							icon={['fad', icon]}
							style={{
								marginRight: '.5rem',
								color: 'white',
								marginLeft: '1rem',
								fontSize: '1.25rem',
							}}
						/>
						<Typography style={{ fontSize: '1.25rem', fontWeight: 500 }}>
							{title}
						</Typography>
					</Grid>
				</Link>
			) : (
				<a
					href={link}
					target='_blank'
					rel='noopener'
					className={classes.standaloneLink}>
					<Grid
						container
						alignItems='center'
						onMouseUp={(e) => closeNav(e)}
						className={classes.standaloneLinkContainer}>
						<Typography style={{ fontSize: '1.25rem', fontWeight: 500 }}>
							<FontAwesomeIcon
								icon={['fad', icon]}
								style={{
									marginRight: '.5rem',
									color: 'white',
									marginLeft: '1rem',
									fontSize: '1.25rem',
								}}
							/>

							{title}
						</Typography>
					</Grid>
				</a>
			)}
		</>
	);
};
