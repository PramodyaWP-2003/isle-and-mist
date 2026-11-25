
function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
}) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>

      {subtitle && (
        <span className="text-secondary text-xs font-semibold uppercase tracking-[0.2em]">
          {subtitle}
        </span>
      )}

      <h2 className="section-title mt-3">
        {title}
      </h2>

      {description && (
        <p className={`section-description mt-4 max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}

    </div>
  )
}

export default SectionHeading
