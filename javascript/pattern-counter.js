const detectURLs = (message) => {
  const urlRegex = /(((https?:\/\/)|(www\.)(youtube\.com))[^\s"]+)/g;
  const result = message.match(urlRegex)
  return [...new Set(result)]
}

const contentDummy = '[{"type":"paragraph","children":[{"text":"ini pake url tanpa title:"}]},{"type":"link","href":"https://www.youtube.com/watch?v=h9IPyx1_bJI&ab_channel=EsaRistyOfficial","name":"","children":[{"text":""}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"ini url pake title "},{"type":"link","href":"https://www.youtube.com/watch?v=US-sWn3roFA&ab_channel=EsaRistyOfficial","name":"rela mengalah link","children":[{"text":"rela mengalah link"}]},{"text":", link lain tapi satu paragraf "},{"type":"link","href":"https://www.youtube.com/watch?v=qNuXhE7r-f8&ab_channel=MabesBalkerOfficial","name":"plong","children":[{"text":"plong"}]},{"text":", link lain tp gapake title"}]},{"type":"link","href":"https://www.youtube.com/watch?v=qNuXhE7r-f8&ab_channel=MabesBalkerOfficial","name":"","children":[{"text":""}]},{"type":"paragraph","children":[{"text":""},{"type":"link","href":"https://www.youtube.com/watch?v=US-sWn3roFA&ab_channel=EsaRistyOfficial","name":"rela mengalah link","children":[{"text":""}]},{"text":""}]},{"type":"paragraph","children":[{"text":""},{"type":"link","href":"https://www.youtube.com/watch?v=US-sWn3roFA&ab_channel=EsaRistyOfficial","name":"rela mengalah link","children":[{"text":""}]},{"text":"ini langsung embed youtube"}]},{"type":"paragraph","children":[{"text":""}]},{"type":"youtube","url":"https://www.youtube.com/embed/5jBtg-zSqhM","children":[{"text":""}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":""}]}]'

const result = detectURLs(contentDummy)

console.log(result)

const uniqResult = [...new Set(result)]

console.log(uniqResult)
