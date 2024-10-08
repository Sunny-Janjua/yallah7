import CategoryReference from './categoryModel.js';

// Create a parent category
const createParentCategory = async () => {
  const electronics = new CategoryReference({
    name: "Electronics",
    description: "All electronic items and gadgets",
    images: "path/to/electronics/image.jpg", // Provide a valid image path
  });
  await electronics.save();
  return electronics;
};

// Create a subcategory and link it to the parent category
const createSubcategory = async (parentCategoryId) => {
  const mobiles = new CategoryReference({
    name: "Mobile Phones",
    description: "Smartphones and feature phones",
    parent: parentCategoryId, // Reference to the parent category
    images: "path/to/mobiles/image.jpg", // Provide a valid image path
  });
  
  // Save the subcategory and add it to the parent category's subcategories
  await mobiles.save();
  await CategoryReference.findByIdAndUpdate(parentCategoryId, {
    $addToSet: { subcategories: mobiles._id }, // Add to the parent category's subcategories
  });
};

// Example: Create categories
const createCategories = async () => {
  const parentCategory = await createParentCategory();
  await createSubcategory(parentCategory._id);
};

createCategories()
  .then(() => console.log("Categories created successfully"))
  .catch(err => console.error(err));
