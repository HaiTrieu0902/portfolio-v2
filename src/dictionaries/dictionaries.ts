import 'server-only';

const importDictionaries = async (locale: string) => {
  const common = await import(`./${locale}/common.json`).then((module) => module.default);
  return {
    ...common,
  };
};

const dictionaries: any = {
  en: () => importDictionaries('en'),
  vi: () => importDictionaries('vi'),
};

export const getDictionary = async (locale: string) => await dictionaries[locale]();
