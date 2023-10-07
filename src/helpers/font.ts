export const font = (
  size: string = "16px",
  height: string = "100%",
  weight: string = "500"
) => {
  return `
            font-size: ${size};
            line-height: ${height};
            font-weight: ${weight};
        `;
};
