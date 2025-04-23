import { Appbar } from "@/components/Appbar";

import { getServerSession } from "next-auth"; // it is there to render session details on a server component

export default async function page () {
    const session = await getServerSession();

    return(
        <>
            <div>
                <Appbar />
            </div>

            <div>
                {JSON.stringify(session)}
            </div>
        </>
    )
}