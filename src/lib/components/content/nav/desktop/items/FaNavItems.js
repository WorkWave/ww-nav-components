import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	link: {
		color: theme.workwaveBlue,
		textDecoration: 'none',
		fontWeight: 600,
	},
	item: {
		padding: '.2rem 0',
	},
}));

export const FaNavItems = ({ items, noHeaderWidth }) => {
	const classes = useStyles();
	return (
		<>
			{items.map((item, index) => (
				<Grid
					item
					xs={noHeaderWidth}
					key={index}
					className={classes.item}
					style={{ maxWidth: noHeaderWidth ? null : '95%' }}>
					<Link to={`/${item.slug.current}`} style={{ textDecoration: 'none' }}>
						<MenuItem style={{ paddingLeft: 0 }}>
							<Grid container alignItems='center'>
								<FontAwesomeIcon
									icon={['fad', item.faIcon]}
									style={{
										height: '25px',
										width: '25px',
										marginRight: '5px',
										border: `1px solid #F1F2F5`,
										background: '#F1F2F5',
										borderRadius: '5px',
										padding: '3px',
										color: item.iconColor?.hexValue ?? '#002D5C'
									}}
								/>{' '}
								<Typography className={classes.link}>{item.title}</Typography>
							</Grid>
						</MenuItem>
					</Link>
				</Grid>
			))}
		</>
	);
};
