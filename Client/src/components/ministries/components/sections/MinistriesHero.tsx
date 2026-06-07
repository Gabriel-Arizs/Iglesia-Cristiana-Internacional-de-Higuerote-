interface MinistriesHeroProps {
  badge?: string
  title?: string
  description?: string
}

export function MinistriesHero({
  badge = "Nuestra Familia de Fe",
  title = "NUESTROS MINISTERIOS",
  description = "En ICIH, creemos que cada persona tiene un papel único en el cuerpo de Cristo. Nuestros ministerios están diseñados para ayudar a cada miembro a descubrir y usar sus dones espirituales para servir a Dios y a los demás. Desde grupos de jóvenes hasta ministerios de cuidado, hay un lugar para ti en nuestra familia de fe."
}: MinistriesHeroProps) {
  const [line1, line2] = title.split(" ").reduce<[string[], string[]]>(
    (acc, word, i, arr) => {
      const mid = Math.ceil(arr.length / 2)
      if (i < mid) acc[0].push(word)
      else acc[1].push(word)
      return acc
    },
    [[], []]
  )

  return (
    <section className="mb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-bold tracking-widest uppercase mb-6">
        {badge}
      </span>

      <h1 className="text-6xl md:text-8xl font-display font-black text-primary tracking-tighter mb-8 leading-[0.9]">
        {line1.join(" ")} <br /> {line2.join(" ")}
      </h1>

      <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
        {description}
      </p>
    </section>
  )
}

export default MinistriesHero
