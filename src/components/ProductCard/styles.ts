import { styled } from "../../styles";

export const ProductCardContainer = styled('div', {
  display: 'flex',
  width: '100%',
  gap: '1.25rem',
  alignItems: 'center',

  'div.img': {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    height: 101,
    width: 93,

    img: {
      objectFit: 'cover',
    }
  },
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',

  p: {
    fontSize: '$md',
    color: '$gray300',
    lineHeight: 1.6,
    width: '100%',
  },
  span: {
    marginTop: 2,
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
    lineHeight: 1.6,
  },
  button: {
    marginTop: 8,
    marginRight: 'auto',
    background: 'none',
    border: 'none',
    padding: 0,
    color: '$green500',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',

    '&:hover': {
      color: '$green300',
    }
  },
})
