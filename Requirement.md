Project Overview
membership-based adult website that showcases AI-generated adult videos and images. The platform will feature gated access, subscription models, and an internal admin panel to manage and generate content.

---

Core Features
Frontend (User Side)

1. Landing Page (Home/Video Page):
   Displays a list/grid of sample videos (call-to-action content).
   Each video card includes:
   Video thumbnail or short playable preview.
   Title.
   Number of views.
   Like and Dislike buttons (thumbs up / thumbs down).
   Like/Dislike counts displayed beside buttons.

2. 18+ Age Verification Popup:
   On first visit, a modal popup appears:
   Text: "Are you 18 years or older?"
   Buttons: "Yes" and "No".
   Clicking Yes allows access to the site.
   Clicking No redirects user to a "Restricted Access" page or locks the website.

3. Sign Up Gate (Before Full Access):
   When a user clicks any video:
   Force user to sign up (register).
   Required fields for signup:
   Email
   Password
   Option for login if the user already has an account.

4. Subscription Paywall:
   After successful signup:
   Prompt user to subscribe before viewing full videos.
   Integrate Stripe for payment.
   Users can pay via card (Visa, MasterCard, etc.).
   After successful payment:
   Unlock full access to the platform’s videos and images.

5. Video Viewing Page:
   Full video player with:
   Title of video.
   Number of views.
   Like and Dislike buttons still visible.
   Related videos section underneath.

Backend (Admin Side)

1. Admin Panel:
   Secure login for admin.
   Manage:
   Uploading of videos (title, description, thumbnail, tags, etc.).
   Uploading of images (gallery management).
   Manage users (view, suspend, delete users).
   Manage subscription plans (prices, durations, offers).
   View payment history and user subscription status.
   Analytics dashboard (views, likes, user registrations, earnings).

2. AI Content Generation Tool:
   Integrate an AI Module inside admin panel:
   Generate AI adult images.
   Generate AI adult videos.
   Option to upload the AI-generated content directly to the site.

---

Technical Requirements
Frontend:
Responsive Design (Mobile & Desktop compatible).
Clean and fast-loading UI.
Video player support (MP4, WebM formats).
Backend:
User authentication and authorization.
Subscription management via Stripe API.
Secure payment handling.
Admin CMS (Content Management System) for uploads and control.

Security:
SSL encryption (HTTPS).
Secure storage of user data (passwords hashed, Stripe tokens for payments).

Other Integrations:
Email notification system (Welcome email, Payment confirmation, Password reset).
Age restriction compliance.
Terms & Conditions and Privacy Policy pages.
