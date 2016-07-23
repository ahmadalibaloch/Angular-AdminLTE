import MyService from './../services/my.service';

export default class MyDirective {
    
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
            scope: {
                name: '='
            },
            link: MyDirective.Link,
            controller: MyDirective,
            controllerAs: 'myDrc',
            template: `name: {{name}} <br> <button ng-click="myDrc.do()">service.do</button>`
        }
    }
}

MyDirective.$inject = ['myService', '$scope'];