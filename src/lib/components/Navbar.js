import React from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Container, Toolbar, Button } from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';

// import { NavLink } from './desktop/NavLink';
// import FormModalContext from '../../../context/FormModalContext';
// import { MobileNav } from './mobile/MobileNav';
// import { StandaloneNavLink } from './desktop/StandaloneNavLink';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		background: theme.white,
		color: theme.workwaveBlue,
		padding: '0 0',
		borderTop: `1.3px ${theme.lightGray} solid`,
		minHeight: '64px',
		display: 'flex',
		justifyContent: 'center',
		boxShadow: '0px .5px 2px rgba(0, 0, 0, 0.3)',
	},
	cta: {
		fontSize: '20px',
		marginLeft: '10px',
		[theme.breakpoints.down('md')]: {
			fontSize: '16px',
		},
		'&:hover': {
			background: '#2F7FC1',
		},
	},
	img: {
		height: '3rem',
		marginTop: '.5rem',
		[theme.breakpoints.down('xs')]: {
			height: '2.5rem',
		},
	},
}));

const Navbar = ({ image, children }) => {
	const classes = useStyles();

	const med = useMediaQuery('(max-width: 960px)');
	return (
		<>
			<AppBar position='sticky' className={classes.appBar} elevation={0}>
				<Toolbar disableGutters={true}>
					<Container
						className={classes.root}
						fluid={med && true}
						fixed={!med && true}>
						<Grid container direction='row' alignItems='center'>
							<Grid item xs={6} md={2}>
								<Link to='/'>
									<img src={image} className={classes.img} alt='logo' />
								</Link>
							</Grid>
							<Grid
								item
								xs={6}
								md={10}
								container
								direction='row'
								alignItems='center'
								justifyContent='flex-end'>
								{children}
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
