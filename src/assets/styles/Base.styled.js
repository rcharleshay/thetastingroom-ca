const Base = `
body {
  margin: 0;
}

#root {
  height: 100vh;
  display: flex;

}

div {
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
}

button {
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
`

export default Base
