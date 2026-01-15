const isScientific = (value) => String(value).includes('e');

const getNotation = (notation, number) =>
  isScientific(number) ? 'compact' : notation;

const getFractionDigits = (notation) =>
  notation === 'compact' ? 0 : undefined;

const currencyFormatter = (
  { locales, currency, notation, currencyDisplay },
  number
) => {
  const finalNotation = getNotation(notation, number);
  const fractionDigits = getFractionDigits(notation);

  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency,
    currencyDisplay,
    notation: finalNotation,
    minimumFractionDigits: fractionDigits,
  }).format(number);
};

const dateTimeFormatter = ({ locales, timeZone }, date) =>
  new Intl.DateTimeFormat(locales, {
    timeZone,
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    // calendar: 'hijriah',
  }).format(date);

export { currencyFormatter, dateTimeFormatter };
