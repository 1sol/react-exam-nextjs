import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const index = () => (
  <div>
    <Layout />
    <Head>
      <title>index page</title>
    </Head>
    <h1>hello</h1>
    <div>
      <Link href="/about">
        <span>소개</span>
      </Link>
    </div>
  </div>
);

export default index;
