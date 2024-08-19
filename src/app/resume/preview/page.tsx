"use client";
// pages/feature.tsx
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Loader } from "lucide-react";
import FullPdf from "@/components/Pdf/FullPdf";
const FeaturePage = () => {
  const { data: session } = useSession();

  const [userAllData, setUserAllData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `/api/user/${session?.user._id}/resume`
        );
        const data = response.data;
        if (data.success) {
          setUserAllData(data.data); // Set the fetched data to state
        } else {
          toast({
            title: "Education fetch failed",
            description: data.message || "Failed to fetch education details",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "An error occurred while fetching education details.",
          variant: "destructive",
        });
        console.error("Failed to fetch education details:", error);
      }
      setLoading(false);
    };

    if (session?.user._id) {
      fetchData();
    }
  }, [session?.user._id]);

  return (
    <div>
      <div className="flex justify-between mt-2 mx-5">
        <h1 className="text-center text-3xl">Preview Resume</h1>
        <Button>Generate PDF</Button>
      </div>
      <div className="m-4 rounded-md">
        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader className="w-24 h-24 animate-spin" />
            </div>
          ) : userAllData ? (
            <div className="p-8 grid  border rounded-xl">
              <FullPdf userAllData={userAllData} />
            </div>
          ) : (
            <div className="flex justify-center items-center h-64">
              <p className="text-lg text-gray-600">No data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
