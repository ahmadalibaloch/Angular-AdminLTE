export default class ControlSidebarComponent {
    constructor() { }
    $onInit(){
        //console.log('control sidebar init');
    }
    static Factory() {
        return {
            controller: ControlSidebarComponent,
            templateUrl: 'views/components/control-sidebar.html'
        };
    }
}