"use client";
import React from "react";
import Link from "next/link";
import { useGetCountryQuery } from "../../redux/api/destination";

const Accommodation = () => {
  // const { data } = useGetCountryQuery("china");

  return (
    <div>
      <main>
        <h1>Accommodations</h1>
      </main>
    </div>
  );
};

export default Accommodation;
