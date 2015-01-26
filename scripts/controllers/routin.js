angular.module('schoolApp').controller('routinCtrl', function ($scope) {

  var teachers = [{name: 'Ratna Dey', shortName: 'RD'},
    {name: 'Sanchita Das', shortName: 'SD'},
    {name: 'Sumita Ghosh', shortName: 'SG'},
    {name: 'Moupiya Pal', shortName: 'MP'},
    {name: 'Dipa Das', shortName: 'DD'},
    {name: 'Sanchari Chatterjee', shortName: 'SC'},
    {name: 'Chandana Chakraborty', shortName: 'CC'},
    {name: 'Suniya Das', shortName: 'SD'},
    {name: 'Ankita Dey', shortName: 'AD'},
    {name: 'Poulami Banarjee', shortName: 'PB'},
    {name: 'Somdatta Banarjee', shortName: 'SB'},
    {name: 'Anurag Sutradhar', shortName: 'AS'},
    {name: 'Sakti Pal', shortName: 'SP'},
    {name: 'Rituparna Das', shortName: 'RD'}];

  var classes = [{name: 'II - A1'},
    {name: 'II - A2'},
    {name: 'II - B1'},
    {name: 'II - B2'},
    {name: 'III - A'},
    {name: 'III - B1'},
    {name: 'III - B2'},
    {name: 'IV - A'},
    {name: 'IV - B1'},
    {name: 'IV - B2'},
    {name: 'V - A'},
    {name: 'V - B'}];

  var subjects = [{name: 'Bengali I', count: 5},
    {name: 'Bengali II', count: 3},
    {name: 'English I', count: 5},
    {name: 'English II', count: 3},
    {name: 'Maths', count: 6},
    {name: 'SST', count: 4},
    {name: 'History', count: 2},
    {name: 'Science', count: 2},
    {name: 'Geography', count: 2},
    {name: 'GK', count: 2},
    {name: 'Computer', count: 2},
    {name: 'PT', count: 1},
    {name: 'Hindi', count: 2},
    {name: 'Drawing', count: 1}];

  var periodCount = 6;

  var periods = [
    {name: 1},
    {name: 2},
    {name: 3},
    {name: 4},
    {name: 5},
    {name: 6}
  ]

  var days = [{name: 'Monday'},
    {name: 'Tuesday'},
    {name: 'Wednesday'},
    {name: 'Thursday'},
    {name: 'Friday'},
    {name: 'Saturday'}];


  var getClassIdentifier = function (day, period, claz) {
    return day.name + ':' + period.name + ':' + claz.name;
  };

  var selection = {};

  _.each(days, function (day) {
    _.each(periods, function (period) {
      _.each(classes, function (claz) {
        selection[getClassIdentifier(day, period, claz)] = {
          subject: null,
          teacher: null,
          day: day,
          period: period,
          claz: claz
        }
      });

    });
  });

  var showSelection = function () {
    console.log($scope.routin.selection);
  };

  $scope.routin = {
    teachers: teachers,
    classes: classes,
    subjects: subjects,
    days: days,
    periodCount: periodCount,
    periods: periods,
    getClassIdentifier: getClassIdentifier,
    selection: selection,
    showSelection: showSelection
  };

});