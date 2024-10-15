#Project Overview
Use this guide to build a web app where users can give a text prompt to search for hotels. This AI-powered travel search platform allows users to input natural language queries, such as “Find a hotel in Paris under $200 per night,” and receive personalized hotel recommendations 

#Features requirements
1. User Interface
-- **Develop the UI using React and Next.js, incorporating:
Tailwind CSS: For rapid and responsive styling using utility classes. -- shadcn UI Components: Utilize pre-built components like buttons, forms, modals, and chat interfaces to speed up development and ensure design consistency.
Magic UI: Integrate animations and interactive effects to enhance user experience.

2. Main Layout & Navigation
Homepage:
-- A clean, minimalistic homepage featuring a centered chatbot interface for user queries.
Responsive design using Tailwind CSS to ensure compatibility across devices.
Navigation Bar:
-Options for users to sign in, view past searches, and manage preferences.
Use shadcn components for consistent design.

3. Chat Interface
**Implement a chatbot-style UI where users can input natural language queries.
Chatbox:
Input field styled with Tailwind CSS.
Message bubbles for displaying user queries and GPT-4 responses using shadcn components.
Interactive Elements:
-Utilize Magic UI for animations when messages are sent and received.
Conversation Memory:
-LangChain manages the conversation context to personalize responses.

4. Search Results Display
After processing queries, display hotel results fetched from the Amadeus API.
Hotel Cards:
-- Show hotel images, names, prices, ratings, and a "Book Now" button.
Use shadcn components for cards and modals.
Filters:
-Implement filters for price range, location, and amenities, styled with Tailwind CSS.

5. User Authentication
**Implement user sign-up and login using Supabase authentication.
Use shadcn forms and input components for consistency.
Secure pages and personalize user experience based on login status.

6. Backend Integration
**The frontend communicates with backend services (GPT-4, LangChain, Amadeus API) via API routes.
Handle API calls efficiently to ensure a smooth user experience.

7. Styling and Theming
**Use Tailwind CSS to create a consistent and modern style across the app.
Customization:
-- Tailwind CSS allows for easy theme adjustments and custom styling as needed.

8. Accessibility and Responsiveness
Ensure all components are accessible and responsive.
-Follow best practices for accessibility (ARIA labels, keyboard navigation).
shadcn components are designed with accessibility in mind.

#Relevant Links
1. React and Next.js
[React Documentation](](https://reactjs.org/docs/getting-started.html)
[Next.js Documentation](](https://nextjs.org/docs)

2. Tailwind CSS
[Tailwind CSS Documentation](](https://tailwindcss.com/docs)
3. shadcn/UI Components
[shadcn UI Documentation](](https://ui.shadcn.com/)
4. Magic UI
[Magic UI Documentation](](https://magic.design/)
5. OpenAI GPT-4 API
[OpenAI API Docs](](https://platform.openai.com/docs/introduction)
6. LangChain
[LangChain Documentation](](https://js.langchain.com/docs/)
7. Amadeus API
[Amadeus for Developers](](https://developers.amadeus.com/)
8. Supabase
[Supabase Documentation](](https://supabase.com/docs)
9. Vercel
[Vercel Documentation](](https://vercel.com/docs)

#Current file structure

VOYAGIST
└── voyagist-ai
    ├── app
    │   ├── fonts
    │   └── requirements
    ├── favicon.ico
    ├── globals.css
    ├── layout.tsx
    ├── page.tsx
    ├── components
    ├── hooks
    ├── lib
    ├── node_modules
    ├── .eslintrc.json
    ├── .gitignore
    ├── components.json
    ├── next-env.d.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── README.md
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── README.md

#Rules 

All new pages go in the /app folder.

All new components go in the /components folder.

Ensure each component is self-contained (logic, styles, and markup together).
Use a subfolder per component if it has multiple files (e.g., component, styles, test).
Component Naming:

Use PascalCase for React components (e.g., HotelCard.js).
Group related components (e.g., SearchBar.js, SearchResults.js) in a subfolder within /components if necessary.
CSS:

Use Tailwind CSS for component styling unless otherwise specified.
Global styles or custom Tailwind configurations should go in the /styles folder.
Reusable Components:

Whenever possible, create reusable components (e.g., Buttons, Modals) and place them in a common or shared subfolder within /components.
Component Imports:

Use relative imports for components within the same folder structure.
Always avoid deeply nested imports.
Responsive Design:

Ensure every component is responsive using Tailwind CSS’s responsive utilities (e.g., md:grid-cols-2).

Amadeus API handlers go in the /lib folder.
LangChain workflows should be abstracted into functions in the /lib folder, keeping logic clean and separated from components.