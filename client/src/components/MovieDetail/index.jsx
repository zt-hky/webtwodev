import React from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './MovieDetail.scss'

export default class MovieDetail extends React.Component {
    render() {
        return (
            <header className="Current">
                <section className="Current_Img">
                    <img src="../img/Film.svg" alt =""/>
                </section>
                <section className="Current_Info">
                    <h1>ALADIN</h1>
                    <section className="Current_Info_Detail">
                        <article><b>Thời lượng:</b> 120 Phút</article>
                        <article><b>Thể loại:</b> Phiêu Lưu, Giả tưởng, Gia Đình</article>
                        <article><b>Quốc gia:</b> Mỹ</article>
                        <article><b>Đạo diễn:</b> Guy Ritchie</article>
                        <article><b>Ngày:</b> 23/5/2019</article>
                        <article className="Current_Info_Detail_Voting">
                            <p><b>Đánh giá: </b></p>
                            <Rater style={{marginLeft:10}} total={5} rating={0} />

                        </article>
                    </section>
                    <section className="Current_Info_Des">
                        <h3>Nội dung:</h3>
                        <p>Aladdin 2019 là phiên bản live action của bộ phim hoạt hình nổi tiếng ra mắt vào năm 1992.
                          Trong phiên bản này, siêu sao Hollywood Will Smith vào vai Thần Đèn.
                          Gia cảnh khốn cùng, xuất thân bần hàn, chàng trai khu ổ chuột Aladdin làm thế nào để gặp gỡ
                          và được nàng công chúa Jasmine mạnh mẽ xinh đẹp đem lòng yêu thương?
</p>
                    </section>
                </section>
            </header>
        );
    }
}