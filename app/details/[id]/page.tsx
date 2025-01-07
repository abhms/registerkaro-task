"use client";
import React, { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import Header from "@/components/Header";
import HomeCarousel from "@/components/HomeCarousel";
import CompanyDetails from "@/components/CompanyDetails";

interface Company {
  id: string;
  name: string;
  description: string;
  directorname: string;
}

const Details = () => {
  const [companyData, setCompanyData] = useState<Company | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [id, setId] = useState<string | null>(null);
  console.log(id);
  useEffect(() => {
    // Extract the `id` from the URL using window.location
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split("/"); // Split URL by slashes
    const companyId = urlParts[urlParts.length - 1]; // The `id` is assumed to be the last part of the URL
    setId(companyId); // Set the `id` in state

    if (companyId) {
      const fetchCompanyData = async () => {
        try {
          const response: AxiosResponse<{ data: Company }> = await axios.get(
            `/api/companies/${companyId}`
          );
          setCompanyData(response.data.data); // Set company data
          setLoading(false);
        } catch (err) {
          const axiosError = err as AxiosError;
          setLoading(false);
          console.error(axiosError);
        }
      };

      fetchCompanyData();
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <HomeCarousel />
      {companyData && <CompanyDetails company={companyData} />}
    </div>
  );
};

export default Details;
