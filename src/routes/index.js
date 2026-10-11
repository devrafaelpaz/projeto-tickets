import { tickets } from './tickets.js';
import { parseRouthPath } from '../utils/parseRouthPath.js';

export  const routes = [...tickets].map((route) => ({
  ...route,

  path: parseRouthPath(route.path),
  

}))