# Fábio Fiorita – iOS App Portfolio

Welcome to the portfolio and showcase of Fábio Fiorita, an iOS app developer passionate about building modern, private, and user-friendly applications using the latest Apple technologies.

## 🚀 Overview
This project is a personal portfolio and app landing site built with Next.js, React, and Tailwind CSS. It highlights two main iOS apps—ItsMedTime and Tastik—demonstrating a commitment to quality, privacy, and user experience.

## 📱 Featured Apps

### [ItsMedTime](https://apps.apple.com/gb/app/itsmedtime/id1580757092)
**Category:** Health

Everything you need to manage your meds, simply and smartly: track schedules, get important reminders, keep an eye on your history and stock, and stay on top of your health routine with ease.

**Key Features:**
- Medication List: View your medications with upcoming doses, remaining stock, and intake status—all in a clear and interactive interface.
- Charts: Track your progress, treatment adherence, and medication expenses through simple and informative charts.
- History: Complete and organized records of intakes and refills by day, including amounts paid and detailed data by medication.
- Interactive Widgets: Mark doses and check schedules from your home or lock screen.
- Critical Notifications: Get reminders that work even with your iPhone on silent or Do Not Disturb mode.

### [Tastik](https://apps.apple.com/gb/app/tastik-tasks-and-lists/id6459197048)
**Category:** Productivity

Tastik is a private, local-first list app for everything that doesn't fit in your calendar. It gives every list the shape it needs—checklists, counters, budgets, Kanban boards, or a mix—with no account required and your data kept on-device, with optional iCloud sync.

**Key Features:**
- Five List Shapes: Simple checklists, steppers for quantities, calculator lists with running totals, Kanban boards, and mixed multi-type lists.
- Smart Add: Turn natural language into tidy items, with notes preserved and existing tags matched automatically.
- Local-First Privacy: No account, no tracking, no ads—lists live on your device and sync only through your personal iCloud when enabled.
- Budgets Made Easy: Track spending, savings, and expenses with clear numbers and categories.
- Kanban Progress: Organize tasks into To Do, Doing, and Done.
- Tags, Notes & Search: Organize and find items across every list.
- Widgets & Shortcuts: Check off or update lists from the Home and Lock Screen, and capture fast with App Shortcuts.

## 💡 Development Philosophy
- **iOS-First:** Native iOS apps using Swift, SwiftUI, and SwiftData, following Apple’s best practices.
- **Privacy by Design:** No personal data collection; all data is stored locally or in iCloud.
- **Modern Features:** Interactive widgets, iCloud sync, and critical notifications.
- **User-Centered:** Intuitive interfaces that solve real problems effectively.

## 🛠️ Tech Stack
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **i18n:** next-intl (English & Portuguese)
- **UI:** Shadcn/ui, custom components
- **Testing:** Vitest, Testing Library, Playwright
- **Analytics:** Vercel Analytics, Speed Insights

## 🏗️ Project Structure
```
/ (root)
  ├─ src/
  │   ├─ app/           # Next.js app directory (pages, routes)
  │   ├─ components/    # Reusable React components
  │   ├─ hooks/         # Custom React hooks
  │   ├─ i18n/          # Internationalization (messages, logic)
  │   ├─ lib/           # Utilities and helpers
  │   └─ __tests__/     # Unit and integration tests
  ├─ tests/             # Playwright E2E test files
  ├─ public/            # Static assets (images, icons)
  ├─ package.json       # Project metadata and scripts
  └─ ...
```

## ⚡ Getting Started
1. **Install dependencies:**
   ```sh
   pnpm install
   ```
2. **Run the development server:**
   ```sh
   pnpm dev
   ```
3. **Run tests:**
   ```sh
   pnpm test
   ```
4. **Run e2e tests:**
   ```sh
   pnpm test:e2e
   ```
5. **Build for production:**
   ```sh
   pnpm build
   ```

## 👤 About the Author
Hi, I'm Fábio — an iOS developer based in São José dos Campos, Brazil. I have a degree in Computer Engineering from Inatel and a passion for creating intuitive solutions that simplify everyday life.

- [LinkedIn](https://www.linkedin.com/in/fabiofioritapontes/)
- [Contact me](mailto:fabiolfp@gmail.com)

## 📬 Contact
Have questions, suggestions, or feedback? Email: **fabiolfp@gmail.com**

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.