// src/utils/splitEvents.js
export const splitEvents = (events) => {
    const today = new Date();
    const upcoming = [];
    const past = [];
  
    events.forEach(event => {
      // Parse the date in dd-mm-yyyy format
      const [day, month, year] = event.endDate.split('-').map(Number);
      const eventEnd = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript

      if (eventEnd >= today) {
        upcoming.push(event);
      } else {
        past.push(event);
      }
    });
  
    return { upcoming, past };
};
