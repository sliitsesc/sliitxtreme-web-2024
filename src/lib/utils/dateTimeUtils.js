export function formatDateTime(isoString) {
  const options = {
    month: "long",
    day: "2-digit",
  };

  const date = new Date(isoString);
  return date.toLocaleString("en-US", options).replace(",", " —");
}
