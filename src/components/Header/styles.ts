import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: "flex",
  justifyContent: 'space-between',
})

export const ButtonShop = styled('button', {
  height: '3rem',
  width: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$gray800',
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer',
  transition: '0.2s',

  span: {
    position: 'absolute',
    marginTop: '-2.2rem',
    marginRight: '-2.2rem',
    backgroundColor: '$green500',
    height: '1.5rem',
    width: '1.5rem',
    borderRadius: 99,
    border: '4px solid $gray900',
    lineHeight: 0,
    fontWeight: 'bold',
    fontSize: 14,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '&:hover': {
    filter: 'brightness(1.75)',
  }
});
