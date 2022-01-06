import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Popper, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {
	usePopupState,
	bindPopper,
	bindToggle,
} from 'material-ui-popup-state/hooks';

// import { MobileNavLink } from './MobileNavLink';
// import { MobileStandaloneNavLink } from './MobileStandaloneNavLink';

const useStyles = makeStyles((theme) => ({
	link: {
		color: theme.workwaveBlue,
		textDecoration: 'none',
	},
	cta: {
		margin: '0 1rem',
		[theme.breakpoints.down('xs')]: {
			fontSize: '.8rem',
			padding: '10px 10px',
		},
	},
}));

export const MobileNav = ({ children, handleModalClick, ctaText }) => {
	const classes = useStyles();
	const popupState = usePopupState({
		variant: 'popper',
		popupId: 'mobileMenu',
	});
	const { isOpen, close } = popupState;

	const body = document.querySelector('body');
	useEffect(() => {
		const popperScroll = () => {
			isOpen
				? (body.style.overflow = 'hidden')
				: (body.style.overflow = 'visible');
		};
		popperScroll();
	}, [isOpen]);

	const closeNav = (e) => {
		e.preventDefault();
		setTimeout(() => {
			close();
		}, 700);
	};

	return (
		<>
			<Button
				variant='contained'
				color='primary'
				size='large'
				onClick={(e) => handleModalClick(e)}
				className={classes.cta}>
				{ctaText}
			</Button>
			<div
				{...bindToggle(popupState)}
				style={{
					height: '64px',
					display: 'flex',
					alignItems: 'center',
				}}>
				{isOpen ? (
					<CloseIcon style={{ color: '#002D5C' }} size='large' />
				) : (
					<MenuIcon style={{ color: '#002D5C' }} size='large' />
				)}
			</div>

			<Popper
				style={{
					marginRight: '-5px',
					width: '100vw',
					overflow: 'scroll',
					height: '100vh',
					background: '#002D5C',
					paddingBottom: '300px',
				}}
				placement='top'
				disablePortal={true}
				modifiers={{
					offset: {
						enabled: true,
						offset: '300,0',
					},
					preventOverflow: {
						enabled: true,
						boundariesElement: 'scrollParent',
					},
				}}
				{...bindPopper(popupState)}>
				<div>{children}</div>
			</Popper>
		</>
	);
};
