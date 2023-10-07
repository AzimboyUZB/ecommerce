import type { AppProps } from "next/app";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { GlobalStyle } from "@/components";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/style/style.css"
import createEmotionCache from "@/helpers/createEmotionCache";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import theme from "@/helpers/theme";

const clientSideEmotionCache = createEmotionCache()
interface MyAppPropsI extends AppProps{
  emotionCache? :EmotionCache 
}
export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppPropsI) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
          <GlobalStyle />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}
