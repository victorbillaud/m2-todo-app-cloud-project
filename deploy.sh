#!/bin/bash

# Script to deploy Kubernetes resources for the application

# Exit the script on any command with non 0 return code
set -e

echo "Deploying Database..."
kubectl apply -f db-statefulset.yaml
kubectl apply -f db-service.yaml
echo "Database deployed successfully."

echo "Deploying Backend..."
kubectl apply -f ./back/backend-deployment.yaml
kubectl apply -f ./back/backend-service.yaml
echo "Backend deployed successfully."

echo "Deploying Frontend..."
kubectl apply -f ./front/frontend-deployment.yaml
kubectl apply -f ./front/frontend-service.yaml
echo "Frontend deployed successfully."

echo "Setting up Ingress..."
kubectl apply -f ingress.yaml
echo "Ingress configured successfully."

echo "All resources have been deployed."
