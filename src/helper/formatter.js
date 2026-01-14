const isScientific = (value) => String(value).includes('e');

const getNotation = (notation, number) =>
  isScientific(number) ? 'compact' : notation;

const getFractionDigits = (notation) =>
  notation === 'compact' ? 0 : undefined;

const currencyFormatter = (
  { locale, currency, notation, currencyDisplay },
  number
) => {
  const finalNotation = getNotation(notation, number);
  const fractionDigits = getFractionDigits(notation);

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay,
    notation: finalNotation,
    minimumFractionDigits: fractionDigits,
  }).format(number);
};

export { currencyFormatter };
