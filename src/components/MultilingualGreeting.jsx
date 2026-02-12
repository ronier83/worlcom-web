/**
 * Multilingual greeting section showing "Hello" in 12 languages
 * Static layout: 7 first row, 5 second row
 */
const greetings = [
  { language: 'English', text: 'Hello' },
  { language: 'Hebrew', text: 'שלום' },
  { language: 'Thai', text: 'สวัสดี' },
  { language: 'Filipino', text: 'Kumusta' },
  { language: 'Chinese', text: '你好' },
  { language: 'French', text: 'Bonjour' },
  { language: 'Vietnamese', text: 'Xin chào' },
  { language: 'Japanese', text: 'こんにちは' },
  { language: 'Korean', text: '안녕하세요' },
  { language: 'Portuguese', text: 'Olá' },
  { language: 'Russian', text: 'Привет' },
  { language: 'Hindi', text: 'नमस्ते' },
]

// First row 7, second row remainder
const row1Greetings = greetings.slice(0, 7)
const row2Greetings = greetings.slice(7)

export default function MultilingualGreeting() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-google-sans text-2xl font-bold text-gray-900 md:text-3xl">
          Support in Your Native Language
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-google-sans text-base text-gray-600 md:text-lg">
          We speak your language. Get support from our team in the language you're most comfortable with.
        </p>
      </div>

      {/* Two static rows: 7 greetings each */}
      <div className="mt-10 flex flex-col items-center justify-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {row1Greetings.map((greeting) => (
            <span
              key={greeting.language}
              className="whitespace-nowrap font-google-sans text-2xl font-medium text-[#3482F1] sm:text-3xl md:text-4xl"
            >
              {greeting.text}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {row2Greetings.map((greeting) => (
            <span
              key={greeting.language}
              className="whitespace-nowrap font-google-sans text-2xl font-medium text-[#3482F1] sm:text-3xl md:text-4xl"
            >
              {greeting.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
