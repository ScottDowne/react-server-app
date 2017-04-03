# react-server-app
React app and Node server for basket signups with localization.

## To use and configure
Create a new repo.

Clone the new repo to your local system.

Clone this repo into you local system.

Copy all files cept `.git` from this clone into your new repo clone.

You'll need to update `SOURCEURL` and `FULL_SUBDOMAIN` to be your new site's url/domain, once you know what that is.

Start making changes to src/ locales/ and less/.


## Environment Variables

You can configure the following environment variables:

|Variable|About|
|--------|-----|
| OPTIMIZELY_ID | Optimizely Project ID (not a secret) e.g. '206878104' |
| OPTIMIZELY_ACTIVE | If set to 'yes' (String) the project will include Optimizely snippet in the page load |
| SUPPORTED_LOCALES | If set to '*' all locales under `intl-config.js` file for `src` will be enabled otherwise it expects array of locales.
| FULL_SUBDOMAIN | Used for page title and optimizely.
| SOURCEURL | The URL to send to Basket during a signup.

## Setup

```
$> npm install
$> cp sample.env .env
```

## To run

```
$> npm start
```


