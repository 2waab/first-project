import React from 'react';
import SocialItem from './SocialItem';


function Social() {
    return (
        <div className='list-group'>
            <SocialItem 
                p = {{
                    media:'Facebook', 
                    id:'facebook',
                    icon:'bx bxl-facebook',
                }}
            />
            <SocialItem
                p = {{
                    media:'Youtube', 
                    id:'youtube',
                    icon:'bx bxl-youtube',
                }}
            />
            <SocialItem
                p = {{
                    media:'Instagram', 
                    id:'instagram',
                    icon:'bx bxl-instagram',
                }}
            />
            <SocialItem
                p = {{
                    media:'LinkedIn',
                    id:'linkedin',
                    icon:'bx bxl-linkedin-square',
                }}
            />
        </div>
    );
};

export default Social;