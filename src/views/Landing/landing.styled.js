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
  font-weight: 100;
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
  flex: 1;
`

export const FoodMenu = styled.div`
  width: 100%;
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
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
  font-weight: 100;
  line-height: 2rem;
  text-align: center;
  color: #fff;

  @media (max-width: 650px) {
    font-size: 0.8rem;
    line-height: 1.75rem;
  }
`
