---
title: "Visual Logic Circuits"
shorthand: "vlc"
layout: default
---
This was a project for a graduate student's Psychology research study involving how the brain processes "visual logic circuits". In electronics, digital logic circuits involve logic gates (AND, OR, NOT, etc.) which HI-LO input voltages to HI-LO output voltages based on rules. The Visual Logic Circuit study defined logic circuits visually using blocks that appeared to protrude out or into the screen. The goal of the study was to determine how the brain interprets the "output" of different gates based on the input and shading of different blocks.

My role in the study was to develop software to render these circuits. The program was written in Java and relied on a formatted input file to define what the output image should look like. File I/O was integrated into the design so images of the canvas could be directly exported.

The Visual Logic Circuit software was written to allow the study to be carried out as soon as possible so certain features, such as interactively placing blocks, were left out for my version of the project. However, these features were considered in the design to make them as easy to add as possible.