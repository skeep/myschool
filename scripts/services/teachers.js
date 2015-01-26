angular.module('schoolApp').service('teachers', function () {

  var teacherClassLimit = 26;
  var teachers = ['R Dey', 'S Das', 'S Ghosh', 'M Pal', 'D Das', 'S Chatterjee', 'TC Chakraborty', 'P Chakarborty', 'S Sengupta', 'S Das(2)', 'A Mondal', 'S Sutradhar', 'S Pal'];

  var teachers = _.map(teachers, function (teacher) {
    return {
      name: teacher,
      classTaking: 0,
      classLimit: teacherClassLimit
    }
  });

  return {
    getTeachers: teachers
  };

});







