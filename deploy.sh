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

echo "Running database migrations with Prisma..."
# Waiting for the backend pod to be ready
kubectl wait --for=condition=ready pod -l app=backend --timeout=60s

# Executing prisma migrate deploy in the backend pod
BACKEND_POD=$(kubectl get pods -l app=backend -o jsonpath="{.items[0].metadata.name}")
kubectl exec $BACKEND_POD -- yarn prisma migrate deploy

echo "Database migrations applied successfully."

echo "Deploying Frontend..."
kubectl apply -f ./front/frontend-deployment.yaml
kubectl apply -f ./front/frontend-service.yaml
echo "Frontend deployed successfully."

echo "Setting up Ingress..."
kubectl apply -f ingress.yaml
echo "Ingress configured successfully."

echo "All resources have been deployed."
