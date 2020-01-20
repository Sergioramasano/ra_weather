// It`s the temperature filter for transform Kelvin to Celsium
export default function temperatureFilter (value) {
  return Math.ceil(value - 273) + ` ℃`
}
