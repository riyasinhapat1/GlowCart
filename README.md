GlowCart – React Native App

A simple yet beautiful e-commerce mobile application built with React Native (Expo).
It follows a smooth Onboarding → Login → Register → Home → Profile flow, styled to match a modern minimal theme.

🚀 Setup Instructions
Clone the repository
git clone https://github.com/your-username/glowcart.git
cd glowcart

Install dependencies
npm install

Run the app
npx expo start
Scan the QR code in Expo Go app (Android/iOS)
Or run in an Android/iOS simulator


Folder Structure Overview

src/
├── api/            # Axios API setup
├── components/     # Reusable UI components (AppButton etc.)
├── navigation/     # Stack & Tab navigation
├── screens/        # All app screens
└── assets/         # Images, icons, and other static assets

Time Taken
Planning & UI Design: ~2 hours
Coding Screens & Navigation: ~4 hours
Testing & Debugging: ~1.5 hours
Total: ~7.5 hours


📌 Assumptions
Users already have Expo Go or emulator setup for testing.
Internet connection is available for API requests.
Using dummy API (https://dummyjson.com) for fetching product details


⚠ Known Issues
No backend authentication yet — login is currently UI-only.
Social login buttons are non-functional (UI placeholders).
Product listing & details are static/dummy data.


Next Steps / Future Improvements
Implement real authentication with backend API.
Connect social login buttons (Google, Apple, Facebook).


## 🎥 Demo Video
[Watch the full demo here](https://www.loom.com/share/75270a6e4117468fb18aefd94a4fed74?sid=208192d0-8036-43f6-ae07-63ee2eaaf005)


##GlowCart Video of running App
https://drive.google.com/file/d/12pdHIWlD6ElkyRPd1Z06DUrUNDP9OwUj/view?usp=drivesdk
Add cart & wishlist functionality.
