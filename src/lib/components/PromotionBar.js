import React from 'react';
import PortableText from 'react-portable-text';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, Collapse } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
	bar: {
		background: theme.workwaveBlue,
	},
	text: {
		textAlign: 'center',
		color: 'white',
		fontWeight: 425,
		// marginLeft: '4rem',
		[theme.breakpoints.down('md')]: {
			marginLeft: '0',
		},
		[theme.breakpoints.down('sm')]: {
			// marginLeft: '4rem',
			lineHeight: '1.2',
      maxWidth: '590px',
		},
		[theme.breakpoints.down('xs')]: {
			marginLeft: '0',
		},
	},
}));

const PromotionBar = ({ promotion, open = true, setOpen }) => {
	const classes = useStyles();

	return (
		<Collapse in={open}>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				className={classes.bar}>
        <div style={{ 
            display: 'flex',
            alignItems: 'center',
          }}>
          <Container fixed>
            {promotion._rawContent.map((content) => (
              <Typography
                variant='h6'
                style={{
                  color: 'white',
                  textAlign: 'center',
                  margin: '.5rem 0',
                }}>
                <PortableText
                  content={content}
                  serializers={{
                    normal: ({ children }) => <span>{children}</span>,
                    link: ({ blank, children, href }) => {
                      return (
                        <a
                          href={href}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={classes.text}
                          style={{
                            marginLeft: 'none',
                            fontWeight: 700,
                            textDecoration: '0',
                          }}>
                          {children}
                        </a>
                      );
                    },
                  }}
                />
              </Typography>
            ))}
          </Container>
          <CloseIcon
            style={{
              cursor: 'pointer',
              color: 'white',
              position: 'relative',
              marginRight: '1rem',
            }}
            onClick={(e) => setOpen(false)}
          />
        </div>
			</Grid>
		</Collapse>
	);
};

export default PromotionBar;
