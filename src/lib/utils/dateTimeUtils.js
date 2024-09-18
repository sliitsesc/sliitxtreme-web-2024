export function formatDateTime(isoString) {
  const options = {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const date = new Date(isoString);
  return date.toLocaleString("en-US", options).replace(",", " —");
}
