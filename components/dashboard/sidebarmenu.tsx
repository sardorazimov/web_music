'use client'

import { cn } from "@/lib/utils";
import { Github, Heart, Music } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";



const NavLinks = [
	{ id: 1, name: 'Home', path: '/home',  },
	{ id: 2, name: 'Album', path: '/album' },
	{ id: 3, name: 'Setting', path: '/settings' },
	{ id: 2, name: 'Category', path: '/categories' },
	{ id: 3, name: 'Setting', path: '/settings' },
];

const Sidebarmenu = (

) => {
    const pathname = usePathname();
	const isActive = (path: string) => path === pathname;
  return (
    <div className="hidden lg:flex fixed ">
    
      <nav className="mx-2 mt-14 lg:w-52 border-r lg:h-screen ">
			<ul className="flex flex-col gap-y-8 mx-3">
				{NavLinks.map((link) => {
					return (
						<li key={link.id} className={cn('bg-transparent  hover:bg-muted text-center rounded-lg', 'active:bg-muted')}>
							<Link
								href={link.path}
								className={isActive(link.path) ? 'active' : '' }
							>
								{link.name}
                    
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
    </div>
  )
}

export default Sidebarmenu
