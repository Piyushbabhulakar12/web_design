import Card from "./Card";
import img1 from "../assets/images/1618111652.jpg";
import img2 from "../assets/images/1308802-bungy-jumping.jpg";
import img3 from "../assets/images/giant-swing-60ft-250x250.png";

const Suggestion = () => {
  const bg_container = {
    background: "#253430",
    color: "#fff",
  };

  const activityList = [
    {
      imageUrl: img1,
      title: "Sky Cycling",
      subTitle: "Activity Category",
    },
    {
      imageUrl: img2,
      title: "Bungee Jumping",
      subTitle: "Activity Category",
    },
    {
      imageUrl: img3,
      title: "Gaint Swing",
      subTitle: "Activity Category",
    },
    {
      imageUrl: img3,
      title: "Gaint Swing",
      subTitle: "Activity Category",
    },
    {
      imageUrl: img2,
      title: "Bungee Jumping",
      subTitle: "Activity Category",
    },
    {
      imageUrl: img1,
      title: "Sky Cycling",
      subTitle: "Activity Category",
    },
    {
      imageUrl: img1,
      title: "Sky Cycling",
      subTitle: "Activity Category",
    },
    {
      imageUrl: img2,
      title: "Bungee Jumping",
      subTitle: "Activity Category",
    },
    {
      imageUrl: img3,
      title: "Gaint Swing",
      subTitle: "Activity Category",
    },
  ];

  return (
    <>
      <div style={bg_container}>
        <div className="container-fluid p-5">
          <div
            className="d-flex"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div>
              <h1 style={{ fontWeight: "700" }}>Activity Suggestions</h1>
              <h5 style={{ marginTop: "25px", color: "#bfbfbf" }}>
                Lorem Ipsum has been the industry's standard
              </h5>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <div className="mt-1">
                  <h5 style={{ color: "#c1be68" }}>View All</h5>
                </div>
                <button
                  type="button btn-lg"
                  style={{
                    background: "#c1be68",
                    height: "70px",
                    width: "70px",
                    borderRadius: "50px",
                    fontSize: "30px",
                    color: "#fff",
                  }}
                  class="btn"
                >
                  <i class="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="cotainer mt-5">
              <div className="row">
                {activityList.map((data, index) => (
                  <div className="col-md-4 mb-5" key={index}>
                    <Card
                      imageUrl={data.imageUrl}
                      title={data.title}
                      subTitle={data.subTitle}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Suggestion;
