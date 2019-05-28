import cocogoose from 'assets/fonts/cocogoose.ttf'

const Base = `
@font-face {
  font-family: "cocogoose";
  src: url(${cocogoose});
  url(${cocogoose}) format("ttf"),
}

body {
  margin: 0;
  font-size: 20pt;
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
