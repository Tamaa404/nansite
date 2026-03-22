---
title: Autonomous Robot using ROS 2
date: 2026-03-15
description: A robotics project built with ROS 2 for autonomous navigation.
tags: [Robotics, ROS2, Python, Hardware]
featured: true
---

## Project Description

This project focuses on building an autonomous robot capable of navigating complex environments using ROS 2 (Robot Operating System 2). The robot uses LIDAR sensors and computer vision for perception and decision-making.

## Architecture

- **Sensors**: LIDAR, IMU, Camera
- **Computation**: Jetson Orin Nano
- **Middleware**: ROS 2 Humble
- **Navigation**: Nav2 Stack

## Perception Pipeline

1. LIDAR generates point cloud data
2. Camera feeds visual information
3. Sensor fusion creates unified world model
4. Path planning algorithm computes safe routes

## Results

Successfully navigated through multiple real-world scenarios with 95% success rate. Average computation time: 50ms per decision cycle.
