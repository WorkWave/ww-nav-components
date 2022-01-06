import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import { SalesSupportNavCard } from './items/SalesSupportNavCard';

const useStyles = makeStyles((theme) => ({
	text: {
		color: theme.workwaveBlue,
	},
}));

export const SupportNavContent = ({ links, contentHeader, internalLink }) => {
	const classes = useStyles();
	const [selected, setSelected] = useState(null);

	const handleHover = (e) => {
		const name = e.target.getAttribute('name');

		setSelected(name);
	};

	const handleCall = (e) => {
		window.open(`${links[0].slug.current}`, '_self');
	};

	const handleNavigate = (e) => {
		internalLink
			? navigate(`/${links[1].slug.current}`)
			: window.open(`${links[1].slug.current}`, '_blank');
	};
	return (
		<Grid container direction='row' className={classes.text}>
			<Grid item container direction='row' justifyContent='center'>
				<Typography
					variant='h4'
					style={{ textAlign: 'center', margin: '2rem', fontWeight: 700 }}>
					{contentHeader}
				</Typography>
			</Grid>

			<SalesSupportNavCard
				cardContent={links[0]}
				selected={selected}
				handleHover={handleHover}
				setSelected={setSelected}
				handleClick={handleCall}
			/>
			<SalesSupportNavCard
				cardContent={links[1]}
				selected={selected}
				handleHover={handleHover}
				setSelected={setSelected}
				handleClick={handleNavigate}
			/>
		</Grid>
	);
};
