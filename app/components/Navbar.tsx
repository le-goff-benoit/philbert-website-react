import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar">
    <Link href="/">
      <img alt="Orange Logo" id="logoimg" className="logoimg" src="/image/logo/logo_orange.png" width={200}/>
    </Link>
    <Link href="/">
      <img alt="Orange Logo" id="logoimgsmalscreen" className="logoimgsmalscreen" src="/image/logo/logo_orange.png" width={200}/>
    </Link>
    <div id="menubar" className="menubar">
      <Link href="/">HOME</Link>
      <Link href="/description">DESCRIPTION</Link>
      <Link href="/sketch">SKETCH</Link>
      <Link href="/flow">FLOW</Link>
      <Link href="/logbook">LOGBOOK</Link>
      <Link href="https://forbidden-memories-game.vercel.app" target="_blank">PLAY</Link>
    </div>
    <div id="menudropdown" className="displaynone">
      <button id="buttonmenu"><i className="fa fa-bars"></i></button>
      <ul className="dropdowncontent">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/description">Description</Link></li>
        <li><Link href="/sketch">Sketch</Link></li>
        <li> <Link href="/flow">Flow</Link></li>
        <li><Link href="/logbook">Logbook</Link></li>
        <li><Link href="https://forbidden-memories-game.vercel.app" target="_blank">Play</Link></li>
      </ul>
    </div>
  </nav>
  )
}
