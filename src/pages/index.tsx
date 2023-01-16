import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="flex h-[500px] w-[500px] flex-col flex-wrap">
          <div className="flex">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
          <div className="flex">
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </div>
          <div className="flex">
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
          </div>
          <div className="flex">
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
