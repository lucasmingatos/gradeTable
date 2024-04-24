import { StudentTable } from "./components/StudentTable";
import { students } from "./data/students";

const Page = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5x1 mb-5">Lista de Estudantes</h1>
      <StudentTable students = {students}/>
    </div>
  );
}

export default Page;