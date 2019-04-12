import angular from 'angular';
import angularMeteor from 'angular-meteor';
import issueList from '../imports/components/issueList/issueList';

angular.module('painkiller', [
  angularMeteor,
  issueList.name
]);