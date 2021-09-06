import React from 'react'
import Story from './Story';
import './StoryReel.css';
function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                title="Divakar"
                image="https://i.pinimg.com/originals/4a/3c/8c/4a3c8c74375e8fbe5adf99db215ca0e2.jpg"
                profileSrc="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
            <Story
                title="Arun"
                image="https://r1.ilikewallpaper.net/iphone-xs-max-wallpapers/download/36024/Mountain-Sky-River-Nature-Scenery-Summer-Dark-iphone-xs-max-wallpaper-ilikewallpaper_com.jpg"
                profileSrc="https://www.mlive.com/resizer/UEaVb0UEZ-FOOmU5sH-jaAPzEgI=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg" />
            <Story
                title="Karthick"
                image="https://i.pinimg.com/originals/b5/f3/79/b5f379198fd742b39f33cb49f2ecbded.jpg"
                profileSrc="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" />
            <Story
                title="Deejay"
                image="https://i.pinimg.com/originals/13/50/c3/1350c3bc45fcf21c4ca3cbe978a8ccab.jpg"
                profileSrc="https://static.toiimg.com/thumb/msid-76729750,width-640,resizemode-4/76729750.jpg" />
            <Story
                title="Elvis"
                image="https://i.pinimg.com/564x/87/23/0b/87230b5d1d976da44ad807a24c907e4d.jpg"
                profileSrc="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" />

        </div>
    )
}

export default StoryReel
