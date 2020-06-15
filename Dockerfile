FROM webdevops/php-apache:7.2-alpine

# Add project
ADD . /app

# Set web root
ENV WEB_DOCUMENT_ROOT /app/public

# Expose port
EXPOSE 80
