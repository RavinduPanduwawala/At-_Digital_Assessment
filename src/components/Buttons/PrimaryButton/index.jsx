const PrimaryButton = ({ label }) => {
  return (
    <button className="bg-primary hover:bg-primary_dark text-white font-bold py-2 px-4 rounded">
      {label}
    </button>
  )
}

export default PrimaryButton
