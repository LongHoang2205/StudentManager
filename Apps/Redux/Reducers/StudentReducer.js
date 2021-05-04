import { ADD_STUDENT, EDIT_STUDENT, REMOVE_STUDENT } from "../Actions/type";
import { Images } from "../../Themes";

const initialState = {
  addStudent: [
    {
      id: 1,
      name: "Hoang Vu Long",
      email: "hoangvulong2205@gmail.com",
      phone: "0123456789",
      gender: "male",
    },
  ],
};

export default function (student = initialState, action) {
  // new task nay bang voi task init
  const newStudent = student.addStudent ? student.addStudent : [];
  switch (action.type) {
    case ADD_STUDENT:
      console.log(action.payload);
      newStudent.push({
        // id se bang do dai cua mang + 1 (se khong bh trung nhau)
        id: student.addStudent.length + 1,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
      });
      return {
        addStudent: newStudent,
      };
    case REMOVE_STUDENT:
      console.log("remove todo:", action.payload);
      const removeId = action.payload.item.id;
      const removeTodoList = newStudent.filter((x) => {
        if (x.id !== removeId) {
          return x;
        }
      });
      return {
        addStudent: removeTodoList,
      };
    case EDIT_STUDENT:
      console.log("edit todo", action.payload.item);
      const studentIdEdit = action.payload.item.id;
      const nameEdit = action.payload.name;
      const emailEdit = action.payload.email;
      const phoneEdit = action.payload.phone;
      const genderEdit = action.payload.gender;
      console.log("day la item:", action.payload.item);
      const editMapList = newStudent.map((item) => {
        if (item.id === studentIdEdit) {
          return {
            item,
            name: nameEdit,
            email: emailEdit,
            phone: phoneEdit,
            gender: genderEdit,
          };
        } else {
          return item;
        }
      });
      console.log("edit map ne:", editMapList);
      return {
        addStudent: editMapList,
      };

    default:
      return student;
  }
}
