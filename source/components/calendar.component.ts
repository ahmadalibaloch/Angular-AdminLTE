export default class CalendarComponent {
    constructor() { }
    static Factory() {
        return {
            controller: CalendarComponent,
            templateUrl: 'views/components/calendar.html'
        };
    }
}