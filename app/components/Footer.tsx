import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer id="footer" className="footer">
    <p>
      The authors of the game "Forbidden Memories" and the webmaters of the domain
      "forbidden-memories-website.vercel.app" and all its related sub-domains do not assume any responsibility for any
      damage caused by the game or by programs on the domain. All texts on the website are the result of personal
      opinions or objective observations and are, consequently, not intended to offend or harm any person.
    </p>
    <div className="footerimg">
      <img id="logofoot1" className="logofoot1" src="/image/logo/hes-so-you.24f78a2.svg" />
      <img id="logofoot2" className="logofoot2" src="/image/logo/logo_swissuniversities.e16d867.svg" />
      <img id="logofoot3" className="logofoot3" src="/image/logo/logo_equal-salary.9bcd8bf.svg" />
      <img id="logofoot4" className="logofoot4" src="/image/logo/logo_valais-excellence.7fc1036.svg" />
    </div>
  </footer>
  )
}
