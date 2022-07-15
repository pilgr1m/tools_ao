import React, { FC } from 'react'
import { FormikValues, useFormik } from 'formik'
import * as Yup from 'yup'
import runes from '../img/runes.jpg'

type Props = {

}

export const Calculation: FC<Props> = () => {
  const validateSchema = Yup.object().shape({
    priceItem: Yup.number().min(2, 'Мінімум 1').max(999_999_999, 'Макс.999млн').required("Обов'язкове поле"),
    priceRune: Yup.number().min(1, 'Мінімум 1').max(999_999_999, 'Макс.999млн').required("Обов'язкове поле"),
    numberOfRune: Yup.number().min(1, 'Мінімум 1').max(999_999_999, 'Макс.999млн').required("Обов'язкове поле"),
    priceAmpItem: Yup.number().min(1, 'Мінімум 1').max(999_999_999, 'Макс.999млн').required("Обов'язкове поле"),
    percent: Yup.number().min(1, 'Мінімум 1').max(999_999_999, 'Макс.999млн').required("Обов'язкове поле"),
  })

  const func = (values: any) => {
    console.log('values: ', values)
  }

  const formik = useFormik({
    validationSchema: validateSchema,
    initialValues: {
      priceItem: '',
      priceRune: '',
      numberOfRune: '',
      priceAmpItem: '',
      percent: '',
    },
    onSubmit: (values: FormikValues) => {
      console.log('onSubmit')
      // console.log('values: ', values)
      func(values)
    },
  })

  const placeholders = {
    priceItem: 'Кінцева ціна з -% аука',
    priceRune: 'Кінцева ціна з -% аука',
    numberOfRune: 'Дивись картинку нище',
    priceAmpItem: 'Кінцева ціна з -% аука',
    percent: 'З Премом на аук = 1,5%',
  }

  const placeholderStyles = {
    border: '1px solid grey',
    padding: 4,
    color: 'blue',
    fontSize: 15,
  }

  const result = null

  console.log('formik.values: ', formik.values)
  console.log('formik.errors: ', formik.errors)

  return (
    <div style={{
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 75,
      left: '16vw',
      width: '80vw',
    }}
    >
      <b>Calculation for trade in Albion...</b>

      {/* Calc */}
      <div
        style={{
          backgroundColor: 'lightgray',
          borderBottom: 'solid gray 1px',
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <div style={{ width: '33%' }}>
            <div><label htmlFor="priceItem"> Ціна предмету </label></div>
            <input
              name="priceItem"
              type="number"
              placeholder={placeholders.priceItem}
              onChange={formik.handleChange}
              value={formik.values.priceItem}
              style={placeholderStyles}
            />
            {formik.errors.priceItem ? <span style={{ color: 'red' }}>{formik.errors.priceItem}</span> : null}
          </div>

          <div style={{ width: '33%' }}>
            <div><label htmlFor="priceRune"> Ціна Руни </label></div>
            <input
              name="priceRune"
              type="number"
              placeholder={placeholders.priceRune}
              onChange={formik.handleChange}
              value={formik.values.priceRune}
              style={placeholderStyles}
            />
            {formik.errors.priceItem ? <span style={{ color: 'red' }}>{formik.errors.priceRune}</span> : null}
          </div>

          <div style={{ width: '33%' }}>
            <div><label htmlFor="numberOfRune"> К-сть рун </label></div>
            <input
              name="numberOfRune"
              type="number"
              placeholder={placeholders.numberOfRune}
              onChange={formik.handleChange}
              value={formik.values.numberOfRune}
              style={placeholderStyles}
            />
            {formik.errors.priceItem ? <span style={{ color: 'red' }}>{formik.errors.numberOfRune}</span> : null}
          </div>

          <div style={{ width: '33%' }}>
            <div><label htmlFor="priceAmpItem"> Ціна предмету +.1 </label></div>
            <input
              name="priceAmpItem"
              type="number"
              placeholder={placeholders.priceAmpItem}
              onChange={formik.handleChange}
              value={formik.values.priceAmpItem}
              style={placeholderStyles}
            />
            {formik.errors.priceItem ? <span style={{ color: 'red' }}>{formik.errors.priceAmpItem}</span> : null}
          </div>

          <div style={{ width: '33%' }}>
            <div><label htmlFor="percent"> % Габену </label></div>
            <input
              name="percent"
              type="number"
              placeholder={placeholders.percent}
              onChange={formik.handleChange}
              value={formik.values.percent}
              style={placeholderStyles}
            />
            {formik.errors.priceItem ? <span style={{ color: 'red' }}>{formik.errors.percent}</span> : null}
          </div>

          <div style={{
            width: '33%',
            marginTop: 10,
            // border: 'solid 1px grey',
          }}
          >
            Результат: <span>{ result}</span>
          </div>
          {/* <div style={{ width: '33%' }}> */}
          {/*  <div> <label htmlFor="priceItem"> Ціна предмету </label></div> */}
          {/*  <input name="priceItem" type="number" /> */}
          {/*  <ErrorMessage name="priceItem" /> */}
          {/* </div> */}

          <div style={{ width: '33%', paddingTop: 10 }}>
            <button type="submit" style={{ padding: 8, backgroundColor: 'lightblue' }}>
              Порахувати
            </button>
          </div>

        </form>
      </div>
      <div
        style={{
          backgroundColor: 'lightgray',
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <div>Кількість рун для зачарки</div>
        <img src={runes} alt="" />
      </div>

    </div>
  )
}
