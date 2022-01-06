import React from 'react';

import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// import { StandaloneResourceLink } from '../links/StandaloneResourceLink'
// import { ResourceLink } from './ResourceBarPieces/ResourceLink';
// import FormModalContext from '../../../context/FormModalContext';

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

export const ResourceBar = ({ children }) => {
	const classes = useStyles();
	const sm = useMediaQuery('(max-width: 630px)');

	return (
		<div className={classes.bar}>
			<Container fixed>
				<Grid
					container
					direction={sm ? 'column' : 'row'}
					justifyContent={sm ? 'center' : 'flex-end'}
					alignItems='center'>
					{children}
				</Grid>
			</Container>
		</div>
	);
};
