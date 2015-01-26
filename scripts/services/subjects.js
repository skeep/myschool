angular.module('schoolApp').service('subjects', function (classes) {

  var subjects = [
    {name: 'Bengali I', count: 5},
    {name: 'Bengali II', count: 3},
    {name: 'English I', count: 5},
    {name: 'English II', count: 3},
    {name: 'Maths', count: 6},
    {name: 'EVS', count: 4},
    {name: 'History', count: 2},
    {name: 'Science', count: 2},
    {name: 'Geography', count: 2},
    {name: 'GK', count: 2},
    {name: 'Computer', count: 2},
    {name: 'PT', count: 1},
    {name: 'Hindi', count: 2},
    {name: 'Drawing', count: 1}
  ];



  var subjects = _.map(subjects, function (subject) {
    return {
      name: subject.name,
      classes: _.map(classes, function (claz) {
        return {
          name: claz,
          count: getClassCount(subject, claz)
        }
      })
    }
  });

  return {
    getSubjects : subjects
  }

});







