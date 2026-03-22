---
title: Python for Data Science
date: 2026-03-18
subject: Python
level: Intermediate
description: Master Python fundamentals and data science libraries like NumPy and Pandas.
---

## Python for Data Science

Python has become the de facto language for data science and machine learning. This module will guide you through essential Python concepts and the most popular data science libraries.

## Topics Covered

- NumPy for numerical computing
- Pandas for data manipulation
- Matplotlib for visualization
- Introduction to Scikit-learn

## NumPy Basics

NumPy (Numerical Python) is the foundation of scientific computing in Python.

```python
import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])

# Element-wise operations
arr = arr * 2

# Statistical functions
mean = np.mean(arr)
std = np.std(arr)
```

## Pandas for Data Handling

Pandas makes working with tabular data incredibly easy.

```python
import pandas as pd

# Load data
df = pd.read_csv('data.csv')

# Explore data
print(df.head())
print(df.describe())

# Filter and transform
filtered = df[df['age'] > 30]
df['salary_scaled'] = df['salary'] / 1000
```

## Visualization with Matplotlib

```python
import matplotlib.pyplot as plt

plt.scatter(df['age'], df['salary'])
plt.xlabel('Age')
plt.ylabel('Salary')
plt.title('Age vs Salary')
plt.show()
```

## Next Steps

Master these libraries and you'll be ready to tackle real-world data science projects! Move on to machine learning with scikit-learn after completing this module.
