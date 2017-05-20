import MyService from './../services/my.service';

export default class navItemInner {
    
    constructor(private myService: MyService, scope){
        
    }
    do(){
        this.myService.do();
    }
    static Link(scope, element, attrs){
        element.css({color:'red'});
    }
    static Factory(){
        return {
            replace:true,
            scope: {
                text: '=',
                icon:'@',
                color:'@',
            },
            link: navItemInner.Link,
            controller: navItemInner,
            controllerAs: 'navItemCtrl',
            templateUrl: 'views/directives/navitem.inner.html'
        }
    }
}

navItemInner.$inject = ['myService', '$scope'];