export default class HomeComponent {
    message: string;
    constructor() {
        this.message = 'Welcome';
    }

    $onInit(){}

    static Factory() {
        return {
            controller: HomeComponent,
            templateUrl: 'views/components/home.html'
        };
    }
}