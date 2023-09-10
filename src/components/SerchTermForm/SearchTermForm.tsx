import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  InputGroup,
  Row,
} from "react-bootstrap";
import { CATEGORY_SELECT_OPTIONS, SORT_SELECT_OPTIONS } from "constant/form";
import { useAppDispatch } from "common/hooks/useAppDispatch";
import { setSearch } from "components/SerchTermForm/SearchSlice";

type FormControlElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;
export const SearchTermForm = () => {
  const initialValues = {
    searchTerm: "",
    category: "",
    page: 0,
    sort: "Relevance",
  };
  const [values, setValues] = useState(initialValues);
  const [isInvalid, setIsInvalid] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleOnChange = (e: ChangeEvent<FormControlElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
    setIsInvalid(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (values.searchTerm === "") {
      setIsInvalid(true);

      return;
    }

    dispatch(setSearch({ values: values }));

    navigate("books/list");
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <FormGroup className="mt-2">
        <Row className="justify-content-center ">
          <Col md={4}>
            <InputGroup>
              <FormControl
                isInvalid={isInvalid}
                name="searchTerm"
                value={values.searchTerm}
                onChange={handleOnChange}
                placeholder="Search..."
              />
              <FormControl.Feedback tooltip type="invalid">
                Required.
              </FormControl.Feedback>
              <Button
                id="submit-button"
                size="sm"
                variant="secondary"
                type="submit"
              >
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mt-2 ">
        <Row className="justify-content-center">
          <Col className="me-2" xs md={2}>
            <FormLabel className="text-white">Categories:</FormLabel>
            <FormSelect
              onChange={handleOnChange}
              value={values.category}
              name="category"
              size="sm"
            >
              {CATEGORY_SELECT_OPTIONS.map(({ name, value }, index) => (
                <option key={index} value={value}>
                  {name}
                </option>
              ))}
            </FormSelect>
          </Col>
          <Col className="ms-2" xs md={2}>
            <FormLabel className="text-white">Sorting By:</FormLabel>
            <FormSelect
              onChange={handleOnChange}
              value={values.sort}
              name="sort"
              size="sm"
            >
              {SORT_SELECT_OPTIONS.map(({ name, value }, index) => (
                <option key={index} value={value}>
                  {name}
                </option>
              ))}
            </FormSelect>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};
