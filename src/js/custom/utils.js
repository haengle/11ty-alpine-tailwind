exports.monthNames = () => {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
}

exports.dayNames = () => {
    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
}

exports.nth = (d) => {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
  }
};

exports.isDateFuture = (date) => {
    const today = new Date();
    if (date.getTime() > today.getTime()) {
        return true;
    }
}

exports.isDatePast = (date) => {
    const today = new Date();
    if (date.getTime() < today.getTime()) {
        return true;
    }
}

exports.betweenDates = (from, to) => {
    const today = new Date();
    if (from.getTime() <= today.getTime() && to.getTime() > today.getTime()) {
        return true;
    }
}