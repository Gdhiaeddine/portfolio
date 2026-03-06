import { Mail, MapPin, Phone } from "lucide-react"
import { playfair } from "../font"

export default function SocialMedia() {
    const data = [
        {
            title: "Email",
            description: "guettafdhia@gmail.com",
            icon: <Mail />
        },
        {
            title: "Whatsapp",
            description: "05608490496",
            icon: <Phone />

        },
        {
            title: "Location",
            description: "Sétif, Algeria",
            icon: <MapPin />

        },
    ]
    return (
        <div className="max-w-11/12 md:max-w-150 mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-1">
                {data.map((info, index) => (
                    <div key={index} className="flex bg-white text-black rounded-md p-2 w-full gap-2 items-center">
                        <div>
                            {info.icon}
                        </div>
                        <div className="flex-col">
                            <h1 className={`${playfair.className} font-semibold text-lg`}>
                                {info.title}
                            </h1>
                            <p>
                                {info.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}