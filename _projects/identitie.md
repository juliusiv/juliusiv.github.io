---
title: "Identitie"
shorthand: "identitie"
layout: default
---
My first hackathon was Hack Upstate in the Fall of 2013. Running through the entire design process for a piece of software was completely new and daunting for me. Admittedly, it still is pretty daunting. But Hack Upstate was my first exposure to the art of the hack, and Identitie was what we created.

Identitie is a client-side two-factor authentication system. It's composed of a Chrome extension, Node server, Iron.io cache, and iOS app. In a nutshell, the system works by abstracting a user's password for a particular site from them. To log in to that site, the user needs to be signed into Chrome and be able to confirm the login on their phone. It's that simple.

Two-factor authentication usually has to be implemented server-side. Identitie's goal is to allow users to implement two-factor auth on any website they want. We thought it was a pretty good idea and so did the Hack Upstate judges because we won first place and the Iron.io prize.