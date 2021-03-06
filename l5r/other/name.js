const nameParts = ["A", "BA", "BE", "BI", "BO", "BU", "CHA", "CHI", "CHO", "CHU", "DA", "DE", "DO", "E", "FU", "GA", "GE", "GI", "GO", "GU", "HA", "HE", "HI", "HO", "I", "JA", "JI", "JO", "JU", "KA", "KE", "KI", "KO", "KU", "MA", "ME", "MI", "MO", "MU", "NA", "NE", "NI", "NO", "NU", "O", "PA", "PE", "PI", "PO", "PU", "RA", "RE", "RI", "RO", "RU", "SA", "SE", "SHA", "SHI", "SHO", "SHU", "SO", "SU", "TSU", "TA", "TE", "TO", "TU", "U", "WA", "YA", "YO", "YU", "ZA", "ZE", "ZO", "ZU"];
const namePart = () => nameParts[Math.floor(Math.random() * nameParts.length)];

export const name = () => {
  return namePart() + namePart() + namePart();
}