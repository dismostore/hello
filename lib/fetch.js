export async function getDatabase() {
  const res = await fetch("http://localhost:4000/database", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}
