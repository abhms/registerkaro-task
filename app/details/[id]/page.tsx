"use client";
import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import Header from "@/components/Header";
import HomeCarousel from "@/components/HomeCarousel";
import CompanyDetails from "@/components/CompanyDetails";
import { useRouter } from "next/router";

interface Company {
  id: string;
  name: string;
  description: string;
  directorname: string;
}

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  const [companyData, setCompanyData] = useState<Company | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;

    const fetchCompanyData = async () => {
      try {
        const response = await axios.get<{ data: { data: Company } }>(
          `/api/companies/${id}`
        );

        //@ts-expect-error Response data format may not align with TypeScript expectations
        setCompanyData(response.data.data);
        setLoading(false);
      } catch (err) {
        const axiosError = err as AxiosError;

        setLoading(false);
        console.error(axiosError);
      }
    };

    fetchCompanyData();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <HomeCarousel />
      {companyData && <CompanyDetails company={companyData} />}{" "}
    </div>
  );
};

export default Details;
