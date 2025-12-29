const dailyIncome = [
  {
    id: crypto.randomUUID(),
    desc: 'Software Engineer',
    ctg: 'fulltime',
    salary: 20000000,
    date: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    desc: 'Create Profile Company Web',
    ctg: 'freelance',
    salary: 500000,
    date: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    desc: 'Personal Finance Management',
    ctg: 'profit',
    salary: 5000000,
    date: Date.now(),
  },
];

const getDailyIncome = () => dailyIncome;

export { getDailyIncome };
