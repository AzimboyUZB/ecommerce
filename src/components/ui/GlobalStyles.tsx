import { Global, css } from "@emotion/react";
import { TTNorms } from "@/helpers/theme";

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth !important;
        }

        .wrapper {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          font-family: ${TTNorms.style.fontFamily};
        }

        button {
          background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;
        }

        input,
        textarea,
        select,
        option {
          outline: none;
          border: none;
          background: transparent;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .main {
          flex: 1 1 auto;
          margin-top: 40px;
        }

        .modal {
          position: flex;
          right: -10000px;
          transition: all 0.3s ease;
        }

        .modal.open {
          transition: all 0.3s ease;
          right: 10px;
          top: 55px;
        }
      `}
    />
  );
};
