import MyService from './services/my.service';

let mod = angular.module('services', []);

mod.service('myService', MyService);

export default mod;