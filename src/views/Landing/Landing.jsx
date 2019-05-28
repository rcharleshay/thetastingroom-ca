import React from 'react'
import bannerImage from 'assets/images/banner-image.jpg'
import tastingRoomLogo from 'assets/images/tasting-room-logo.png'
import foodLine1 from 'assets/images/food-line-1.jpg'
import foodLine2 from 'assets/images/food-line-2.jpg'
import foodLine3 from 'assets/images/food-line-3.jpg'
import foodLine4 from 'assets/images/food-line-4.jpg'
import * as S from './landing.styled'

function Landing() {
  return (
    <S.Wrapper>
      {/* Banner */}
      <S.Banner>
        <S.BannerImage src={bannerImage} alt="Sample of tasting room food." />
        <S.LogoCircle>
          <S.LogoImage src={tastingRoomLogo} alt="Logo of the tasting room." />
        </S.LogoCircle>
      </S.Banner>

      {/* Welcome */}
      <S.Welcome>
        <S.WelcomeTitle>
          <S.WelcomeTitleBlack>We Welcome You To</S.WelcomeTitleBlack>
          <S.WelcomeTitleColor>The Tasting Room</S.WelcomeTitleColor>
        </S.WelcomeTitle>
        <S.WelcomeParagraph>
          <S.WelcomeParagraphText>
            One of the most loved restaurants on Richmond Row, 2 doors from the Grand Theatre in the
            heart of downtown London. The Tasting Room is both a bar and great restaurant. The
            ambiance is warm, casual and yet upscale. Lunch and dinner are served daily, while the
            extensive appetizer menu offers plenty for those who just want to nibble.
          </S.WelcomeParagraphText>
        </S.WelcomeParagraph>
      </S.Welcome>

      {/* Food Line */}
      <S.FoodLine>
        <S.FoodLineImage src={foodLine1} alt="Crispy potatoes with loaded pita bread" />
        <S.FoodLineImage
          src={foodLine2}
          alt="Greek salad with feta, olives, cucumber and tomatoes"
        />
        <S.FoodLineImage src={foodLine3} alt="Bruchetta covered in cheese and mushrooms" />
        <S.FoodLineImage src={foodLine4} alt="Seafood paella garnished with leeks" />
      </S.FoodLine>

      {/* Food Menu */}
      <S.FoodMenu>
        <S.FoodMenuTitle>
          <S.FoodMenuTitleLine />
          <S.FoodMenuTitleText>Something for everyone</S.FoodMenuTitleText>
          <S.FoodMenuTitleLine />
        </S.FoodMenuTitle>
        <S.FoodMenuParagraph>
          <S.FoodMenuParagraphText>
            Our Dinner Menu is a veritable hit parade of current trends and up-dated classics. While
            someone searching for a light but filling midday outing must experience our Lunch Menu.
            And of course, checkout our Appetizers for an outstanding medley of flavours that
            compliment any occasion.
          </S.FoodMenuParagraphText>
        </S.FoodMenuParagraph>
      </S.FoodMenu>
    </S.Wrapper>
  )
}

export default Landing
