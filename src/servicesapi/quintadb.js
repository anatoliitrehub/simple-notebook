const BASE_URL = "https://quintadb.com/";
const API_KEY = "ajW4ZcM8ncW47dGcmiW7y4";

export const getFetchDb = async () => {
  console.log("get");
  try {
    const response = await fetch(
      BASE_URL +
        `apps/ctW7bSCmnjfjClcComWOCa/entities.json?rest_api_key=${API_KEY}`
    );
    const json = await response.json();
    console.log("Успех:", json.forms);
  } catch (error) {
    console.error("Ошибка:", error);
  }
};
export const getFetchDbData = async () => {
  console.log("get");
  try {
    const response = await fetch(
      BASE_URL +
        `apps/ctW7bSCmnjfjClcComWOCa/entities/cftMldHa9iWQ8mg8onc8oW/properties.json?rest_api_key=${API_KEY}`
    );
    const json = await response.json();
    console.log("Успех:", json.fields);
  } catch (error) {
    console.error("Ошибка:", error);
  }
};

export const getFetchDbRecords = async () => {
  console.log("get");
  try {
    const response = await fetch(
      BASE_URL +
        `apps/ctW7bSCmnjfjClcComWOCa/dtypes/entity/cftMldHa9iWQ8mg8onc8oW.json?rest_api_key=${API_KEY}`
    );
    const json = await response.json();
    console.log("Успех:", json.records);
    return json.records;
  } catch (error) {
    console.error("Ошибка:", error);
  }
};

export const createFetchDb = async (formName) => {
  console.log("post create");
  try {
    const response = await fetch(
      BASE_URL + `apps/ctW7bSCmnjfjClcComWOCa/entities.json`,
      {
        method: "POST",
        body: { rest_api_key: API_KEY, name: formName },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    console.log("Успех:", JSON.stringify(json));
  } catch (error) {
    console.error("Ошибка:", error);
  }
};

export const postFetchDb = async () => {
  console.log("post");
  try {
    const response = await fetch(
      BASE_URL +
        `apps/ctW7bSCmnjfjClcComWOCa/dtypes.json?rest_api_key=${API_KEY}`,
      {
        method: "POST",
        body: {
          values: {
            entity_id: "cftMldHa9iWQ8mg8onc8oW",
            id: "cBW6RdL2zbW7BcQsje8888",
            cizt7dVqrcHlWXnJZdJYSs: "333",
            aMW4HKWR9bnOoGWQbpWQS4: "Title_mine",
            cMW6pcTSjbWOFdTCkBtmkN: "text_mine",
          },
          headers: {
            "Content-Type": "application/json",
          },
        },
      }
    );
    const json = await response.json();
    console.log("Успех:", JSON.stringify(json));
  } catch (error) {
    console.error("Ошибка:", error);
  }
};

// export const getFetchDb = async () => {
//     console.log("get");
//     try {
//       const response = await fetch(BASE_URL + "apps.json", {
//         method: "GET",
//         body: { rest_api_key: API_KEY },
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const json = await response.json();
//       console.log("Успех:", JSON.stringify(json));
//     } catch (error) {
//       console.error("Ошибка:", error);
//     }
//   };
