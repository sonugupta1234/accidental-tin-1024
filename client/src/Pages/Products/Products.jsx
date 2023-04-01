import {
  Box,
  Checkbox,
  CheckboxGroup,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/prducts/action";
import Pagination from "./Pagination";
import ProductsCard from "./ProductsCard";
import { useSearchParams } from "react-router-dom";
// import ProductsCard from "./ProductsCard";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initFilterValues = searchParams.getAll("category");
  const initBrandValues = searchParams.getAll("brand");
  const initSortValue = searchParams.getAll("sort");
  const initOrder = searchParams.getAll("order");

  const [filterValues, setFilterValues] = useState(initFilterValues);
  const [brand, setBrand] = useState(initBrandValues || []);
  const [sortValue, setSortValue] = useState(initSortValue);
  const [order, setOrder] = useState(initOrder);

  const [pageNo, setPageNo] = useState(1);

  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = useRef()

  const { product, isLoding, isError } = useSelector(
    (store) => store.productReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let params = {};
    if (filterValues.length) params.category = filterValues;
    if (brand.length) params.brand = brand;
    if (sortValue) {
      params._sort = sortValue;
    }
    if (sortValue === "rating") {
      params._order = "desc";
    } else if (sortValue === "discount") {
      params._order = "desc";
    } else if (sortValue === "discounted_priceLTH") {
      params._sort = "discounted_price";
      params._order = "asc";
    } else if (sortValue === "discounted_priceHTL") {
      params._sort = "discounted_price";
      params._order = "desc";
    } else if (sortValue === "rating_countLTH") {
      params._sort = "rating_count";
      params._order = "asc";
    } else if (sortValue === "rating_countHTL") {
      params._sort = "rating_count";
      params._order = "desc";
    }
    setSearchParams(params);
  }, [filterValues, setSearchParams, sortValue, order, pageNo, brand]);

  useEffect(() => {
    const getProductParam = {
      params: {
        category: searchParams.getAll("category"),
        brand: searchParams.getAll("brand"),
        page: pageNo,
        _sort: searchParams.get("_sort"),
        _order: searchParams.get("_order"),
      },
    };
    console.log("get", getProductParam);
    dispatch(getProducts(getProductParam));
  }, [searchParams, dispatch, pageNo]);

  const handleFilterChange = (val) => {
    if (val === "All") {
      console.log("all");
      setFilterValues("");
    } else {
      setFilterValues(val);
    }
  };

  const handleBrand = (val) => {
    console.log(val);
    setBrand(val);
  };

  const handleClear = () => {
    setFilterValues([]);
    // dispatch(getMensData());
    // onClose();
  };

  const handlePage = (val) => {
    setPageNo((prev) => prev + val);
  };

  // console.log("loading",loadingMen,"error",error);

  return (
    <>
      <Box w={{ base: "100%", md: "100%", lg: "100%" }}>
        <Box m="4% auto 0.5% auto" w={{ base: "98%", md: "95%", lg: "95%" }}>
          <Box display={"flex"} alignItems="center">
            <Text>Home/</Text>
            <Text fontWeight={500}>Clothings & Apparels</Text>
          </Box>
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"space-between"}
            mt={{ lg: "30px" }}
          >
            {" "}
            <Text>FILTERS</Text>{" "}
            <Select
              w={{ base: "50%", md: "24%", lg: "15%" }}
              borderRadius="0px"
            >
              <option value="">Sort by:-</option>
              <option value="">Recommended</option>
              <option value="">What,s New</option>
              <option value="">Popularity</option>
              <option value="">Better Discount</option>
              <option value="">Price: Hight to Low</option>
              <option value="">Price: Low to High</option>
              <option value="">Customer Rating</option>
            </Select>
          </Box>
        </Box>
        {/* ================================ */}
        <Box display={"flex"} w={{ base: "100%", md: "100%", lg: "100%" }}>
          <Box
            background={"#fff"}
            width={{ base: "45%", md: "25%", lg: "15%" }}
            h={"auto"}
            borderWidth={"1px"}
          >
            {/* ================men women boys girls ================= */}
            <RadioGroup
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              fontWeight={"500"}
              p={"20px"}
              value={filterValues}
              onChange={handleFilterChange}
            >
              <Radio
                m={"5px"}
                name="category"
                value="All"
              >
                All
              </Radio>
              <Radio
                m={"5px"}
                name="category"
                value="Mens"
              >
                Men
              </Radio>
              <Radio
                m={"5px"}
                name="category"
                value="Womens"
              >
                Women
              </Radio>
              <Radio
                m={"5px"}
                name="category"
                value="Child"
              >
                Kids
              </Radio>
            </RadioGroup>
            {/* =================category================ */}
            <Box
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              p={"20px"}
            >
              <Text fontWeight={"500"} mb={"15px"}>
                CATEGORIES
              </Text>
              <Checkbox value={""}> Tshirts</Checkbox>
              <Checkbox value={""}> Jeans</Checkbox>
              <Checkbox value={""}> Sarees</Checkbox>
              <Checkbox value={""}> Trousers</Checkbox>
              <Checkbox value={""}> Shirts</Checkbox>
              <Checkbox value={""}> Dresses</Checkbox>
              <Checkbox value={""}> Kurtas</Checkbox>
              <Checkbox value={""}> Tops</Checkbox>
              <Checkbox value={""}> Kurta Sets</Checkbox>
              <Checkbox value={""}> Sweatshirts</Checkbox>
              <Text color={"red.400"} cursor={"pointer"}>
                +81 more
              </Text>
            </Box>
            {/* =========== BRAND =============== */}
            <Box
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              p={"20px"}
            >
              <Text fontWeight={"500"} mb={"15px"}>
                BRAND
              </Text>
              {/* <CheckboxGroup colorScheme="blue" value={brand} onChange={handleBrand}></CheckboxGroup>
              <Checkbox value={"KALINI"} > KALINI</Checkbox>
              <Checkbox value={"Roadster"}> Roadster</Checkbox>
              <Checkbox value={"H&M"}> H&M</Checkbox>
              <Checkbox value={"Pothys"}> Pothys</Checkbox>
              <Checkbox value={"Mitera"}> Mitera</Checkbox>
              <Checkbox value={""}> max</Checkbox>
              <Checkbox value={""}> HERE&NOW</Checkbox>
              <Checkbox value={""}> GRACIT</Checkbox>
              <CheckboxGroup/> */}
              <CheckboxGroup
                colorScheme="blue"
                value={brand}
                onChange={handleBrand}
              >
                <Checkbox value={"KALINI"}> KALINI</Checkbox>
                <Checkbox value={"Roadster"}> Roadster</Checkbox>
                <Checkbox value={"H&M"}> H&M</Checkbox>
              </CheckboxGroup>
              <Text color={"red.400"} cursor={"pointer"}>
                +3204 more
              </Text>
            </Box>
            {/* ====================PRICE======================== */}
            <Box
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              p={"20px"}
            >
              <Text fontWeight={"500"} mb={"15px"}>
                PRICE
              </Text>

              <Checkbox value={""}> Rs.89 to Rs.13817</Checkbox>
              <Checkbox value={""}> Rs.13817 to Rs.27545</Checkbox>
              <Checkbox value={""}> Rs.27545 to Rs.41273</Checkbox>
              <Checkbox value={""}> Rs.41273 to Rs.55001</Checkbox>
            </Box>
            {/* ================COLOR===================== */}
            <Box
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              p={"20px"}
            >
              <Text fontWeight={"500"} mb={"15px"}>
                COLOR
              </Text>
              <Checkbox value={""}>Blue</Checkbox>
              <Checkbox value={""}> Black</Checkbox>
              <Checkbox value={""} colorScheme="pink">
                {" "}
                Pink
              </Checkbox>
              <Checkbox value={""}> Navy Blue</Checkbox>
              <Checkbox value={""} colorScheme="green">
                {" "}
                Green
              </Checkbox>
              <Checkbox value={""} colorScheme="gray">
                {" "}
                White
              </Checkbox>
              <Checkbox value={""} colorScheme="red">
                {" "}
                Red
              </Checkbox>

              <Text color={"red.400"} cursor={"pointer"}>
                +39 more
              </Text>
            </Box>
            {/* =============================Discount prices========================== */}
            <Box
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              p={"20px"}
            >
              <Text fontWeight={"500"} mb={"15px"}>
                DISCOUNT RANGE
              </Text>
              <Radio value={""}> 10% and above</Radio>
              <Radio value={""}> 20% and above</Radio>
              <Radio value={""}> 30% and above</Radio>
              <Radio value={""}> 40% and above</Radio>
              <Radio value={""}> 50% and above</Radio>
              <Radio value={""}> 60% and above</Radio>
              <Radio value={""}> 70% and above</Radio>
              <Radio value={""}> 80% and above</Radio>
              <Radio value={""}> 90% and above</Radio>
            </Box>
            {/* ==========================DELIVERY TIME==================== */}
            <Box
              display={"flex"}
              flexDirection="column"
              borderWidth={"1px"}
              p={"20px"}
              color="gray"
            >
              <Text color="black" fontWeight={"500"} mb={"15px"}>
                DELIVERY TIME
              </Text>
              <Input
                placeholder="Update delivery pincode here"
                fontSize={"11px"}
              />
              <Radio value={""}>By Tomarrow</Radio>
              <Radio value={""}>Within 2 Days</Radio>
              <Radio value={""}>Within 3 Days</Radio>
              <Radio value={""}>Within 4 Days</Radio>
              <Text fontSize={"11px"}>
                Estimated fastest delivery time. Refer to actual delivery time
                in Bag.
              </Text>
            </Box>
            {/* ===================== */}
          </Box>
          {/* data===map here======== */}
          <Box
            borderTop={"1px solid rgb(155, 150, 150)"}
            width={{ base: "85%", md: "85%", lg: "85%" }}
          >
            <Box
              m={"auto"}
              display="grid"
              gap="30px"
              padding={"10px"}
              gridTemplateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(5,1fr)",
              }}
            >
              {isLoding ? (
                <h1>Loading....</h1>
              ) : isError ? (
                <h1>Something went wrong????</h1>
              ) : (
                product.map((e) => <ProductsCard key={e._id} {...e} />)
              )}
            </Box>
            <Box>
              {" "}
              <Pagination pageNo={pageNo} setPageNo={setPageNo} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Products;
