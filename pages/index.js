import Link from "next/link";
import Layout from "../components/Layout";

const exam = () => (
  <div>
    <Layout />
    <h1>hello</h1>
    <div>
      <Link href="/about">
        <span>소개</span>
      </Link>
    </div>
  </div>
);

export default exam;
