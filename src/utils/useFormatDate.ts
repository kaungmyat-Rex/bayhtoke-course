const formatDate = (date: number) => {
  const dateString = new Date(date * 1000).toLocaleDateString();

  const dateParts = dateString.split("/");
  const day = parseInt(dateParts[1]);
  const month = parseInt(dateParts[0]) - 1; // Month is 0-indexed
  const year = parseInt(dateParts[2]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${day} ${months[month]} ${year}`;
};

export default formatDate;
