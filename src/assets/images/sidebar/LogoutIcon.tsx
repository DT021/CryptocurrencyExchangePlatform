import * as React from 'react';

interface LogoutIconProps {
    className?: string;
}

export const LogoutIcon: React.FC<LogoutIconProps> = (props: LogoutIconProps) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" className={props.className} fill="none">
            <path d="M11.9668 20.3057H4.49168C4.0332 20.3057 3.66113 19.9336 3.66113 19.4751V4.52492C3.66113 4.06645 4.03324 3.69438 4.49168 3.69438H11.9668C12.4261 3.69438 12.7973 3.32313 12.7973 2.86383C12.7973 2.40453 12.4261 2.0332 11.9668 2.0332H4.49168C3.11793 2.0332 2 3.15117 2 4.52492V19.4751C2 20.8488 3.11793 21.9668 4.49168 21.9668H11.9668C12.4261 21.9668 12.7973 21.5955 12.7973 21.1362C12.7973 20.6769 12.4261 20.3057 11.9668 20.3057Z" fill="var(--icons)"/>
            <path d="M21.7525 11.4085L16.7026 6.42515C16.3771 6.10288 15.8505 6.10706 15.5282 6.43347C15.206 6.75988 15.2093 7.28562 15.5366 7.60788L19.1453 11.1693H9.47508C9.01578 11.1693 8.64453 11.5406 8.64453 11.9999C8.64453 12.4592 9.01578 12.8305 9.47508 12.8305H19.1453L15.5366 16.3919C15.2093 16.7142 15.2068 17.2399 15.5282 17.5663C15.691 17.7308 15.9053 17.8138 16.1196 17.8138C16.3306 17.8138 16.5415 17.7341 16.7026 17.5746L21.7525 12.5912C21.9103 12.4351 22 12.2224 22 11.9998C22 11.7773 21.9111 11.5655 21.7525 11.4085Z" fill="var(--icons)"/>
        </svg>
    );
};
