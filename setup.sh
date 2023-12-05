#!/bin/bash

# Setup minikube

echo "Setting up minikube..."
minikube start
minikube addons enable ingress
minikube addons enable ingress-dns

echo "Minikube setup successfully."

echo "Starting tunnel for ingress..."
minikube tunnel