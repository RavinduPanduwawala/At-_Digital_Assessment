import Icon from '../../../../assets/images/magnifier .png'
import PrimaryButton from '../../../../components/Buttons/PrimaryButton'

const SectionTwo = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between py-6 px-4 bg-white max-w-6xl mx-auto">
      {/* Left side with title, description, and button */}
      <div className="w-full sm:w-1/2 text-center sm:text-start mb-6 sm:mb-0">
        <h2 className="text-2xl font-semibold text-purple mb-3">
          Digital Strategy Consulting
        </h2>
        <p className="text-sm font-semibold mb-4">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <PrimaryButton label="LEARN MORE" />
      </div>

      {/* Right side with icon */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <img src={Icon} alt="Icon" className="w-auto" />
      </div>
    </div>
  )
}

export default SectionTwo
