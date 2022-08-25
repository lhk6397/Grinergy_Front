export const size = {
  xs: "300px",
  ss: "450px",
  sm: "600px",
  md: "1060px",
  lg: "1375px",
  xl: "1919px",
};

const theme = {
  color: {
    green: "rgba(0, 145, 145)",
  },
  size: {
    xs: `max-width: ${size.xs}`,
    ss: `max-width: ${size.ss}`,
    sm: `max-width: ${size.sm}`,
    md: `max-width: ${size.md}`,
    lg: `max-width: ${size.lg}`,
    xl: `max-width: ${size.xl}`,
  },
  font: {
    kr: {
      regular: "NotoSansKR-Regular",
      medium: "NotoSansKR-Medium",
      bold: "NotoSansKR-Bold",
    },
    eng: {
      bold: "UniversLTPro-BoldCond",
      condensed: "UniversLTPro-Condensed",
    },
  },
};

export default theme;
