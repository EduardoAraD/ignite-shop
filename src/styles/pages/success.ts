import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    lineHeight: 1.4,
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    }
  }
})

export const ListImages = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  marginLeft: '4rem',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 70,
  padding: '0.25rem',
  marginTop: '4rem',
  boxShadow: '6px 6px 6px 3px rgba(0, 0, 0, 0.4)',

  marginLeft: '-4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})
