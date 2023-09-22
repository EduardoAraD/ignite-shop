import { styled } from "@/src/styles";

export const ModalContainer = styled('div', {
  height: '100%',
  width: '100%',
  overflow: 'auto',

  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',

  h1: {
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '$lg',
  }
})

export const ButtonClose = styled('button', {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  padding: '0.5rem',

  background: '$gray900',
  border: 'none',
  borderRadius: 8,
  lineHeight: 0,
  transition: '0.2s',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(1.5)',
  }
})

export const ListItems = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  'div.empty': {
    p: {
      fontSize: '$md',
      fontWeight: 'bold',
      color: '$gray100',
      textAlign: 'center'
    }
  }
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',
  paddingTop: '2rem',
  
  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  span: {
    fontSize: '$md',
    color: '$gray100',
  },
  p: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$gray100',
  }
})

export const Button = styled('button', {
  display: 'flex',
  padding: '20px 32px',
  marginTop: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  
  border: 'none',
  borderRadius: 8,

  background: '$green500',
  color: '$white',
  fontSize: '$md',
  fontWeight: 'bold',

  cursor: 'pointer',
  transition: '0.2s',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    background: '$green300',
  }
})
