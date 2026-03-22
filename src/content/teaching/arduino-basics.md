---
title: Getting Started with Arduino
date: 2026-03-22
subject: Arduino
level: Beginner
description: Learn the basics of Arduino microcontrollers and create your first LED blink project.
---

## Welcome to Arduino!

Arduino is an open-source electronics platform that makes it easy to create interactive electronic projects. Whether you're interested in robotics, home automation, or IoT, Arduino is a great starting point.

## What You'll Learn

- How to set up the Arduino IDE
- Understanding digital and analog pins
- Writing and uploading your first sketch
- Using sensors and actuators

## Your First Project: LED Blink

The quintessential Arduino project! Let's make an LED blink.

### Components Needed

- Arduino board (Uno recommended)
- USB cable
- LED
- 220Ω resistor
- Breadboard and jumper wires

### Circuit Connection

1. Connect LED anode (long leg) to pin 13
2. Connect LED cathode (short leg) to GND through 220Ω resistor
3. Connect Arduino to computer via USB

### Code

```cpp
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);   // Turn on
  delay(1000);              // Wait 1 second
  digitalWrite(13, LOW);    // Turn off
  delay(1000);              // Wait 1 second
}
```

## Upload and Run

1. Select Tools > Board > Arduino Uno
2. Select the correct COM port
3. Click Upload
4. Watch your LED blink!

Congratulations! You've created your first Arduino project. Up next: reading sensor inputs.
