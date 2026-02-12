import { Link } from 'react-scroll'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'

/**
 * Floating support/chat button (bottom-right). Scrolls to contact section.
 */
export default function FloatingSupport() {
  return (
    <Link
      to="contact"
      smooth
      duration={500}
      offset={-72}
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      aria-label="Contact support"
    >
      <HiOutlineChatBubbleLeftRight className="h-7 w-7" />
    </Link>
  )
}
