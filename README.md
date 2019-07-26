# [csarko.sh](https://csarko.sh) &middot; [![CircleCI](https://img.shields.io/circleci/build/github/csarkosh/csarko.sh.svg)](https://circleci.com/gh/csarkosh/csarko.sh) [![Dockerhub Status](https://img.shields.io/docker/cloud/build/csarko/node_terraform_awscli?label=ci%20image%20build)](https://hub.docker.com/r/csarko/node_terraform_awscli/builds) [![Mozilla Observability](https://img.shields.io/mozilla-observatory/grade/csarko.sh?label=mozilla%20observatory&publish)](https://observatory.mozilla.org/analyze/csarko.sh) [![Website Status](https://img.shields.io/website/https/csarko.sh.svg)](https://csarko.sh)

The purpose of this project is to demonstrate my cdn-serverless hybrid architecture, provide a web interface overview of my public GitHub projects, and showcase my ability to build web apps.

* **Fully Automated:** Builds and deployments are fully automated and are intiated from code changes pushed to the master branch at this git origin. The automated builds and deployments include the CI image for [CircleCI](https://circleci.com/) to run builds and deployments, the [create-react-app](https://facebook.github.io/create-react-app/) build for the web interface, and various lambdas for serving HTTP requests and scraping web data.

* **Immutable Infrastructure:** All cloud infrastructure was developed and committed in code using [terraform](https://www.terraform.io/). This, paired with a VCS like [git](https://git-scm.com/), made it easy to apply and revert infrastructure changes.

* **Responsive & Accessible:** The web interface is fully keyboard accessible, and collapses from a desktop view into a native-app-looking, mobile view. This was done by using [create-react-app](https://facebook.github.io/create-react-app/) for desktop/mobile tooling and [material-ui](https://material-ui.com/) for prebuilt, accessible, web components.


[View this application's publically-available, web interface.](https://csarko.sh)
