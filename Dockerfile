# Start from a small, official image that already contains the nginx web server
FROM nginx:stable-alpine
# Copy our website into the folder nginx serves files from
COPY site/ /usr/share/nginx/html/
# Document that the web server listens on port 80 inside the container
EXPOSE 80