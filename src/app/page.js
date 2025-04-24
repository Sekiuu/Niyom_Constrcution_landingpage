import Intro from "./component/Intro";
import Service_intro from "./component/Service_intro";

export const metadata = {
  title: companyInfo.company_name + " ปทุมธานี และ จังหวัดไกล้เคียง",
    description: "รับเหมางานไฟฟ้า ปทุมธานี | บริษัท นิยมดีอิเล็กทริกซ์ บริการติดตั้งระบบไฟฟ้า บ้าน อาคาร โรงงาน เดินสายไฟ ซ่อมตู้ไฟ ปรับปรุงระบบไฟ ไฟดับ รับเดินสายไฟในบ้าน ไฟรั่ว เรียกช่าง โดยทีมช่างมืออาชีพ ประสบการณ์ยาวนาน บริการทั่วปทุมธานี"
  
};

export default function Home() {
  return (
    <div>
      <Intro></Intro>
      <Service_intro></Service_intro>
    </div>
  );
}
