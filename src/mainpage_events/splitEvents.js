// src/utils/splitEvents.js
export const splitEvents = (events) => {
    const today = new Date();
    const upcoming = [];
    const past = [];
  
    events.forEach(event => {
      const eventEnd = new Date(event.endDate);
      if (eventEnd >= today) {
        upcoming.push(event);
      } else {
        past.push(event);
      }
    });
  
    return { upcoming, past };
  };
  