import React from "react";
import SearchFilterCard from "./SearchFilterCard";

type SearchFilterCardProps = {
  accommodation: any;
};

const SearchFilterContainer = ({ accommodation }: SearchFilterCardProps) => {
  console.log(accommodation);

  return (
    <div>
      {accommodation?.map((item: any) => {
        return <SearchFilterCard key={item.id} details={item} />;
      })}
    </div>
  );
};

export default SearchFilterContainer;
