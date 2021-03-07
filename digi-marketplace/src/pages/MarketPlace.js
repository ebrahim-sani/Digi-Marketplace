import React, { useEffect, useState } from "react";
import "./MarketPlace.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Software from "../components/Software";
import { db } from "../firebase";

function MarketPlace() {
  const [software, setSoftware] = useState([]);

  useEffect(() => {
    db.collection("software").onSnapshot((snapshot) =>
      setSoftware(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  console.log(software);

  return (
    <div className="marketplace">
      <Header />
      <div className="marketplace__component">
        <div className="software__list">
          {software.map(({ id, data: { cover_url, software_title } }) => (
            <Software
              id={id}
              key={id}
              cover_img={cover_url}
              sw_name={software_title}
            />
          ))}
          <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/81Meqy%2B0O6L._AC_SL1500_.jpg"
            sw_name="Security Software with Top-Grade Security Standards..."
            desc=""
          />
          <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/71qZbaeqeEL._AC_SL1500_.jpg"
            sw_name="Acronis True Image 2021 - 1 Computer| 12-Month Subscription, 1 Person | Premium Office Apps | 1TB OneDrive Cloud Storage | PC/Mac Download"
            desc=""
          />
          {/* <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/61pw7xaZkrL._AC_SL1500_.jpg"
            sw_name="OfficeSuite Home & Business 2021 | Lifetime License | Compatible with Word®, Excel®, PowerPoint® & PDF for Windows"
            desc=""
          />
          <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/81-vBxZaQ5L._AC_SL1500_.jpg"
            sw_name="TurboTax Deluxe 2020 Desktop Tax Software, Federal and State Returns + Federal E-file [Amazon Exclusive] [PC/Mac Disc]"
            desc=""
          />
          <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/51ZAC9XtF0L._AC_SL1000_.jpg"
            sw_name="Corel WordPerfect Office 2020 Home & Student | Word Processor, Spreadsheets, Presentations | Newsletters, Labels, Envelopes, Reports, eBooks [PC Disc]"
            desc=""
          />
          <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/71zXBRUn-XL._AC_SL1500_.jpg"
            sw_name="Corel PDF Fusion Document Management Suite [PC Disc]"
            desc=""
          />
          <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/710qhS5uU4L._AC_SL1500_.jpg"
            sw_name="Corel PaintShop Pro 2021 | Photo Editing & Graphic Design Software | AI Powered Features [PC Disc]"
            desc=""
          />
          <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/81cz60DSGIL._AC_SY550_.jpg"
            sw_name="Norton 360 Premium 2021 – Antivirus Software for 10 Devices with Auto Renewal - Includes VPN, PC Cloud Backup & Dark Web Monitoring Powered by LifeLock [Key card]"
            desc=""
          />
          <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/81lS0L3lnOL._AC_SL1500_.jpg"
            sw_name="Corel Painter 2021 | Digital Painting Software | Illustration, Concept, Photo, and Fine Art [PC/Mac Keycard]"
            desc=""
          />
          <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/71Yd0ecw6LL._AC_SL1500_.jpg"
            sw_name="Quicken Premier Personal Finance – Maximize your investments – 1-Year Subscription (Windows/Mac)"
            desc=""
          />
          <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/71zXBRUn-XL._AC_SL1500_.jpg"
            sw_name="Corel PDF Fusion Document Management Suite [PC Disc]"
            desc=""
          />
          <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/81lS0L3lnOL._AC_SL1500_.jpg"
            sw_name="Corel Painter 2021 | Digital Painting Software | Illustration, Concept, Photo, and Fine Art [PC/Mac Keycard]"
            desc=""
          />
          <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/71qZbaeqeEL._AC_SL1500_.jpg"
            sw_name="Acronis True Image 2021 - 1 Computer| 12-Month Subscription, 1 Person | Premium Office Apps | 1TB OneDrive Cloud Storage | PC/Mac Download"
            desc=""
          />
          <Software
            cover_img="https://images-na.ssl-images-amazon.com/images/I/81Meqy%2B0O6L._AC_SL1500_.jpg"
            sw_name="NordVPN 18-Month VPN Subscription - Internet Privacy & Security Software with Top-Grade Security Standards, Double Encryption, Secure Content Access"
            desc=""
          /> */}
        </div>
        <div className="margin__line"></div>
        <Footer />
      </div>
    </div>
  );
}

export default MarketPlace;
