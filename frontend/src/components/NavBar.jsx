import { ShoppingCartIcon, ShoppingBagIcon } from 'lucide-react'
import { Link, useResolvedPath } from 'react-router-dom'
import React from 'react'
import ThemeSelector from './ThemeSelector'
function NavBar() {
    const { pathname } = useResolvedPath()
    const isHomePage = pathname === '/'
    return (
        <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
            <div className="navbar px-4 min-h-[4rem] justify-between max-w-7xl mx-auto">
                {/* LOGO */}
                <div className="flex-1 lg:flex-none">
                    <Link to="/" className="hover:opacity-80 transition-opacity">
                        <div className='flex items-center gap-2'>
                            <ShoppingCartIcon className='size-9 text-primary' />
                            <span className='font-semibold font-mono tracking-widest text-2xl 
                bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                                JamesShop
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Right Section */}
                <div className='flex items-center gap-4'>
                    <ThemeSelector></ThemeSelector>
                    {isHomePage && (
                        <div className='indicator hover:bg-base-200 transition-colors'>
                            <ShoppingBagIcon className="size-5" />
                            <span className='badge badge-sm badge-primary indicator-item'>8</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NavBar