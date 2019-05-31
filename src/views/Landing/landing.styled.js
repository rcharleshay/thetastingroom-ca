import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 1000px;
  min-width: 352px;
  min-height: 100vh;
  margin: auto;
  margin-bottom: -200px;
`
/********************************
 * Banner
 *******************************/
export const Banner = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const BannerImage = styled.img`
  padding: 1rem 1rem 0 1rem;
  width: 100%;
`

export const LogoCircle = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.9);
  width: 30%;
  padding-top: 30%;
  border-radius: 50%;
  margin-top: -15%;
`
export const LogoImage = styled.img`
  position: absolute;
  width: 90%;
  top: 25%;
  left: 5%;
`

/********************************
 * Welcome
 *******************************/
export const Welcome = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
`

export const WelcomeTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`

export const WelcomeTitleBlack = styled.span`
  font-family: cocogoose;
  text-transform: uppercase;
  font-size: 1.5rem;
`

export const WelcomeTitleColor = styled.span`
  margin-left: 0.5rem;
  color: #47b1ac;
  font-family: cocogoose;
  text-transform: uppercase;
  font-size: 1.5rem;
`

export const WelcomeParagraph = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 1rem 0;

  @media (max-width: 650px) {
    max-width: 350px;
  }
`

export const WelcomeParagraphText = styled.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 2rem;
  text-align: center;

  @media (max-width: 650px) {
    font-size: 0.8rem;
    line-height: 1.75rem;
  }
`

/********************************
 * Food Line
 *******************************/
export const FoodLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const FoodLineImage = styled.img`
  width: 25%;
`

/********************************
 * Food Menu
 *******************************/
export const FoodMenu = styled.div`
  width: 100%;
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

export const FoodMenuTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 1rem 0;
`
export const FoodMenuTitleText = styled.span`
  font-family: cocogoose;
  font-size: 1.5rem;
  text-transform: uppercase;
  @media (max-width: 493px) {
    font-size: 0.9rem;
    line-height: 1.75rem;
  }
`

export const FoodMenuTitleLine = styled.div`
  flex: 1;
  height: 1px;
  background: #fff;
  margin: 1rem;
`

export const FoodMenuParagraph = styled.div`
  width: 100%;
  max-width: 550px;

  @media (max-width: 650px) {
    max-width: 350px;
  }
`

export const FoodMenuParagraphText = styled.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 2rem;
  text-align: center;
  color: #fff;

  @media (max-width: 650px) {
    font-size: 0.8rem;
    line-height: 1.75rem;
  }
`
export const FoodMenuNavigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
`

export const FoodMenuButton = styled.a`
  font-size: 0.8rem;
  padding: .5rem 1rem;
  width: 100%;
  max-width: 550px;
  background-color: #222;
  border-radius: 5px;
  margin: .5rem 0;
  color: #47b1ac;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #47b1ac;
  font-weight: 300;

  &:hover, &:active {
    color: #FFF
    border: 1px solid #FFF;
  }
`

/********************************
 * Wine Menu
 *******************************/
export const WineMenu = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

export const WineMenuTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`

export const WineMenuTitleBlack = styled.span`
  font-family: cocogoose;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-left: 0.5rem;
  @media (max-width: 650px) {
    font-size: 0.8rem;
    line-height: 1rem;
  }
`

export const WineMenuTitleColor = styled.span`
  color: #ac1e14;
  font-family: cocogoose;
  text-transform: uppercase;
  font-size: 1.5rem;
`

export const WineMenuParagraph = styled.div`
  width: 100%;
  max-width: 550px;

  @media (max-width: 650px) {
    max-width: 350px;
  }
`

export const WineMenuParagraphText = styled.div`
  font-size: 1rem;
  font-weight: 300;
  line-height: 2rem;
  text-align: center;
  color: #222;

  @media (max-width: 650px) {
    font-size: 0.8rem;
    line-height: 1.75rem;
  }
`

export const WineNavigation = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 2rem 2rem 2rem;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`

export const WineSelection = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 650px) {
    width: 100%;
  }
`

export const WineSelectionImage = styled.img`
  width: 90%;
`

export const WineSelectionButton = styled.a`
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  padding: .5rem 1rem;
  width: 90%;
  max-width: 450px;
  border-radius: 5px;
  margin: 1rem 0 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: #47b1ac;
  background: #fff;
  border: 1px solid #47b1ac;

  &:hover, &:active {
    color: #222
    background: #fff;
    border: 1px solid #222;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`

export const Contact = styled.div`
  width: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  padding: 3rem 2rem 6rem 2rem;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`

export const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContactInfoTitle = styled.span`
  font-family: cocogoose;
  text-transform: uppercase;
  font-size: 1.2rem;
  @media (max-width: 650px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`

export const ContactInfoText = styled.span`
  display: flex;
  flex-direction: row;
  font-weight: 300;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 0.25rem 0;
`

export const ContactInfoTextTime = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 0.8rem;
  padding: 0.1rem 0;
`

export const ContactMap = styled.div`
  flex: 1;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 650px) {
    margin: 2rem 0;
  }
`

export const ContactMapLink = styled.a`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ContactMapImage = styled.div`
  border: 1px solid #ccc;
  flex: 1;
  background: url(${p => p.src}) no-repeat center;
  background-size: cover;
`

/********************************
 * Footer
 *******************************/
export const Footer = styled.div`
  margin-top: -50px;
  height: 100px;
  width: 100vw;
  position: relative;
  overflow: hidden;
`

export const FooterHorizon = styled.div`
  position: absolute;
  width: 200vw;
  background: #222;
  height: 200px;
  border-radius: 50%;
  left: -50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  font-family: helvetica;
  font-size: 0.8rem;
  font-weight: 100;
  padding-top: 40px;
`
