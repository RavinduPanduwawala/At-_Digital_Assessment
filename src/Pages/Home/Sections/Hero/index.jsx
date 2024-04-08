import HeroImage from '../../../../assets/images/Hero_Image.jpeg'
import Styles from './hero.module.css'
import PrimaryButton from '../../../../components/Buttons/PrimaryButton'

const Hero = () => {
  const backgroundImage = {
    backgroundImage: `url(${HeroImage})`,

  }

  return (
    <div>
      <div style={backgroundImage} className={Styles.background_image_styles} />
      <div className={`${Styles.hero_card} text-start`}>
        <div className={Styles.hero_card_text}>
          We Crush your <br /> Competitors, Goals And <br /> Sales Records -
          Without <br /> The B.S
        </div>
        <div className="mt-4">
          <PrimaryButton label="Get Free Consultation" />
        </div>
      </div>
    </div>
  )
}

export default Hero
