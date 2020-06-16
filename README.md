# docker-php
Example of a PHP/Apache site running in Docker, ready to pushed to Elastic Beanstalk.

## Local Development

### Requirements

- [Composer](https://getcomposer.org/download/)
- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/products/docker-desktop)

### Getting Started

- clone the repo
- run `composer install` (if applicable)
- run `npm install`
- run `npm run docker:up` to launch the development container
- you should now be able to view the site at http://localhost

### More Options

- to run on a different port, run `PORT=7000 npm run docker:up`
- to launch a terminal shell, run `npm run docker:shell` while the container is running
- to launch the production container, run `npm run docker:prod`

### Container management:

- `npm run docker:list` to see current containers
- `npm run docker:kill` to stop and destroy current containers
- `npm run docker:img` to see current images
- `npm run docker:clear` to delete all images

Also included are example Docker Compose YAML files and `dc:` tasks which can be used as an alternative approach.

## Tests

A set of simple tests powered by [Mocha](https://mochajs.org/) and [Unit.js](https://unitjs.com) checks to see if the site is running, with these tasks:

- `npm run test` to check your local dev site at http://localhost:8000 (use the `PORT` env to override)
- `npm run test:staging` to check the EB staging url
- `npm run test:prod` to check the production site

## More Info

- The dev container is based on the `webdevops/php-apache` image, [configuration info here](https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/php-apache.html#environment-variables)
- [AWS EB Resources](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/RelatedResources.html?icmpid=docs_elasticbeanstalk_console)
- [EB Docker config](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/single-container-docker-configuration.html)
