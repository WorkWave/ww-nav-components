import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { groupBy } from 'lodash';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Fade, MenuItem } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import {
	usePopupState,
	bindHover,
	bindMenu,
} from 'material-ui-popup-state/hooks';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { HeaderNavContent } from './content/nav/desktop/HeaderNavContent';
import { NoHeaderNavContent } from './content/nav/desktop/NoHeaderNavContent';
import { SalesNavContent } from './content/nav/desktop/SalesNavContent';
import { SupportNavContent } from './content/nav/desktop/SupportNavContent';

const useStyles = makeStyles((theme) => ({
	// options: {
	// 	position: 'relative',
	// 	padding: '.7rem',
	// 	transition: 'all .5s ease',
	// },
	link: {
		color: theme.workwaveBlue,
		textDecoration: 'none',
		transition: 'all .5s ease',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '14px',
		fontWeight: 600,
		'&:hover': {
			color: '#2F7FC1',
		},
	},
	subLink: {
		color: theme.workwaveBlue,
		textDecoration: 'none',
		fontWeight: 600,
	},
	icon: {
		width: '1rem',
		height: 'auto',
		transition: 'all .5s ease',
	},
	popoverPaper: {
		maxHeight: 'none',
		width: '100%',
		boxShadow: '0px 4px 4px rgba(9, 7, 37, 0.05)',
		paddingTop: '2rem',
		// marginTop: '-.5rem',
		// background:
		// 	'linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(236,236,238,1) 100%)',
	},
	linkContainer: {
		// height: '64px',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

const ResourceLink = ({
	header = 'Example',
	links,
	calloutIcon,
	calloutTitle,
	calloutContent,
	contentHeader,
	internalLink = true,
	handleModalClick,
}) => {
	const classes = useStyles();
	const [sortedLinks, setSortedLinks] = useState(null);
	const popupState = usePopupState({
		variant: 'popover',
		popupId: 'demoMenu',
	});

	useEffect(() => {
		const sorted = groupBy(links, 'category');
		Object.keys(sorted).includes('undefined')
			? setSortedLinks(Object.values(sorted).flat())
			: setSortedLinks(sorted);
	}, [links]);
	
		useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

	const { isOpen, close } = popupState;

	const handleScroll = () => {
		close()
	}


	const lgNav = useMediaQuery('(max-width: 1280px)');
	return (
		<div>
			<div
				className={classes.linkContainer}
				style={{ marginRight: lgNav ? '8px' : '16px' }}
				{...bindHover(popupState)}>
				<a
					className={classes.link}
					href={`https://www.workwave.com/${header}`}
					target='_blank'
					rel='noopener'>
					<Typography
						className={classes.link}
						style={{ color: isOpen ? '#2F7FC1' : '#002D5C' }}>
						{header[0].toUpperCase() + header.slice(1)}
						<ExpandMore
							className={classes.icon}
							style={{
								transition: 'all .5s ease',
								color: isOpen ? '#2F7FC1' : '#002D5C',
								transform: isOpen ? 'rotateZ(180deg)' : null,
							}}
						/>
					</Typography>
				</a>
			</div>

			<HoverMenu
				{...bindMenu(popupState)}
				getContentAnchorEl={null}
				PopoverClasses={{
					paper: classes.popoverPaper,
				}}
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 2 }}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
				<Container fixed>
					{sortedLinks instanceof Array ? (
						header === 'sales' ? (
							<SalesNavContent
								links={sortedLinks}
								contentHeader={contentHeader}
								internalLink={internalLink}
								handleModalClick={handleModalClick}
							/>
						) : header === 'support' ? (
							<SupportNavContent
								links={sortedLinks}
								contentHeader={contentHeader}
								internalLink={internalLink}
							/>
						) : (
							<NoHeaderNavContent
								links={sortedLinks}
								calloutIcon={calloutIcon}
								calloutTitle={calloutTitle}
								calloutContent={calloutContent}
							/>
						)
					) : (
						<HeaderNavContent
							links={sortedLinks}
							calloutIcon={calloutIcon}
							calloutTitle={calloutTitle}
							calloutContent={calloutContent}
							header={header}
						/>
					)}
				</Container>
			</HoverMenu>
		</div>
	);
};

export default ResourceLink;
