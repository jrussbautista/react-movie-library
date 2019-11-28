import { useLocation } from "react-router-dom";
import queryString from "query-string";

const usePage = () => {
  const { search } = useLocation();
  let { page } = queryString.parse(search);
  page = page ? parseInt(page) : 1;

  return page;
};

export default usePage;
