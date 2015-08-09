---
title: "Chrome Spellchecker"
shorthand: "spellcheck"
layout: project
summary: multilingual spellchecking
---
For my internship at Google in the summer of 2015 I was assigned one of Chrome's oldest issues. Chrome was only able to spellcheck with one language at a time which meant that multilingual users were constantly switching back and forth between languages. Enter Julius to save the day.

The spellchecking system is actually quite complex. There were 3 parts to the whole thing: the settings and context-menu UI, loading spellchecking dictionaries into memory, and writing a new spellchecking algorithm. Rewriting the algorithm was rather hairy because it was never built to consider that, one day, we might want to spellcheck multiple languages.

Given that I only speak English, I never realized how helpful something like this could be to people. Even though I won't be using the feature, it's nice to know that a few tens of millions of people will benefit from it.