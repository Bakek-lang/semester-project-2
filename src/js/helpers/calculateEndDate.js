export function calculateEndDate(duration, unit) {
  const now = new Date();

  switch (unit) {
    case "hours":
      now.setHours(now.getHours() + parseInt(duration));
      break;
    case "days":
      now.setDate(now.getDate() + parseInt(duration));
      break;
    case "weeks":
      now.setDate(now.getDate() + parseInt(duration) * 7);
      break;
  }

  return now.toISOString();
}
