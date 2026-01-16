import Home, { HomeProps } from "../features/Home";
import users from "../api/user-db.json";
import NotFoundPage from "../features/NotFound/NotFound";
export default async function Page({
    params,
}: {
    params: Promise<{ username: string }>;
}) {
    const { username } = await params;
    const user: HomeProps = users[username.toLowerCase() as keyof typeof users];
    if (!user) return (<NotFoundPage />)
    return (
        <>
            <Home fullName={user.fullName} job={user.job} description={user.description} aboutme={user.aboutme} link_linkedin={user.link_linkedin} link_github={user.link_github} email={user.email} photoURL={user.photoURL} />
        </>
    );
}
