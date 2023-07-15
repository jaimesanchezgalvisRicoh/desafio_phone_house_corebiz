export const postNewsletterSubscription = async (name, email) => {
 

  const response = await fetch(
    "https://corebizchallenge-738fa69df9e3.herokuapp.com/api/v1/newsletter",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    }
  );

  if (!response.ok) {
    throw new Error("Error en la suscripción");
  }

  const data = await response.json();
  return data;
};
