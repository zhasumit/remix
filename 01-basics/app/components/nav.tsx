import { Link } from '@remix-run/react';
import React, { useState } from 'react';

const Nav = () => {
    const [tooltip, setTooltip] = useState({ visible: false, text: '', position: { x: 0, y: 0 } });

    const showTooltip = (text: string, e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip({
            visible: true,
            text: text,
            position: { x: rect.left + rect.width / 2, y: rect.top - 33 },
        });
    };

    const hideTooltip = () => {
        setTooltip({ visible: false, text: '', position: { x: 0, y: 0 } });
    };

    return (
        <div className="relative">
            {/* Navigation Bar */}
            <div className="flex gap-3 bg-[#202125] w-48 items-center justify-center p-2 rounded-md fixed bottom-10 left-[43.4%]">
                <Link
                    to={"/"}
                    onMouseEnter={(e) => showTooltip('Home', e)}
                    onMouseLeave={hideTooltip}
                >
                    <img src="home.svg" className="h-7" alt="Home" />
                </Link>
                <Link
                    to={"/projects"}
                    onMouseEnter={(e) => showTooltip('Projects', e)}
                    onMouseLeave={hideTooltip}
                >
                    <img src="projects.svg" className="h-7" alt="Projects" />
                </Link>
                <Link
                    to={"/about"}
                    onMouseEnter={(e) => showTooltip('About Me', e)}
                    onMouseLeave={hideTooltip}
                >
                    <img src="ghost.svg" className="h-7" alt="About Me" />
                </Link>
                <Link
                    to={"/user-manual"}
                    onMouseEnter={(e) => showTooltip('User Manual', e)}
                    onMouseLeave={hideTooltip}
                >
                    <img src="manual.svg" className="h-7" alt="User Manual" />
                </Link>
            </div>  

            {tooltip.visible && (
                <div
                    className="absolute px-2 py-1 bg-black text-white text-sm rounded shadow-lg z-30"
                    style={{
                        top: tooltip.position.y,
                        left: tooltip.position.x,
                        transform: 'translate(-50%, -100%)',
                        boxShadow: '0 4px 20px rgba(255, 255, 255, 0.15)', // Box glow effect
                    }}
                >
                    {tooltip.text}
                </div>
            )}

        </div>
    );
};

export default Nav;
