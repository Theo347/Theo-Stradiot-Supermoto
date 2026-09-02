/**
 * Calcule le statut dynamique de l'événement en fonction de la date du jour
 */
export const getEventStatus = (startDateISO, endDateISO) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(startDateISO || endDateISO);
  start.setHours(0, 0, 0, 0);

  const end = new Date(endDateISO);
  end.setHours(0, 0, 0, 0);

  if (today < start) return "À venir";
  if (today >= start && today <= end) return "En ce moment même";
  return "Terminé";
};

/**
 * Calcule le nombre de jours restants jusqu'au début de l'événement
 */
export const getDaysRemaining = (startDateISO) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDate = new Date(startDateISO);
  eventDate.setHours(0, 0, 0, 0);

  const diffTime = eventDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Aujourd'hui !";
  if (diffDays === 1) return "Demain";
  if (diffDays > 1) return `Dans ${diffDays} jours`;
  return null;
};

/**
 * Trie les événements : "En ce moment même" > "À venir" (du plus proche au plus loin) > "Terminé" (du plus récent au plus ancien)
 */
export const getSortedEvents = (eventsList) => {
  return [...eventsList].sort((a, b) => {
    const statusA = getEventStatus(a.startDateISO, a.endDateISO);
    const statusB = getEventStatus(b.startDateISO, b.endDateISO);

    const priority = { "En ce moment même": 1, "À venir": 2, "Terminé": 3 };

    if (priority[statusA] !== priority[statusB]) {
      return priority[statusA] - priority[statusB];
    }

    if (statusA === "Terminé") {
      return new Date(b.endDateISO) - new Date(a.endDateISO);
    } else {
      return new Date(a.startDateISO || a.endDateISO) - new Date(b.startDateISO || b.endDateISO);
    }
  });
};

/**
 * Génère le lien direct pour ajouter l'événement à Google Calendar
 */
export const getGoogleCalendarUrl = (event) => {
  const startDate = event.startDateISO.replace(/-/g, '');
  
  const endDateObj = new Date(event.endDateISO);
  endDateObj.setDate(endDateObj.getDate() + 1);
  const endDate = endDateObj.toISOString().split('T')[0].replace(/-/g, '');

  const title = encodeURIComponent(event.title);
  const details = encodeURIComponent(event.description);
  const location = encodeURIComponent(event.location);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
};

/**
 * Génère et télécharge un fichier .ics (Apple Calendar, Outlook)
 */
export const downloadICS = (event) => {
  const startDate = event.startDateISO.replace(/-/g, '');
  const endDateObj = new Date(event.endDateISO);
  endDateObj.setDate(endDateObj.getDate() + 1);
  const endDate = endDateObj.toISOString().split('T')[0].replace(/-/g, '');

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Théo Stradiot//Saison Supermoto//FR",
    "BEGIN:VEVENT",
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    `DTSTART;VALUE=DATE:${startDate}`,
    `DTEND;VALUE=DATE:${endDate}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${event.title.toLowerCase().replace(/\s+/g, '-')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Retourne la classe CSS Tailwind du badge selon le statut
 */
export const getStatusBadgeStyle = (status) => {
  switch (status) {
    case "En ce moment même":
      return "bg-orange-900/40 text-orange-400 border border-orange-500/30 animate-pulse";
    case "À venir":
      return "bg-green-900/40 text-green-400 border border-green-500/30";
    case "Terminé":
    default:
      return "bg-gray-800 text-gray-400";
  }
};