const subtractPercentage = (value, percentageToSubtract) => {
  percentageValue = (value * percentageToSubtract) / 100
  return value - percentageValue
}

value = 233.58
percentage = 5
valueMinusPercentage = subtractPercentage(value, percentage)

console.log(`${value} - ${percentage}% = ${valueMinusPercentage}`)
