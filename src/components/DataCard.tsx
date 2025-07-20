import "./Data.css";
import { type Driver } from "../types/types.ts";
import Tilt from "react-parallax-tilt";

type dProp = {
  driver: Driver;
};

function DataCard(props: dProp) {
  return (
    <>
      {/* card div */}
      <Tilt glareEnable={true} glareBorderRadius="30px">
        <div className="bg-[#ede2e2] w-[48vw] h-[28vw] rounded-[2vw] shadow-[7px_10px_20px_5px_#1b1b1b48] p-[2vw] overflow-auto flex flex-col gap-[1vw]">
          {/* upper text div */}
          <div className="flex justify-between flex-row items-center">
            <div className="flex flex-row justify-evenly gap-0.5">
              <p
                style={{
                  color: props.driver.team_colour
                    ? `#${props.driver.team_colour}`
                    : "black",
                }}
                className="text-[3vw]"
                id="team"
              >
                TEAM &nbsp;
              </p>
              <p className="font-bold text-[3vw]">F1</p>
            </div>
            <div className="flex flex-col text-right font-bold text-[1vw]">
              <p>IDENTIFICATION CARD</p>
              <p>NO. {props.driver.driver_number ?? "2"}2309249038019</p>
              <p>&gt;</p>
            </div>
          </div>

          {/* image, data container */}
          <div className="flex flex-row gap-[4vw] items-center justify-center">
            <div className="w-[15vw] h-[15vw]">
              {/* image */}
              <img 
                src={
                  props.driver.headshot_url
                    ? props.driver.headshot_url.replace("/1col/", "/2col/")
                    : "dilf.jpg"
                }
              ></img>
            </div>
            {/* grid for data */}
            <div className="flex flex-col gap-2">
              <div className="d-info">
                <div className="row">
                  <p className="font-bold text-left">이름/Name</p>
                  <p className="text-right">
                    {props.driver.broadcast_name ?? "N/A"}
                  </p>
                </div>
                <hr />
                <div className="row">
                  <p className="font-bold text-left">숫자/Number</p>
                  <p className="text-right">
                    {props.driver.driver_number ?? "N/A"}
                  </p>
                </div>
                <hr />
                <div className="row">
                  <p className="font-bold text-left">위치/Location</p>
                  <p className="text-right">
                    {props.driver.country_code ?? "N/A"}
                  </p>
                </div>
                <hr />
                <div className="row">
                  <p className="font-bold text-left">회원/Member of</p>
                  <p className="text-right">
                    {props.driver.team_name ?? "N/A"}
                  </p>
                </div>
              </div>
              {/* extra data */}
              <div className="text-right flex flex-col text-[1.1vw]">
                <p className="font-bold text-[1vw]">
                  이 카드는 소지자가 F1 팬임을 증명합니다.
                </p>
                <p className="font-bold tracking-wide">This card certifies you a F1 freak</p>
                <p className="font-black text-rose-950">
                  {props.driver.driver_number == 55 ? "[my pookie 😛]" : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
}

export default DataCard;
