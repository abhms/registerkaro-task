"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Define the structure of the company object
interface Company {
  id: string;
  name: string;
  // Add other fields as necessary (e.g., logo, description, etc.)
}

const Company = () => {
  const [data, setData] = useState<Company[]>([]); // State to store the list of companies
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const router = useRouter();

  // Static images for the companies
  const staticImages: Record<string, string> = {
    "Company ABC":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvr1VGc0PYf-A5A1PL2MUO9esNb0wvb01LEg&s",
    Twitter:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oiKjmdxpajfKpvD_BiEL5hot5VoH_AFaug&s",
    Apple:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTDJaq4mcRnPJS-0kA7lp4dcrBz-gCCRhew&s",
    Samsung:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-j4ZLwL9fakvT6MFXSLNddrnh_ssqcnVrg&s",
  };

  const fetchCompany = async () => {
    setLoading(true); // Set loading state to true before fetching

    try {
      const response = await fetch("/api/companies/get-all-companies");
      const result = await response.json();

      if (response.ok) {
        setData(result.data); // Update state with the fetched data
      } else {
        console.error("Error fetching companies:", result);
      }
    } catch (error) {
      console.error("Error fetching companies:", error);
    } finally {
      setLoading(false); // Set loading state to false after the request
    }
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <p className="text-lg text-gray-600 mb-12">
          Trusted by 100+ startups and freelance businesses
        </p>

        {loading ? (
          // Loader
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-8 mt-3 cursor-pointer">
            {data.map((company) => (
              <div
                key={company.id}
                className="flex items-center space-x-4"
                onClick={() => router.push(`/details/${company.id}`)}
              >
                {/* Circular Image */}
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-gray-200">
                  <img
                    src={staticImages[company.name]} // Use static image based on company name
                    alt={company.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Company Name */}
                <h2 className="text-lg font-semibold text-gray-700">
                  {company.name}
                </h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Company;
