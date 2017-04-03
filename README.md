# react-server-app
React app and Node server for basket signups with localization.

## To use and configure
Create a new repo.

Clone the new repo to your local system.

Clone this repo into your local system.

Copy all files except `.git` from this clone into your new repo clone.

Start making changes to `src/` `locales/` and `less/`.

You'll eventually want to update `SOURCEURL` and `FULL_SUBDOMAIN` to be your new site's url/domain, once you know what that is. These are defaulted to example.com, and https://example.com.

## Environment Variables

You can configure the following environment variables:

|Variable|About|
|--------|-----|
| SUPPORTED_LOCALES | If set to '*' all locales under `intl-config.js` file for `src` will be enabled otherwise it expects array of locales.
| FULL_SUBDOMAIN | Used for page title and optimizely.
| SOURCEURL | The URL to send to Basket during a signup.
| PORT | Port for the app, defaults to 4141, feel free to change this to any 4 digit number.
| APPLICATION_URI | For local dev, this is just http://localhost:4141 unless you changed PORT, which if you did you should update the port here to match.

## Setup

```
$> npm install
$> cp sample.env .env
```

## To run

```
$> npm start
```

Your server should now be running on localhost:4141, unless you changed the PORT and APPLICATION_URI value in `.env`


