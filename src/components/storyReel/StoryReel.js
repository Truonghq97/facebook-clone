import React from 'react'

import Story from '../story/Story';

import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story
            image="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/120316217_3465070713555410_8219981626973316783_o.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=3f_tNVDr5JwAX8ixXby&_nc_ht=scontent.fsgn2-6.fna&oh=44237ac049f8e88dc9ee76ec564ba732&oe=5FA625C7"
            profileSrc="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/120734594_3483412948387853_2471357943453684604_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=AmHDi6vEIjYAX9hkkL_&_nc_ht=scontent.fsgn2-5.fna&oh=47801cfffc3e3363b9bf88708ee72adf&oe=5FA9D76B"
            title="IU"
            />
            <Story
            image="https://shelikes.net/wp-content/uploads/2020/04/43ef1e11611723fbfd7d2484d23e9d7f-Copy.jpg"
            profileSrc="https://shelikes.net/wp-content/uploads/2020/04/43ef1e11611723fbfd7d2484d23e9d7f-Copy.jpg"
            title="Jisoo"
            />
            <Story
            image="https://ge.lnwfile.com/_resize_images/600/600/o5/ko/mp.jpg"
            profileSrc="https://ge.lnwfile.com/_resize_images/600/600/o5/ko/mp.jpg"
            title="Rosé"
            />
            <Story
            image="https://image.plo.vn/w653/Uploaded/2020/xpckxpiu/2020_04_28/lisa-plo-3_xxxl.png"
            profileSrc="https://image.plo.vn/w653/Uploaded/2020/xpckxpiu/2020_04_28/lisa-plo-3_xxxl.png"
            title="Lisa"
            />
            <Story
            image="https://upload.wikimedia.org/wikipedia/commons/9/99/Jennie_Kim_for_Marie_Claire_Korea_Magazine_on_October_9%2C_2018_%285%29.png"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/9/99/Jennie_Kim_for_Marie_Claire_Korea_Magazine_on_October_9%2C_2018_%285%29.png"
            title="Jennie"
            />
            
        </div>
    )
}

export default StoryReel
