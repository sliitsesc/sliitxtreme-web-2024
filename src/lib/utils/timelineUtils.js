export function getCurrentEventIndex(timelineData) {
  const now = new Date();
  for (let i = 0; i < timelineData.events.length; i++) {
    const eventDate = new Date(timelineData.events[i].date);
    const nextEventDate =
      i + 1 < timelineData.events.length
        ? new Date(timelineData.events[i + 1].date)
        : null;
    if (eventDate <= now && (!nextEventDate || now < nextEventDate)) {
      return i;
    }
  }
  return -1;
}

export function isEventUpcoming(eventDate) {
  const now = new Date();
  return new Date(eventDate) > now;
}
