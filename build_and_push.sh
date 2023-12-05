#!/bin/bash

# Script to build and push Docker images to Docker Hub

# Exit the script on any command with non 0 return code
set -e

# Set your Docker Hub username
DOCKER_USERNAME="victorbillaud" # Replace with your Docker Hub username

# Ensure that you are in the base directory of your project
BASEDIR=$(dirname "$0")
cd $BASEDIR

# Build and Push Backend Docker Image
echo "Building and pushing Backend Docker Image..."
cd back # Replace with the actual path to your backend Dockerfile
docker build -t $DOCKER_USERNAME/todo-backend:latest .
docker push $DOCKER_USERNAME/todo-backend:latest

# Navigate back to the base directory
cd $BASEDIR

# Build and Push Frontend Docker Image
echo "Building and pushing Frontend Docker Image..."
cd ../front # Replace with the actual path to your frontend Dockerfile
docker build -t $DOCKER_USERNAME/todo-frontend:latest .
docker push $DOCKER_USERNAME/todo-frontend:latest

echo "Images pushed to Docker Hub successfully."

