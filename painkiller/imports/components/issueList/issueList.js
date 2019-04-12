import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html';

class IssueListCtrl {
    constructor() {
        this.tasks = [{
            text: 'This is task 1'
        }, {
            text: 'This is task 2'
        }, {
            text: 'This is task 3'
        }];
    }
}

export default angular.module('issueList', [
    angularMeteor
])
    .component('issueList', {
        templateUrl: 'imports/components/issueList/issueList.html',
        controller: IssueListCtrl
    });