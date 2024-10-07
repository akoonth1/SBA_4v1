console.log("Hello, World! script.mjs working");

import { displayClock  as clock} from "./clock.mjs";
import { getComic as comic} from "./xkcdapi.mjs";
import {getAPOD} from "./apod.mjs";
import {fetchNews} from "./news.mjs";
import {fetchFeaturedArticle} from "./wiki.mjs";
import {getQuote} from "./quote.mjs";
import {getWeather} from "./weather.mjs";
import { getpun } from "./index.mjs";   

getAPOD();
clock();
comic();
fetchNews();
fetchFeaturedArticle();
getQuote();
getWeather();
getpun();
