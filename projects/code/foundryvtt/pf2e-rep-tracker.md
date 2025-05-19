---
prev: false
next:
    text: "PF2e Vessaya"
    link: "/projects/code/foundryvtt/pf2e-vessaya"
---

# PF2e Rep Tracker

The Reputation Tracker is a simple tool built for Foundry VTT V13 to provide a clean interface for tracking the party's reputation. Useful for campaigns such as Kingmaker or similar (when that is upgraded to V13) to track reputation without having to maintain multiple journals or character notes.

[GitHub Repo](https://github.com/dade/pf2e-rep-tracker) - [Demo Video (below)](#demo)

# Learnings

Big load of learnings, actually. This is the first project that I developed for Foundry V13, and especially using their ApplicatinV2 structure. I used a couple of inspirations on how to better organize my code from other creators like MythicPalette and how they organize initialization of settings, managing namespaces, and general tidy codebase (whose work with quest tracking I may try to recreate in V13).

Overall, it was a solid 5-6 days of trying to solve problems, learn the data structure of FoundryVTT&mdash;which I know a little of already&mdash;and applying it to a full project from start to finish. It was a lesson in how to handle JS classes, screaming into the void when working with tabs did not go to plan (and still uses hacky code to make even remotely functional), and building a system that I later reworked from the ground up to use a different data storage system.

In all, it was a really good project to keep me sane while searching for work, and gave me a new skill and love for Javascript... though I'm still not a fan of its error handling, but that's for another day!

# More To Do
There are parts I still haven't gotten around to implementing, and that will come with time. I write this page at the point I uploaded v1.1.0 to Github, so I hope that in the coming months and with it being used by myself and friends who GM on FoundryVTT, I can add more features and improvements to it.

Immediately, I know I want to do the following:
- Figure out how keybindings work in FVTT and set up a toggle bind to open/close the rep tracker
- Set up a "Visible to Players" logic that hides the editing controls, but shows the reputation
    - Module setting already exists, logic does not
- Set up Influence milestones on NPC reputations
- Allow drag/drop of NPC sheets to the NPC tab to auto-populate data

## Quick Video Demo {#demo}
This was recorded during development. Some changes may have occurred since.

<video src="./assets/demo.mp4" width="640" controls></video>
