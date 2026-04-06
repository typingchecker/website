export const typingTexts = [
  "The smell of cut grass is actually a plant distress signal. It releases chemicals as a warning to surrounding plants. This defense mechanism helps neighboring plants prepare for potential threats by triggering their own protective responses.",
  "A day on Venus is longer than a year on Venus. It takes longer to rotate on its axis than to orbit the sun. This means that a single Venusian day lasts approximately 243 Earth days, while its year is only about 225 Earth days.",
  "Honey never spoils. Archaeologists have found 3000 year old honey in Egyptian tombs that was still perfectly edible. The natural composition of honey, including its low moisture content and acidic pH, creates an inhospitable environment for bacteria.",
  "Octopuses have three hearts and blue blood. Two hearts pump blood to the gills, while the third pumps it to the body. Their blood contains copper-based hemocyanin instead of iron-based hemoglobin, making it more efficient in cold, low-oxygen environments.",
  "The shortest war in history lasted 38 to 45 minutes between Britain and Zanzibar on August 27, 1896. The conflict ended with a decisive British victory after their naval bombardment destroyed the Zanzibari defenses almost immediately.",
  "A group of flamingos is called a flamboyance. They get their pink color from the shrimp and algae they eat. Without these carotenoid-rich foods in their diet, flamingos would actually be white or pale gray in color.",
  "The inventor of the Pringles can is buried in one. Fredric Baur was so proud of his creation that he requested it. His children honored his wish and placed some of his ashes in a Pringles can during his burial ceremony.",
  "Bananas are berries, but strawberries are not. Botanically, berries come from one flower with one ovary. This classification means that grapes, tomatoes, and even avocados are technically berries while raspberries and blackberries are not.",
  "Scotland's national animal is the unicorn. It has been a Scottish heraldic symbol since the 12th century. In Celtic mythology, the unicorn represented purity, innocence, and power, making it a fitting symbol for the proud Scottish nation.",
  "The moon is slowly drifting away from Earth at about 3.8 centimeters per year due to tidal forces. This gradual separation means that in about 600 million years, total solar eclipses will no longer be possible from Earth's surface.",
  "The human brain uses approximately 20 percent of the body's total energy despite making up only 2 percent of body weight. This enormous energy consumption is necessary to maintain the electrical signals that allow neurons to communicate with each other.",
  "Coffee is the second most traded commodity in the world after crude oil. The global coffee industry employs over 25 million people and produces approximately 10 billion kilograms of coffee beans annually to satisfy worldwide demand.",
  "Light from the sun takes about 8 minutes and 20 seconds to reach Earth. This means that when you look at the sun, you are actually seeing it as it appeared over 8 minutes ago, not as it currently exists.",
]

export const challengeTimes = [
  { label: "30s", seconds: 30 },
  { label: "60s", seconds: 60 },
  { label: "90s", seconds: 90 },
  { label: "120s", seconds: 120 },
  { label: "5m", seconds: 300 },
]

export function getRandomText(): string {
  return typingTexts[Math.floor(Math.random() * typingTexts.length)]
}

export function getNextText(currentText: string): string {
  const availableTexts = typingTexts.filter((t) => t !== currentText)
  return availableTexts[Math.floor(Math.random() * availableTexts.length)]
}
