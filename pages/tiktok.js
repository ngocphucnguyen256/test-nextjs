import { useRouter } from 'next/router';


export async function getServerSideProps() {
    
    const response = await fetch('https://my-json-server.typicode.com/ngocphucnguyen256/test-json/db');
    const data = await response.json();

    return { props: { data } };
}

const tiktok = ({ data, timestamp }) => {

    const router = useRouter();
    if (!data) {
        return <h1>Data null</h1>;
    }


    return (
        <div style={{ padding: "3rem" }}>
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@_tusya_kiskis/video/7051487041938394369" data-video-id="7051487041938394369" style={{maxWidth: "605px",minWidth: "325px"}} > <section> <a target="_blank" title="@_tusya_kiskis" href="https://www.tiktok.com/@_tusya_kiskis">@_tusya_kiskis</a> <p>Inst: tusya_kiskis</p> <a target="_blank" title="♬ оригинальный звук - Sky Cat" href="https://www.tiktok.com/music/оригинальный-звук-6989638993105341186">♬ оригинальный звук - Sky Cat</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@fukada0318/video/7033632896359435522" data-video-id="7033632896359435522" style={{maxWidth: "605px",minWidth: "325px"}} > <section> <a target="_blank" title="@fukada0318" href="https://www.tiktok.com/@fukada0318">@fukada0318</a> <p>スカイピース</p> <a target="_blank" title="♬ Wolfgang Dance - MUHAMMAD RAMA" href="https://www.tiktok.com/music/Wolfgang-Dance-6999592688332884763">♬ Wolfgang Dance - MUHAMMAD RAMA</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@anhkyf_07/video/7045294187977198850" data-video-id="7045294187977198850" style={{maxWidth: "605px",minWidth: "325px"}} > <section> <a target="_blank" title="@anhkyf_07" href="https://www.tiktok.com/@anhkyf_07">@anhkyf_07</a> <p>gỏi cuốn 🍑</p> <a target="_blank" title="♬ sonido original - GamsterGaming" href="https://www.tiktok.com/music/sonido-original-7028396396906564358">♬ sonido original - GamsterGaming</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@_tusya_kiskis/video/7035722352948186369" data-video-id="7035722352948186369" style={{maxWidth: "605px",minWidth: "325px"}} > <section> <a target="_blank" title="@_tusya_kiskis" href="https://www.tiktok.com/@_tusya_kiskis">@_tusya_kiskis</a> <p>Inst: tusya_kiskis</p> <a target="_blank" title="♬ оригинальный звук - Я Лиза" href="https://www.tiktok.com/music/оригинальный-звук-6997467509628717825">♬ оригинальный звук - Я Лиза</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
        </div>
    );
};
export default tiktok;
