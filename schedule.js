const i18n = {
  en: {
    login: "Log in",
    logout: "Log out",
    divider: "or",
    getStarted: "Get started for free",
    welcomeBack: name => `Hi, ${name}! Glad to see you again.`,
    loginTitle: "Sign in",
    registerTitle: "Create account",
    resetTitle: "Reset password",

    email: "EMAIL",
    password: "PASSWORD",
    confirmPassword: "CONFIRM PASSWORD",

    continueGoogle: "Continue with Google",
    forgotPassword: "Forgot password?",
    noAccount: "No account?",
    createAccount: "Create account",
    haveAccount: "Already have an account?",
    resetPassword: "Reset password",
    cancelReset: "Cancel",

    heroTitle: "Turn your ideas into reality",
    heroSubtitle:
      "The planner helps you organize your work, manage projects, and collaborate with your team.",

    footerTitle: "Start simple.\nWrite your first task.",
    exploreTemplates: "Explore all templates",

    products: "Products",
    solutions: "Solutions",
    community: "Community",
    resources: "Resources",
    about: "About",

    notifications: {
      fillAll: "Please fill in all fields",
      passwordsMismatch: "Passwords do not match",
      userExists: "User with this email already exists",
      registerSuccess: name => `Registration successful! Hi, ${name}!`,
      loginError: "Incorrect email or password",
      loginSuccess: name => `Login successful! Hi, ${name}!`,
      loggedOut: "You have logged out",
      resetSent: "Password reset email has been sent"
    },

    profile: {
      title: "My Profile",
      nameLabel: "Profile Name",
      namePlaceholder: "Enter name",
      registrationDate: "Registration Date",
      language: "Interface Language",
      theme: "Interface Theme",
      themeDark: "Dark",
      themeLight: "Light",
      saveChanges: "Save changes",
      profileUpdated: "Profile updated!",
      enterName: "Enter profile name",
      totalTasks: "Total Tasks",
      completed: "Completed",
      productivity: "Productivity",
      myProfile: "My Profile",
      ukrainian: "Ukrainian",
      english: "English"
    },

    menu: {
      myProfile: "My Profile",
      logout: "Log Out"
    },

    sidebar: {
      home: "Home",
      planner: "Planner",
      ai: "AI",
      teams: "Teams",
      more: "More",
      invite: "Invite",
      upgrade: "Upgrade"
    },

    views: {
      list: "List",
      calendar: "Calendar",
      dashboard: "Dashboard"
    },

    table: {
      name: "Name",
      dueDate: "Due date",
      priority: "Priority",
      status: "Status",
      comments: "Comments",
      addTask: "Add task"
    },

    priorities: {
      urgent: "Urgent",
      high: "High",
      normal: "Normal",
      low: "Low",
      clear: "Clear"
    },

    statuses: {
      done: "DONE",
      inProgress: "IN PROGRESS",
      todo: "TO DO"
    },

    taskActions: {
      rename: "Rename",
      duplicate: "Duplicate",
      delete: "Delete",
      taskType: "Task Type",
      save: "Save",
      cancel: "Cancel",
      clear: "Clear"
    },

    dashboard: {
      title: "Dashboard Overview",
      subtitle: "Review of your projects and tasks",
      totalTasks: "Total Tasks",
      inProgress: "In Progress",
      completed: "Completed",
      productivity: "Productivity",
      progressTitle: "Task Progress",
      prioritiesTitle: "Priorities",
      recentTitle: "Recent Tasks",
      todoStatus: "TO DO",
      inProgressStatus: "IN PROGRESS",
      doneStatus: "DONE",
      noTasksYet: "No tasks yet. Create your first task!",
      now: "Now"
    },

    calendar: {
      addTask: "Add Task for Date",
      selectDate: "Select Date",
      tasksForDate: "Tasks for",
      noTasks: "No tasks for this date",
      addPlan: "Plan added!",
      enterTitle: "Enter task title",
      dateUpdated: "Date updated",
      dateRemoved: "Date removed",
      noDate: "✕ No date",
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      addTaskBtn: "+ Add plan",
      modalTitle: "Add Plan",
      noDateSelected: "No date selected",
      taskNamePlaceholder: "TASK NAME",
      descriptionPlaceholder: "DESCRIPTION (optional)",
      priorityLabel: "Priority:",
      noPriority: "No priority",
      emptyStateText: "Select a date to see planned tasks",
      saveBtn: "Save"
    },

    ai: {
      greeting: "👋 Hello! I'm your AI planning assistant.",
      howCanHelp: "How can I help you today? 😊",
      noTasks: "You don't have any tasks yet. Create your first task by clicking the 'Add Task' button!",
      taskAnalysis: "📊 Task Analysis:",
      totalTasks: "📋 Total tasks:",
      inProgress: "🔄 In progress:",
      planned: "📝 Planned:",
      completed: "✅ Completed:",
      recommendations: "💡 Recommendations:",
      manyInProgress: "⚠️ You have many tasks in progress",
      focusRecommendation: "I recommend focusing on 2-3 important tasks.",
      setPriorities: "🎯 Set priorities for",
      tasks: "tasks. Use the Priority column.",
      startWithImportant: "⏰ Start the day with the most important task",
      setReminders: "🔔 Set reminders for urgent tasks",
      markCompleted: "🎉 Don't forget to mark completed tasks!",
      goodQuestion: "🤔 Good question! Here's what I can do for you:",
      analyzeCommand: "💬 'Analyze my tasks' - show statistics",
      planDay: "⏰ 'Plan the day' - create schedule",
      howToPrioritize: "🎯 'How to prioritize' - explain system",
      giveTips: "💡 'Give tips' - share productivity hacks",
      helpCommand: "❓ 'Help' - show all commands",
      justAsk: "Just write the command in your own words! 😊",
      great: "👌 Great! Just let me know if you need anything.",
      happyToHelp: "😊 Always happy to help!",
      imHere: "👌 Okay, I'm here if you need me.",
      gladYouLiked: "😄 Glad you liked it!",
      iAmAssistant: "🤖 I'm an AI assistant that helps:",
      planDay2: "⏰ plan your day",
      setPriorities2: "🎯 set priorities",
      workProductively: "📊 work more productively"
    },

    languageChanged: "Language changed to English",
    themeChanged: "Theme changed successfully"
  },

  ua: {
    login: "Увійти",
    logout: "Вийти",
    divider: "або",
    getStarted: "Почати безкоштовно",
    welcomeBack: name => `Привіт, ${name}! Раді бачити вас знову.`,
    loginTitle: "Увійти в акаунт",
    registerTitle: "Створити акаунт",
    resetTitle: "Скинути пароль",

    email: "ЕЛЕКТРОННА ПОШТА",
    password: "ПАРОЛЬ",
    confirmPassword: "ПІДТВЕРДІТЬ ПАРОЛЬ",

    continueGoogle: "Продовжити з Google",
    forgotPassword: "Забули пароль?",
    noAccount: "Немає акаунту?",
    createAccount: "Створити акаунт",
    haveAccount: "Вже є акаунт?",
    resetPassword: "Скинути пароль",
    cancelReset: "Скасувати",

    heroTitle: "Перетвори свої ідеї в реальність",
    heroSubtitle:
      "Планувальник допоможе організувати роботу, керувати проєктами та співпрацювати з командою.",

    footerTitle: "Почни з простого.\nНапиши своє перше завдання.",
    exploreTemplates: "Переглянути всі шаблони",

    products: "Продукти",
    solutions: "Рішення",
    community: "Спільнота",
    resources: "Ресурси",
    about: "Про нас",

    notifications: {
      fillAll: "Будь ласка, заповніть всі поля",
      passwordsMismatch: "Паролі не співпадають",
      userExists: "Користувач з таким email вже існує",
      registerSuccess: name => `Реєстрація успішна! Привіт, ${name}!`,
      loginError: "Неправильний email або пароль",
      loginSuccess: name => `Вхід виконано! Привіт, ${name}!`,
      loggedOut: "Ви успішно вийшли з акаунту",
      resetSent: "На вашу пошту відправлено лист для скидання пароля"
    },

    profile: {
      title: "Мій профіль",
      nameLabel: "Ім'я профілю",
      namePlaceholder: "Введіть ім'я",
      registrationDate: "Дата реєстрації",
      language: "Мова інтерфейсу",
      theme: "Тема інтерфейсу",
      themeDark: "Темна",
      themeLight: "Світла",
      saveChanges: "Зберегти зміни",
      profileUpdated: "Профіль оновлено!",
      enterName: "Введіть ім'я профілю",
      totalTasks: "Всього завдань",
      completed: "Виконано",
      productivity: "Продуктивність",
      myProfile: "Мій профіль",
      ukrainian: "Українська",
      english: "English"
    },

    menu: {
      myProfile: "Мій профіль",
      logout: "Вийти"
    },

    sidebar: {
      home: "Головна",
      planner: "Планувальник",
      ai: "AI",
      teams: "Команди",
      more: "Більше",
      invite: "Запросити",
      upgrade: "Покращити"
    },

    views: {
      list: "Список",
      calendar: "Календар",
      dashboard: "Дашборд"
    },

    table: {
      name: "Назва",
      dueDate: "Дата",
      priority: "Пріоритет",
      status: "Статус",
      comments: "Коментарі",
      addTask: "Додати завдання"
    },

    priorities: {
      urgent: "Терміново",
      high: "Високий",
      normal: "Звичайний",
      low: "Низький",
      clear: "Очистити"
    },

    statuses: {
      done: "ВИКОНАНО",
      inProgress: "В ПРОЦЕСІ",
      todo: "ЗРОБИТИ"
    },

    taskActions: {
      rename: "Перейменувати",
      duplicate: "Дублювати",
      delete: "Видалити",
      taskType: "Тип завдання",
      save: "Зберегти",
      cancel: "Скасувати",
      clear: "Очистити"
    },

    dashboard: {
      title: "Огляд панелі",
      subtitle: "Огляд ваших проєктів та завдань",
      totalTasks: "Всього завдань",
      inProgress: "У процесі",
      completed: "Завершено",
      productivity: "Продуктивність",
      progressTitle: "Прогрес завдань",
      prioritiesTitle: "Пріоритети",
      recentTitle: "Останні завдання",
      todoStatus: "ЗРОБИТИ",
      inProgressStatus: "У ПРОЦЕСІ",
      doneStatus: "ВИКОНАНО",
      noTasksYet: "Поки немає завдань. Створіть своє перше завдання!",
      now: "Зараз"
    },

    calendar: {
      addTask: "Додати завдання на дату",
      selectDate: "Виберіть дату",
      tasksForDate: "Завдання на",
      noTasks: "Немає завдань на цю дату",
      addPlan: "План додано!",
      enterTitle: "Введіть назву завдання",
      dateUpdated: "Дата оновлена",
      dateRemoved: "Дату видалено",
      noDate: "✕ Без дати",
      weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
      addTaskBtn: "+ Додати план",
      modalTitle: "Додати план",
      noDateSelected: "Дата не вибрана",
      taskNamePlaceholder: "НАЗВА ЗАВДАННЯ",
      descriptionPlaceholder: "ОПИС (необов'язково)",
      priorityLabel: "Пріоритет:",
      noPriority: "Без пріоритету",
      emptyStateText: "Виберіть дату, щоб побачити заплановані справи",
      saveBtn: "Зберегти"
    },

    ai: {
      greeting: "👋 Привіт! Я твій AI асистент для планування.",
      howCanHelp: "Чим можу допомогти сьогодні? 😊",
      noTasks: "У вас поки немає завдань. Створіть своє перше завдання, натиснувши кнопку 'Додати завдання'!",
      taskAnalysis: "📊 Аналіз ваших завдань:",
      totalTasks: "📋 Всього завдань:",
      inProgress: "🔄 У процесі:",
      planned: "📝 Заплановано:",
      completed: "✅ Завершено:",
      recommendations: "💡 Рекомендації:",
      manyInProgress: "⚠️ У вас багато завдань у процесі",
      focusRecommendation: "Рекомендую зосередитися на 2-3 важливих завданнях.",
      setPriorities: "🎯 Розставте пріоритети для",
      tasks: "завдань. Використовуйте колонку Priority.",
      startWithImportant: "⏰ Почніть день з найважливішого завдання",
      setReminders: "🔔 Встановіть нагадування для термінових завдань",
      markCompleted: "🎉 Не забувайте відмічати завершені завдання!",
      goodQuestion: "🤔 Гарне питання! Ось що я можу для вас зробити:",
      analyzeCommand: "💬 'Проаналізуй мої завдання' - покажу статистику",
      planDay: "⏰ 'Розподіли завдання на день' - складу розклад",
      howToPrioritize: "🎯 'Як розставити пріоритети' - поясню систему",
      giveTips: "💡 'Дай поради' - поділюся лайфхаками",
      helpCommand: "❓ 'Допомога' - покажу всі команди",
      justAsk: "Просто напишіть команду своїми словами! 😊",
      great: "👌 Чудово! Якщо щось знадобиться — просто напиши.",
      happyToHelp: "😊 Завжди радий допомогти!",
      imHere: "👌 Добре, я тут, якщо що.",
      gladYouLiked: "😄 Радію, що тобі зайшло!",
      iAmAssistant: "🤖 Я AI асистент, який допомагає:",
      planDay2: "⏰ планувати день",
      setPriorities2: "🎯 розставляти пріоритети",
      workProductively: "📊 працювати продуктивніше"
    },

    languageChanged: "Мову змінено на українську",
    themeChanged: "Тему успішно змінено"
  }
};

i18n.uk = i18n.ua;

