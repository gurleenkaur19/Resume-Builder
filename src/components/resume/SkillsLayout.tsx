import { Skill } from "@/type";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Loader } from "lucide-react";

const SkillsLayout = () => {
  const { data: session } = useSession();
  const [forms, setForms] = useState<Skill[]>([
    { name: "Temp", proficiency: "Low", percentage: 70 },
  ]);
  const [formId, setFormId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false); // Add a state for initial data fetching

  const handleAddSkills = () => {
    const newForm = {
      name: "NextJs",
      proficiency: "Pro",
      percentage: 80,
    };
    setForms([...forms, newForm]);
  };

  const handleDeleteSkill = (index: number) => {
    if (forms.length > 1) {
      const updatedForms = forms.filter((_, i) => i !== index);
      setForms(updatedForms);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold mb-4">Skills</h1>
        <div className="flex justify-end gap-2">
          {formId ? (
            <Button className="mb-2" disabled={loading}>
              {loading ? "Updating..." : "Update"}
              {loading && <Loader size="sm" className="ml-2" />}
            </Button>
          ) : (
            <Button className="mb-2" disabled={loading}>
              {loading ? "Saving..." : "Save"}
              {loading && <Loader size="sm" className="ml-2" />}{" "}
            </Button>
          )}
          <Button
            variant="secondary"
            className="mb-2"
            onClick={handleAddSkills}
            disabled={loading}
          >
            Add Skill
          </Button>
        </div>
      </div>
      {fetching ? ( // Show loader while fetching data
        <div className="flex justify-center items-center h-40">
          <Loader className="w-24 h-24 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {forms.map((form, index) => (
            <React.Fragment key={index}>
              <div className="mb-4">
                <Label className="block font-medium text-md">
                  Name {index + 1}:
                </Label>
                <Input
                  className="w-full border rounded-md shadow-sm"
                  type="text"
                  placeholder="Skill Name"
                  value={form.name}
                  onChange={(e) => {
                    setForms(
                      forms.map((skill, i) =>
                        i === index ? { ...skill, name: e.target.value } : skill
                      )
                    );
                  }}
                />
              </div>
              <div className="mb-4">
                <Label className="block font-medium text-md">
                  Proficiency {index + 1}:
                </Label>
                <Input
                  className="w-full border rounded-md shadow-sm"
                  type="text"
                  placeholder="Proficiency"
                  value={form.proficiency}
                  onChange={(e) => {
                    setForms(
                      forms.map((skill, i) =>
                        i === index
                          ? { ...skill, proficiency: e.target.value }
                          : skill
                      )
                    );
                  }}
                />
              </div>
              <div className="mb-4">
                <Label className="block font-medium text-md">
                  Percentage {index + 1}:
                </Label>
                <Input
                  className="w-full border rounded-md shadow-sm"
                  type="number"
                  placeholder="Percentage"
                  value={form.percentage}
                  min={0}
                  max={100}
                  onChange={(e) => {
                    setForms(
                      forms.map((skill, i) =>
                        i === index
                          ? {
                              ...skill,
                              percentage: parseInt(e.target.value),
                            }
                          : skill
                      )
                    );
                  }}
                />
              </div>
              {forms.length > 1 && (
                <Button
                  variant="destructive"
                  className="mt-2"
                  onClick={() => handleDeleteSkill(index)}
                  disabled={loading} // Disable delete button during saving/updating
                >
                  Delete
                </Button>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsLayout;
