---
title: "VGA Output"
shorthand: "vga"
layout: project
summary: VGA protocol implementation
---
The goal for this project was simple but it wasn't easy to accomplish. We wanted to display images on a CRT by actually creating software and hardware to implement the VGA protocol. Initially we thought we might be able to actually display a picture on the terminal. When it was clear that that was probably not going to happen we settled on a fuzzy, multi-colored ball that bounced around the screen.

Why was this difficult? Because everything needs to be fast to make this protocol work. VGA is defined by a certain HI-LO signal and the signal needs to be HI for a certain amount of time and LO for another for the signal to mean anything. Those HI-LO times are pretty small too. The hardware needed to be quick and we had to do fundamental things in more complicated ways (ie. PCA instead of just adding two numbers) to squeeze as much speed out of the system as possible. But in the end, we drew colors and shapes so that was pretty sweet.