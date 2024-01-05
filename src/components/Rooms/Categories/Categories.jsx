import { useSearchParams } from "react-router-dom";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  const [params, setParams] = useSearchParams();

  const categoryy = params.get("category");

  return (
    <div className="flex justify-between overflow-x-auto pt-8 pb-8 items-center">
      {categories.map((category) => (
        <CategoryBox
          key={category.label}
          label={category.label}
          icon={category.icon}
          selected = {categoryy === category.label}
        ></CategoryBox>
      ))}
    </div>
  );
};

export default Categories;
