export default class AppComponent {
    constructor() { }
    $onInit(){
        //console.log('app init');
    }
    static Factory() {
        return {
            controller: AppComponent,
            templateUrl: 'views/components/app.html'
        };
    }
}