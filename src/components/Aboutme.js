import React from "react";
import "./TH.css";

export default function Aboutme() {
  const dob = () => {
    let diff_ms = Date.now() - new Date(1998, 7, 31).getTime();
    let age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center mt-3 pt-3">
          <div className="col-4 d-flex justify-content-center">
            <img
              src={process.env.PUBLIC_URL + "/profile.jpg"}
              width="200"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4 pt-4">
          <div className="col-12 col-xs-12">
            <div className="d-flex justify-content-center">
              <h1 className="heading" style={{ fontSize: "40px" }}>
                About me
              </h1>
            </div>
            <div className="col-12 d-flex justify-content-center ">
              <p className="text-center w-75 fontTH">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className=" col-12 mt-4">
              <hr className="pill" />
            </div>
            <div className="row d-flex justify-content-center mt-3 pt-3">
              <div className="col-12 col-md-6 text-center">
                <div>
                  <span className="fontTH">
                    ชื่อ-นามสกุล: นายกฤตาคม โชคอนันต์วณิชย์
                  </span>
                </div>

                <div>
                  <span className="fontTH">ชือเล่น: บูม </span>
                </div>
                <div>
                  <span className="fontTH">เพศ: ชาย </span>
                </div>
                <div>
                  <span className="fontTH">อายุ {dob()} ปี </span>
                </div>
                <div className="fontTH mt-2">
                  <span>การศึกษา: ปริญญาตรี 2560 - ปัจจุบัน </span>
                  <br />
                  <span>
                    ปัจจุบันศึกษาในระดับปริญญาตรีหลักสูตรวิทยาศาสตร์บัณฑิต
                    สาขาวิชาเทคโนโลยีสารสนเทศ (IT)
                    มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)
                  </span>
                </div>
                <div className="fontTH">GPAX: 3.50</div>
                <div className="mt-3">
                  <a href="tel:08-2058-8449">
                    <span className="la la-mobile-phone la-2x "></span>
                  </a>
                  <a href="mailto:kridtakom@gmail.com">
                    <span className="la la-envelope la-2x "></span>
                  </a>
                  <a href="https://github.com/kridtakom">
                    <span className="la la-github la-2x "></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
