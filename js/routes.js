import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';
import Guidelines from './pages/Guidelines.js';
import NewSite from './pages/NewSite.js';

export default [
    { path: '/', component: NewSite },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
    { path: '/guidelines', component: Guidelines },
    { path: '/list', component: List },
];
