import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export const temporaryRecipes = [
  {
    id: "001",
    name: "Adobo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Adobo_DSCF4391.jpg/440px-Adobo_DSCF4391.jpg",
    video: "https://www.youtube.com/watch?v=P-udxyWPsm0",
    ingredients: [
      "1 pound pork or chicken, cut into pieces",
      "1/2 cup soy sauce",
      "1/4 cup vinegar",
      "1 bay leaf",
      "1 tablespoon whole peppercorns",
      "1 tablespoon garlic, minced",
      "1 tablespoon black pepper, ground",
      "1 teaspoon sugar",
      "1/2 cup water",
    ],
    instructions: [
      {
        step: 1,
        action:
          "In a large pot, combine soy sauce, vinegar, bay leaf, peppercorns, garlic, ground black pepper, sugar, and water.",
        time: "15 minutes",
      },
      {
        step: 2,
        action: "Add the pork or chicken pieces to the marinade.",
        time: "",
      },
      {
        step: 3,
        action: "Bring the mixture to a boil over high heat.",
        time: "",
      },
      {
        step: 4,
        action:
          "Reduce heat to low and simmer for 30-45 minutes, or until the meat is tender.",
        time: "30-45 minutes",
      },
      {
        step: 5,
        action: "Remove from heat and let cool slightly before serving.",
        time: "",
      },
    ],
  },
  {
    id: "002",
    name: "Menudo",
    image: "https://assets.unileversolutions.com/recipes-v3/214409-default.png",
    video: "https://www.youtube.com/watch?v=EblSm5g27Gk",
    ingredients: [
      "1 pound beef stew meat, cut into cubes",
      "1 liver, sliced",
      "1 heart, sliced",
      "1 can (14.5 oz) diced tomatoes",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 bay leaf",
      "1 teaspoon black pepper, ground",
      "1/2 teaspoon salt",
      "1/4 cup vinegar",
      "1 cup water",
    ],
    instructions: [
      {
        step: 1,
        action: "In a large pot, brown the beef stew meat over high heat.",
        time: "10-15 minutes",
      },
      {
        step: 2,
        action:
          "Add the liver, heart, diced tomatoes, onion, garlic, bay leaf, black pepper, salt, vinegar, and water.",
        time: "",
      },
      {
        step: 3,
        action:
          "Bring to a boil over high heat, then reduce heat to low and simmer for 1-2 hours, or until the meat is tender.",
        time: "1-2 hours",
      },
      {
        step: 4,
        action: "Remove from heat and let cool slightly before serving.",
        time: "",
      },
    ],
  },
  {
    id: "003",
    name: "Sinigang na Baboy",
    image: "https://assets.unileversolutions.com/recipes-v3/214408-default.png",
    ingredients: [
      "1 pound pork ribs or belly",
      "1 packet tamarind soup base",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1 radish, sliced",
      "1 eggplant, sliced",
      "1 cup kangkong (water spinach)",
      "2 green chili peppers",
      "Salt and pepper to taste",
      "4 cups water",
    ],
    instructions: [
      {
        step: 1,
        action:
          "In a large pot, boil pork ribs or belly in water until tender.",
        time: "1-1.5 hours",
      },
      {
        step: 2,
        action:
          "Add onions, tomatoes, and tamarind soup base. Simmer for 10 minutes.",
        time: "10 minutes",
      },
      {
        step: 3,
        action:
          "Add radish, eggplant, and chili peppers. Cook until vegetables are tender.",
        time: "10 minutes",
      },
      {
        step: 4,
        action: "Add kangkong and season with salt and pepper.",
        time: "5 minutes",
      },
      {
        step: 5,
        action: "Serve hot.",
      },
    ],
  },
  {
    id: "004",
    name: "Lechon Kawali",
    image:
      "https://panlasangpinoy.com/wp-content/uploads/2019/03/Lechon-Kawali-Recipe.jpg",
    ingredients: [
      "1 pound pork belly",
      "2 tablespoons salt",
      "1 teaspoon black pepper",
      "2 cloves garlic, minced",
      "1 bay leaf",
      "4 cups water",
      "Oil for frying",
    ],
    instructions: [
      {
        step: 1,
        action:
          "In a pot, boil pork belly with salt, pepper, garlic, bay leaf, and water until tender.",
        time: "1-1.5 hours",
      },
      {
        step: 2,
        action: "Remove pork belly and let it cool. Pat dry.",
        time: "30 minutes",
      },
      {
        step: 3,
        action: "Heat oil in a pan and deep-fry the pork belly until crispy.",
        time: "10-15 minutes",
      },
      {
        step: 4,
        action: "Slice and serve with your choice of dipping sauce.",
      },
    ],
  },
  {
    id: "005",
    name: "Kare-Kare",
    image: "https://assets.unileversolutions.com/v1/85775930.jpg",
    ingredients: [
      "1 pound oxtail",
      "1/2 cup peanut butter",
      "1/4 cup bagoong (fermented shrimp paste)",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1/2 cup rice flour",
      "2 cups water",
      "1/2 cup string beans",
      "1/2 cup eggplant, sliced",
      "1/2 cup banana heart, sliced",
    ],
    instructions: [
      {
        step: 1,
        action: "Boil oxtail until tender, then set aside.",
        time: "1.5-2 hours",
      },
      {
        step: 2,
        action: "In a pan, sauté onion and garlic until soft.",
        time: "5 minutes",
      },
      {
        step: 3,
        action: "Add peanut butter and water, then simmer.",
        time: "10 minutes",
      },
      {
        step: 4,
        action:
          "Add the cooked oxtail, string beans, eggplant, and banana heart.",
        time: "15 minutes",
      },
      {
        step: 5,
        action: "Season with bagoong and serve hot.",
      },
    ],
  },
  {
    id: "006",
    name: "Pancit Canton",
    image: "https://assets.unileversolutions.com/recipes-v3/214416-default.png",
    ingredients: [
      "8 ounces pancit canton noodles",
      "1/2 pound pork, sliced",
      "1/2 cup carrots, julienned",
      "1/2 cup green beans, sliced",
      "1 onion, sliced",
      "2 cloves garlic, minced",
      "1/4 cup soy sauce",
      "1 tablespoon oyster sauce",
      "1 cup chicken broth",
      "2 tablespoons cooking oil",
    ],
    instructions: [
      {
        step: 1,
        action: "In a pan, heat oil and sauté garlic and onion until soft.",
        time: "5 minutes",
      },
      {
        step: 2,
        action: "Add pork and cook until browned.",
        time: "10 minutes",
      },
      {
        step: 3,
        action: "Add carrots and green beans, then stir-fry for 5 minutes.",
        time: "5 minutes",
      },
      {
        step: 4,
        action:
          "Add soy sauce, oyster sauce, and chicken broth. Simmer for 10 minutes.",
        time: "10 minutes",
      },
      {
        step: 5,
        action: "Add pancit canton noodles and cook until noodles are tender.",
        time: "5 minutes",
      },
      {
        step: 6,
        action: "Serve hot.",
      },
    ],
  },
  {
    id: "007",
    name: "Bicol Express",
    image:
      "https://yummykitchentv.com/wp-content/uploads/2023/02/creamy-bicol-express.jpg",
    ingredients: [
      "1 pound pork belly, sliced",
      "1 cup coconut milk",
      "1 cup coconut cream",
      "5-6 Thai chili peppers, sliced",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 tablespoon shrimp paste",
      "1 tablespoon cooking oil",
    ],
    instructions: [
      {
        step: 1,
        action: "Heat oil in a pan and sauté garlic, onion, and shrimp paste.",
        time: "5 minutes",
      },
      {
        step: 2,
        action: "Add pork belly and cook until browned.",
        time: "10 minutes",
      },
      {
        step: 3,
        action: "Add coconut milk and bring to a boil.",
        time: "10 minutes",
      },
      {
        step: 4,
        action: "Reduce heat and simmer for 20 minutes.",
        time: "20 minutes",
      },
      {
        step: 5,
        action:
          "Add coconut cream and chili peppers. Simmer for another 10 minutes.",
        time: "10 minutes",
      },
      {
        step: 6,
        action: "Serve hot.",
      },
    ],
  },
  {
    id: "008",
    name: "Pinakbet",
    image:
      "https://api.lifegetsbetter.ph/uploads/recipes/featured/pinakbet-featured-img.jpg",
    ingredients: [
      "1/2 pound pork, sliced",
      "1/4 cup shrimp paste",
      "2 tomatoes, chopped",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 cup squash, cubed",
      "1 cup eggplant, sliced",
      "1 cup string beans, cut",
      "1 cup okra, sliced",
    ],
    instructions: [
      {
        step: 1,
        action: "In a pan, sauté garlic, onion, and tomatoes until soft.",
        time: "5 minutes",
      },
      {
        step: 2,
        action: "Add pork and cook until browned.",
        time: "10 minutes",
      },
      {
        step: 3,
        action: "Add shrimp paste and cook for 5 minutes.",
        time: "5 minutes",
      },
      {
        step: 4,
        action:
          "Add squash, eggplant, string beans, and okra. Simmer until vegetables are tender.",
        time: "15 minutes",
      },
      {
        step: 5,
        action: "Serve hot.",
      },
    ],
  },
  {
    id: "009",
    name: "Pork Binagoongan",
    image:
      "https://yummykitchentv.com/wp-content/uploads/2022/01/pork-binagoongan-with-gata-recipe.jpg",
    ingredients: [
      "1 pound pork belly, diced",
      "1/4 cup shrimp paste",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "2 tomatoes, chopped",
      "1/2 cup coconut milk",
      "1 tablespoon cooking oil",
    ],
    instructions: [
      {
        step: 1,
        action:
          "Heat oil in a pan and sauté garlic, onion, and tomatoes until soft.",
        time: "5 minutes",
      },
      {
        step: 2,
        action: "Add pork and cook until browned.",
        time: "10 minutes",
      },
      {
        step: 3,
        action: "Add shrimp paste and cook for 5 minutes.",
        time: "5 minutes",
      },
      {
        step: 4,
        action: "Add coconut milk and simmer for 20 minutes.",
        time: "20 minutes",
      },
      {
        step: 5,
        action: "Serve hot.",
      },
    ],
  },
  {
    id: "010",
    name: "Laing",
    image: "https://assets.unileversolutions.com/recipes-v2/110738.jpg",
    ingredients: [
      "1 cup dried taro leaves",
      "1/2 pound pork, sliced",
      "1 cup coconut milk",
      "1/2 cup shrimp paste",
      "2 cloves garlic, minced",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "2-3 chili peppers, sliced",
      "1 tablespoon cooking oil",
    ],
    instructions: [
      {
        step: 1,
        action:
          "In a pan, heat oil and sauté garlic, onion, and tomatoes until soft.",
        time: "5 minutes",
      },
      {
        step: 2,
        action: "Add pork and cook until browned.",
        time: "10 minutes",
      },
      {
        step: 3,
        action: "Add shrimp paste and cook for 5 minutes.",
        time: "5 minutes",
      },
      {
        step: 4,
        action: "Add coconut milk and bring to a boil.",
        time: "10 minutes",
      },
      {
        step: 5,
        action:
          "Add dried taro leaves and chili peppers. Simmer until taro leaves are tender.",
        time: "20 minutes",
      },
      {
        step: 6,
        action: "Serve hot.",
      },
    ],
  },
  {
    id: "011",
    name: "Chicken Adobo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_uRdxyfGwrkrr-FwEDsprzHvfF114G7u2w&s",
    ingredients: [
      "1 pound chicken pieces",
      "1/4 cup soy sauce",
      "1/4 cup vinegar",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 bay leaf",
      "1 teaspoon black pepper, ground",
      "1/2 cup water",
      "2 tablespoons cooking oil",
    ],
    instructions: [
      {
        step: 1,
        action: "Marinate chicken in soy sauce and vinegar for 30 minutes.",
        time: "30 minutes",
      },
      {
        step: 2,
        action: "Heat oil in a pan and sauté garlic and onion until soft.",
        time: "5 minutes",
      },
      {
        step: 3,
        action: "Add chicken and cook until browned.",
        time: "10 minutes",
      },
      {
        step: 4,
        action: "Add bay leaf, black pepper, and water. Simmer for 30 minutes.",
        time: "30 minutes",
      },
      {
        step: 5,
        action: "Serve hot.",
      },
    ],
  },
  {
    id: "012",
    name: "Sweet and Sour Pork",
    image:
      "https://www.foxyfolksy.com/wp-content/uploads/2022/11/sweet-and-sour-pork-1200t.jpg",
    ingredients: [
      "1 pound pork, sliced into cubes",
      "1/2 cup cornstarch",
      "1/4 cup soy sauce",
      "1/4 cup vinegar",
      "1/4 cup ketchup",
      "1/4 cup sugar",
      "1/2 cup bell peppers, chopped",
      "1/2 cup pineapple chunks",
      "1/2 cup onion, chopped",
      "2 cloves garlic, minced",
      "Oil for frying",
    ],
    instructions: [
      {
        step: 1,
        action:
          "Coat pork cubes with cornstarch and deep-fry until golden brown.",
        time: "10 minutes",
      },
      {
        step: 2,
        action: "In a pan, sauté garlic, onion, and bell peppers.",
        time: "5 minutes",
      },
      {
        step: 3,
        action:
          "Add ketchup, sugar, vinegar, and soy sauce. Simmer for 5 minutes.",
        time: "5 minutes",
      },
      {
        step: 4,
        action:
          "Add pineapple chunks and fried pork. Mix well and cook for 5 minutes.",
        time: "5 minutes",
      },
      {
        step: 5,
        action: "Serve hot.",
      },
    ],
  },
  {
    id: "013",
    name: "Chicken Inasal",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNOk6165q8gs76MSVczhymG3mFw1bbz_o9A&s",
    ingredients: [
      "1 pound chicken, cut into pieces",
      "1/4 cup soy sauce",
      "1/4 cup vinegar",
      "1/4 cup calamansi juice",
      "1 tablespoon brown sugar",
      "1 tablespoon annatto powder",
      "1 tablespoon garlic, minced",
      "2 tablespoons cooking oil",
    ],
    instructions: [
      {
        step: 1,
        action:
          "Marinate chicken in soy sauce, vinegar, calamansi juice, brown sugar, annatto powder, and garlic for at least 1 hour.",
        time: "1 hour",
      },
      {
        step: 2,
        action: "Grill chicken until cooked through and slightly charred.",
        time: "15-20 minutes",
      },
      {
        step: 3,
        action: "Serve hot with rice.",
      },
    ],
  },
  {
    id: "014",
    name: "Bopis",
    image:
      "https://panlasangpinoy.com/wp-content/uploads/2010/11/bopis-recipe-jpg.webp",
    ingredients: [
      "1/2 pound pork lungs, cleaned and diced",
      "1/2 pound pork heart, cleaned and diced",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1/4 cup soy sauce",
      "1/4 cup vinegar",
      "1/2 cup bell peppers, chopped",
      "1/4 cup chili peppers, chopped",
      "2 tablespoons cooking oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      {
        step: 1,
        action: "Boil pork lungs and heart until tender, then set aside.",
        time: "1 hour",
      },
      {
        step: 2,
        action: "Heat oil in a pan and sauté garlic and onion until soft.",
        time: "5 minutes",
      },
      {
        step: 3,
        action:
          "Add diced pork lungs and heart, soy sauce, and vinegar. Simmer for 10 minutes.",
        time: "10 minutes",
      },
      {
        step: 4,
        action:
          "Add bell peppers, chili peppers, and season with salt and pepper. Cook for another 10 minutes.",
        time: "10 minutes",
      },
      {
        step: 5,
        action: "Serve hot.",
      },
    ],
  },
  {
    id: "015",
    name: "Sopas",
    image:
      "https://www.kawalingpinoy.com/wp-content/uploads/2018/12/creamy-chicken-sopas-5.jpg",
    ingredients: [
      "1/2 pound chicken, diced",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 cup macaroni pasta",
      "1 cup carrots, chopped",
      "1 cup cabbage, shredded",
      "4 cups chicken broth",
      "1 cup evaporated milk",
      "2 tablespoons cooking oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      {
        step: 1,
        action: "In a pot, heat oil and sauté garlic and onion until soft.",
        time: "5 minutes",
      },
      {
        step: 2,
        action: "Add chicken and cook until browned.",
        time: "10 minutes",
      },
      {
        step: 3,
        action: "Add chicken broth and bring to a boil.",
        time: "10 minutes",
      },
      {
        step: 4,
        action: "Add macaroni pasta and cook until al dente.",
        time: "10 minutes",
      },
      {
        step: 5,
        action: "Add carrots and cabbage. Simmer until vegetables are tender.",
        time: "10 minutes",
      },
      {
        step: 6,
        action:
          "Stir in evaporated milk and season with salt and pepper. Serve hot.",
      },
    ],
  },
  {
    id: "016",
    name: "Ginataang Bilo-Bilo",
    image:
      "https://panlasangpinoy.com/wp-content/uploads/2014/08/ginataang-bilo-bilo-500x485.jpg",
    ingredients: [
      "1 cup glutinous rice balls (bilo-bilo)",
      "1 cup sweet potato, peeled and diced",
      "1 cup taro, peeled and diced",
      "1 cup coconut milk",
      "1/2 cup brown sugar",
      "1/2 cup jackfruit, sliced",
      "1/2 cup tapioca pearls",
      "2 cups water",
    ],
    instructions: [
      {
        step: 1,
        action:
          "In a pot, combine water, sweet potato, and taro. Bring to a boil and cook until tender.",
        time: "15 minutes",
      },
      {
        step: 2,
        action: "Add coconut milk and brown sugar. Stir well.",
        time: "5 minutes",
      },
      {
        step: 3,
        action: "Add glutinous rice balls and cook for 5 minutes.",
        time: "5 minutes",
      },
      {
        step: 4,
        action:
          "Add tapioca pearls and jackfruit. Cook until all ingredients are tender.",
        time: "10 minutes",
      },
      {
        step: 5,
        action: "Serve warm.",
      },
    ],
  },
  {
    id: "017",
    name: "Bistek Tagalog",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAM-WkKz8IXcKgT_ADsOPV_Eqeg9CvVxWMg&s",
    ingredients: [
      "1/2 pound pancit canton noodles",
      "1/2 pound pork, sliced",
      "1 cup vegetables (carrots, bell peppers, green beans), chopped",
      "1/4 cup soy sauce",
      "2 cloves garlic, minced",
      "1 onion, chopped",
      "2 tablespoons cooking oil",
      "1 cup chicken broth",
      "Salt and pepper to taste",
    ],
    instructions: [
      {
        step: 1,
        action: "In a pan, heat oil and sauté garlic and onion until soft.",
        time: "5 minutes",
      },
      {
        step: 2,
        action: "Add pork and cook until browned.",
        time: "10 minutes",
      },
      {
        step: 3,
        action: "Add vegetables and cook for 5 minutes.",
        time: "5 minutes",
      },
      {
        step: 4,
        action: "Add soy sauce and chicken broth. Bring to a boil.",
        time: "5 minutes",
      },
      {
        step: 5,
        action: "Add pancit canton noodles and cook until tender.",
        time: "10 minutes",
      },
      {
        step: 6,
        action: "Season with salt and pepper. Serve hot.",
      },
    ],
  },
  {
    id: "018",
    name: "Tapsilog",
    image:
      "https://purposefoods.ph/cdn/shop/products/tapsilog2.jpg?v=1669191513",
    ingredients: [
      "1/2 pound beef sirloin, sliced thinly",
      "1/4 cup soy sauce",
      "1 tablespoon vinegar",
      "2 cloves garlic, minced",
      "1 tablespoon brown sugar",
      "1/4 teaspoon ground black pepper",
      "1 tablespoon cooking oil",
      "1 cup cooked garlic rice",
      "1 egg, fried",
    ],
    instructions: [
      {
        step: 1,
        action:
          "In a bowl, combine soy sauce, vinegar, garlic, brown sugar, and black pepper. Add beef slices and marinate for at least 30 minutes.",
        time: "30 minutes",
      },
      {
        step: 2,
        action:
          "Heat oil in a pan over medium heat. Cook marinated beef until browned and cooked through.",
        time: "10 minutes",
      },
      {
        step: 3,
        action: "Serve the beef over garlic rice with a fried egg on the side.",
      },
    ],
  },
  {
    id: "019",
    name: "Lumpiang Shanghai",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UiXpAW_2iSStHgEHkblIt9FHwMtM-n2wIg&s",
    ingredients: [
      "1/2 pound ground pork",
      "1/2 cup carrots, grated",
      "1/4 cup onions, finely chopped",
      "2 cloves garlic, minced",
      "1/4 cup soy sauce",
      "1 tablespoon cornstarch",
      "1 egg",
      "Spring roll wrappers",
      "Oil for frying",
    ],
    instructions: [
      {
        step: 1,
        action:
          "In a bowl, combine ground pork, carrots, onions, garlic, soy sauce, cornstarch, and egg. Mix well.",
        time: "5 minutes",
      },
      {
        step: 2,
        action:
          "Place a spoonful of the mixture on a spring roll wrapper and roll tightly. Seal edges with water.",
        time: "10 minutes",
      },
      {
        step: 3,
        action: "Heat oil in a pan and fry spring rolls until golden brown.",
        time: "5 minutes",
      },
      {
        step: 4,
        action: "Drain on paper towels and serve hot.",
      },
    ],
  },
  {
    id: "020",
    name: "Pancit Malabon",
    image: "https://assets.unileversolutions.com/recipes-v2/237857.jpg",
    ingredients: [
      "1/2 pound rice noodles",
      "1/2 pound shrimp, peeled and deveined",
      "1/2 pound pork, sliced",
      "1/4 cup shrimp paste",
      "1 cup thick gravy or sauce",
      "1 cup vegetables (cabbage, carrots, green beans), chopped",
      "2 tablespoons cooking oil",
    ],
    instructions: [
      {
        step: 1,
        action:
          "Cook rice noodles according to package instructions. Drain and set aside.",
        time: "10 minutes",
      },
      {
        step: 2,
        action: "In a pan, heat oil and sauté pork until browned.",
        time: "10 minutes",
      },
      {
        step: 3,
        action: "Add shrimp and cook until pink.",
        time: "5 minutes",
      },
      {
        step: 4,
        action: "Add shrimp paste and mix well.",
        time: "5 minutes",
      },
      {
        step: 5,
        action:
          "Add thick gravy or sauce and vegetables. Cook until vegetables are tender.",
        time: "10 minutes",
      },
      {
        step: 6,
        action: "Add cooked rice noodles and toss to combine everything.",
        time: "5 minutes",
      },
      {
        step: 7,
        action: "Serve hot.",
      },
    ],
  },
];

export type Recipes = typeof temporaryRecipes;

const getAllRecipes = (): Recipes => {
  return temporaryRecipes;
};

export const getRecipesQuery = (recipesId: string): UseQueryOptions => {
  return {
    enabled: !isNaN(+recipesId),
    queryKey: ["recipes", recipesId],
    queryFn: async () => {
      return temporaryRecipes.find((recipes) => recipes.id === recipesId);
    },
  };
};

export const useGetAllRecipes = () => {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });
};

export const useGetRecipe = (recipesId: string) => {
  return useQuery(getRecipesQuery(recipesId));
};
