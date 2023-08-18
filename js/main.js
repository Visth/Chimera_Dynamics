const actualDate = document.querySelector('.actual-date');

const handleCurrentYear = () => {
  const year = (new Date).getFullYear();
  actualDate.innerText = year;
}
handleCurrentYear();