import styled from 'styled-components'

export const Banner = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    content: '';
    opacity: 0.7;
  }

  div {
    position: relative;
    color: ${(props) => props.theme.colors.text};
  }

  h2 {
    font-family: Gloock, serif;
    font-size: 48px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;

    h2 {
      font-size: 32px;
    }
  }
`
