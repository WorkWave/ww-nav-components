import React from 'react';

import { Grid } from '@material-ui/core';

import { NavCallout } from './items/NavCallout';
import { FaNavItems } from './items/FaNavItems';

export const NoHeaderNavContent = ({
	links,
	calloutIcon,
	calloutTitle,
	calloutContent,
}) => {
	return (
		<Grid container direction='row' spacing={1}>
			<Grid
				container
				item
				xs={12}
				spacing={1}
				direction='row'
				alignItems='flex-start'
				justifyContent='flex-start'>
				<FaNavItems items={links} noHeaderWidth={3} />
			</Grid>

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
