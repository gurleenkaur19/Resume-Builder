import { educationFormType } from "@/type";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import EducationForm from "./EducationForm";

const EducationLayout = () => {
  const { data: session } = useSession();
  const [forms, setForms] = useState<educationFormType[]>([]);
  const [loading, setLoading] = useState(false);
  const [updateNumber, setUpdateNumber] = useState<number>(0);

  const handleAddEducation = () => {
    const counter = forms.length ? forms[forms.length - 1].formNumber + 1 : 1;
    const newForm: educationFormType = {
      _id: "",
      userId: session?.user._id,
      formNumber: counter,
      institution: "",
      degree: "",
      startDate: new Date(),
      endDate: new Date(),
      description: "",
    };
    setForms([...forms, newForm]);
  };

  const handleDeleteEducation = (formId: string) => {
    const updatedForms = forms.filter((form) => form._id !== formId);
    setForms(updatedForms);
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button
          variant="secondary"
          className="mb-2"
          onClick={handleAddEducation}
        >
          Add New Education
        </Button>
      </div>

      {loading && (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      {forms.length > 0
        ? forms.map((form) => (
            <EducationForm
              educationFormData={form}
              key={form._id || form.formNumber}
              handleDeleteEducation={handleDeleteEducation}
              setUpdateNumber={setUpdateNumber}
            />
          ))
        : !loading && (
            <div>
              No education data found. Please add new education details.
            </div>
          )}
    </div>
  );
};

export default EducationLayout;
