import ph from "../assets/ph.png";

const Philippines = ({ data }) => {
  return (
	  <>
		  <div className="animate__animated animate__fadeIn" 
				style={{
			  height: 2000,
			  width: 1050,
			  backgroundImage: `url(${ph})`,
			  backgroundRepeat: "no-repeat",
			  backgroundPosition: "center",
			  backgroundSize: `100% 100%` }}>
		  </div>
    </>
  );
}
export default Philippines