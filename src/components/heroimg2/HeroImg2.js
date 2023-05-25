import "./HeroImg2Styles.css";


export const HeroImg2 = ({title, subtitle}) => {
  return (
    <div className="hero-img">
       <div className="heading ">
          <h1>{title}</h1>
          <p>{subtitle}</p>
       </div>
     </div>
  );
}


export default HeroImg2;
