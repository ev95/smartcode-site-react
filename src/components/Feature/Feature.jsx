import { FaChevronDown, FaStar } from "react-icons/fa6";
import { useState } from "react";
import './Feature.css';

export function Feature({ feature }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <li className="dropbox">
            <div className="dropbox-head" onClick={() => setIsCollapsed(!isCollapsed)}>
                <div>
                    <FaStar />
                    <p>{feature.title}</p>
                </div>
                <FaChevronDown />
            </div>
            {
                isCollapsed
                &&
                <div className="dropbox-collapse">
                    <p>{feature.description}</p>
                </div>
            }

        </li>
    )
}