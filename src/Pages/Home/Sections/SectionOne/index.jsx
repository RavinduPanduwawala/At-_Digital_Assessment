import Icon from '../../../../assets/images/Desktop.png'
import PrimaryButton from '../../../../components/Buttons/PrimaryButton'

const SectionOne = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-6 px-4 bg-white max-w-6xl mx-auto">
      {/* Left side with icon */}
      <div className="w-full sm:w-1/2 flex justify-center mb-6 sm:mb-0">
        <img src={Icon} alt="Icon" className="w-2/3 h-auto" />
      </div>

      {/* Right side with title, description, and button */}
      <div className="w-full sm:w-1/2 text-center sm:text-start">
        <h2 className="text-2xl font-semibold text-purple mb-3">
          Web & Mobile App Development
        </h2>
        <p className="text-sm font-semibold mb-4">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business onlin
        </p>
        <PrimaryButton label="LEARN MORE" />
      </div>
    </div>
  )
}

export default SectionOne
