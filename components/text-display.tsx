"use client"

interface TextDisplayProps {
  text: string
  typedText: string
  currentIndex: number
}

export function TextDisplay({ text, typedText, currentIndex }: TextDisplayProps) {
  return (
    <div className="mx-auto w-full max-w-5xl hyphens-auto break-words px-1 text-center font-sans text-base font-medium leading-relaxed tracking-tight sm:px-2 sm:text-xl md:text-3xl lg:text-4xl xl:text-[2.75rem] sm:leading-relaxed">
      {text.split("").map((char, index) => {
        let colorClass = "text-zinc-400 dark:text-neutral-500"

        if (index < typedText.length) {
          if (typedText[index] === char) {
            colorClass = "text-emerald-600 dark:text-emerald-400"
          } else {
            colorClass = "text-red-500 dark:text-red-400"
          }
        } else if (index === currentIndex) {
          colorClass = "text-zinc-900 dark:text-white"
        }

        const isCurrentChar = index === currentIndex

        return (
          <span
            key={index}
            className={`
              ${colorClass} 
              ${isCurrentChar ? "relative" : ""} 
              transition-colors duration-100
            `}
          >
            {char}
            {isCurrentChar && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 animate-pulse rounded-full bg-zinc-900 dark:bg-white" />
            )}
          </span>
        )
      })}
    </div>
  )
}
