import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './simpleImageSlider';
function simpleImageSlider() {
   const sliderImages = [
      {
         url: "https://onedaycart.com/odcb/wp-content/uploads/2016/11/1-composition-with-variety-of-grocery-products-t-monticello.jpg",
      },
      {
         url: "https://thumbs.dreamstime.com/b/shopping-trolley-grocery-items-metal-healthy-standing-fruit-vegetable-department-hypermarket-87424023.jpg",
      },
      {
         url: "https://i1.wp.com/www.indiaretailing.com/wp-content/uploads/2017/07/PS032526-HDR.jpg?fit=2048%2C1333&ssl=1",
      },
      {
         url: "https://thumbs.dreamstime.com/b/chocolate-bars-candy-store-2-21947501.jpg",
      },
      {
         url: "https://1.bp.blogspot.com/-IA0tOe4P_j4/Xn9Gvw9sCzI/AAAAAAAAC0M/mWW4GM0BNVUMbAfLpCa9tSxdkjSv61P0wCEwYBhgLKs0DAMBZVoBVNs-b_1x2kAOVmRwUSIi56vmeo9TCO1gdiUKbbHnOzF70fXcKvLpasCXH-yYd0MZpbL9_ginINMB3wyjbnUANUAvlEoRV7quZP1Q_1Itlq9MyvzE3eQz5JvEx5cYu9nqg1QHrmjndZqpfSLFKq8w5qYxclWt4GOwChTDbrYUv9PdWAHFa6p-SaegTj_LLzXLiQU2xxi3vPJANovV-l4-sFAxI-a0yQBCKIwqNQ8m4TJFfqKHv0vMQ8OWi49PtH8lzykHOtbHH37QvVYVCfhIk1DEO98b_jR_X-wXiJE4IdW5w-cnsk1x_93U7osdQjdplj-c1s7Lsk_9wmqfIRns4cogiRxAQQWwEizYgwgg7idt9mwbqNQpP4twHllmffGATw_mz-n_tei9pfC0oOSSIrEAQflsApEJEMsojfzXKC-M3IGOzJRuUeuO_ipY-kOYzxd2y5yxnv4QfEb4I2uxxbZCM7CXtwVc9LW6jLxBckm7fx4jJkrDla3b7WioJG_SpMkaU3ZGvovqSXM3cliVervrnvNXzhxAApsO6eVFrlDng9fw8A2J-lguO1FIWwIBnwm1jRz_mp8-DBmQ47PToroZ7-xsZOjgwz5L98wU/s1600/Groceries.jpg",
      },
      {
         url: "https://i.insider.com/5e7ca73e14f18f4a4773db70?width=600&format=jpeg&auto=webp",
      },
      {
         url: "https://thumbs.dreamstime.com/b/items-purchased-grocery-store-items-purchased-grocery-store-black-backdrop-115105962.jpg",
      },
   ];
   return (
      <div>
         
         <SimpleImageSlider style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'}}
            width={1000}
            height={500}
            images={sliderImages}
            showNavs={true}
         />
      </div>
   );
}
export default simpleImageSlider;