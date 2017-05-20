import MyDirective from './directives/my.directive';
import navItem from './directives/navitem';
import navItemInner from "./directives/navitem.inner";
import navItemInnerRich from "./directives/navitem.inner.rich";

let mod = angular.module('directives', []);

mod.directive('myDrc', MyDirective.Factory);
mod.directive('navItem', navItem.Factory);
mod.directive('navItemInner', navItemInner.Factory);
mod.directive('navItemInnerRich', navItemInnerRich.Factory);

export default mod;