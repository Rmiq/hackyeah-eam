import React, { Component } from "react";
import { Formik, Field } from "formik";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TableData from "../../components/TableData";
import PlacesMap from "../../components/PlacesMap";
import "./styles.scss";






const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return ( 
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className=""
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  return (
    <div className="">
      <legend>{label}</legend>
      {children}
      {touched && <InputFeedback error={error} />}
    </div>
  );
};

// Input feedback
const InputFeedback = ({ error }) =>
  error ? <div className="">{error}</div> : null;

class FindAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPlaces: [],
      submitCount: 0,
      token:"",
      userLat:'',
      userLng:'',
      isActive: true

    }
  }

  handleAddress(locality,street,place){
    fetch('https://maps.googleapis.com/maps/api/geocode/json?' +
    'address=' + locality + street + place + '&key=' +
    'AIzaSyCkzWzc1L1vUApjc-u5AsRaLuKz-HT-yNc') 
    .then(response => response.json())
    .then(
        (data)=> {
       
            if (data.results.length > 0) {
              console.log(data);
                let lat = data.results[0].geometry.location.lat;
                let long = data.results[0].geometry.location.lng;
                console.log(lat);
                console.log(long);
                this.setState({
                    userLat:lat,
                    userLng:long
                })
            } else {
                alert("Wrong address");
            }
  
        }

        )
    
  
  }
  

  handleClick = ()=>{
    this.setState({
      isActive: true,
      dataPlaces:[]
    })
  }
  handleSelectRow = () => {
    console.log('parent')
  }
  render() {
    const { submitCount,dataPlaces } = this.state;
    return (
      <div className="findAppointment-container">
        <Formik
          initialValues={{
            case: "",
            province: "00",
            benefit: "",
            preferences: "",
            street: "",
            locality: "",
            place: "",
            preferences: 'time'
          }}
          validate={values => {
            let errors = {};
            if (!values.benefit) {
              errors.benefit = "Pole wymagane";
            } else if (!values.case) {
              errors.case = "Pole wymagane";
            }
            else if (!values.locality) {
              errors.locality = "Pole wymagane";
            }else if (!values.street) {
              errors.street = "Pole wymagane";
            }else if (!values.place) {
              errors.place = "Pole wymagane";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
             
              this.setState({submitCount: submitCount + 1,
              isActive: false })
              // alert(JSON.stringify(values, null, 2));
              let url =  `https://api.nfz.gov.pl/queues?page=1&limit=10&format=json&case=${values.case}&benefit=${values.benefit}${values.province !== "00" ? '&province=' + values.province : ''}`
              console.log(url)
              fetch(
                url
              )
                .then(response => response.json())
                .then(data => this.setState({ dataPlaces: data }));
              const tempValues={
                ...values,
                userLat:this.state.userLat,
                userLng:this.state.userLng
              }

              fetch("https://0f9gctnbb6.execute-api.eu-central-1.amazonaws.com/hackyeah-eam/add-data",{
                method: 'POST',
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(tempValues)
              }).then((response)=> response.json()).then((res) => this.setState({
                token:res.token
              }))
              resetForm(); 
              setSubmitting(false);
            
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            dataPlaces
            /* and other goodies */
          }) => (
            <>
            {this.state.isActive ? <Card className="findAppointment-input">
              <h1>Zacznij od wyszukania terminu</h1>

              <form onSubmit={handleSubmit}>
                <div className="singleInput-container">
                  <RadioButtonGroup
                    id="case"
                    label="Wybierz przypadek *"
                    value={values.radioGroup}
                    error={errors.radioGroup}
                    touched={touched.radioGroup}
                  >
                    <Field
                      component={RadioButton}
                      name="case"
                      id="1"
                      label="stabilny"
                    />
                    <Field
                      component={RadioButton}
                      name="case"
                      id="2"
                      label="pilny"
                    />
                  </RadioButtonGroup>
                  {errors.case && touched.case && errors.case}
                </div>
                <div className="singleInput-container">
                  <TextField
                    type="benefit"
                    id="benefit"
                    label="Nazwa świadczenia *"
                    className="textField"
                    value={values.benefit}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                  />
                  {errors.benefit && touched.benefit && errors.benefit}
                </div>
                
                <div className="singleInput-container">
                  <Select
                    name="province"
                    value={values.province}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="select"
                    // inputProps={{
                    //   name: 'age',
                    //   id: 'age-simple',
                    // }}
                  >
                    <MenuItem value="00">
                      <em>Cała Polska</em>
                    </MenuItem>
                    <MenuItem value="01">Dolnośląskie</MenuItem>
                    <MenuItem value="02">Kujawsko-pomorskie</MenuItem>
                    <MenuItem value="03">Lubelskie</MenuItem>
                    <MenuItem value="04">Lubuskie</MenuItem>
                    <MenuItem value="05">Łódzkie</MenuItem>
                    <MenuItem value="06">Małopolskie</MenuItem>
                    <MenuItem value="07">Mazowieckie</MenuItem>
                    <MenuItem value="08">Opolskie</MenuItem>
                    <MenuItem value="09">Podkarpackie</MenuItem>
                    <MenuItem value="10">Podlaskie</MenuItem>
                    <MenuItem value="11">Pomorskie</MenuItem>
                    <MenuItem value="12">Śląskie</MenuItem>
                    <MenuItem value="13">Świętokrzyskie</MenuItem>
                    <MenuItem value="14">Warmińsko-mazurskie</MenuItem>
                    <MenuItem value="15">Wielkopolskie</MenuItem>
                    <MenuItem value="16">Zachodniopomorskie</MenuItem>
                  </Select>
                  {errors.province && touched.province && errors.province}
                </div>
                <h2>Twoje dane</h2>
                <div className="singleInput-container">
                  <TextField
                    type="locality"
                    id="locality"
                    label="Miejscowość *"
                    className="textField"
                    value={values.locality}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                  />
                  {errors.locality && touched.locality && errors.locality}
                </div>

                <div className="singleInput-container">
                  <TextField
                    type="street"
                    id="street"
                    label="Ulica *"
                    className="textField"
                    value={values.street}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                  />
                  {errors.street && touched.street && errors.street}
                </div>
                <div className="singleInput-container">
                  <TextField
                    type="place"
                    id="place"
                    label="Numer ulicy *"
                    className="textField"
                    value={values.place}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                  />
                  {errors.place && touched.place && errors.place}
                </div>
                <div className="singleInput-container">
                  <Select
                    name="preferences"
                    value={values.preferences}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="select"
                  >
                    <MenuItem value="distance">Odległość</MenuItem>
                    <MenuItem value="time">Czas oczekiwania</MenuItem>
                  </Select>
                  {errors.preferences && touched.preferences && errors.preferences}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  className="submit-button"
                  onClick={(e)=>this.handleAddress(values.locality,values.street,values.place)}
                >
                  Wyszukaj termin
                </Button>
              </form>
            
            </Card> : <Button variant="contained" color="primary" onClick={this.handleClick}>Wyszukaj ponownie</Button>}
           </>
          )}
        </Formik>
        <div className="bottom-container">
       
        {submitCount === 0 ? null : dataPlaces.length != 0 ? <div className="bottom-inner"><TableData onSelectRow={this.handleSelectRow} dataPlaces={dataPlaces}/><PlacesMap dataPlaces={dataPlaces} token={this.state.token} /></div> : <span>Wyszukaj ponownie</span> }
        
       
        </div>
        
        
      </div>
    );
  }
}

export default FindAppointment;
