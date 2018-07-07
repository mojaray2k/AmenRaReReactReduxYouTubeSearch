# Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/mojaray2k/AmenRaReReactReduxYouTubeSearch.git
> cd AmenRaReReactReduxYouTubeSearch
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/mojaray2k/AmenRaReReactReduxYouTubeSearch/archive/master.zip) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

### Get A Google Developer API Key in order to Search Videos from YouTube
1. Create a `vars.js` file in your `src` directory.
2. Go to [Google Developers Console](https://console.developers.google.com/apis/library/youtube.googleapis.com) to enable the **YouTube Data API v3**
3. After Enabling the API got to [Credentials](https://console.developers.google.com/apis/credentials) to actually retrieve your **Google API** key.
4. Then use it in your project like this:
* Inside of the `index.js`
```javascript
import { GOOGLE_API_KEY } from './vars';

const YOUTUBE_API_KEY = GOOGLE_API_KEY;
```
* Inside your `vars.js`
```javascript
// Sample API Key
const GOOGLE_API_KEY = `alkdfjasfjka;lskdfj;asldkjf;askdjfalfjdkajfsf`;
export {
  GOOGLE_API_KEY
}
```
