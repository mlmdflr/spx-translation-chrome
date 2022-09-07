import { init as comInit } from "../google/com/js/index.js";
import { init as cnInit } from "../google/cn/js/index.js";

import { init as deeplComInit } from "../deepl/js/index.js";


switch (location.host) {
    case 'translate.google.com':
        comInit();
        break;
    case 'translate.google.cn':
        cnInit();
        break;
    case 'www.deepl.com':
        deeplComInit();
        break;
    default:
        break;
}