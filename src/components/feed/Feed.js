import React from 'react'

import StoryReel from "../storyReel/StoryReel";
import MessageSender from "../messageSender/MessageSender";
import Post from "../post/Post";

import "./Feed.css";

function Feed() {
    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            {/* MessengerSender */}
            <MessageSender />

            <Post 
            profilePic="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/120734594_3483412948387853_2471357943453684604_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=AmHDi6vEIjYAX9hkkL_&_nc_ht=scontent.fsgn2-5.fna&oh=47801cfffc3e3363b9bf88708ee72adf&oe=5FA9D76B"
            message="내일부터 빨간 날❣️❣️❣️
            즐거운 추석 보내세요"
            timestamp="This is a timestamp"
            username="IU"
            image="https://kenh14cdn.com/thumb_w/640/2020/5/3/tumblr285fe83d10f2f58c77b3617c0d1a8931904010591280-15885190134351136839951-crop-15885192147531199522310.jpg"
            />
            <Post 
            profilePic="https://ge.lnwfile.com/_resize_images/600/600/o5/ko/mp.jpg"
            message="내가 좋아하는 언니들 🤍 놀토 보고있나요?"
            timestamp="This is a timestamp"
            username="Rosé"
            image="https://www.hellokpop.com/wp-content/uploads/2020/05/Rose-BLACKPINK.jpg"
            />
        </div>
    )
}

export default Feed
