import components from './components';
import directives from './directives';
import services from './services';
import config from './config';

let app = angular.module('angular-admin-lte', ['ui.router']);

app.config(config);

angular.bootstrap(document.body, [app.name, components.name, directives.name, services.name], {
    strictDi: true
});