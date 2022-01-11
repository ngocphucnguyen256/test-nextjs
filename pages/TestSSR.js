import { useRouter } from 'next/router';





export async function getServerSideProps() {
    
    const response = await fetch('https://my-json-server.typicode.com/ngocphucnguyen256/test-json/db');
    const data = await response.json();

    return { props: { data } };
}

const TestSSR = ({ data, timestamp }) => {

    const router = useRouter();
    if (!data) {
        return <h1>Data null</h1>;
    }
    console.log(data);

    return (
        <div style={{ padding: "3rem" }}>
            {
                data.data.map((item) => {
                    return   <div  style={{ margin: "5rem", backgroundColor: "lightgrey"}} dangerouslySetInnerHTML={ { __html: item } }></div>
                })
            }
        </div>
    );
};
export default TestSSR;
