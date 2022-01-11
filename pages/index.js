import Head from 'next/head'
import NavBar from './nav';
import TestSSR from './TestSSR';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Test Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div>
         <NavBar />


      </div>
      
      <div>
      <div style={{ margin: "5rem", backgroundColor: "lightgrey"}}>
       <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cciinnn/video/7049644316616150274" data-video-id="7049644316616150274"
        style={{maxWidth: "605px",minWidth: "325px"}} > <section> <a target="_blank" title="@cciinnn" 
        href="https://www.tiktok.com/@cciinnn">@cciinnn</a> POV: Khi bạn cận 80 độ :)))) @khaicakhia99 <a title="tiktokdancevn" 
        target="_blank" href="https://www.tiktok.com/tag/tiktokdancevn">#tiktokdanceVN</a> <a title="bndanceteam" target="_blank" 
        href="https://www.tiktok.com/tag/bndanceteam">#BNdanceteam</a> <a target="_blank" title="♬ Quán em có bán cà phê - Hưng Hack Remix" 
        href="https://www.tiktok.com/music/Quán-em-có-bán-cà-phê-7043374210403601154">♬ Quán em có bán cà phê - Hưng Hack Remix</a> 
        </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
    <div style={{ margin: "5rem", backgroundColor: "lightgrey"}}>
      <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Starship launch &amp; catch tower <a 
      href="https://t.co/5mLIQwwu0k">pic.twitter.com/5mLIQwwu0k</a></p>&mdash; Elon Musk (@elonmusk) <a 
      href="https://twitter.com/elonmusk/status/1480326831031173124?ref_src=twsrc%5Etfw">January 9, 2022</a></blockquote> <script async 
      src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
    <div style={{ margin: "5rem", backgroundColor: "lightgrey"}}>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/65kPTniJusE" title="YouTube video player" frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div style={{ margin: "5rem", backgroundColor: "lightgrey"}}>
      <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fvietcetera%2Fvideos%2F469602631439911%2F&show_text=false&width=476&t=0" 
      width="476" height="476" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true"
       allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
    </div>
      </div>
      </main>

      <footer>

      </footer>

      

    </div>
  )
}



