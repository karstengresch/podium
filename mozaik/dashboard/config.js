// Load environment variables from .env file if available
require('dotenv').load();

var config = {
    env:  'prod',

    host: '0.0.0.0',
    port: process.env.PORT || 8080,

    // Available themes:
    // + bordeau
    // + harlequin
    // + light-grey
    // + light-yellow
    // + night-blue
    // + snow
    // + yellow
    theme: 'harlequin',

    // clients configs
    api: {
        github: {
            baseUrl: 'https://api.github.com',
            token: ''
        }
    },

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 15000,

    dashboards: [

        // first dashboard
        {
            // 4 x 3 dashboard
            columns: 4,
            rows:    3,
            widgets: [
                {
                    type: 'github.user_badge',
                    user: 'sa-mw-dach',
                    columns: 1, rows: 1,
                    x: 0, y: 0
                },
                {
                    type: 'github.repository_contributors_stats',
                    repository: 'sa-mw-dach/podium',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'mozaik.inspector',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'embed.markup',
                    title: 'Conference Center',
                    content: '<center><a href="https://meet-jitsi.apps.cloud.example.com/Plenum" target="_blank" rel="noreferrer noopener"><img src="https://cdn.pixabay.com/photo/2013/02/20/01/04/meeting-83519__340.jpg" alt="Main Podium" width="300" height="200"></a>  <a href="https://meet-jitsi.apps.cloud.example.com/RoomA" target="_blank" rel="noreferrer noopener"><img src="https://cdn.pixabay.com/photo/2015/07/02/09/52/interior-design-828545__340.jpg" alt="Meeting Room" width="300" height="200"></a>  <a href="https://meet-jitsi.apps.cloud.example.com/Lobby" target="_blank" rel="noreferrer noopener"><img src="https://cdn.pixabay.com/photo/2019/11/29/08/34/space-4660847__340.jpg" alt="Lobby" width="300" height="200"></a></center>',
                    columns: 2, rows: 1,
                    x: 1, y: 1
                },
                {
                    type: 'time.clock',
                    columns: 1, rows: 1,
                    x: 3, y: 0
                },
                {
                    type: 'embed.markup',
                    title: 'Kanban Board',
                    content: '<center><a href="https://wekan-jitsi.apps.cloud.example.com/" target="_tab" rel="noreferrer noopener"><img src="https://wekan.github.io/wekan-logo.svg" alt="Podium Kanban" width="300" height="200"></a></center>',
                    columns: 1, rows: 1,
                    x: 0, y: 1
                },
                {
                    type: 'embed.markup',
                    title: 'Sketch Boards',
                    content: '<ul><li><a href="https://etherpad-jitsi.apps.cloud.example.com/" target="_tab" rel="noreferrer noopener">New Pad</a></li> <li><a href="https://etherpad-jitsi.apps.cloud.example.com/p/Podium" target="_tab" rel="noreferrer noopener">General Podium Pad</a></li> <li><a href="https://etherpad-jitsi.apps.cloud.example.com/p/Draft" target="_tab" rel="noreferrer noopener">Draft Pad</a></li> <li><a href="https://etherpad-jitsi.apps.cloud.example.com/p/ToDo" target="_tab" rel="noreferrer noopener">ToDo Pad</a></li></ul>',
                    columns: 1, rows: 2,
                    x: 3, y: 1
                },
                {
                    type: 'embed.markup',
                    title: 'Knowledge Base',
                    content: '<center><a href="http://dokuwiki-jitsi.apps.cloud.example.com/" target="_tab" rel="noreferrer noopener"><img src="https://www.dokuwiki.org/_media/wiki:dokuwiki-128.png" alt="Podium Wiki" width="300" height="200"></a> <a href="https://openpracticelibrary.com/" target="_tab" rel="noreferrer noopener"><img src="https://d33wubrfki0l68.cloudfront.net/337d8258554af2343978fdbcd7e854298ab8062c/e7414/images/logo.svg" alt="Open Practice Library" width="300" height="200"></a></center>',
                    columns: 2, rows: 1,
                    x: 1, y: 2
                },
                {
                    type: 'embed.markup',
                    title: 'Chat',
                    content: '<ul><li><a href="https://chat-mattermost.apps.cloud.example.com" target="_blank" rel="noreferrer noopener">New Chat</a></li></ul>',
                    columns: 1, rows: 1,
                    x: 0, y: 2
                }
            ]
        },

    ]
};

module.exports = config;
