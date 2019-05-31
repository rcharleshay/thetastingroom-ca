import React from 'react'
import CallIcon from 'react-ionicons/lib/IosCall'
import PinIcon from 'react-ionicons/lib/MdPin'
import ClockIcon from 'react-ionicons/lib/MdTime'
import bannerImage from 'assets/images/banner-image.jpg'
import tastingRoomLogo from 'assets/images/tasting-room-logo.png'
import foodLine1 from 'assets/images/food-line-1.jpg'
import foodLine2 from 'assets/images/food-line-2.jpg'
import foodLine3 from 'assets/images/food-line-3.jpg'
import foodLine4 from 'assets/images/food-line-4.jpg'
import wineRed from 'assets/images/wine-red.jpg'
import wineWhite from 'assets/images/wine-white.jpg'
import wineFlight from 'assets/images/wine-flight.jpg'
import map from 'assets/images/maps.jpg'
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
        <S.FoodMenuNavigation>
          <S.FoodMenuButton href="http://thetastingroom.ca/menus/appetizer.pdf" target="_blank">
            View Appetizer Menu
          </S.FoodMenuButton>
          <S.FoodMenuButton href="http://thetastingroom.ca/menus/lunch.pdf" target="_blank">
            View Lunch Menu
          </S.FoodMenuButton>
          <S.FoodMenuButton href="http://thetastingroom.ca/menus/dinner.pdf" target="_blank">
            View Dinner Menu
          </S.FoodMenuButton>
        </S.FoodMenuNavigation>
      </S.FoodMenu>

      {/* Wine Menu */}
      <S.WineMenu>
        <S.WineMenuTitle>
          <S.WineMenuTitleColor>Wines</S.WineMenuTitleColor>
          <S.WineMenuTitleBlack>From Around The Globe</S.WineMenuTitleBlack>
        </S.WineMenuTitle>
        <S.WineMenuParagraph>
          <S.WineMenuParagraphText>
            We Pride ourselves on an incredible selection of wines from around the world. Take a
            look at our list of aged Red Wines. Have a peek at our White Wines or try 4 different
            2oz. servings of different wines with our famous Wine Flight.
          </S.WineMenuParagraphText>
        </S.WineMenuParagraph>
      </S.WineMenu>
      <S.WineNavigation>
        <S.WineSelection>
          <S.WineSelectionImage src={wineRed} />
          <S.WineSelectionButton href="http://www.thetastingroom.ca/menus/WineMenuRed.pdf">
            View Red Wine Menu
          </S.WineSelectionButton>
        </S.WineSelection>
        <S.WineSelection>
          <S.WineSelectionImage src={wineWhite} />
          <S.WineSelectionButton href="http://www.thetastingroom.ca/menus/WineMenuWhite.pdf">
            View White Wine Menu
          </S.WineSelectionButton>
        </S.WineSelection>
        <S.WineSelection>
          <S.WineSelectionImage src={wineFlight} />
          <S.WineSelectionButton href="http://www.thetastingroom.ca/menus/flightmenu.pdf">
            View Wine Flight Menu
          </S.WineSelectionButton>
        </S.WineSelection>
      </S.WineNavigation>

      {/* Contact */}
      <S.Contact>
        <S.ContactInfo>
          <S.ContactInfoTitle>Contact Us</S.ContactInfoTitle>
          <S.ContactInfoText onClick={() => window.open('tel:1519438626')}>
            <CallIcon fontSize="1.2rem" color="#47b1ac" />
            &nbsp;1 (519) 438-6262
          </S.ContactInfoText>
          <S.ContactInfoText>
            <ClockIcon fontSize="1.2rem" color="#47b1ac" />
          </S.ContactInfoText>
          <S.ContactInfoTextTime>Mon 11:30am - 11:00pm</S.ContactInfoTextTime>
          <S.ContactInfoTextTime>Tue 11:30am - 11:00pm</S.ContactInfoTextTime>
          <S.ContactInfoTextTime>Wed 11:30am - 11:00pm</S.ContactInfoTextTime>
          <S.ContactInfoTextTime>Thu 11:30am - 11:00pm</S.ContactInfoTextTime>
          <S.ContactInfoTextTime>Fri 11:30am - 11:00pm</S.ContactInfoTextTime>
          <S.ContactInfoTextTime>Sat 11:30am - 11:00pm</S.ContactInfoTextTime>
          <S.ContactInfoTextTime>Sun 11:30am - 11:00pm</S.ContactInfoTextTime>
        </S.ContactInfo>
        <S.ContactMap
          onClick={() =>
            window.open(
              'https://www.google.com/maps/place/The+Tasting+Room/@42.9862412,-81.2529722,17z/data=!4m5!3m4!1s0x882ef202be893203:0x8bcad6c866d18cbe!8m2!3d42.9862373!4d-81.2507835'
            )
          }>
          <S.ContactInfoText>
            <PinIcon fontSize="1.2rem" color="#47b1ac" />
            &nbsp; 483 Richmond St. London, ON
          </S.ContactInfoText>
          <S.ContactMapImage src={map} alt="Google Map Location" />
        </S.ContactMap>
      </S.Contact>

      {/* Footer */}
      <S.Footer>
        <S.FooterHorizon>&copy; 2019 The Tasting Room</S.FooterHorizon>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Landing
