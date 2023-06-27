import'./OurBlog.css';
import home01 from "../asset/home 01.jpeg";
import home02 from "../asset/home 02.jpeg";
import home03 from "../asset/front03.jpg";
import home05 from "../asset/front05.jpg";
const OurBlog = () => {
    return (
        <div className="container" id='blogContainer'>
            <div class="row" id='blogWrap'>
                <div class="col" id='blogImg'>
                    <img src={home02} id="" />
                </div>
                <div class="col" >
                    <h5>Our weekend special , dont miss.</h5>
                    <p>There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly believable.
                        uses a dictionary of over 200 Latin words, combined with a handful of
                        model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        The generated Lorem Ipsum is therefore always free from repetition</p>
                    <small><i>02 July 2023 Likes: 201 share: 23</i></small>
                </div>

            </div>
            <div class="row" id='blogWrap'>
                <div class="col" id='blogImg'>
                    <img src={home03} id="" />
                </div>
                <div class="col" >
                    <h5>Our weekend special , dont miss.</h5>
                    <p>There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly believable.
                        uses a dictionary of over 200 Latin words, combined with a handful of
                        model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        The generated Lorem Ipsum is therefore always free from repetition</p>
                    <small><i>02 July 2023 Likes: 201 share: 23</i></small>
                </div>

            </div>
            <div class="row" id='blogWrap'>
                <div class="col" id='blogImg'>
                    <img src={home05} id="" />
                </div>
                <div class="col" >
                    <h5>Our weekend special , dont miss.</h5>
                    <p>There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly believable.
                        uses a dictionary of over 200 Latin words, combined with a handful of
                        model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        The generated Lorem Ipsum is therefore always free from repetition</p>
                    <small><i>02 July 2023 Likes: 201 share: 23</i></small>
                </div>

            </div>
            <div class="row" id='blogWrap'>
                <div class="col" id='blogImg'>
                    <img src={home01} id="" />
                </div>
                <div class="col" >
                    <h5>Our weekend special , dont miss.</h5>
                    <p>There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly believable.
                        uses a dictionary of over 200 Latin words, combined with a handful of
                        model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        The generated Lorem Ipsum is therefore always free from repetition</p>
                    <small><i>02 July 2023 Likes: 201 share: 23</i></small>
                </div>

            </div>
        </div>
    )
}
export default OurBlog;