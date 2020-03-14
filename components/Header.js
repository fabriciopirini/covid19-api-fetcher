import CountrySelector from './CountrySelector'

const Header = ({ countryName, handleCountrySelect }) => (
  <>
    <span>Cases of Coronavirus ({countryName})</span>
    <CountrySelector handleCountrySelect={handleCountrySelect} />
  </>
)

export default Header
