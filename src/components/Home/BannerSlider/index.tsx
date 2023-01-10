import React from "react";
import Slider from "react-slick";
import BannerItem from "../BannerItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BannerSlider() {
  return (
    <div className="flex justify-center bg-primary">
      <div className="w-full max-w-5xl">
        <Slider
          dots
          infinite
          slidesToShow={1}
          slidesToScroll={1}
          autoplay
          arrows={false}
        >
          <BannerItem
            title="유튜브 채널명 뭘로하지?"
            description="모두의 작명 플랫폼"
          />
          <BannerItem
            title="부캐 닉네임 뭘로하지?"
            description="개성있는 이름을 부탁하세요!"
          />
          <BannerItem
            title="우리 가게 이름 뭘로하지?"
            description="서로 멋진 이름을 지어줘요!"
          />
        </Slider>
      </div>
    </div>
  );
}

export default BannerSlider;
