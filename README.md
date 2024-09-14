# Netflix gpt

- Created React app
- installed tailwind
- Configured TailWind
- Header
- Login
- Body
- Routing of App
- Login Form
- SignUp Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying App to Production
  - cmd
    - npm i -g firebase-tools <!-- install cli before using firebase login -->
    - firebase login
    - firebase init <!-- create firebase config -- >
    - setup hoisting <!-- for deploing choose housting and select required for need -->
  - Build
    - npm run build
    - firebase deploy
- Create Signup user Account
- Enabling Authentication
- Setting up Authentication
- Setting up Redux store
- setting add and remove user slices
- Update Profile
- Bug Fix
  - User not signed in not navigate to Browse Page
  - Loggeedin- Navigate to browse does not navigate to login page
- Create TMDB app and register for key
  - Read Documentation.
  - Go to Api Reference.
  - Main-Container
    - Add Movielist to the store.
    - Plan for the Main Page
    - Add Now Playing Movie in Main Container
    - Add the Movie Trailer to the store.
    - Embed the Movie Trailer
  - Secondary-Container
    - MovieList
      - Movie Cards
        -Movie List of popular, tending,etc...
  - Gpt-Search Page
    - GPT-Search-Bar
    - Multilingual Feature
  - GPT Movies Suggestion
    - Secured Keys
  - Memoizations

# Features

- Login/Signup Form

  - Sign In /Sign up form
  - redirected to Browse Page

- Browse page (After Authentication) for logged-in users
- Header
- Main Movie
  - Trailer in Bg
  - Title & Desc
- Movie Suggestions
- Movie List - Vertical Scroll
- Netflix Gpt
  - Search bar
  - Movie Suggestions
