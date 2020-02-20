import styled from 'styled-components/macro'

export default styled.div`
  display: grid;
  grid-template-rows: 120px auto 15%;
  grid-template-areas: 'header' 'stage' 'footer';
  height: 100vh;
  margin: 0;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    'PT Sans' sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
`