function applyFullLanguage(lang) {
  const t = i18n[lang] || i18n['uk'];
  localStorage.setItem('site_lang', lang);
  
  const setTextSafe = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  };
  
  const setPlaceholderSafe = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) el.placeholder = text;
  };

  setTextSafe('.login', t.login);
  
  document.querySelectorAll('.btn-start .text, .hero-btn .text')
    .forEach(el => el.textContent = t.getStarted);

  setTextSafe('.hero-title', t.heroTitle);
  setTextSafe('.hero-subtitle', t.heroSubtitle);

  setTextSafe('.modal-overlay-log h2', t.loginTitle);
  setTextSafe('.modal-overlay-start h2', t.registerTitle);
  setTextSafe('.reset-password h2', t.resetTitle);

  setPlaceholderSafe('#loginEmail', t.email);
  setPlaceholderSafe('#loginPassword', t.password);
  setPlaceholderSafe('#regEmail', t.email);
  setPlaceholderSafe('#regPassword', t.password);
  setPlaceholderSafe('#regConfirmPassword', t.confirmPassword);
  setPlaceholderSafe('#resetEmail', t.email);

  setTextSafe('#resetPasswordLink', t.forgotPassword);
  setTextSafe('#switchToLogin', t.login);
  setTextSafe('#cancelReset', t.cancelReset);
  setTextSafe('#loginButton .txt', t.login);
  setTextSafe('#registerButton .txt', t.createAccount);
  setTextSafe('#resetPasswordButton .txt', t.resetPassword);

  const preTextLog = document.querySelector('.pre-link-text-log');
  if (preTextLog) preTextLog.textContent = t.noAccount;
  
  const preTextStart = document.querySelector('.pre-link-text-start');
  if (preTextStart) preTextStart.textContent = t.haveAccount;
  
  setTextSafe('#switchToRegister', t.createAccount);
  setTextSafe('#products', t.products);
  setTextSafe('#solutions', t.solutions);
  setTextSafe('#community', t.community);
  setTextSafe('#resources', t.resources);
  setTextSafe('#about', t.about);
  
  setTextSafe('#ort-reg', t.divider);
  setTextSafe('#ort-log', t.divider);

  document.querySelectorAll('.google-btn')
    .forEach(btn => {
      if (btn.childNodes[2]) btn.childNodes[2].nodeValue = ' ' + t.continueGoogle;
    });

  const footerTitle = document.querySelector('.footer-title');
  if (footerTitle) footerTitle.innerHTML = t.footerTitle.replace('\n', '<br>');
  
  const footerBtnText = document.querySelector('.footer-btn .text');
  if (footerBtnText) footerBtnText.textContent = t.exploreTemplates;

  setTextSafe('.dark-title', t.profile?.title || 'Profile');
  const profileLabels = document.querySelectorAll('.profile-label');
  if (profileLabels[0]) profileLabels[0].textContent = t.profile?.nameLabel || 'Profile Name';
  if (profileLabels[1]) profileLabels[1].textContent = t.profile?.registrationDate || 'Registration Date';
  if (profileLabels[2]) profileLabels[2].textContent = t.profile?.language || 'Language';
  if (profileLabels[3]) profileLabels[3].textContent = t.profile?.theme || 'Theme';
  
  setPlaceholderSafe('#profileNameInput', t.profile?.namePlaceholder || 'Enter name');
  setTextSafe('#saveProfileBtn .txt', t.profile?.saveChanges || 'Save changes');

  const statsLabels = document.querySelectorAll('.profile-stat-label');
  if (statsLabels[0]) statsLabels[0].textContent = t.profile?.totalTasks || 'Total Tasks';
  if (statsLabels[1]) statsLabels[1].textContent = t.profile?.completed || 'Completed';
  if (statsLabels[2]) statsLabels[2].textContent = t.profile?.productivity || 'Productivity';

  const openProfileBtn = document.querySelector('#openProfileBtn .menu-text');
  if (openProfileBtn) openProfileBtn.textContent = t.profile?.myProfile || 'My Profile';

  const logoutMenuItem = document.querySelector('#logoutBtn .menu-text');
  if (logoutMenuItem) logoutMenuItem.textContent = t.menu?.logout || 'Log Out';

  setTextSafe('#sidebarHome', t.sidebar?.home || 'Home');
  setTextSafe('#sidebarPlanner', t.sidebar?.planner || 'Planner');
  setTextSafe('#sidebarAI', t.sidebar?.ai || 'AI');
  setTextSafe('#sidebarTeams', t.sidebar?.teams || 'Teams');
  setTextSafe('#sidebarMore', t.sidebar?.more || 'More');
  setTextSafe('#sidebarInvite', t.sidebar?.invite || 'Invite');
  setTextSafe('#sidebarUpgrade', t.sidebar?.upgrade || 'Upgrade');
  setTextSafe('#breadcrumbsHome', t.sidebar?.home || 'Home');

  const languageOptions = document.querySelectorAll('.language-option');
  languageOptions.forEach(option => {
    const langName = option.querySelector('.lang-name');
    if (option.dataset.lang === 'uk' && langName) {
      langName.textContent = t.profile?.ukrainian || 'Ukrainian';
    } else if (option.dataset.lang === 'en' && langName) {
      langName.textContent = t.profile?.english || 'English';
    }
  });

  const selectedLangName = document.getElementById('selectedLangName');
  if (selectedLangName && lang === 'uk') {
    selectedLangName.textContent = t.profile?.ukrainian || 'Ukrainian';
  } else if (selectedLangName && lang === 'en') {
    selectedLangName.textContent = t.profile?.english || 'English';
  }

  const themeOptions = document.querySelectorAll('.theme-option');
  themeOptions.forEach(option => {
    const themeName = option.querySelector('.theme-name');
    if (option.dataset.theme === 'dark' && themeName) {
      themeName.textContent = t.profile?.themeDark || 'Dark';
    } else if (option.dataset.theme === 'light' && themeName) {
      themeName.textContent = t.profile?.themeLight || 'Light';
    }
  });

  const currentTheme = localStorage.getItem('site_theme') || 'dark';
  const selectedThemeName = document.getElementById('selectedThemeName');
  if (selectedThemeName) {
    selectedThemeName.textContent = currentTheme === 'dark' 
      ? (t.profile?.themeDark || 'Dark')
      : (t.profile?.themeLight || 'Light');
  }

  const viewTabs = document.querySelectorAll('.view-tab');
  if (viewTabs[0]) {
    const listText = viewTabs[0].childNodes[1];
    if (listText) listText.nodeValue = ' ' + (t.views?.list || 'List');
  }
  if (viewTabs[1]) {
    const calText = viewTabs[1].childNodes[1];
    if (calText) calText.nodeValue = ' ' + (t.views?.calendar || 'Calendar');
  }
  if (viewTabs[2]) {
    const dashText = viewTabs[2].childNodes[1];
    if (dashText) dashText.nodeValue = ' ' + (t.views?.dashboard || 'Dashboard');
  }

  const tableHeaders = document.querySelectorAll('.table thead th');
  if (tableHeaders[0]) tableHeaders[0].textContent = t.table?.name || 'Name';
  if (tableHeaders[2]) tableHeaders[2].textContent = t.table?.dueDate || 'Due date';
  if (tableHeaders[3]) tableHeaders[3].textContent = t.table?.priority || 'Priority';
  if (tableHeaders[4]) tableHeaders[4].textContent = t.table?.status || 'Status';
  if (tableHeaders[5]) tableHeaders[5].textContent = t.table?.comments || 'Comments';

  const groupRows = document.querySelectorAll('.group-row');
  groupRows.forEach(row => {
    const status = row.dataset.status;
    const badge = row.querySelector('.group-badge');
    if (badge && status) {
      if (status === 'DONE') {
        badge.innerHTML = `<span class="group-dot dot-done"></span>${t.statuses?.done || 'DONE'}`;
      } else if (status === 'IN PROGRESS') {
        badge.innerHTML = `<span class="group-dot dot-progress"></span>${t.statuses?.inProgress || 'IN PROGRESS'}`;
      } else if (status === 'TO DO') {
        badge.innerHTML = `<span class="group-dot dot-todo"></span>${t.statuses?.todo || 'TO DO'}`;
      }
    }
  });

  document.querySelectorAll('.add-task-btn').forEach(btn => {
    btn.textContent = '+ ' + (t.table?.addTask || 'Add task');
  });

  document.querySelectorAll('.task-cancel').forEach(btn => {
    btn.textContent = t.taskActions?.cancel || 'Cancel';
  });

  document.querySelectorAll('.task-save').forEach(btn => {
    const arrow = btn.querySelector('.arrow');
    if (!arrow) {
      btn.textContent = (t.taskActions?.save || 'Save') + ' ↵';
    }
  });

  const weekdayElements = document.querySelectorAll('.calendar-weekdays .weekday');
  if (weekdayElements.length > 0 && t.calendar?.weekdays) {
    weekdayElements.forEach((el, index) => {
      if (t.calendar.weekdays[index]) {
        el.textContent = t.calendar.weekdays[index];
      }
    });
  }

  const addTaskForDateBtn = document.getElementById('addTaskForDateBtn');
  if (addTaskForDateBtn) {
    addTaskForDateBtn.innerHTML = `<span style="font-size: 20px; margin-right: 4px;">+</span> ${t.calendar?.addTaskBtn || '+ Add task'}`;
  }

  const dashboardTitle = document.querySelector('.dashboard-header h1');
  if (dashboardTitle) dashboardTitle.textContent = t.dashboard?.title || 'Dashboard Overview';
  
  const dashboardSubtitle = document.querySelector('.dashboard-subtitle');
  if (dashboardSubtitle) dashboardSubtitle.textContent = t.dashboard?.subtitle || 'Review of your projects and tasks';

  const statLabels = document.querySelectorAll('.stat-label');
  if (statLabels[0]) statLabels[0].textContent = t.dashboard?.totalTasks || 'Total Tasks';
  if (statLabels[1]) statLabels[1].textContent = t.dashboard?.inProgress || 'In Progress';
  if (statLabels[2]) statLabels[2].textContent = t.dashboard?.completed || 'Completed';
  if (statLabels[3]) statLabels[3].textContent = t.dashboard?.productivity || 'Productivity';

  const chartTitles = document.querySelectorAll('.chart-title');
  if (chartTitles[0]) chartTitles[0].textContent = t.dashboard?.progressTitle || 'Task Progress';
  if (chartTitles[1]) chartTitles[1].textContent = t.dashboard?.prioritiesTitle || 'Priorities';

  const progressLabels = document.querySelectorAll('.progress-label span:first-child');
  if (progressLabels[0]) progressLabels[0].textContent = t.dashboard?.todoStatus || 'TO DO';
  if (progressLabels[1]) progressLabels[1].textContent = t.dashboard?.inProgressStatus || 'IN PROGRESS';
  if (progressLabels[2]) progressLabels[2].textContent = t.dashboard?.doneStatus || 'DONE';

  const priorityBadges = document.querySelectorAll('.priority-badge');
  if (priorityBadges[0]) priorityBadges[0].textContent = `🔴 ${t.priorities?.urgent || 'Urgent'}`;
  if (priorityBadges[1]) priorityBadges[1].textContent = `🟡 ${t.priorities?.high || 'High'}`;
  if (priorityBadges[2]) priorityBadges[2].textContent = `🔵 ${t.priorities?.normal || 'Normal'}`;
  if (priorityBadges[3]) priorityBadges[3].textContent = `⚪ ${t.priorities?.low || 'Low'}`;

  const activityTitle = document.querySelector('.activity-title');
  if (activityTitle) activityTitle.textContent = t.dashboard?.recentTitle || 'Recent Tasks';

  setTextSafe('#dateTaskModalTitle', t.calendar?.modalTitle || 'Add Plan');
  setTextSafe('#selectedDateTitle', t.calendar?.selectDate || 'Select Date');
  
  const selectedDateDisplay = document.getElementById('selectedDateDisplay');
  if (selectedDateDisplay && (selectedDateDisplay.textContent === 'Дата не вибрана' || selectedDateDisplay.textContent === 'No date selected')) {
    selectedDateDisplay.textContent = t.calendar?.noDateSelected || 'No date selected';
  }
  
  setPlaceholderSafe('#taskTitleInput', t.calendar?.taskNamePlaceholder || 'TASK NAME');
  setPlaceholderSafe('#taskDescriptionInput', t.calendar?.descriptionPlaceholder || 'DESCRIPTION (optional)');
  
  const priorityLabel = document.querySelector('.option-label');
  if (priorityLabel) priorityLabel.textContent = t.calendar?.priorityLabel || 'Priority:';

  const priorityOptions = document.querySelectorAll('.priority-option');
  if (priorityOptions[0]) {
    const noPriorityText = priorityOptions[0].childNodes[1];
    if (noPriorityText) noPriorityText.nodeValue = ' ' + (t.calendar?.noPriority || 'No priority');
  }
  if (priorityOptions[1]) {
    const urgentText = priorityOptions[1].childNodes[1];
    if (urgentText) urgentText.nodeValue = ' ' + (t.priorities?.urgent || 'Urgent');
  }
  if (priorityOptions[2]) {
    const highText = priorityOptions[2].childNodes[1];
    if (highText) highText.nodeValue = ' ' + (t.priorities?.high || 'High');
  }
  if (priorityOptions[3]) {
    const normalText = priorityOptions[3].childNodes[1];
    if (normalText) normalText.nodeValue = ' ' + (t.priorities?.normal || 'Normal');
  }
  if (priorityOptions[4]) {
    const lowText = priorityOptions[4].childNodes[1];
    if (lowText) lowText.nodeValue = ' ' + (t.priorities?.low || 'Low');
  }

  setTextSafe('#saveDateTaskBtn .txt', t.calendar?.saveBtn || 'Save');

  const emptyStateText = document.querySelector('.empty-state p');
  if (emptyStateText && (emptyStateText.textContent.includes('обачити') || emptyStateText.textContent.includes('Select'))) {
    emptyStateText.textContent = t.calendar?.emptyStateText || 'Select a date to see planned tasks';
  }

  document.querySelectorAll('.status').forEach(statusEl => {
    const row = statusEl.closest('tr');
    if (row && row.dataset.status) {
      const status = row.dataset.status;
      if (status === 'DONE') {
        statusEl.textContent = t.statuses?.done || 'DONE';
      } else if (status === 'IN PROGRESS') {
        statusEl.textContent = t.statuses?.inProgress || 'IN PROGRESS';
      } else if (status === 'TO DO') {
        statusEl.textContent = t.statuses?.todo || 'TO DO';
      }
    } else {
      const status = statusEl.textContent.trim();
      if (status === 'DONE' || status === 'Виконано') {
        statusEl.textContent = t.statuses?.done || 'DONE';
      } else if (status === 'IN PROGRESS' || status === 'В процесі') {
        statusEl.textContent = t.statuses?.inProgress || 'IN PROGRESS';
      } else if (status === 'TO DO' || status === 'До виконання') {
        statusEl.textContent = t.statuses?.todo || 'TO DO';
      }
    }
  });

  document.querySelectorAll('.priority-label').forEach(priorityEl => {
    const priority = priorityEl.closest('.priority-btn')?.dataset.priority;
    if (priority) {
      if (priority === 'urgent') {
        priorityEl.textContent = t.priorities?.urgent || 'Urgent';
      } else if (priority === 'high') {
        priorityEl.textContent = t.priorities?.high || 'High';
      } else if (priority === 'normal') {
        priorityEl.textContent = t.priorities?.normal || 'Normal';
      } else if (priority === 'low') {
        priorityEl.textContent = t.priorities?.low || 'Low';
      } else {
        priorityEl.textContent = '';
      }
    }
  });

  document.querySelectorAll('.priority-badge-small').forEach(badge => {
    const priority = badge.className.includes('urgent') ? 'urgent' :
                     badge.className.includes('high') ? 'high' :
                     badge.className.includes('normal') ? 'normal' :
                     badge.className.includes('low') ? 'low' : null;
    if (priority) {
      if (priority === 'urgent') {
        badge.textContent = t.priorities?.urgent || 'Urgent';
      } else if (priority === 'high') {
        badge.textContent = t.priorities?.high || 'High';
      } else if (priority === 'normal') {
        badge.textContent = t.priorities?.normal || 'Normal';
      } else if (priority === 'low') {
        badge.textContent = t.priorities?.low || 'Low';
      }
    }
  });

  document.querySelectorAll('.status-item').forEach(item => {
    const status = item.dataset.status;
    if (status === 'DONE') {
      const textNode = item.childNodes[1];
      if (textNode && textNode.nodeType === 3) {
        textNode.nodeValue = ' ' + (t.statuses?.done || 'DONE');
      }
    } else if (status === 'IN PROGRESS') {
      const textNode = item.childNodes[1];
      if (textNode && textNode.nodeType === 3) {
        textNode.nodeValue = ' ' + (t.statuses?.inProgress || 'IN PROGRESS');
      }
    } else if (status === 'TO DO') {
      const textNode = item.childNodes[1];
      if (textNode && textNode.nodeType === 3) {
        textNode.nodeValue = ' ' + (t.statuses?.todo || 'TO DO');
      }
    }
  });

  document.querySelectorAll('.activity-time').forEach(activityTime => {
    const text = activityTime.textContent;
    if (text.includes('DONE') || text.includes('Виконано')) {
      activityTime.textContent = text.replace(/DONE|Виконано/g, t.statuses?.done || 'DONE');
    }
    if (text.includes('IN PROGRESS') || text.includes('В процесі')) {
      activityTime.textContent = text.replace(/IN PROGRESS|В процесі/g, t.statuses?.inProgress || 'IN PROGRESS');
    }
    if (text.includes('TO DO') || text.includes('До виконання')) {
      activityTime.textContent = text.replace(/TO DO|До виконання/g, t.statuses?.todo || 'TO DO');
    }
    if (text.includes('Urgent') || text.includes('Терміново')) {
      activityTime.textContent = text.replace(/Urgent|Терміново/g, t.priorities?.urgent || 'Urgent');
    }
    if (text.includes('High') || text.includes('Високий')) {
      activityTime.textContent = text.replace(/High|Високий/g, t.priorities?.high || 'High');
    }
    if (text.includes('Normal') || text.includes('Звичайний')) {
      activityTime.textContent = text.replace(/Normal|Звичайний/g, t.priorities?.normal || 'Normal');
    }
    if (text.includes('Low') || text.includes('Низький')) {
      activityTime.textContent = text.replace(/Low|Низький/g, t.priorities?.low || 'Low');
    }
  });

  const calendarView = document.getElementById('calendarView');
  if (calendarView && calendarView.style.display !== 'none') {
    const selectedDateTitle = document.getElementById('selectedDateTitle');
    if (selectedDateTitle && selectedDateTitle.textContent !== (t.calendar?.selectDate || 'Select Date')) {
      const dateStr = selectedDateTitle.getAttribute('data-date');
      if (dateStr && window.displayTasksForDate) {
        window.displayTasksForDate(dateStr);
      }
    }
    if (window.renderCalendar) {
      window.renderCalendar();
    }
  }

  setTimeout(() => {
    if (window.updateDashboardStats) {
      window.updateDashboardStats();
    }
  }, 100);
}

