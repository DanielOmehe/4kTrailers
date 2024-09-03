import Button from "../../utils/button";
import { FaFolder } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const SeriesEpisodes = ({ movieId }) => {
  return (
    <section className="series-episodes">
      <div className="seasons">
        <Button>
          <FaFolder color="#fff" />
          <p>Season 1</p>
          <FaAngleDown color="#fff" />
        </Button>
      </div>
    </section>
  );
};

export default SeriesEpisodes;
