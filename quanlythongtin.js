var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var employeeList = [];
var Employee = /** @class */ (function () {
    function Employee(fullName, gender, birthday, email, phoneNumber) {
        this.fullName = "";
        this.gender = Gender.OTHER;
        this.email = "";
        this.phoneNumber = "";
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
employeeList.push(new Employee("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "nguyenvana@gmail.com", "01234566789"));
employeeList.push(new Employee("Nguyen Van B", Gender.FEMALE, new Date("1991-08-10"), "nguyenvanb@gmail.com", "01234566789"));
employeeList.push(new Employee("Nguyen Van C", Gender.OTHER, new Date("1981-07-11"), "nguyenvanc@gmail.com", "01234566789"));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
