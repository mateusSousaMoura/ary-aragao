import { siteConfig } from '../config/site.config'

const SimpleFooterMarquee = () => {
  return (
    <div className="simple-footer-marquee">
      <div className="simple-footer-marquee__content">
        {siteConfig.personal.fullName} • {siteConfig.personal.fullName} • {siteConfig.personal.fullName}
      </div>
    </div>
  )
}

export default SimpleFooterMarquee
