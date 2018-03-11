const messages: { [key: string]: {} } = Object.freeze({
  ja: {
    greeting: "こんにちは。ご機嫌いかがですか？",
  },
  en: {
    greeting: "Hello. how are you?",
  }
});

export default class Message {
  public static getMessage(locale: string) {
    return messages[locale];
  }
}
