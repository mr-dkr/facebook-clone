import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import './MessageSender.css'
import Post from './Post'
import db, { storageRef } from './firebase'

function Feed() {

    const [posts, setPosts] = useState([]);
    const [imageUrl, setImageUrl] = useState([])

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                console.log(snapshot)
                setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
            })
    }, [])

    useEffect(() => {
        // const forestRef = storageRef.refFromURL('gs://facebook-clone-8584d.appspot.com/facebook-icon-transparent-background-3.png');

        // // Get metadata properties
        // forestRef.getMetadata().then(function (metadata) {
        //     // Metadata now contains the metadata for 'images/forest.jpg'
        //     setImageUrl(metadata.fullPath)
        //     console.log(metadata.fullPath)
        // }).catch((error) => {
        //     alert(error.message)
        // });

        // Create a reference under which you want to list
        var listRef = storageRef.refFromURL('gs://facebook-clone-8584d.appspot.com/images');

        // Find all the prefixes and items.
        listRef.listAll().then(function (res) {
            res.prefixes.forEach(function (folderRef) {
                // All the prefixes under listRef.
                // You may call listAll() recursively on them.
            });
            res.items.forEach(function (itemRef) {
                // All the items under listRef.
                console.log(itemRef.fullPath)
                // setImageUrl(itemRef.fullPath)
            });
        }).catch(function (error) {
            // Uh-oh, an error occurred!
        });

    })
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={imageUrl} />

            ))}
            {/* {imageUrl.map((imagePath)=>(
                <Post
                    profilePic={imagePath.imageUrl}
                    message="Hi"
                    timestamp="Timestamp"
                    username="mrdkr"
                    image={imagePath.imageUrl}
                />
            ))} */}

        </div>
    )
}

export default Feed
