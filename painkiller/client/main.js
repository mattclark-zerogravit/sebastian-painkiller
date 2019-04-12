import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/issueList/issueList';

angular.module('painkiller', [
  angularMeteor,
  todosList.name
]);