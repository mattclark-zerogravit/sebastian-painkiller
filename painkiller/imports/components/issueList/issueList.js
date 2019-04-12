import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Issues } from '../../api/issues.js';

import template from './issueList.html';

class IssueListCtrl {
    constructor($scope) {
        $scope.viewModel(this);

        this.helpers({
            issues() {
                // Show newest issues at the top
                return Issues.find({}, {
                    sort: {
                        createdAt: -1
                    }
                });
            }
        })
    }

    addIssue(newIssue) {
        // Insert a issue into the collection
        Issues.insert({
            text: newIssue,
            createdAt: new Date
        });

        // Clear form
        this.newIssue = '';
    }

    setChecked(issue) {
        // Set the checked property to the opposite of its current value
        Issues.update(issue._id, {
            $set: {
                checked: !issue.checked
            },
        });
    }

    removeIssue(issue) {
        Issues.remove(issue._id);
    }
}


export default angular.module('issueList', [angularMeteor]).component('issueList', {
        templateUrl: 'imports/components/issueList/issueList.html',
        controller: ['$scope', IssueListCtrl]
    });
