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
  "Sharks existed before trees. Sharks have been swimming in the oceans for over 400 million years, while the first trees appeared around 350 million years ago. This means sharks were already ancient creatures when forests first covered the land.",
  "The Eiffel Tower can grow taller in the summer. Heat causes the iron structure to expand slightly. During hot days, the tower can become up to 15 centimeters taller due to thermal expansion of the metal.",
  "Wombats produce cube shaped droppings. Scientists believe the unusual shape helps prevent the droppings from rolling away. This allows wombats to mark their territory more effectively on rocks and other surfaces.",
  "A bolt of lightning is five times hotter than the surface of the sun. Temperatures inside lightning can reach around 30,000 Kelvin. This intense heat causes the surrounding air to expand rapidly, creating the thunder we hear.",
  "Dolphins have unique names for each other. They use signature whistles that function like personal identifiers. These whistles allow dolphins to recognize and call specific individuals within their social groups.",
  "The Great Wall of China is not visible from space with the naked eye. This common myth has been widely repeated but astronauts confirm it cannot be easily seen. Many natural features are actually more visible from orbit than the wall.",
  "A day on Mercury lasts about 59 Earth days. However, because of Mercury's orbital speed, a full solar day on the planet lasts about 176 Earth days. This means the sun rises very slowly and stays in the sky for a long time.",
  "Butterflies can taste with their feet. Special sensors on their legs help them identify suitable plants. When a butterfly lands on a leaf, it can instantly detect whether the plant is good for laying eggs.",
  "The heart of a blue whale is the size of a small car. It can weigh over 180 kilograms and pump hundreds of liters of blood with each beat. The powerful heartbeat can even be detected from several meters away.",
  "There are more possible games of chess than atoms in the observable universe. This enormous number is known as the Shannon number. It highlights the incredible complexity and strategic depth of the game.",
  "Ants never sleep in the way humans do. Instead, they take hundreds of short naps throughout the day. Worker ants may rest for only a minute at a time but repeat this process many times daily.",
  "The International Space Station is visible from Earth without a telescope. It appears as a fast moving bright point of light in the night sky. The station travels at about 28,000 kilometers per hour as it orbits the planet.",
  "Some bamboo species can grow almost one meter in a single day. This rapid growth makes bamboo one of the fastest growing plants on Earth. Its strength and flexibility make it useful for construction and many other purposes.",
  "Penguins propose to their partners with pebbles. Male penguins search carefully for the smoothest stones. When the female accepts the pebble, it becomes part of their nest and symbolizes their bond.",
  "Saturn could float in water if a large enough ocean existed. The planet is mostly made of hydrogen and helium, making it less dense than water. This unusual fact makes Saturn the least dense planet in our solar system.",
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
