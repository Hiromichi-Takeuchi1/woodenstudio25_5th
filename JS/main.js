// gsap.fromTo(
//   ".concept-first .column-left",
//   5,
//   { 
//     x: -100,
//     opacity: 0  // ← 「opcity」ではなく「opacity」
//   },
//   {
//     x: 0,
//     opacity: 1,
//     scrollTrigger: {
//       trigger: ".concept-first .column-left",
//       start: "top center",
//       markers: true
//     }
//   }
// );

// gsap.fromTo(
//   ".concept-first .column-right",
// 5,
// {
//     x: 100,
//     opacity: 0  // ← 「opcity」ではなく「opacity」
//   },
//   {
//     x: 0,
//     opacity: 1,
//     delay : 0.5,
//     scrollTrigger: {
//       trigger: ".concept-first .column-right",
//       start: "top center",
//       markers: true
//     }
// }  
// )

// Gsapからメディアクエリの関数を実行
const mm = gsap.matchMedia();
// ブレイクポイントの指定
// 端末の画面が1025px以上のときに実行（ｐｃ）
mm.add("(min-width: 1025px)", () => {
  gsap.fromTo(
    ".concept-first .column-left",
    5,
    { 
      x: -100,
      opacity: 0  // ← 「opcity」ではなく「opacity」
    },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".concept-second .column-left",
        start: "top center",
        markers: true
      }
    }
  );

  gsap.fromTo(
    ".concept-first .column-right",
    5,
    {
      x: 100,
      opacity: 0  // ← 「opcity」ではなく「opacity」
    },
    {
      x: 0,
      opacity: 1,
      delay : 0.5,
      scrollTrigger: {
        trigger: ".concept-first .column-right",
        start: "top center",
        markers: true
      }
    }  
  )
});

// 端末の画面が599px以下のときに実行（スマホ）
mm.add("(max-width: 599px)", () => {
  gsap.fromTo(
    ".concept-first .column-left",
    3,
    { 
      y: 100,
      opacity: 0  // ← 「opcity」ではなく「opacity」
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".concept-first .column-left",
        start: "top center",
        markers: true
      }
    }
  );

  gsap.fromTo(
    ".concept-first .column-right",
    3,
    {
      y: 100,
      opacity: 0  // ← 「opcity」ではなく「opacity」
    },
    {
      y: 0,
      opacity: 1,
    //   delay : 0.5,
      scrollTrigger: {
        trigger: ".concept-first .column-right",
        start: "top center",
        markers: true
      }
    }  
  )
});
