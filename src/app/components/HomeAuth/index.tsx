import { UserType } from "@/type/user";
import SideMenu from "./components/SideMenu";
import useDeleteUserFromFirebase from "@/hooks/useDeleteUserFromFirebase";

function HomeAuth({
    isUserDeletedFromFirebase,
}: {
    user: UserType;
    isUserDeletedFromFirebase: boolean;
}) {
    useDeleteUserFromFirebase(isUserDeletedFromFirebase);

    return (
        <div>
            <SideMenu />
        </div>
    );
}

export default HomeAuth;
