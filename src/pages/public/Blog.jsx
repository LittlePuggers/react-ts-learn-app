import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import blog4 from "../../assets/images/blog4.png";
import blog5 from "../../assets/images/blog5.png";
import blog6 from "../../assets/images/blog6.png";
import { Box } from "../../components/common/Box";
import { Button } from "../../components/UI/Button";

export function Blog() {
  return (
    <section className="blog">
      <h1>Blog</h1>
      <div className="item-container">
        <Box
          img={blog1}
          tag="Do consectetur"
          title="Blog title"
          date="Date"
          duration="Duration"
        ></Box>
        <Box
          img={blog2}
          tag="Do consectetur"
          title="Blog title"
          date="Date"
          duration="Duration"
        ></Box>
        <Box
          img={blog3}
          tag="Do consectetur"
          title="Blog title"
          date="Date"
          duration="Duration"
        ></Box>
        <Box
          img={blog4}
          tag="Do consectetur"
          title="Blog title"
          date="Date"
          duration="Duration"
        ></Box>
        <Box
          img={blog5}
          tag="Do consectetur"
          title="Blog title"
          date="Date"
          duration="Duration"
        ></Box>
        <Box
          img={blog6}
          tag="Do consectetur"
          title="Blog title"
          date="Date"
          duration="Duration"
        ></Box>
      </div>
      <Button
        btnText="Load more articles"
        className="primary-btn"
        onClick={undefined}
      />
    </section>
  );
}