function applyLang(lang) {
  applyFullLanguage(lang);
}

(function(){
  function $(sel){ return document.querySelector(sel); }
  function $all(sel){ return Array.from(document.querySelectorAll(sel)); }

  function showNotification(message, type = 'info') {
    const container = $('#notificationContainer');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    
    const icons = {
      success: '✓',
      error: '✕',
      info: 'ℹ'
    };

    notification.innerHTML = `
      <div class="custom-notification-icon">${icons[type] || icons.info}</div>
      <div class="custom-notification-message">${message}</div>
      <div class="custom-notification-close">✕</div>
    `;

    container.appendChild(notification);

    const closeBtn = notification.querySelector('.custom-notification-close');
    closeBtn.addEventListener('click', () => {
      notification.classList.add('removing');
      setTimeout(() => notification.remove(), 300);
    });

    setTimeout(() => {
      if (notification.parentElement) {
        notification.classList.add('removing');
        setTimeout(() => notification.remove(), 300);
      }
    }, 4000);
  }

  window.showNotification = showNotification;

  let quickCalendarDate = new Date(); 
  let activeTaskIdForQuickDate = null;

  let currentCalendarDate = new Date();
  let activeTaskIdForDate = null;

  let selectedDate = null;
  let selectedDateForTask = null;

  const monthNames = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    ua: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
    uk: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
  };

  function renderQuickCalendarContent() {
    const grid = document.getElementById('quickCalendarGrid');
    const title = document.getElementById('quickMonthTitle');
    if (!grid || !title) return;

    const year = quickCalendarDate.getFullYear();
    const month = quickCalendarDate.getMonth();
    const lang = localStorage.getItem('site_lang') || 'uk';
    const t = i18n[lang];
    
    title.textContent = `${monthNames[lang][month]} ${year}`;

    grid.innerHTML = '';

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    let startDay = firstDay.getDay(); 
    startDay = startDay === 0 ? 6 : startDay - 1;

    const prevLastDay = new Date(year, month, 0).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
        const div = document.createElement('div');
        div.className = 'quick-day other-month';
        div.textContent = prevLastDay - i;
        grid.appendChild(div);
    }

    const today = new Date();
    for (let d = 1; d <= lastDay.getDate(); d++) {
        const div = document.createElement('div');
        const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
        
        const user = getCurrentUserData();
        const currentTask = user.tasks.find(t => t.id === activeTaskIdForQuickDate);
        const isSelected = currentTask && currentTask.date === `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

        div.className = `quick-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`;
        div.textContent = d;
        
        div.onclick = () => {
            const selectedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            applyDateToTask(selectedDate);
        };
        grid.appendChild(div);
    }

    let picker = document.getElementById('quickDatePicker');
    let footer = picker.querySelector('.quick-calendar-footer');

    if (!footer) {
        footer = document.createElement('div');
        footer.className = 'quick-calendar-footer';
        picker.appendChild(footer);
    }

     footer.innerHTML = `<button class="clear-date-btn" type="button">${t.calendar?.noDate || '✕ No date'}</button>`;
         footer.querySelector('.clear-date-btn').onclick = (e) => {
         e.stopPropagation();
         applyDateToTask(null);
     };
  }

  function statusClass(s) {
    return s === 'DONE' ? 'done' : s === 'IN PROGRESS' ? 'progress' : 'todo';
  }

  function dotClass(s) {
    return s === 'DONE' ? 'dot-done' : s === 'IN PROGRESS' ? 'dot-progress' : 'dot-todo';
  }

  function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  function getCurrentUser() {
    return localStorage.getItem('currentUser');
  }

  function getCurrentUserData() {
    const email = getCurrentUser();
    const users = getUsers();
    return users.find(u => u.email === email);
  }

  function updateCurrentUserData(updateFn) {
    const users = getUsers();
    const email = getCurrentUser();
    const index = users.findIndex(u => u.email === email);
    if (index === -1) return;

    updateFn(users[index]);
    saveUsers(users);
  }

function removeAllMenus() {
  document.querySelectorAll('.context-menu, .status-menu, .priority-menu').forEach(m => m.remove());
}

  function showContextMenu(e, taskId) {
    e.preventDefault();
    removeAllMenus();

    const currentLang = localStorage.getItem('site_lang') || 'uk';
    const t = i18n[currentLang];

    const menu = document.createElement('div');
    menu.className = 'context-menu';
    
    menu.style.top = `${e.pageY}px`;
    menu.style.left = `${e.pageX}px`;

    menu.innerHTML = `
      <div class="menu-item" onclick="handleRename('${taskId}')">
        <span class="menu-icon"><img src="rename_icon.png" alt=""></span>
        <span class="menu-text">${t.taskActions?.rename || 'Rename'}</span>
      </div>
      
      <div class="menu-item sub-menu-trigger">
        <span class="menu-icon"><img src="type_icon.png" alt=""></span>
        <span class="menu-text">${t.taskActions?.taskType || 'Task Type'}</span>
        <span class="arrow-icon">▶</span>
      </div>
      
      <div class="menu-item" onclick="handleDuplicate('${taskId}')">
        <span class="menu-icon"><img src="duplicate_icon.png" alt=""></span>
        <span class="menu-text">${t.taskActions?.duplicate || 'Duplicate'}</span>
      </div>
      
      <div class="menu-item delete-item" onclick="handleDelete('${taskId}')">
        <span class="menu-icon"><img src="delete_icon.png" alt=""></span>
        <span class="menu-text">${t.taskActions?.delete || 'Delete'}</span>
      </div>
    `;

    document.body.appendChild(menu);

    const typeTrigger = menu.querySelector('.sub-menu-trigger');
    typeTrigger.onmouseenter = (e) => {
      console.log('Show task type options for:', taskId);
    };

    typeTrigger.onmouseenter = () => {
      showTaskTypeSubMenu(typeTrigger, taskId);
    };

    menu.querySelectorAll('.menu-item:not(.sub-menu-trigger)').forEach(item => {
      item.onmouseenter = () => {
        const sub = document.querySelector('.task-type-sub-menu');
        if (sub) sub.remove();
      };
    });
  }

  function showTaskTypeSubMenu(parentItem, taskId) {
    const oldSub = document.querySelector('.task-type-sub-menu');
    if (oldSub) oldSub.remove();

    const currentLang = localStorage.getItem('site_lang') || 'uk';
    const t = i18n[currentLang];

    const subMenu = document.createElement('div');
    subMenu.className = 'task-type-menu task-type-sub-menu';

    const rect = parentItem.getBoundingClientRect();

    subMenu.style.position = 'fixed';
    subMenu.style.top = `${rect.top}px`;
    subMenu.style.left = `${rect.left - 160}px`;

    const types = ['task', 'milestone', 'form', 'meeting'];
    
    subMenu.innerHTML = types.map(type => `
      <button class="task-type-sub-menu-btn" onclick="handleUpdateType('${taskId}', '${type}')">
        <span class="task-type-icon type-${type}"></span>
        ${t.taskTypes?.[type] || type.charAt(0).toUpperCase() + type.slice(1)}
      </button>
    `).join('');

    document.body.appendChild(subMenu);

    subMenu.onmouseleave = () => subMenu.remove();
  }

  function saveTask(task) {
    console.log('saveTask called', task);

    const user = getCurrentUser();
    console.log('currentUser', user);
    if (!user) {
      console.error('NO USER');
      showNotification('User not logged in', 'error');
      return;
    }

    updateCurrentUserData(user => {
      user.tasks.push(task);
    });
  }

  function updateTask(id, changes) {
    updateCurrentUserData(user => {
      const task = user.tasks.find(t => t.id === id);
      if (!task) return;
      Object.assign(task, changes);
    });
  }

  function saveUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({
      email,
      password,
      registeredAt: new Date().toISOString(),
      tasks: [],
      profile: {
        name: email.split('@')[0],
        avatarColor: null
      }
    });
    localStorage.setItem('users', JSON.stringify(users));
  }

  function findUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find(u => u.email === email && u.password === password);
  }

  function setCurrentUser(email) {
    localStorage.setItem('currentUser', email);
  }

  function logout() {
    localStorage.removeItem('currentUser');
  }

  function getEmailName(email) {
    return email.split('@')[0];
  }

  function restoreAddRow(row) {
    row.innerHTML = `<td colspan="7"><button class="add-task-btn">+ Add task</button></td>`;
    row.classList.remove('active');
    const input = row.querySelector('.task-name-input');
    if (input) input.value = '';

    const priorityBtn = row.querySelector('.priority-btn');
    if (priorityBtn) {
      setPriority(priorityBtn, 'none');
    }
  }

  function moveRowToGroup(row, status) {
    const tbody = document.querySelector('.table tbody');
    const group = tbody.querySelector(`.group-row[data-status="${status}"]`);
    if (!group) return;

    let insertBefore = group.nextElementSibling;
    while (
      insertBefore &&
      !insertBefore.classList.contains('group-row') &&
      !insertBefore.classList.contains('add-task-row')
    ) {
      insertBefore = insertBefore.nextElementSibling;
    }

    tbody.insertBefore(row, insertBefore);
  }

  function removeMenus() {
    document.querySelectorAll('.status-menu').forEach(m => m.remove());
  }

  function removeTypeMenu() {
    document.querySelectorAll('.task-type-menu').forEach(m => m.remove());
  }

  function removePriorityMenu() {
    document.querySelectorAll('.priority-menu').forEach(m => m.remove());
  }

  function renderCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const calendarTitle = document.getElementById('calendarTitle');
      
    if (!calendarGrid || !calendarTitle) return;

    const lang = localStorage.getItem('site_lang') || 'uk';
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();

    calendarTitle.textContent = `${monthNames[lang][month]} ${year}`;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);

    let firstDayOfWeek = firstDay.getDay();
    firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    const daysInMonth = lastDay.getDate();
    const daysInPrevMonth = prevLastDay.getDate();

    calendarGrid.innerHTML = '';

    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const dayEl = createDayElement(day, 'prev-month', year, month - 1);
      calendarGrid.appendChild(dayEl);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayEl = createDayElement(day, 'current-month', year, month);
      calendarGrid.appendChild(dayEl);
    }

    const totalCells = calendarGrid.children.length;
    const remainingCells = 42 - totalCells;
    for (let day = 1; day <= remainingCells; day++) {
      const dayEl = createDayElement(day, 'next-month', year, month + 1);
      calendarGrid.appendChild(dayEl);
    }
  }

  function createDayElement(day, className, year, month) {
    const dayEl = document.createElement('div');
    dayEl.className = `calendar-day ${className}`;
    dayEl.textContent = day;

    const dateStr = formatDate(new Date(year, month, day));
    dayEl.dataset.date = dateStr;

    const today = new Date();
    if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate() && className === 'current-month') {
      dayEl.classList.add('today');
    }

    if (selectedDate === dateStr) {
      dayEl.classList.add('selected');
    }

    const tasksForDate = getTasksForDate(dateStr);
    if (tasksForDate.length > 0 && className === 'current-month') {
      const badge = document.createElement('div');
      badge.className = 'task-count-badge';
      badge.textContent = tasksForDate.length;
      dayEl.appendChild(badge);
    }

    dayEl.addEventListener('click', () => {
      if (className === 'current-month') {
        selectDate(dateStr);
      } else if (className === 'prev-month') {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
        renderCalendar();
        selectDate(dateStr);
      } else if (className === 'next-month') {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
        renderCalendar();
        selectDate(dateStr);
      }
    });

    return dayEl;
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function selectDate(dateStr) {
    selectedDate = dateStr;
      
    document.querySelectorAll('.calendar-day').forEach(day => day.classList.remove('selected'));
    const selectedDay = document.querySelector(`[data-date="${dateStr}"]`);
    if (selectedDay) selectedDay.classList.add('selected');

    if (activeTaskIdForDate) {
        updateTask(activeTaskIdForDate, { date: dateStr });
          
        console.log(`Task ${activeTaskIdForDate} updated with date ${dateStr}`);
          
        document.getElementById('calendarPopup').style.display = 'none';
        activeTaskIdForDate = null;
    }

    displayTasksForDate(dateStr);
  }

  function getTasksForDate(dateStr) {
    const user = getCurrentUserData();
    if (!user || !user.tasks) return [];
      
    return user.tasks.filter(task => task.date === dateStr);
  }

  function displayTasksForDate(dateStr) {
    const selectedDateTitle = document.getElementById('selectedDateTitle');
    const dateTasksList = document.getElementById('dateTasksList');
    const addTaskForDateBtn = document.getElementById('addTaskForDateBtn');
      
    if (!selectedDateTitle || !dateTasksList || !addTaskForDateBtn) return;

    const date = new Date(dateStr);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const lang = localStorage.getItem('site_lang') || 'uk';
    const locale = lang === 'ua' || lang === 'uk' ? 'uk-UA' : 'en-US';
    const t = i18n[lang];
      
    selectedDateTitle.textContent = date.toLocaleDateString(locale, options);
    addTaskForDateBtn.style.display = 'flex';
    addTaskForDateBtn.innerHTML = `<span style="font-size: 20px; margin-right: 4px;">+</span> ${t.calendar?.addTaskBtn || '+ Add task'}`;

    const tasks = getTasksForDate(dateStr);
      
    if (tasks.length === 0) {
      const currentLang = localStorage.getItem('site_lang') || 'uk';
      const t = i18n[currentLang];
      dateTasksList.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📝</div>
          <p>${t.calendar?.noTasks || 'No tasks for this date'}</p>
        </div>
      `;
    } else {
      dateTasksList.innerHTML = tasks.map(task => {
        let statusText = task.status;
        if (task.status === 'DONE') {
          statusText = t.statuses?.done || 'DONE';
        } else if (task.status === 'IN PROGRESS') {
          statusText = t.statuses?.inProgress || 'IN PROGRESS';
        } else if (task.status === 'TO DO') {
          statusText = t.statuses?.todo || 'TO DO';
        }

        let priorityText = '';
        if (task.priority && task.priority !== 'none') {
          if (task.priority === 'urgent') {
            priorityText = t.priorities?.urgent || 'Urgent';
          } else if (task.priority === 'high') {
            priorityText = t.priorities?.high || 'High';
          } else if (task.priority === 'normal') {
            priorityText = t.priorities?.normal || 'Normal';
          } else if (task.priority === 'low') {
            priorityText = t.priorities?.low || 'Low';
          }
        }

        return `
        <div class="date-task-card" data-task-id="${task.id}">
          <div class="task-card-header">
            <div class="task-card-status">
              <span class="task-status-dot ${dotClass(task.status)} type-task"></span>
              <span class="task-card-title">${task.name}</span>
            </div>
            <button class="task-delete-btn" onclick="deleteTask('${task.id}')">✕</button>
          </div>
          ${task.description ? `<p class="task-card-description">${task.description}</p>` : ''}
          <div class="task-card-footer">
            <span class="status ${statusClass(task.status)}">${statusText}</span>
            ${priorityText ? `<span class="priority-badge-small ${task.priority}">${priorityText}</span>` : ''}
          </div>
        </div>
      `;
      }).join('');
    }
  }

  function attachStatusMenu(row) {
    const statusEl = row.querySelector('.status');
    if (!statusEl) return;

    statusEl.onclick = e => {
      e.stopPropagation();
      removeMenus();

      const currentLang = localStorage.getItem('site_lang') || 'uk';
      const t = i18n[currentLang] || i18n['uk'];

      const menu = document.createElement('div');
      menu.className = 'status-menu';
      menu.innerHTML = `
        <div class="status-item" data-status="TO DO"><span class="task-status-dot dot-todo type-task"></span> ${t.statuses?.todo || 'TO DO'}</div>
        <div class="status-item" data-status="IN PROGRESS"><span class="task-status-dot dot-progress type-task"></span> ${t.statuses?.inProgress || 'IN PROGRESS'}</div>
        <div class="status-item" data-status="DONE"><span class="task-status-dot dot-done type-task"></span> ${t.statuses?.done || 'DONE'}</div>
      `;

      document.body.appendChild(menu);
      const r = statusEl.getBoundingClientRect();
      menu.style.top = r.bottom + 6 + 'px';
      menu.style.left = r.left + 'px';

      menu.querySelectorAll('.status-item').forEach(item => {
        item.onclick = () => {
          setStatus(row, item.dataset.status);
          removeMenus();
        };
      });
    };
  }

  function setStatus(row, status) {
    const badge = row.querySelector('.status');
    const dot = row.querySelector('.task-status-dot');

    const currentLang = localStorage.getItem('site_lang') || 'uk';
    const t = i18n[currentLang] || i18n['uk'];

    let statusText = status;
    if (status === 'DONE') {
      statusText = t.statuses?.done || 'DONE';
    } else if (status === 'IN PROGRESS') {
      statusText = t.statuses?.inProgress || 'IN PROGRESS';
    } else if (status === 'TO DO') {
      statusText = t.statuses?.todo || 'TO DO';
    }

    badge.textContent = statusText;
    badge.className = 'status ' + statusClass(status);

    dot.classList.remove('dot-todo', 'dot-progress', 'dot-done');
    dot.classList.add(dotClass(status));

    moveRowToGroup(row, status);
    updateTask(row.dataset.id, { status });
  }

  function setTaskType(row, type) {
    const dot = row.querySelector('.task-status-dot');

    dot.classList.remove(
      'type-task',
      'type-milestone',
      'type-form',
      'type-meeting'
    );

    dot.classList.add(`type-${type}`);
    row.dataset.type = type;
  }

  function setPriority(cell, priority) {
    const img = cell.querySelector('img');
    const label = cell.querySelector('.priority-label');
    const row = cell.closest('tr');

    cell.dataset.priority = priority;

    const currentLang = localStorage.getItem('site_lang') || 'uk';
    const t = i18n[currentLang] || i18n['uk'];

    const map = {
      urgent: { icon: 'urgent_icon.png', text: t.priorities?.urgent || 'Urgent' },
      high:   { icon: 'high_icon.png',   text: t.priorities?.high || 'High' },
      normal: { icon: 'normal_icon.png', text: t.priorities?.normal || 'Normal' },
      low:    { icon: 'low_icon.png',    text: t.priorities?.low || 'Low' },
      none:   { icon: 'priority_icon.png', text: '' }
    };

    if (img) img.src = map[priority].icon;
    if (label) label.textContent = map[priority].text;

    if (row && row.dataset.id) {
    updateTask(row.dataset.id, { priority });
  }
  }

  function formatShortDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  function openCalendarForTask(taskId, targetElement) {
    activeTaskIdForDate = taskId;
    
    const calendarView = document.getElementById('calendarView'); 
    if (!calendarView) return;

    calendarView.style.display = 'flex'; 
    
    calendarView.style.position = 'fixed';
    calendarView.style.top = '50%';
    calendarView.style.left = '50%';
    calendarView.style.transform = 'translate(-50%, -50%)';
    calendarView.style.zIndex = '10000';

    if (typeof renderCalendar === 'function') {
        renderCalendar(); 
    }
  }

  function openQuickCalendar(taskId, targetElement) {
    activeTaskIdForQuickDate = taskId;
    const picker = document.getElementById('quickDatePicker');
    if (!picker) return;

    const rect = targetElement.getBoundingClientRect();
    picker.style.display = 'block';
    picker.style.top = `${rect.bottom + window.scrollY + 5}px`;
    picker.style.left = `${rect.left}px`;

    renderQuickCalendarContent();
  }

  function applyDateToTask(dateStr) {
    if (activeTaskIdForQuickDate) {
        updateTask(activeTaskIdForQuickDate, { date: dateStr });

        const row = document.querySelector(`tr[data-id="${activeTaskIdForQuickDate}"]`);
        if (row) {
            const dateBtn = row.querySelector('.date-btn');
            if (dateBtn) {
                if (dateStr) {
                    dateBtn.innerHTML = `<span class="date-text">${formatShortDate(dateStr)}</span>`;
                } else {
                    dateBtn.innerHTML = `<img src="date_icon.png">`;
                }
            }
        }

        if (typeof renderCalendar === 'function') {
            renderCalendar(); 
        }

        if (typeof showNotification === 'function') {
            const currentLang = localStorage.getItem('site_lang') || 'uk';
            const t = i18n[currentLang];
            showNotification(dateStr ? (t.calendar?.dateUpdated || 'Date updated') : (t.calendar?.dateRemoved || 'Date removed'), 'success');
        }
    }
    
    const picker = document.getElementById('quickDatePicker');
    if (picker) picker.style.display = 'none';
  }

  function createTaskRow(task) {
    const row = document.createElement('tr');
    row.dataset.id = task.id;
    row.dataset.status = task.status;

    const currentLang = localStorage.getItem('site_lang') || 'uk';
    const t = i18n[currentLang] || i18n['uk'];

    let statusText = task.status;
    if (task.status === 'DONE') {
      statusText = t.statuses?.done || 'DONE';
    } else if (task.status === 'IN PROGRESS') {
      statusText = t.statuses?.inProgress || 'IN PROGRESS';
    } else if (task.status === 'TO DO') {
      statusText = t.statuses?.todo || 'TO DO';
    }

    const dateHtml = task.date 
        ? `<span class="date-text">${formatShortDate(task.date)}</span>` 
        : `<img src="date_icon.png">`;

    row.innerHTML = `
      <td>
        <div class="name-cell">
          <span class="task-status-dot ${dotClass(task.status)} type-task"></span>
          ${task.name}
        </div>
      </td>
      <td class="icon-cell"></td>
      <td class="icon-cell date-btn">${dateHtml}</td>
      <td class="icon-cell priority-btn" data-priority="${task.priority || 'none'}">
        <img src="priority_icon.png">
        <span class="priority-label"></span>
      </td>
      <td><span class="status ${statusClass(task.status)}">${statusText}</span></td>
      <td class="icon-cell"><img src="comment_icon.png"></td>
      <td class="icon-cell">
        <button class="task-menu-btn" style="color: #666; background: none; border: none;">···</button>
      </td>
    `;
    return row;
  }

  function renderTask(task, addRow) {
    const row = createTaskRow(task);

    const dateBtn = row.querySelector('.date-btn');
    if (dateBtn) {
        dateBtn.onclick = (e) => {
            e.stopPropagation();
            openQuickCalendar(task.id, dateBtn); 
        };
    }

    if (addRow) {
      addRow.parentNode.insertBefore(row, addRow);
    }

    attachStatusMenu(row);
    setTaskType(row, task.type || 'task');

    const priorityCell = row.querySelector('.priority-btn');
    if (priorityCell) {
        setPriority(priorityCell, task.priority || 'none');
    }

    row.oncontextmenu = (e) => showContextMenu(e, task.id);
    
    const menuBtn = row.querySelector('.task-menu-btn');
    if (menuBtn) {
        menuBtn.onclick = (e) => {
            e.stopPropagation();
            showContextMenu(e, task.id);
        };
    }
  }

  function loadUserTasks() {
    const user = getCurrentUserData();
    if (!user || !user.tasks) return;

    document
      .querySelectorAll('.table tbody tr:not(.group-row):not(.add-task-row)')
      .forEach(r => r.remove());

    user.tasks.forEach(task => {
      const addRow = document.querySelector(
        `.add-task-row[data-status="${task.status}"]`
      );
      renderTask(task, addRow);
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site_lang') || 'uk';
    applyFullLanguage(savedLang);
    const header = $('.home-header');
    const modalLog = $('.modal-overlay-log');
    const modalStart = $('.modal-overlay-start');
    const modalReset = $('.reset-password');
    const btnStart = $('.btn-start');
    const btnHero = $('.hero-btn');
    const heroSection = $('.hero-section')
    const btnLogin = $('.login');
    const userInfo = $('#userInfo');
    const authButtons = $('#authButtons');
    const userName = $('#userName');
    const logoutBtn = $('#logoutBtn');
    const footer = $('.footer');
    const avatarLetter = document.getElementById('avatarLetter');
    const userAvatar = document.getElementById('userAvatar');

    function updateUIForUser() {
      const currentUser = getCurrentUser();
      const landing = document.getElementById('landingPage');
      const dashboard = document.getElementById('dashboardPage');

      if (currentUser) {
        landing.style.display = 'none';
        dashboard.style.display = 'flex';
        
        if (userInfo) {
          userInfo.style.display = 'flex';
          const userData = getCurrentUserData();
          const displayName = userData?.profile?.name || getEmailName(currentUser);
          
          if (userName) userName.textContent = displayName;
          if (avatarLetter && userAvatar) {
            avatarLetter.textContent = displayName[0].toUpperCase();
            const avatarColor = userData?.profile?.avatarColor || generateColor(displayName);
            userAvatar.style.background = avatarColor;
          }
        }
      } else {
        landing.style.display = 'flex';
        dashboard.style.display = 'none';
        if (userInfo) userInfo.style.display = 'none';
      }
    }

    function generateColor(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return `hsl(${hash % 360}, 55%, 45%)`;
    }

    const modalProfile = document.getElementById('modalProfile');
    const closeProfileModal = document.getElementById('closeProfileModal');
    const openProfileBtn = document.getElementById('openProfileBtn');
    const saveProfileBtn = document.getElementById('saveProfileBtn');

    function openProfileModal() {
      const user = getCurrentUserData();
      if (!user) return;

      const profileName = document.getElementById('profileName');
      const profileEmail = document.getElementById('profileEmail');
      const profileLetter = document.getElementById('profileLetter');
      const profileAvatarLarge = document.getElementById('profileAvatarLarge');
      const profileNameInput = document.getElementById('profileNameInput');
      const profileRegistered = document.getElementById('profileRegistered');
      
      const totalTasks = user.tasks ? user.tasks.length : 0;
      const completedTasks = user.tasks ? user.tasks.filter(t => t.status === 'DONE').length : 0;
      const productivity = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

      const displayName = user.profile?.name || user.email.split('@')[0];
      
      if (profileName) profileName.textContent = displayName;
      if (profileEmail) profileEmail.textContent = user.email;
      if (profileNameInput) profileNameInput.value = displayName;
      
      if (profileLetter && profileAvatarLarge) {
        profileLetter.textContent = displayName[0].toUpperCase();
        const color = user.profile?.avatarColor || generateColor(displayName);
        profileAvatarLarge.style.background = color;
      }

      if (profileRegistered && user.registeredAt) {
        const date = new Date(user.registeredAt);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const lang = localStorage.getItem('site_lang') || 'uk';
        const locale = lang === 'ua' || lang === 'uk' ? 'uk-UA' : 'en-US';
        profileRegistered.textContent = date.toLocaleDateString(locale, options);
      }

      document.getElementById('profileTotalTasks').textContent = totalTasks;
      document.getElementById('profileCompletedTasks').textContent = completedTasks;
      document.getElementById('profileProductivity').textContent = productivity + '%';

      openOverlay(modalProfile);
    }

    if (openProfileBtn) {
      openProfileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const userMenu = document.getElementById('userMenu');
        if (userMenu) userMenu.classList.remove('open');
        openProfileModal();
      });
    }

    if (closeProfileModal) {
      closeProfileModal.addEventListener('click', () => {
        closeOverlay(modalProfile);
      });
    }

    if (modalProfile) {
      modalProfile.addEventListener('click', (e) => {
        if (e.target === modalProfile) {
          closeOverlay(modalProfile);
        }
      });
    }

    if (saveProfileBtn) {
      saveProfileBtn.addEventListener('click', () => {
        const profileNameInput = document.getElementById('profileNameInput');
        const newName = profileNameInput?.value.trim();
        const currentLang = localStorage.getItem('site_lang') || 'uk';
        const t = i18n[currentLang];
        
        if (!newName) {
          showNotification(t.profile?.enterName || 'Enter profile name', 'error');
          return;
        }

        updateCurrentUserData(user => {
          if (!user.profile) user.profile = {};
          user.profile.name = newName;
          user.profile.avatarColor = generateColor(newName);
        });

        const user = getCurrentUserData();
        const userName = document.getElementById('userName');
        const avatarLetter = document.getElementById('avatarLetter');
        const userAvatar = document.getElementById('userAvatar');
        
        if (userName) userName.textContent = newName;
        if (avatarLetter) avatarLetter.textContent = newName[0].toUpperCase();
        if (userAvatar) userAvatar.style.background = generateColor(newName);

        closeOverlay(modalProfile);
        showNotification(t.profile?.profileUpdated || 'Profile updated!', 'success');
      });
    }

    const languageDropdownBtn = document.getElementById('languageDropdownBtn');
    const languageDropdownMenu = document.getElementById('languageDropdownMenu');
    const selectedLangFlag = document.getElementById('selectedLangFlag');
    const selectedLangName = document.getElementById('selectedLangName');

    if (languageDropdownBtn && languageDropdownMenu) {
      languageDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdownBtn.classList.toggle('open');
        languageDropdownMenu.classList.toggle('open');
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-dropdown')) {
          languageDropdownBtn.classList.remove('open');
          languageDropdownMenu.classList.remove('open');
        }
      });

      const languageOptions = document.querySelectorAll('.language-option');
      languageOptions.forEach(option => {
        option.addEventListener('click', () => {
          const selectedLang = option.dataset.lang;
          const flag = option.querySelector('.lang-flag').textContent;
          const name = option.querySelector('.lang-name').textContent;
          
          if (selectedLangFlag) selectedLangFlag.textContent = flag;
          if (selectedLangName) selectedLangName.textContent = name;
          
          languageDropdownBtn.classList.remove('open');
          languageDropdownMenu.classList.remove('open');
          
          applyFullLanguage(selectedLang);
          
          updateCurrentUserData(user => {
            if (!user.profile) user.profile = {};
            user.profile.language = selectedLang;
          });
          
          const aiChat = document.getElementById('aiChat');
          if (aiChat) {
            aiChat.innerHTML = '';
            initAIGreeting();
          }
          
          const t = i18n[selectedLang];
          showNotification(t.languageChanged || 'Language changed', 'success');
        });
      });
    }

    function initLanguageDropdown() {
      const user = getCurrentUserData();
      const currentLang = user?.profile?.language || localStorage.getItem('site_lang') || 'uk';
      const t = i18n[currentLang];
      
      const langData = {
        'uk': { flag: '🇺🇦', name: t.profile?.ukrainian || 'Українська' },
        'en': { flag: '🇬🇧', name: t.profile?.english || 'English' }
      };
      
      if (selectedLangFlag && selectedLangName && langData[currentLang]) {
        selectedLangFlag.textContent = langData[currentLang].flag;
        selectedLangName.textContent = langData[currentLang].name;
      }

      const languageOptions = document.querySelectorAll('.language-option');
      languageOptions.forEach(option => {
        const langName = option.querySelector('.lang-name');
        if (option.dataset.lang === 'uk' && langName) {
          langName.textContent = t.profile?.ukrainian || 'Українська';
        } else if (option.dataset.lang === 'en' && langName) {
          langName.textContent = t.profile?.english || 'English';
        }
      });
      
      applyFullLanguage(currentLang);
    }

    function initThemeDropdown() {
      const currentTheme = localStorage.getItem('site_theme') || 'dark';
      const currentLang = localStorage.getItem('site_lang') || 'uk';
      const t = i18n[currentLang];
      
      const themeData = {
        'dark': { icon: '🌙', name: t.profile?.themeDark || 'Dark' },
        'light': { icon: '☀️', name: t.profile?.themeLight || 'Light' }
      };
      
      const selectedThemeIcon = document.getElementById('selectedThemeIcon');
      const selectedThemeName = document.getElementById('selectedThemeName');
      
      if (selectedThemeIcon && selectedThemeName && themeData[currentTheme]) {
        selectedThemeIcon.textContent = themeData[currentTheme].icon;
        selectedThemeName.textContent = themeData[currentTheme].name;
      }

      const themeOptions = document.querySelectorAll('.theme-option');
      themeOptions.forEach(option => {
        const themeName = option.querySelector('.theme-name');
        if (option.dataset.theme === 'dark' && themeName) {
          themeName.textContent = t.profile?.themeDark || 'Dark';
        } else if (option.dataset.theme === 'light' && themeName) {
          themeName.textContent = t.profile?.themeLight || 'Light';
        }
      });
      
      applyTheme(currentTheme);
    }

    function applyTheme(theme) {
      if (theme === 'light') {
        document.body.classList.add('light-theme');
      } else {
        document.body.classList.remove('light-theme');
      }
      localStorage.setItem('site_theme', theme);
    }

    const themeDropdownBtn = document.getElementById('themeDropdownBtn');
    const themeDropdownMenu = document.getElementById('themeDropdownMenu');
    
    if (themeDropdownBtn && themeDropdownMenu) {
      themeDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        themeDropdownBtn.classList.toggle('open');
        themeDropdownMenu.classList.toggle('open');
      });

      const themeOptions = document.querySelectorAll('.theme-option');
      themeOptions.forEach(option => {
        option.addEventListener('click', () => {
          const selectedTheme = option.dataset.theme;
          const icon = option.querySelector('.theme-icon').textContent;
          const name = option.querySelector('.theme-name').textContent;
          
          const selectedThemeIcon = document.getElementById('selectedThemeIcon');
          const selectedThemeName = document.getElementById('selectedThemeName');
          
          if (selectedThemeIcon) selectedThemeIcon.textContent = icon;
          if (selectedThemeName) selectedThemeName.textContent = name;
          
          themeDropdownBtn.classList.remove('open');
          themeDropdownMenu.classList.remove('open');
          
          applyTheme(selectedTheme);
          
          updateCurrentUserData(user => {
            if (!user.profile) user.profile = {};
            user.profile.theme = selectedTheme;
          });
          
          const currentLang = localStorage.getItem('site_lang') || 'uk';
          const t = i18n[currentLang];
          showNotification(t.themeChanged || 'Theme changed', 'success');
        });
      });

      document.addEventListener('click', (e) => {
        if (!themeDropdownBtn.contains(e.target) && !themeDropdownMenu.contains(e.target)) {
          themeDropdownBtn.classList.remove('open');
          themeDropdownMenu.classList.remove('open');
        }
      });
    }

    if (modalProfile) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'style') {
            const display = modalProfile.style.display;
            if (display === 'flex') {
              initLanguageDropdown();
              initThemeDropdown();
            }
          }
        });
      });
      
      observer.observe(modalProfile, { attributes: true });
    }

    updateUIForUser(true);

    const savedTheme = localStorage.getItem('site_theme') || 'dark';
    applyTheme(savedTheme);

    const userEmail = getCurrentUser();
    if (userEmail) {
      loadUserTasks();
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        logout();
        updateUIForUser();
        const t = i18n[localStorage.getItem('site_lang') || 'en'];
        showNotification(t.notifications.loggedOut, 'info');
      });
    }

    try {
      if (header) header.style.display = 'flex';
      if (modalLog) modalLog.style.display = 'none';
      if (modalStart) modalStart.style.display = 'none';
      if (modalReset) modalReset.style.display = 'none';
    } catch(e){
      console.warn('init display error', e);
    }

    function openOverlay(overlay){
      if (!overlay) return;
      overlay.style.display = 'flex';
      const first = overlay.querySelector('input, button, a, [tabindex]'); 
      if (first) first.focus();
      document.body.style.overflow = 'hidden';
    }
    function closeOverlay(overlay){
      if (!overlay) return;
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }

    if (btnStart) {
      btnStart.addEventListener('click', (e) => {
        e.preventDefault();
        openOverlay(modalStart);
      });
    }
    if (btnHero) {
      btnHero.addEventListener('click', (e) => {
        e.preventDefault();
        openOverlay(modalStart);
      });
    }
    if (btnLogin) {
      btnLogin.addEventListener('click', (e) => {
        e.preventDefault();
        openOverlay(modalLog);
      });
    }

    $all('.close-btn').forEach(cb => {
      cb.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        if (!modal) return;
        const overlay = modal.closest('.modal-overlay-log') || modal.closest('.modal-overlay-start') || modal.closest('.reset-password');
        if (overlay) closeOverlay(overlay);
      });
    });

    [modalLog, modalStart, modalReset].forEach(ov => {
      if (!ov) return;
      ov.addEventListener('click', (e) => {
        if (e.target === ov) closeOverlay(ov);
      });
    });

    if (modalLog) {
      const resetLink = modalLog.querySelector('.dop-links a[href=""]') || Array.from(modalLog.querySelectorAll('a')).find(a => /reset/i.test(a.textContent));
      if (resetLink) {
        resetLink.addEventListener('click', (e) => {
          e.preventDefault();
          closeOverlay(modalLog);
          openOverlay(modalReset);
        });
      }
    }

    if (modalReset) {
      const cancelLink = modalReset.querySelector('.dop-links a[href=""]') || Array.from(modalReset.querySelectorAll('a')).find(a => /cancel/i.test(a.textContent));
      if (cancelLink) {
        cancelLink.addEventListener('click', (e) => {
          e.preventDefault();
          closeOverlay(modalReset);
        });
      }
    }

    $all('.modal .email-btn').forEach(b => {
      b.addEventListener('click', (e) => {
        const overlay = b.closest('.modal').closest('.modal-overlay-log') || b.closest('.modal').closest('.modal-overlay-start') || b.closest('.modal').closest('.reset-password');
        if (overlay) {
          setTimeout(()=> closeOverlay(overlay), 120);
        }
      });
    });

    const langBtn = $('.lang-btn');
    const dropdown = $('.lang-dropdown');
    const wrapper = $('.language-selector');

    if (langBtn && dropdown && wrapper) {
      langBtn.setAttribute('aria-haspopup','listbox');
      langBtn.setAttribute('aria-expanded','false');

      function toggleLang(){
        const shown = dropdown.classList.toggle('show');
        langBtn.setAttribute('aria-expanded', shown ? 'true' : 'false');
        const arrow = langBtn.querySelector('.arrow');
        if (arrow) arrow.style.transform = shown ? 'rotate(180deg)' : '';
        if (shown) {
          const first = dropdown.querySelector('li');
          if (first) first.focus();
        } else {
          langBtn.focus();
        }
      }

      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLang();
      });

      langBtn.addEventListener('keydown', (e) => {
        if (['ArrowDown','Enter',' '].includes(e.key)) {
          e.preventDefault();
          toggleLang();
        } else if (e.key === 'Escape') {
          dropdown.classList.remove('show');
          langBtn.setAttribute('aria-expanded','false');
          langBtn.focus();
        }
      });

      dropdown.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (!li) return;
        const lang = li.dataset.lang;
        if (lang) {
            langBtn.childNodes[0].nodeValue = '🌐 ' + li.textContent + ' ';
            try { localStorage.setItem('site_lang', lang); } catch(e){}
            
            applyLang(lang);
        }
        dropdown.classList.remove('show');
        langBtn.setAttribute('aria-expanded','false');
        const arrow = langBtn.querySelector('.arrow');
        if (arrow) arrow.style.transform = '';
      });

      document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) {
          dropdown.classList.remove('show');
          langBtn.setAttribute('aria-expanded','false');
          const arrow = langBtn.querySelector('.arrow'); if (arrow) arrow.style.transform = '';
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          dropdown.classList.remove('show');
          langBtn.setAttribute('aria-expanded','false');
          const arrow = langBtn.querySelector('.arrow'); if (arrow) arrow.style.transform = '';
        }
      });

      dropdown.querySelectorAll('li').forEach(li => {
        li.setAttribute('tabindex','0');
        li.addEventListener('keydown', (e) => {
          if (['Enter',' '].includes(e.key)) { e.preventDefault(); li.click(); }
          else if (e.key === 'ArrowDown') { e.preventDefault(); (li.nextElementSibling || dropdown.querySelector('li')).focus(); }
          else if (e.key === 'ArrowUp') { e.preventDefault(); (li.previousElementSibling || dropdown.querySelector('li:last-child')).focus(); }
          else if (e.key === 'Escape') { dropdown.classList.remove('show'); langBtn.setAttribute('aria-expanded','false'); langBtn.focus(); }
        });
      });

      try {
        const saved = localStorage.getItem('site_lang');
        if (saved) {
          const li = dropdown.querySelector(`li[data-lang="${saved}"]`);
          if (li) langBtn.childNodes[0].nodeValue = '🌐 ' + li.textContent + ' ';
        }
      } catch(e){}
    }

    console.info('schedule.js initialized', {
      headerExists: !!header,
      modalLogExists: !!modalLog,
      modalStartExists: !!modalStart,
      modalResetExists: !!modalReset,
      btnStartExists: !!btnStart,
      btnLoginExists: !!btnLogin,
      langBtnExists: !!langBtn
    });

    const registerButton = $('#registerButton');
    const loginButton = $('#loginButton');
    const resetPasswordButton = $('#resetPasswordButton');
    const switchToLogin = $('#switchToLogin');
    const switchToRegister = $('#switchToRegister');
    const resetPasswordLinkBtn = $('#resetPasswordLink');
    const cancelReset = $('#cancelReset');

    if (switchToLogin) {
      switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeOverlay(modalStart);
        openOverlay(modalLog);
      });
    }

    if (switchToRegister) {
      switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        closeOverlay(modalLog);
        openOverlay(modalStart);
      });
    }

    if (resetPasswordLinkBtn) {
      resetPasswordLinkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeOverlay(modalLog);
        openOverlay(modalReset);
      });
    }

    if (cancelReset) {
      cancelReset.addEventListener('click', (e) => {
        e.preventDefault();
        closeOverlay(modalReset);
        openOverlay(modalLog);
      });
    }

    if (registerButton) {
      registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = $('#regEmail')?.value;
        const password = $('#regPassword')?.value;
        const confirmPassword = $('#regConfirmPassword')?.value;
        
        if (!email || !password || !confirmPassword) {
          const t = i18n[localStorage.getItem('site_lang') || 'en'];
          showNotification(t.notifications.fillAll, 'error');
          return;
        }

        if (password !== confirmPassword) {
          const t = i18n[localStorage.getItem('site_lang') || 'en'];
          showNotification(t.notifications.passwordsMismatch, 'error');
          return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find(u => u.email === email)) {
          const t = i18n[localStorage.getItem('site_lang') || 'en'];
          showNotification(t.notifications.userExists, 'error');
          return;
        }

        saveUser(email, password);
        setCurrentUser(email);
        loadUserTasks();

        const t = i18n[localStorage.getItem('site_lang') || 'en'];
        showNotification(t.notifications.registerSuccess(getEmailName(email)), 'success');
        
        $('#regEmail').value = '';
        $('#regPassword').value = '';
        $('#regConfirmPassword').value = '';
        
        updateUIForUser();
        
        closeOverlay(modalStart);
      });
    }

    if (loginButton) {
      loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = $('#loginEmail')?.value;
        const password = $('#loginPassword')?.value;

        if (!email || !password) {
          const t = i18n[localStorage.getItem('site_lang') || 'en'];
          showNotification(t.notifications.fillAll, 'error');
          return;
        }

        const user = findUser(email, password);
        if (!user) {
          const t = i18n[localStorage.getItem('site_lang') || 'en'];
          showNotification(t.notifications.loginError, 'error');
          return;
        }

        setCurrentUser(email);
        loadUserTasks();

        const t = i18n[localStorage.getItem('site_lang') || 'en'];
        showNotification(t.notifications.loginSuccess(getEmailName(email)), 'success');
        
        $('#loginEmail').value = '';
        $('#loginPassword').value = '';
        
        updateUIForUser();
        
        closeOverlay(modalLog);
      });
    }

    if (resetPasswordButton) {
      resetPasswordButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = $('#resetEmail')?.value;

        if (!email) {
          const t = i18n[localStorage.getItem('site_lang') || 'en'];
          showNotification(t.notifications.resetSent, 'info');
          return;
        }

        console.log('Reset password for:', email);
        const t = i18n[localStorage.getItem('site_lang') || 'en'];
        showNotification(t.notifications.resetSent, 'info');
        
        closeOverlay(modalReset);
      });
    }

    const viewTabs = document.querySelectorAll('.view-tab');
    const listView = document.getElementById('listView');
    const boardView = document.getElementById('boardView');

    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const mainWindow = document.querySelector('.main-window');
    const aiAssistant = document.getElementById('aiAssistant');
    
    sidebarItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        sidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        if (index === 2) {
          if (mainWindow) mainWindow.style.display = 'none';
          if (aiAssistant) aiAssistant.style.display = 'flex';
          setTimeout(() => initAIGreeting(), 100);
        } else {
          if (mainWindow) mainWindow.style.display = 'flex';
          if (aiAssistant) aiAssistant.style.display = 'none';
        }
      });
    });







    const TASK_TYPES = {
      task: {
        label: 'Task',
        class: 'type-task'
      },
      milestone: {
        label: 'Milestone',
        class: 'type-milestone'
      },
      form: {
        label: 'Form Response',
        class: 'type-form'
      },
      meeting: {
        label: 'Meeting Note',
        class: 'type-meeting'
      }
    };

    const checkboxes = document.querySelectorAll('.check');
    checkboxes.forEach(check => {
      check.addEventListener('click', function() {
        this.style.background = this.style.background === 'rgb(59, 130, 246)' ? '' : '#3b82f6';
        this.innerHTML = this.style.background ? '✓' : '';
        this.style.color = 'white';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.style.fontSize = '10px';
      });
    });

    document.querySelector('.table tbody').addEventListener('click', e => {
      const btn = e.target.closest('.add-task-btn');
      if (!btn) return;

      const row = btn.closest('.add-task-row');
      const status = row.dataset.status;

      row.innerHTML = `
        <td colspan="7">
          <div class="add-task-input">
            <span class="task-status-dot ${dotClass(status)} type-task"></span>

            <input
              class="task-name-input"
              placeholder="Task Name or type '/' for commands"
            >

            <div class="add-task-actions">
              <div class="task-type-btn" data-type="task">
                <span class="task-status-dot type-task"></span>
                <span class="task-type-label">Task</span>
              </div>

              <button class="add-task-icon" title="Due date">
                  <img src="date_icon.png">
              </button>

              <div class="priority-btn" data-priority="none">
                <img src="priority_icon.png">
                <span class="priority-label"></span>
              </div>

              <span class="task-cancel">Cancel</span>
              <button type="button" class="task-save">Save ↵</button>
            </div>
          </div>
        </td>
      `;

      row.querySelector('.task-name-input').focus();
    });

    document.addEventListener('click', e => {
      if (!e.target.classList.contains('task-cancel')) return;

      const row = e.target.closest('.add-task-row');
      restoreAddRow(row);
    });

    document.addEventListener('click', e => {
      const saveBtn = e.target.closest('.task-save');
      if (!saveBtn) return;
      
      console.log('SAVE BUTTON CLICKED', saveBtn);

      const row = saveBtn.closest('.add-task-row');
      const input = row.querySelector('.task-name-input');
      if (!input) return;

      const name = input.value.trim();
      if (!name) return;

      const status = row.dataset.status;
      const type = row.dataset.type || 'task';

      const priorityBtn = row.querySelector('.priority-btn');
      const currentPriority = priorityBtn ? priorityBtn.dataset.priority : 'none';

      const task = {
        id: 'task-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
        name,
        status,
        type,
        priority: currentPriority
      };
      const taskRow = createTaskRow(task);

      console.log('TASK TO SAVE', task);

      saveTask(task);

      renderTask(task, row); 

      input.value = '';
      if (typeof restoreAddRow === 'function') {
        restoreAddRow(row);
      }
    });

    document.addEventListener('click', e => {
      const btn = e.target.closest('.task-type-btn');
      if (!btn) return;

      e.stopPropagation();
      removeTypeMenu();

      const menu = document.createElement('div');
      menu.className = 'task-type-menu';

      menu.innerHTML = Object.entries(TASK_TYPES)
        .map(([key, t]) => `
          <button data-type="${key}">
            <span class="task-status-dot ${t.class}"></span>
            ${t.label}
          </button>
        `).join('');

      document.body.appendChild(menu);

      const r = btn.getBoundingClientRect();
      menu.style.top = r.bottom + 6 + 'px';
      menu.style.left = r.left + 'px';

      menu.onclick = ev => {
        const item = ev.target.closest('button');
        if (!item) return;

        const addRow = btn.closest('.add-task-row');

        addRow.dataset.type = item.dataset.type;

        btn.querySelector('.task-type-label').textContent =
          TASK_TYPES[item.dataset.type].label;

        const dot = btn.querySelector('.task-status-dot');
        dot.className = 'task-status-dot ' + TASK_TYPES[item.dataset.type].class;

        removeTypeMenu();
      };
    });

    document.addEventListener('click', e => {
      if (
        e.target.closest('.task-type-menu') ||
        e.target.closest('.task-type-btn')
      ) return;

      removeTypeMenu();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.target.classList.contains('task-name-input')) {
        const row = e.target.closest('.add-task-row');
        const saveBtn = row.querySelector('.task-save');
        if (saveBtn) {
          saveBtn.click();
        }
      }
      
      if (e.key === 'Escape' && e.target.classList.contains('task-name-input')) {
        const row = e.target.closest('.add-task-row');
        restoreAddRow(row);
      }
    });

    document.addEventListener('click', e => {
      const btn = e.target.closest('.priority-btn');
      if (!btn) return;

      e.stopPropagation();
      removePriorityMenu();

      const currentLang = localStorage.getItem('site_lang') || 'uk';
      const t = i18n[currentLang] || i18n['uk'];

      const menu = document.createElement('div');
      menu.className = 'priority-menu';

      menu.innerHTML = `
        <button data-p="urgent"><img src="urgent_icon.png"> ${t.priorities?.urgent || 'Urgent'}</button>
        <button data-p="high"><img src="high_icon.png"> ${t.priorities?.high || 'High'}</button>
        <button data-p="normal"><img src="normal_icon.png"> ${t.priorities?.normal || 'Normal'}</button>
        <button data-p="low"><img src="low_icon.png"> ${t.priorities?.low || 'Low'}</button>
        <button data-p="none"><img src="clear_icon.png"> ${t.taskActions?.clear || 'Clear'}</button>
      `;

      document.body.appendChild(menu);

      const r = btn.getBoundingClientRect();
      menu.style.top = r.bottom + 6 + 'px';
      menu.style.left = r.left + 'px';

      menu.onclick = ev => {
        const item = ev.target.closest('button');
        if (!item) return;

        setPriority(btn, item.dataset.p);
        removePriorityMenu();
      };
    });

    document.addEventListener('click', e => {
      if (
        e.target.closest('.priority-menu') ||
        e.target.closest('.priority-btn')
      ) {
        return;
      }

      removePriorityMenu();
    });

    document.addEventListener('click', removeMenus);

    document
      .querySelectorAll('.table tbody tr:not(.group-row):not(.add-task-row)')
      .forEach(row => attachStatusMenu(row));


    document.addEventListener('click', e => {
      if (
          e.target.closest('.context-menu') || 
          e.target.closest('.status-menu') || 
          e.target.closest('.priority-menu') || 
          e.target.closest('.priority-btn') ||
          e.target.closest('.status') ||
          e.target.closest('.task-menu-btn')
      ) {
          return;
      }
      removeAllMenus();
    });


    




    const userTrigger = document.getElementById('userTrigger');
    const userMenu = document.getElementById('userMenu');
    const avatarArrow = document.getElementById('avatarArrow');

    userTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        userMenu.classList.toggle('open');
        avatarArrow.style.transform =
            userMenu.classList.contains('open')
                ? 'rotate(0deg)'
                : 'rotate(180deg)';
    });

    document.addEventListener('click', () => {
        userMenu.classList.remove('open');
        avatarArrow.style.transform = 'rotate(180deg)';
    });


    const aiInput = document.getElementById('aiInput');
    const aiSendBtn = document.getElementById('aiSendBtn');
    const aiChat = document.getElementById('aiChat');

    function addAIMessage(message, isUser = false) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `ai-message ${isUser ? 'ai-message-user' : 'ai-message-bot'}`;
      
      messageDiv.innerHTML = `
        <div class="ai-avatar">${isUser ? '👤' : '🤖'}</div>
        <div class="ai-bubble">${message}</div>
      `;
      
      aiChat.appendChild(messageDiv);
      aiChat.scrollTop = aiChat.scrollHeight;
    }

    function analyzeTasksAI() {
      const tasks = [];
      const rows = document.querySelectorAll('.table tbody tr:not(.group-row):not([class*="add-task"])');
      
      rows.forEach(row => {
        const nameCell = row.querySelector('.name-cell');
        const statusCell = row.querySelector('.status');
        const priorityCell = row.querySelectorAll('td')[3];
        
        if (nameCell && statusCell) {
          const taskName = nameCell.textContent.trim();
          const status = statusCell.textContent.trim();
          const priority = priorityCell.querySelector('.icon')?.textContent || 'Not set';
          
          tasks.push({ name: taskName, status, priority });
        }
      });

      return tasks;
    }

    function generateAIResponse(userMessage) {
      const lowerMsg = userMessage.toLowerCase().trim();
      const currentLang = localStorage.getItem('site_lang') || 'uk';
      const t = i18n[currentLang];
      
      const hasWords = (words) => words.some(word => lowerMsg.includes(word));
      
      if (hasWords(['проаналіз', 'анал', 'завдан', 'analyze', 'task', 'статус', 'скільки'])) {
        const tasks = analyzeTasksAI();
        
        if (tasks.length === 0) {
          return `<p>${t.ai?.noTasks || 'No tasks yet'}</p>`;
        }

        const inProgress = tasks.filter(task => task.status === 'IN PROGRESS').length;
        const todo = tasks.filter(task => task.status === 'TO DO').length;
        const done = tasks.filter(task => task.status === 'DONE').length;
        
        let response = `<p><strong>${t.ai?.taskAnalysis || '📊 Task Analysis:'}</strong></p>`;
        response += `<ul>`;
        response += `<li>${t.ai?.totalTasks || '📋 Total tasks:'} <strong>${tasks.length}</strong></li>`;
        response += `<li>${t.ai?.inProgress || '🔄 In progress:'} <strong>${inProgress}</strong></li>`;
        response += `<li>${t.ai?.planned || '📝 Planned:'} <strong>${todo}</strong></li>`;
        response += `<li>${t.ai?.completed || '✅ Completed:'} <strong>${done}</strong></li>`;
        response += `</ul>`;
        
        response += `<p><strong>${t.ai?.recommendations || '💡 Recommendations:'}</strong></p><ul>`;
        
        if (inProgress > 3) {
          response += `<li>${t.ai?.manyInProgress || 'Many tasks in progress'} (${inProgress}). ${t.ai?.focusRecommendation || 'Focus on important tasks.'}</li>`;
        }
        
        if (todo > 5) {
          response += `<li>${t.ai?.setPriorities || 'Set priorities for'} ${todo} ${t.ai?.tasks || 'tasks.'}</li>`;
        }
        
        if (tasks.length > 0) {
          response += `<li>${t.ai?.startWithImportant || 'Start with important task'}</li>`;
          response += `<li>${t.ai?.setReminders || 'Set reminders'}</li>`;
          response += `<li>${t.ai?.markCompleted || 'Mark completed tasks!'}</li>`;
        }
        
        response += `</ul>`;
        
        return response;
      }

      if (hasWords(['прив', 'даро', 'хай', 'hello', 'hi', 'yo'])) {
        return `<p>${t.ai?.greeting || '👋 Hello!'}</p>
                <p>${t.ai?.howCanHelp || 'How can I help? 😊'}</p>`;
      }
      
      if (hasWords(['ок', 'fine', 'nice', 'okay', 'пон', 'добре', 'чудово', 'круто', 'зрозумі', 'ясно'])) {
        return `<p>${t.ai?.great || '👌 Great!'}</p>`;
      }

      if (hasWords(['дякую', 'благодар', 'спасиб', 'спс', 'thanks', 'thx'])) {
        return `<p>${t.ai?.happyToHelp || '😊 Always happy to help!'}</p>`;
      }

      if (hasWords(['нічого', 'пока', 'ничего', 'поки', 'пот', 'не треба'])) {
        return `<p>${t.ai?.imHere || '👌 Okay, I\'m here if you need me.'}</p>`;
      }

      if (hasWords(['ахах', 'лол', 'хех', '😂', 'хаха'])) {
        return `<p>${t.ai?.gladYouLiked || '😄 Glad you liked it!'}</p>`;
      }

      if (hasWords(['хто ти', 'що ти', 'ти хто', 'who', 'what', 'ты'])) {
        return `<p>${t.ai?.iAmAssistant || '🤖 I\'m an AI assistant that helps:'}</p>
                <ul>
                  <li>${t.ai?.planDay2 || '⏰ plan your day'}</li>
                  <li>${t.ai?.setPriorities2 || '🎯 set priorities'}</li>
                  <li>${t.ai?.workProductively || '📊 work more productively'}</li>
                </ul>`;
      }

      if (hasWords(['розподіли', 'план', 'schedule', 'розклад', 'день', 'час', 'time', 'day'])) {
        return `<p><strong>⏰ Рекомендований план дня:</strong></p>
                <ul>
                  <li>🌅 <strong>09:00-11:00</strong> - Найскладніші завдання (пік продуктивності)</li>
                  <li>☕ <strong>11:00-13:00</strong> - Середні за складністю завдання</li>
                  <li>🍽️ <strong>13:00-14:00</strong> - Обідня перерва</li>
                  <li>📞 <strong>14:00-16:00</strong> - Зустрічі та комунікація</li>
                  <li>📝 <strong>16:00-18:00</strong> - Дрібні завдання та планування</li>
                </ul>
                <p><strong>💡 Техніка Pomodoro:</strong></p>
                <ul>
                  <li>🍅 25 хвилин роботи</li>
                  <li>☕ 5 хвилин відпочинку</li>
                  <li>🎯 Після 4 циклів - довга перерва 15-30 хвилин</li>
                </ul>`;
      }
      
      if (hasWords(['пріоритет', 'важлив', 'priority', 'терміно', ' important'])) {
        return `<p><strong>🎯 Як правильно розставити пріоритети:</strong></p>
                <ul>
                  <li>🔴 <strong>Urgent</strong> - Терміново і важливо (робити зараз!)</li>
                  <li>🟠 <strong>High</strong> - Важливо, але не терміново (запланувати)</li>
                  <li>🟡 <strong>Medium</strong> - Середній пріоритет (можна відкласти)</li>
                  <li>🟢 <strong>Low</strong> - Низький пріоритет (коли буде час)</li>
                </ul>
                <p><strong>📌 Матриця Ейзенхауера:</strong></p>
                <ul>
                  <li><strong>Терміново + Важливо</strong> = робити негайно</li>
                  <li><strong>Не терміново + Важливо</strong> = запланувати</li>
                  <li><strong>Терміново + Не важливо</strong> = делегувати</li>
                  <li><strong>Не терміново + Не важливо</strong> = видалити</li>
                </ul>
                <p>💡 Клікніть на колонку Priority у завданні, щоб встановити пріоритет!</p>`;
      }
      
      if (hasWords(['допомога', 'help', 'що ти', 'команд', 'можеш', 'can', 'command'])) {
        return `<p><strong>🤖 Я AI асистент для планування! Ось що я вмію:</strong></p>
                <ul>
                  <li>📊 <strong>Аналіз завдань</strong> - "проаналізуй мої завдання"</li>
                  <li>⏰ <strong>План дня</strong> - "розподіли завдання на день"</li>
                  <li>🎯 <strong>Пріоритети</strong> - "як розставити пріоритети"</li>
                  <li>💡 <strong>Поради</strong> - "дай поради щодо продуктивності"</li>
                </ul>
                <p><strong>Приклади команд:</strong></p>
                <ul>
                  <li>"Проаналізуй завдання"</li>
                  <li>"Розподіли на день"</li>
                  <li>"Допоможи з пріоритетами"</li>
                  <li>"Дай пораду"</li>
                </ul>
                <p>Просто напишіть, що вам потрібно! 😊</p>`;
      }
      
      if (hasWords(['prod', 'effect', 'advice', 'совет', 'порад', 'продуктивніст', 'ефективн', 'productivity'])) {
        return `<p><strong>💡 Поради щодо продуктивності:</strong></p>
                <ul>
                  <li>🎯 <strong>Правило 2 хвилин</strong> - якщо завдання займе менше 2 хвилин, зробіть його одразу</li>
                  <li>🐸 <strong>З'їжте жабу</strong> - почніть з найнеприємнішого завдання</li>
                  <li>📝 <strong>Batch tasking</strong> - групуйте схожі завдання</li>
                  <li>🚫 <strong>Ні багатозадачності</strong> - фокус на одному завданні</li>
                  <li>⏰ <strong>Time blocking</strong> - виділяйте час блоками</li>
                  <li>📱 <strong>Прибрати відволікання</strong> - вимкніть сповіщення</li>
                  <li>🎉 <strong>Нагороджуйте себе</strong> - після виконання завдань</li>
                </ul>`;
      }
      
      return `<p>${t.ai?.goodQuestion || '🤔 Good question! Here\'s what I can do for you:'}</p>
              <ul>
                <li>${t.ai?.analyzeCommand || '💬 "Analyze my tasks" - show statistics'}</li>
                <li>${t.ai?.planDay || '⏰ "Plan the day" - create schedule'}</li>
                <li>${t.ai?.howToPrioritize || '🎯 "How to prioritize" - explain system'}</li>
                <li>${t.ai?.giveTips || '💡 "Give tips" - share productivity hacks'}</li>
                <li>${t.ai?.helpCommand || '❓ "Help" - show all commands'}</li>
              </ul>
              <p>${t.ai?.justAsk || 'Just write the command in your own words! 😊'}</p>`;
    }

    function sendAIMessage() {
      const message = aiInput.value.trim();
      if (!message) return;
      
      addAIMessage(message, true);
      aiInput.value = '';
      
      setTimeout(() => {
        const response = generateAIResponse(message);
        addAIMessage(response, false);
      }, 500);
    }

    if (aiSendBtn) {
      aiSendBtn.addEventListener('click', sendAIMessage);
    }

    if (aiInput) {
      aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          sendAIMessage();
        }
      });
    }

    function initAIGreeting() {
      const aiChat = document.getElementById('aiChat');
      if (!aiChat) return;
      
      const currentLang = localStorage.getItem('site_lang') || 'uk';
      const t = i18n[currentLang];
      
      const hasMessages = aiChat.children.length > 0;
      if (!hasMessages) {
        const greeting = `<p>${t.ai?.greeting || '👋 Hello!'}</p>
                         <p>${t.ai?.howCanHelp || 'How can I help? 😊'}</p>
                         <br>
                         <p><strong>${t.ai?.goodQuestion || '🤔 Good question! Here\'s what I can do for you:'}</strong></p>
                         <ul>
                           <li>${t.ai?.analyzeCommand || '💬 "Analyze my tasks" - show statistics'}</li>
                           <li>${t.ai?.planDay || '⏰ "Plan the day" - create schedule'}</li>
                           <li>${t.ai?.howToPrioritize || '🎯 "How to prioritize" - explain system'}</li>
                           <li>${t.ai?.giveTips || '💡 "Give tips" - share productivity hacks'}</li>
                         </ul>
                         <p>${t.ai?.justAsk || 'Just write the command in your own words! 😊'}</p>`;
        
        addAIMessage(greeting, false);
      }
    }

    function updateDashboardStats() {
      const tasks = [];
      const rows = document.querySelectorAll('.table tbody tr:not(.group-row):not([class*="add-task"])');
      
      rows.forEach(row => {
        const nameCell = row.querySelector('.name-cell');
        const statusCell = row.querySelector('.status');
        const priorityBtn = row.querySelector('.priority-btn');

        if (!nameCell || !statusCell) return;

        const status = row.dataset.status || statusCell.textContent.trim();
        const priority = priorityBtn?.dataset.priority || '';

        tasks.push({
          name: nameCell.textContent.trim(),
          status: status,
          statusText: statusCell.textContent.trim(),
          priority: priority
        });
      });

      const totalTasks = tasks.length;
      const inProgress = tasks.filter(t => t.status === 'IN PROGRESS').length;
      const completed = tasks.filter(t => t.status === 'DONE').length;
      const todo = tasks.filter(t => t.status === 'TO DO').length;
      const productivity = totalTasks > 0 ? Math.round((completed / totalTasks) * 100) : 0;

      const urgent = tasks.filter(t => t.priority === 'urgent').length;
      const high = tasks.filter(t => t.priority === 'high').length;
      const normal = tasks.filter(t => t.priority === 'normal').length;
      const low = tasks.filter(t => t.priority === 'low').length;

      const setTextSafe = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
      };

      setTextSafe('totalTasks', totalTasks);
      setTextSafe('inProgressTasks', inProgress);
      setTextSafe('completedTasks', completed);
      setTextSafe('productivity', productivity + '%');

      setTextSafe('todoCount', todo);
      setTextSafe('progressCount', inProgress);
      setTextSafe('doneCount', completed);

      setTextSafe('urgentCount', urgent);
      setTextSafe('highCount', high);
      setTextSafe('mediumCount', normal);
      setTextSafe('lowCount', low);

      const setBarWidth = (id, percentage) => {
        const el = document.getElementById(id);
        if (el) el.style.width = percentage + '%';
      };

      if (totalTasks > 0) {
        setBarWidth('todoBar', (todo / totalTasks) * 100);
        setBarWidth('progressBar', (inProgress / totalTasks) * 100);
        setBarWidth('doneBar', (completed / totalTasks) * 100);
      }

      const recentTasksContainer = document.getElementById('recentTasks');
      if (recentTasksContainer && tasks.length > 0) {
        recentTasksContainer.innerHTML = '';
        
        const recentTasks = tasks.slice(-5).reverse();
        
        const currentLang = localStorage.getItem('site_lang') || 'uk';
        const t = i18n[currentLang] || i18n['uk'];
        
        recentTasks.forEach(task => {
          const activityItem = document.createElement('div');
          activityItem.className = 'activity-item';
          
          let icon = '📝';
          let bgColor = '#3b82f6';
          
          if (task.status === 'DONE') {
            icon = '✅';
            bgColor = '#10b981';
          } else if (task.status === 'IN PROGRESS') {
            icon = '🔄';
            bgColor = '#f59e0b';
          } else if (task.status === 'BLOCKED') {
            icon = '🚫';
            bgColor = '#ef4444';
          }

          let statusText = task.status;
          if (task.status === 'DONE') {
            statusText = t.statuses?.done || 'DONE';
          } else if (task.status === 'IN PROGRESS') {
            statusText = t.statuses?.inProgress || 'IN PROGRESS';
          } else if (task.status === 'TO DO') {
            statusText = t.statuses?.todo || 'TO DO';
          }

          let priorityText = '';
          if (task.priority && task.priority !== 'none') {
            if (task.priority === 'urgent') {
              priorityText = t.priorities?.urgent || 'Urgent';
            } else if (task.priority === 'high') {
              priorityText = t.priorities?.high || 'High';
            } else if (task.priority === 'normal') {
              priorityText = t.priorities?.normal || 'Normal';
            } else if (task.priority === 'low') {
              priorityText = t.priorities?.low || 'Low';
            }
          }
          
          activityItem.innerHTML = `
            <div class="activity-icon" style="background: ${bgColor};">${icon}</div>
            <div class="activity-content">
              <p class="activity-text">${task.name}</p>
              <span class="activity-time">${statusText}${priorityText ? ' • ' + priorityText : ''}</span>
            </div>
          `;
          
          recentTasksContainer.appendChild(activityItem);
        });
      }
    }

    window.updateDashboardStats = updateDashboardStats;
    window.renderCalendar = renderCalendar;
    window.displayTasksForDate = displayTasksForDate;

    window.handleDelete = function(taskId) {
      if (confirm('Are you sure you want to delete this task?')) {
        updateCurrentUserData(user => {
          user.tasks = user.tasks.filter(t => t.id !== taskId);
        });
        
        const row = document.querySelector(`tr[data-id="${taskId}"]`);
        if (row) row.remove();
        
        removeAllMenus();
      }
    };

    window.handleUpdateType = function(taskId, type) {
      const row = document.querySelector(`tr[data-id="${taskId}"]`);
      if (row) {
        setTaskType(row, type);
        updateTask(taskId, { type: type });
      }
      removeAllMenus();
    };

    window.handleDuplicate = function(taskId) {
      const user = getCurrentUserData();
      const originalTask = user.tasks.find(t => t.id === taskId);
      if (!originalTask) return;

        const newTask = {
            ...originalTask,
            id: 'task-' + Date.now(),
            name: originalTask.name + ' (copy)'
        };

        saveTask(newTask);
        
        const originalRow = document.querySelector(`tr[data-id="${taskId}"]`);
        
        renderTask(newTask, originalRow.nextSibling);
      
      removeAllMenus();
    };

    window.handleRename = function(taskId) {
      removeAllMenus();
      const row = document.querySelector(`tr[data-id="${taskId}"]`);
      if (!row) return;

      const nameCell = row.querySelector('.name-cell');
      const originalName = nameCell.innerText.trim();
      
      const dot = nameCell.querySelector('.task-status-dot');

      nameCell.innerHTML = '';
      if (dot) nameCell.appendChild(dot);

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'rename-input';
      input.value = originalName;
      nameCell.appendChild(input);

      input.focus();
      input.select();

      const saveName = () => {
        const newName = input.value.trim() || originalName;
        
        updateTask(taskId, { name: newName });

        nameCell.innerHTML = '';
        if (dot) nameCell.appendChild(dot);
        nameCell.append(` ${newName}`);
      };

      input.onkeydown = (e) => {
        if (e.key === 'Enter') saveName();
        if (e.key === 'Escape') {
          input.value = originalName;
          saveName();
        }
      };

      input.onblur = saveName;
    };


    window.deleteTask = function(taskId) {
      if (!confirm('Видалити цю задачу?')) return;
      
      updateCurrentUserData(user => {
        user.tasks = user.tasks.filter(t => t.id !== taskId);
      });
      
      if (selectedDate) {
        displayTasksForDate(selectedDate);
        renderCalendar();
      }
      
      showNotification('Задачу видалено', 'success');
    };

    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');

    if (prevMonthBtn) {
      prevMonthBtn.addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
        renderCalendar();
      });
    }

    if (nextMonthBtn) {
      nextMonthBtn.addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
        renderCalendar();
      });
    }

    const addTaskForDateBtn = document.getElementById('addTaskForDateBtn');
    const modalDateTask = document.getElementById('modalDateTask');
    const closeDateTaskModal = document.getElementById('closeDateTaskModal');
    const saveDateTaskBtn = document.getElementById('saveDateTaskBtn');

    if (addTaskForDateBtn) {
      addTaskForDateBtn.addEventListener('click', () => {
        if (!selectedDate) return;
        
        selectedDateForTask = selectedDate;
        const date = new Date(selectedDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const lang = localStorage.getItem('site_lang') || 'uk';
        const locale = lang === 'ua' || lang === 'uk' ? 'uk-UA' : 'en-US';
        
        document.getElementById('selectedDateDisplay').textContent = date.toLocaleDateString(locale, options);
        document.getElementById('taskTitleInput').value = '';
        document.getElementById('taskDescriptionInput').value = '';
        
        document.querySelectorAll('.priority-option').forEach(btn => {
          btn.classList.remove('active');
        });
        document.querySelector('.priority-option[data-priority="none"]').classList.add('active');
        
        openOverlay(modalDateTask);
      });
    }

    if (closeDateTaskModal) {
      closeDateTaskModal.addEventListener('click', () => {
        closeOverlay(modalDateTask);
      });
    }

    if (modalDateTask) {
      modalDateTask.addEventListener('click', (e) => {
        if (e.target === modalDateTask) {
          closeOverlay(modalDateTask);
        }
      });
    }

    document.querySelectorAll('.priority-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.priority-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    document.getElementById('prevMonth').onclick = () => {
      currentCalendarDate.setMonth(currentCalendarDate.getMonth());
      renderCalendar();
    };

    document.getElementById('nextMonth').onclick = () => {
      currentCalendarDate.setMonth(currentCalendarDate.getMonth());
      renderCalendar();
    };

    document.getElementById('quickPrevMonth').onclick = (e) => {
      e.stopPropagation();
      quickCalendarDate.setMonth(quickCalendarDate.getMonth() - 1);
      renderQuickCalendar();
    };

    document.getElementById('quickNextMonth').onclick = (e) => {
      e.stopPropagation();
      quickCalendarDate.setMonth(quickCalendarDate.getMonth() + 1);
      renderQuickCalendar();
    };

    if (saveDateTaskBtn) {
      saveDateTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('taskTitleInput').value.trim();
        const description = document.getElementById('taskDescriptionInput').value.trim();
        const selectedPriority = document.querySelector('.priority-option.active');
        const priority = selectedPriority ? selectedPriority.dataset.priority : 'none';
        const currentLang = localStorage.getItem('site_lang') || 'uk';
        const t = i18n[currentLang];
        
        if (!title) {
          showNotification(t.calendar?.enterTitle || 'Enter task title', 'error');
          return;
        }
        
        const task = {
          id: 'task-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
          name: title,
          description: description,
          date: selectedDateForTask,
          status: 'TO DO',
          type: 'task',
          priority: priority
        };
        
        saveTask(task);
        
        closeOverlay(modalDateTask);
        displayTasksForDate(selectedDateForTask);
        renderCalendar();
        
        showNotification(t.calendar?.addPlan || 'Plan added!', 'success');
      });
    }
    const qPrev = document.getElementById('quickPrevMonth');
    const qNext = document.getElementById('quickNextMonth');
    
    if (qPrev) qPrev.onclick = (e) => {
        e.stopPropagation();
        quickCalendarDate.setMonth(quickCalendarDate.getMonth() - 1);
        renderQuickCalendarContent();
    };
    
    if (qNext) qNext.onclick = (e) => {
        e.stopPropagation();
        quickCalendarDate.setMonth(quickCalendarDate.getMonth() + 1);
        renderQuickCalendarContent();
    };

    document.addEventListener('mousedown', (e) => {
        const picker = document.getElementById('quickDatePicker');
        if (picker && !picker.contains(e.target) && !e.target.closest('.date-btn')) {
            picker.style.display = 'none';
        }
    });

    viewTabs.forEach((tab, index) => {
      const oldHandler = tab.onclick;
      tab.onclick = null;
      
      tab.addEventListener('click', () => {
        viewTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const calendarView = document.getElementById('calendarView');
        
        if (index === 0) {
          if (listView) listView.style.display = 'block';
          if (boardView) boardView.style.display = 'none';
          if (calendarView) calendarView.style.display = 'none';
        } else if (index === 1) {
          if (listView) listView.style.display = 'none';
          if (boardView) boardView.style.display = 'none';
          if (calendarView) {
            calendarView.style.display = 'flex';
            renderCalendar();
          }
        } else if (index === 2) {
          if (listView) listView.style.display = 'none';
          if (boardView) boardView.style.display = 'flex';
          if (calendarView) calendarView.style.display = 'none';
          updateDashboardStats();
        } else {
          if (listView) listView.style.display = 'none';
          if (boardView) boardView.style.display = 'none';
          if (calendarView) calendarView.style.display = 'none';
        }
      });
    });


  });
})();