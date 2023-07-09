import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import {useRecoilState} from "recoil";
import {modalState} from "@/atoms/modalAtom";
import Widgets from "@/components/Widgets";


export default function Home({ trendingResults, followResults, providers }) {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useRecoilState(modalState);


    if (!session) return <Login providers={providers} />;

    return (
        <div className="">

            <Head>
                <title>Home / Twitter</title>
                <link rel="icon" href="/Twitter_icon-icons.com_66803.png" />
            </Head>
            <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
                <Sidebar />
                <Feed/>
                <Widgets
                    trendingResults={trendingResults}
                    followResults={followResults}
                />
                {isOpen && <Modal/>}
            </main>
        </div>
    );
}


export async function getServerSideProps(context) {
    const trendingResults = await fetch("https://api.jsonstorage.net/v1/json/231c6566-89af-4706-a262-47c4cdd63929/57e02f8e-93b0-498e-ad0a-301d7617da92").then(
        (res) => res.json()
    );
    const followResults = await fetch("https://api.jsonstorage.net/v1/json/231c6566-89af-4706-a262-47c4cdd63929/82d6cc4d-bb65-4f4f-b266-88c63d2bef31").then(
        (res) => res.json()
    );
    const providers = await getProviders();
    const session = await getSession(context);

    return {
        props: {
            trendingResults,
            followResults,
            providers,
            session,
        },
    };
}