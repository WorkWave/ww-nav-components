import React, { useState, useEffect } from 'react';
import { chunk } from 'lodash';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import { NavCallout } from './items/NavCallout';
import { FaNavItems } from './items/FaNavItems';
import { ProductNavItems } from './items/ProductNavItems';

const useStyles = makeStyles((theme) => ({
	header: {
		fontWeight: 600,
		color: '#595959',
		marginBottom: '.2rem',
	},
}));

const Section = ({ header, content }) => {
	const classes = useStyles();
	const [chunked, setChunked] = useState([]);

	useEffect(() => {
		setChunked(chunk(content, 4));
	}, [content]);

	return (
		<Grid container direction='row' xs={chunked.length * 3}>
			{header && (
				<Grid container direction='row'>
					<Typography variant='h6' className={classes.header}>
						{header}
					</Typography>
				</Grid>
			)}
			{chunked.map((chunk) => (
				<Grid
					container
					item
					xs
					spacing={1}
					justifyContent='flex-start'
					direction='column'>
					{chunk[0].type === 'products' ? (
						<ProductNavItems items={chunk} noHeaderWidth={null} />
					) : (
						<FaNavItems items={chunk} noHeaderWidth={null} />
					)}
				</Grid>
			))}
		</Grid>
	);
};

export const HeaderNavContent = ({
	links,
	calloutIcon,
	calloutTitle,
	calloutContent,
}) => {
	return (
		<Grid
			container
			direction='row'
			alignItems='flex-start'
			justifyContent='flex-start'
			spacing={2}>
			{Object.keys(links).map((link) => (
				<Section header={link} content={links[link]} />
			))}
			{calloutTitle && (
				<NavCallout
					calloutIcon={calloutIcon}
					calloutTitle={calloutTitle}
					calloutContent={calloutContent}
				/>
			)}
		</Grid>
	);
};
