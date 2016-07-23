export default class HeaderComponent {
    constructor() { }
    static Factory() {
        return {
            controller: HeaderComponent,
            templateUrl: 'views/components/header.html'
        };
    }
}