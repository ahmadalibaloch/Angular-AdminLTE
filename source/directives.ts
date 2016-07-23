import MyDirective from './directives/my.directive';

let mod = angular.module('directives', []);

mod.directive('myDrc', MyDirective.Factory);

export default mod;