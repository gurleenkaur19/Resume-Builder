import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { projectFormType } from "@/type";
import ProjectForm from "./ProjectForm";
import { LoaderCircleIcon } from "lucide-react";

const ProjectLayout = () => {
  const { data: session } = useSession();
  const [forms, setForms] = useState<projectFormType[]>([]);
  const [loading, setLoading] = useState(false);
  const [updateNumber, setUpdateNumber] = useState<number>(0);

  const handleAddProject = async () => {
    const counter = forms.length ? forms[forms.length - 1].formNumber + 1 : 1;
    const newForm = {
      _id: "",
      userId: session?.user._id,
      formNumber: counter,
      title: "Project Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      startDate: new Date(),
      endDate: new Date(),
      technologies: ["Nextjs", "NestJs", "mongoDB"],
      url: "https://github.com/yashpatel521/nextjs-blog",
    };
    setForms([...forms, newForm]);
  };

  const handleDeleteProjectForm = async (formId: string) => {
    const updatedForms = forms.filter((form) => form._id !== formId);
    setForms(updatedForms);
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button variant="secondary" className="mb-2" onClick={handleAddProject}>
          Add New Project
        </Button>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <LoaderCircleIcon className="animate-spin" />
        </div>
      ) : forms.length === 0 ? (
        <div className="text-center text-muted-foreground">
          No projects available.
        </div>
      ) : (
        forms.map((form) => (
          <ProjectForm
            projectFormData={form}
            key={form.formNumber}
            handleDeleteProjectForm={handleDeleteProjectForm}
            setUpdateNumber={setUpdateNumber}
          />
        ))
      )}
    </div>
  );
};

export default ProjectLayout;
