import React from "react";
import Great_1 from '../img/Great1.1.png';
import Great_2 from '../img/Great2.png'


const VictoriaFalls = () => {
  return (
    <div className="mx-48 mt-12">
      <div className="text-3xl font-bold">Великие памятники Зимбабве</div>
      <div className="flex flex-row justify-between mt-8 ">
        <img
          src={Great_1}
          alt="photo_news"
          className="w-[500px] h-[393px]"
        />
        <img
          src={Great_2}
          alt="photo_news"
          className="w-[500px] h-[393px]"
        />
      </div>
      <div className="text-lg font-md">
      <div className="mt-4">
      Великие руины Зимбабве - это культовый археологический объект,
      расположенный на юго-востоке Зимбабве, недалеко от города Масвинго. Эти руины являются объектом Всемирного наследия ЮНЕСКО и славятся своим историческим 
      значением, архитектурным величием и культурным наследием.
      </div>
      <div className="my-4">
       Считается, что Великие руины Зимбабве были построены предками
       народа шона между 11 и 15 веками. Это место служило столицей Королевства Зимбабве, крупной торговой империи,
       которая контролировала торговые пути в Южной Африке.
      </div>
      <div>
       Самой поразительной особенностью Великих руин Зимбабве являются
       массивные каменные сооружения, в том числе Большое ограждение,
       комплекс Холмов и комплекс долин. Эти сооружения были построены с использованием технологии, известной как возведение стен из сухого камня,
       когда камни укладываются друг на друга без раствора.
      </div>
      <div className="my-4">
      Великие руины Зимбабве являются свидетельством богатой истории и 
      культурного наследия Зимбабве и являются обязательным местом для 
      посещения путешественниками, интересующимися археологией, историей и культурой Африки. 
      Впечатляющая архитектура, историческое значение и живописная красота этого места делают его уникальным 
      и увлекательным местом для изучения на Юге Африки.Для ознакомления 
      с историей и архитектурой руин организуются экскурсии с гидом.
      </div>
      </div>
    </div>
  );
};

export default VictoriaFalls;
