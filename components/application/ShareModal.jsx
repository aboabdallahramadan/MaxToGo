import { BsFacebook, BsWhatsapp, BsLink45Deg } from 'react-icons/bs'

const ShareModal = ({ isOpen, onClose }) => {
  const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL // Replace with your actual website URL
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${websiteUrl}`, '_blank')
  }
  
  const shareToWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send?text=${websiteUrl}`, '_blank')
  }
  
  const copyLink = () => {
    navigator.clipboard.writeText(websiteUrl)
    alert('Link copied to clipboard!')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background p-6 rounded-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold text-primary mb-4">Share FlyttConnect</h2>
        <div className="flex flex-col gap-3">
          <button
            onClick={shareToFacebook}
            className="flex items-center gap-2 p-3 rounded-lg hover:bg-primary/10 text-foreground"
          >
            <BsFacebook className="text-[#1877F2] text-xl" />
            Share on Facebook
          </button>
          <button
            onClick={shareToWhatsapp}
            className="flex items-center gap-2 p-3 rounded-lg hover:bg-primary/10 text-foreground"
          >
            <BsWhatsapp className="text-[#25D366] text-xl" />
            Share on WhatsApp
          </button>
          <button
            onClick={copyLink}
            className="flex items-center gap-2 p-3 rounded-lg hover:bg-primary/10 text-foreground"
          >
            <BsLink45Deg className="text-primary text-xl" />
            Copy Link
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full p-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ShareModal