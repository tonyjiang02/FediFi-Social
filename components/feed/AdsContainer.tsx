import React, { useState, useEffect, useRef } from 'react'; 
// import { useIsVisible } from './UseOnScreen';
interface AdsContainerProps {
    creatorId: String
}
export default function AdsContainer({creatorId}: AdsContainerProps) {
    const [imageData, setImageData] = useState(null)
    const componentRef = useRef(null)
    const [seenOnce, setSeenOnce] = useState(false)
    useEffect(() => {
        const newCreatorId = creatorId.split("@")[1]
        // Fetch ads from the server given creator id and save it to adData
        const url = "http://localhost:8000/get_ad"
        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "creatorId": newCreatorId}),
        }).then(response => {
            return response.json()
        }).then(data => {
            setImageData(data.image)
        })
        if(!seenOnce) {
            const url = "http://localhost:8000/view_ad"
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"creatorId": newCreatorId})
            })
            setSeenOnce(true)
        }
    }, []);
    return (
        <div>
            <img src={imageData}></img>
        </div>
    );
}