import { HiChevronDown } from 'react-icons/hi2'

/**
 * Collapsible section wrapper for mobile. Renders a clickable header with arrow
 * and expandable content. On desktop (md+), header is hidden and content is always visible.
 * Used for Statistics, Services, and MoneyTransfer sections (accordion behavior in App).
 * Height animation uses CSS grid (0fr/1fr) for reliable auto-height transition.
 */
export default function CollapsibleSection({
  id,
  title,
  isExpanded,
  onToggle,
  children,
  className = '',
  headerClassName = '',
  textColor = 'text-black',
  iconColor = 'text-black',
  iconBgColor = 'bg-white/90',
}) {
  const contentId = `${id}-content`
  const triggerId = `${id}-trigger`

  return (
    <>
      {/* Mobile only: clickable header with arrow; fixed height so all sections match */}
      <div className={`md:hidden ${headerClassName}`}>
        <button
          type="button"
          id={triggerId}
          onClick={() => onToggle(id)}
          aria-expanded={isExpanded}
          aria-controls={contentId}
          className={`flex h-20 w-full items-center justify-between gap-3 px-4 py-3 text-left ${textColor}`}
        >
          {/* Title only when collapsed; when expanded show only arrow (right-aligned) */}
          {!isExpanded && (
            <span className={`font-display text-2xl font-semibold sm:text-3xl ${textColor}`}>
              {title}
            </span>
          )}
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconBgColor} transition-transform duration-300 ${isExpanded ? 'ml-auto' : ''}`}
            aria-hidden
          >
            <HiChevronDown
              className={`h-7 w-7 ${iconColor} ${isExpanded ? 'rotate-180' : ''}`}
            />
          </span>
        </button>
      </div>

      {/* Content: grid-based height animation on mobile; always visible on desktop (md:!grid-rows-1 overrides) */}
      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:!grid-rows-[1fr] md:block ${className}`}
        style={{
          gridTemplateRows: isExpanded ? '1fr' : '0fr',
        }}
      >
        <div className="overflow-hidden md:!min-h-0">
          <div className={`min-h-0 md:min-h-0 ${isExpanded ? 'py-8 sm:py-12' : ''}`}>{children}</div>
        </div>
      </div>
    </>
  )
}
