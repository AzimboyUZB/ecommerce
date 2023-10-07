import { useTypedSelector } from './useTypedSelector'

function useTranslate() {
  const { lang } = useTypedSelector((state) => state.language)

  const translate = <T>(data: T, key: string) => {
    return data[`${key}_${lang}` as keyof T] as string
  }

  return { translate }
}

export default useTranslate
