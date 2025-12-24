const setIcon = (category, type) => {
  if (type === 'expense') {
    return category === 'food'
      ? 'ri-restaurant-fill'
      : category === 'transport'
      ? 'ri-taxi-fill'
      : category === 'work'
      ? 'ri-suitcase-fill'
      : category === 'health'
      ? 'ri-dossier-fill'
      : category === 'bill'
      ? 'ri-bill-fill'
      : category === 'entertainment'
      ? 'ri-slideshow-3-fill'
      : 'ri-shopping-bag-4-fill';
  }

  if (type === 'income') {
    return category === 'fulltime'
      ? 'ri-calendar-schedule-fill'
      : category === 'freelance'
      ? 'ri-timer-2-fill'
      : category === 'profit'
      ? 'ri-bar-chart-2-fill'
      : 'ri-wallet-fill';
  }
};

export default setIcon;
