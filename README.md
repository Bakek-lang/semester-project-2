# Auction House

Auction House is a fully functional auction web application where users can list items for auction, place bids, and view profiles of other users. The project is built using TailwindCSS, HTML, and vanilla JavaScript and is part of the Semester Project 2 assignment for a school project. The application interacts with an existing API and focuses on the front-end implementation.

# Project Overview

Auction House allows users with a stud.noroff.no email address to register, log in, create, bid, and delete auction listings. Users can also update their avatars and bios, and view the profile of others, including their auction listings.

# Features

- **User Registration and Login:** Users can register with a stud.noroff.no email and log in to their account.
- **Create Auction Listings:** Users can create new listings by adding a title, description, image and deadline for the auction.
- **Bidding System:** Users can place bids on other users' listings, and when the auction ends, the highest bidder is displayed as the winner.
- **Profile Pages:** Users can view their profile and others’ profiles, which display avatar, username, bio, and all active or expired listings.
- **Settings:** Users can update their avatar and bio through the settings page.
- **Search:** Even unregistered users can search through auction listings.
- **Logout:** Users can securely log out and will lose access to other pages except for the home, login, and register pages.

# Technologies Used

- **TailwindCSS:** For styling the UI.
- **Vite:** For bundling and development.
- **HTML:** Structure of the pages.
- **Vanilla JavaScript:** For functionality and API interactions.
- **Netlify:** For deployment and hosting.
- **API:** All auction-related data is managed via an external API.

# Setup Instructions

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/Bakek-lang/semester-project-2.git
   ```
2. **Install dependencies:**:

```
npm install
```

3. **Run the development server:**

```
npm run dev
```

4. **Build the project for production**:

```
npm run build
```

5. **Preview the production build**:

```
npm run preview
```

# Deployment

The project is deployed and hosted on Netlify. You can view the live version of the project at:
[Auction House](https://auction-house-sp2-bakek.netlify.app/)

# Project Management

The project used Trello for task management (Kanban board) and Notion for tracking progress (Gantt chart). Figma was used for creating mobile and dekstop prototypes, as well as the style guide.

# User Stories

- A user with a stud.noroff.no email may register.
- A registered user may log in.
- A registered user may log out.
- A registered user may update their avatar.
- A registered user may view their total credit.
- A registered user may create a listing with a title, deadline date, media gallery, and description.
- A registered user may add a bid to another user’s listing.
- A registered user may view bids made on a listing.
- An unregistered user may search through listings.
