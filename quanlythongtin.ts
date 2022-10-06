enum Gender{
    MALE,
    FEMALE,
    OTHER,
}
let employeeList: Employee[] = []
class Employee{
    fullName:string="";
    gender: Gender = Gender.OTHER;
    birthday?:Date;
    email:string="" ;
    phoneNumber:string="";

    constructor(fullName: string, gender: Gender, birthday: Date, email: string, phoneNumber: string) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
employeeList.push(new Employee("Nguyen Van A",Gender.MALE,new Date("1990-09-19"),"nguyenvana@gmail.com","01234566789"));
employeeList.push(new Employee("Nguyen Van B",Gender.FEMALE,new Date("1991-08-10"),"nguyenvanb@gmail.com","01234566789"));
employeeList.push(new Employee("Nguyen Van C",Gender.OTHER,new Date("1981-07-11"),"nguyenvanc@gmail.com","01234566789"));
function showEmployee(employee:Employee){
    console.log(employee);
}
employeeList.forEach(showEmployee);



