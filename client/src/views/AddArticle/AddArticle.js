import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { createArticle } from "../../actions/articles";
import styles from "./AddArticle.module.scss";
import FileBase from "react-file-base64";
import ValidationInfo from "../../components/ValidationInfo/ValidationInfo";
import * as Yup from "yup";

const AddArticle = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    title: Yup.string()
      .max(1000, "Article title must contain less than 1000 characters")
      .required("Title is required"),
    image: Yup.string().required("Image is required"),
  });

  const {
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      image: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm, setFieldValue }) => {
      dispatch(createArticle(values));
      setFieldValue("image", "");
      resetForm({});
    },
  });

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="title" className={styles.inputLabel}>
        Title
      </label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Article title"
        className={styles.input}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.title}
      />
      {errors.title && touched.title ? (
        <ValidationInfo>{errors.title}</ValidationInfo>
      ) : null}
      <span className={styles.inputLabel}>Image</span>
      <FileBase
        multiple={false}
        onDone={({ base64 }) => setFieldValue("image", base64)}
      />
      {errors.image && touched.image ? (
        <ValidationInfo>{errors.image}</ValidationInfo>
      ) : null}
      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default AddArticle;
