const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const formateCurrency = (number: number) => currencyFormatter.format(number)

export default formateCurrency
