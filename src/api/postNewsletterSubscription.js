export const postNewsletterSubscription = async (name, email) => {
  const url = import.meta.env.VITE_POST_API_URL;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  });

  if (!response.ok) {
    throw new Error("Error en la suscripción");
  }

  const data = await response.json();
  return data;
};
