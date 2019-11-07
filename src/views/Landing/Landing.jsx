import React from 'react'
import CallIcon from 'react-ionicons/lib/IosCall'
import PinIcon from 'react-ionicons/lib/MdPin'
import MailIcon from 'react-ionicons/lib/MdMail'
import bannerImage from '../../assets/images/banner-image.png'
import stefboc from '../../assets/images/stef-boc.jpeg'
import foodLine1 from '../../assets/images/food-line-1.jpg'
import foodLine2 from '../../assets/images/food-line-2.jpg'
import foodLine3 from '../../assets/images/food-line-3.jpg'
import foodLine4 from '../../assets/images/food-line-4.jpg'
import map from '../../assets/images/maps.jpg'
import * as S from './landing.styled'

function Landing() {
  return (
    <S.Wrapper>
      {/* Banner */}
      <S.Banner>
        <S.BannerImage src={bannerImage} alt="Sample of tasting room food." />
        <S.LogoCircle>
          <S.LogoImage src={stefboc} alt="Logo of the tasting room." />
        </S.LogoCircle>
      </S.Banner>

      {/* Welcome */}
      <S.Welcome>
        <S.WelcomeTitle>
          <S.WelcomeTitleBlack>Hi, I'm</S.WelcomeTitleBlack>
          <S.WelcomeTitleColor>Stefan Boc!</S.WelcomeTitleColor>
        </S.WelcomeTitle>
        <S.WelcomeParagraph>
          <S.WelcomeParagraphText>
            I'm a young and dynamic motion designer always looking for new challenges. I studied
            Film animation in Brussels at ERG (Ecole de Recherche Graphique) and one year in
            Montréal at Concordia University. I participated at a few exhibitions and workshops
            along the years. I started drawing and gaining interest in art since the youngest age
            but considered an artistic profession much later after having tried other paths. Contact
            me: stefan.c.boc@gmail.com
          </S.WelcomeParagraphText>
        </S.WelcomeParagraph>
      </S.Welcome>

      {/* Food Line */}
      <S.FoodLine>
        <S.FoodLineImage src={foodLine1} alt="Bird Skull" />
        <S.FoodLineImage src={foodLine2} alt="Army Soldier" />
        <S.FoodLineImage src={foodLine3} alt="Bird Skull 2" />
        <S.FoodLineImage src={foodLine4} alt="Charlie Chaplin" />
      </S.FoodLine>

      {/* Food Menu */}
      <S.FoodMenu>
        <S.FoodMenuTitle>
          <S.FoodMenuTitleLine />
          <S.FoodMenuTitleText>Films</S.FoodMenuTitleText>
          <S.FoodMenuTitleLine />
        </S.FoodMenuTitle>
        <S.FoodMenuParagraph>
          <S.FoodMenuParagraphText>
            Throughout my academic career at Ecole de Recherche Graphique and Concordia, as well as
            during my tenure at MKKM, I had the opportunity to create some films that I'm
            perticularly proud of: The first film is called, "Les Couilles" - it's a coming of age
            tale about a gay pirate named Jim.
          </S.FoodMenuParagraphText>
          <video width="100%" controls>
            <source src="mov_bbb.mp4" type="video/mp4" />
            <source src="mov_bbb.ogg" type="video/ogg" />
            Your browser does not support HTML5 video.
          </video>
        </S.FoodMenuParagraph>
      </S.FoodMenu>

      {/* Contact */}
      <S.Contact>
        <S.ContactInfo>
          <S.ContactInfoTitle>Contact Me</S.ContactInfoTitle>
          <S.ContactInfoText onClick={() => window.open('tel:1519438626')}>
            <CallIcon fontSize="1.2rem" color="#47b1ac" />
            &nbsp;1 (438) 526-6923
          </S.ContactInfoText>
          <S.ContactInfoText>
            <MailIcon fontSize="1.2rem" color="#47b1ac" />
            &nbsp;stefan.c.boc@gmail.com
          </S.ContactInfoText>
        </S.ContactInfo>
        <S.ContactMap
          onClick={() =>
            window.open(
              'https://www.google.com/maps/place/2030+Fort+St,+Montreal,+QC+H3H+2C5/@45.4927078,-73.5855289,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a6c97b5a09d:0xa36d664ec5bc9d72!8m2!3d45.4927041!4d-73.5833402'
            )
          }>
          <S.ContactInfoText>
            <PinIcon fontSize="1.2rem" color="#47b1ac" />
            &nbsp; 2030 Rue du Fort, Montreal, QC
          </S.ContactInfoText>
          <S.ContactMapImage src={map} alt="Google Map Location" />
        </S.ContactMap>
      </S.Contact>

      {/* Footer */}
      <S.Footer>
        <S.FooterHorizon>&copy; 2019 Stefan Boc</S.FooterHorizon>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Landing
