export const me = {
  email: 'info.priyanshu06@gmail.com',
  github: 'https://github.com/Dev-priyanshu-tiwari',
  linkedin: 'https://linkedin.com/in/priyanshu-tiwari1117',
  resume: 'Priyanshu_Tiwari_WebDev_Internship.pdf', // public/ folder me rakho
}

export const nav = [
  ['work', 'Projects'],
  ['path', 'Experience'],
  ['stack', 'Stack'],
  ['contact', 'Contact'],
]

export const projects = [
  { id: 'blw', title: 'BLW Expenditure Dashboard', status: 'Internship', tags: ['Full-stack'],
    desc: 'Dashboard for analysing expenditure data at Banaras Locomotive Works, built during my internship.',
    stack: 'React, Node.js, Express, MongoDB', code: me.github },
  { id: 'codelens', title: 'CodeLens AI', status: 'Built', tags: ['AI', 'Full-stack'],
    desc: 'AI-assisted code review tool. Paste code and get feedback from the Gemini API.',
    stack: 'React, TypeScript, Supabase, Gemini API', code: me.github },
  { id: 'pulse', title: 'Pulse Tickets', status: 'In progress', live: true, tags: ['Full-stack'],
    desc: 'Cloud-native ticketing platform. I am building it in three phases to learn the full stack end to end.',
    stack: 'MERN, cloud deployment', code: me.github },
  { id: 'skypeek', title: 'SkyPeek', status: '2025', tags: ['Frontend'],
    desc: 'Weather dashboard with city search, 5-day forecast, °C/°F toggle and sunrise and sunset times.',
    stack: 'JavaScript, OpenWeatherMap API, CSS', demo: 'weather/index.html', code: 'https://dev-priyanshu-tiwari.github.io/SkyPeek/' },
  { id: 'spendly', title: 'Spendly', status: '2025', tags: ['Frontend'],
    desc: 'Expense tracker with a donut chart, monthly budget bar, category filters and CSV export.',
    stack: 'HTML, CSS, JavaScript, SVG', demo: 'expense/index.html', code: me.github },
  { id: 'mindsnap', title: 'MindSnap', status: '2025', tags: ['Frontend'],
    desc: 'Quiz app with a timer, streaks, three difficulty levels and saved high scores.',
    stack: 'HTML, CSS, JavaScript, LocalStorage', demo: 'quiz/index.html', code: 'https://dev-priyanshu-tiwari.github.io/MindSnap/' },
  { id: 'flowstate', title: 'FlowState', status: '2025', tags: ['Frontend'],
    desc: 'Pomodoro timer with a progress ring, task list, custom sessions, sounds and daily stats.',
    stack: 'JavaScript, SVG, Web Audio API', demo: 'pomodoro/index.html', code: 'https://dev-priyanshu-tiwari.github.io/Pomodoro-Timer/' },
]

export const experience = [
  { when: 'Internship', title: 'Banaras Locomotive Works, Indian Railways', text: 'Full-stack MERN intern. Built an expenditure analysis dashboard.' },
  { when: 'Internship', title: '1M1B Foundation', text: 'Made Power BI dashboards from sustainability data and worked with GenAI tools.' },
  { when: 'Ongoing', title: 'KNOWVIA, The Quiz Club', text: 'Coordinator. I run quiz events and build the tools behind them: a results portal and automated participant emails.' },
  { when: '2024 – 2028', title: 'B.Tech, Computer Science & Engineering', text: 'Institute of Engineering & Technology, RMLAU, Ayodhya.' },
]

export const stack = [
  ['Frontend', ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS']],
  ['Backend', ['Node.js', 'Express', 'REST APIs']],
  ['Data', ['MongoDB Atlas', 'Supabase', 'SQL', 'Power BI']],
  ['Tools', ['Git', 'GitHub', 'Vercel', 'Google Apps Script', 'Python']],
]
