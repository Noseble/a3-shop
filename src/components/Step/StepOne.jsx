import Form from "./Form/Form";
import Input from "./Input/Input";
import { Option, OptionGroup } from "./Option/Option";
import style from "./StepOne.module.css";

function CityOption() {
  const city = [
    { value: "", name: "請選擇縣市" },
    { value: "KLU", name: "基隆市" },
    { value: "TPH", name: "新北市" },
    { value: "TPE", name: "臺北市" },
    { value: "TYC", name: "桃園市" },
    { value: "HSH", name: "新竹縣" },
    { value: "HSC", name: "新竹市" },
    { value: "MAC", name: "苗栗市" },
    { value: "MAL", name: "苗栗縣" },
    { value: "TXG", name: "臺中市" },
    { value: "CWH", name: "彰化縣" },
    { value: "CWS", name: "彰化市" },
    { value: "NTC", name: "南投市" },
    { value: "NTO", name: "南投縣" },
    { value: "YLH", name: "雲林縣" },
    { value: "CHY", name: "嘉義縣" },
    { value: "CHI", name: "嘉義市" },
    { value: "TNN", name: "臺南市" },
    { value: "KHH", name: "高雄市" },
    { value: "IUH", name: "屏東縣" },
    { value: "PTS", name: "屏東市" },
    { value: "ILN", name: "宜蘭縣" },
    { value: "ILC", name: "宜蘭市" },
    { value: "HWA", name: "花蓮縣" },
    { value: "HWC", name: "花蓮市" },
    { value: "TTC", name: "臺東市" },
    { value: "TTT", name: "臺東縣" },
    { value: "PEH", name: "澎湖縣" },
    { value: "KMN", name: "金門縣" },
    { value: "LNN", name: "連江縣" },
  ];

  return city.map((city) => {
    return <Option key={city.value} value={city.value} option={city.name} />;
  });
}

function StepOne({ step }) {
  return (
    <div className={`${step > 1 ? style.hidden : ''}`}>
      <Form phase="address" title="寄送地址">
        <div className={style.content}>
          <div className={`${style.title} + ${style.group}`}>
            <OptionGroup name="稱謂">
              <Option value="mr" option="先生" />
              <Option value="ms" option="女士" />
              <Option value="mx" option="不明" />
            </OptionGroup>
          </div>
          <div className={`${style.name} + ${style.group}`}>
            <Input title="姓名" placeholder="請輸入姓名" maxLength={10} />
          </div>
        </div>
        <div className={style.content}>
          <div className={`${style.phone} ${style.group}`}>
            <Input title="電話" placeholder="請輸入行動電話" maxLength={10} />
          </div>
          <div className={`${style.mail} ${style.group}`}>
            <Input title="Email" placeholder="請輸入電子郵件" maxLength={50} />
          </div>
        </div>
        <div className={style.content}>
          <div className={`${style.location} ${style.group}`}>
            <OptionGroup name="縣市">
              <CityOption />
            </OptionGroup>
          </div>
          <div className={`${style.address} ${style.group}`}>
            <Input title="地址" placeholder="請輸入地址" maxLength={10} />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default StepOne;
