import { useEffect, useState } from "react"

function Preview() {

    const [avatar, setAvatar] = useState()

    useEffect(() => {

        //cleanup function
        return() => {
           avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview= URL.createObjectURL(file)

        setAvatar(file)

        //e.target.value = null
    }


    return(
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt='' width='80%' />
            )}
        </div>
    )
}

export default Preview