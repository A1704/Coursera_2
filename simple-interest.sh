#!/bin/bash

# Simple Interest Calculator
# This script calculates simple interest based on user input
# Formula: Simple Interest = (Principal × Rate × Time) / 100

echo "=========================================="
echo "   Simple Interest Calculator"
echo "=========================================="
echo ""

# Get Principal Amount from user
echo "Enter Principal Amount (in dollars):"
read principal

# Validate principal input
if ! [[ "$principal" =~ ^[0-9]+\.?[0-9]*$ ]]; then
    echo "Error: Principal must be a valid number"
    exit 1
fi

# Get Rate of Interest from user
echo "Enter Rate of Interest (in percentage):"
read rate

# Validate rate input
if ! [[ "$rate" =~ ^[0-9]+\.?[0-9]*$ ]]; then
    echo "Error: Rate must be a valid number"
    exit 1
fi

# Get Time Period from user
echo "Enter Time Period (in years):"
read time

# Validate time input
if ! [[ "$time" =~ ^[0-9]+\.?[0-9]*$ ]]; then
    echo "Error: Time must be a valid number"
    exit 1
fi

echo ""
echo "=========================================="
echo "              CALCULATION RESULTS"
echo "=========================================="

# Calculate Simple Interest: SI = (P × R × T) / 100
simple_interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

# Calculate Total Amount: Total = Principal + Simple Interest
total_amount=$(echo "scale=2; $principal + $simple_interest" | bc)

# Display Results
echo "Principal Amount:    \$$principal"
echo "Rate of Interest:    $rate%"
echo "Time Period:         $time years"
echo "=========================================="
echo "Simple Interest:     \$$simple_interest"
echo "Total Amount:        \$$total_amount"
echo "=========================================="
echo ""
echo "Calculation Complete!"
