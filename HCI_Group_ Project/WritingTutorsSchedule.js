// This js file includes an array of tutors and appointment information, as well as code for a  customized Date Picker.

//  ============================================= This project does not require a backend at the moment. So we will build in our 'database' here and make use of local storage. array of tutors. Each tutor has a select list of appointmsnts available

/**Variable values
tutors-> name -> appointments -> status: booked/ available /pending //maybe true or false
tutors-> name -> appointments -> student: name of student who booked appointment

time: new Date(year, month, day, hours, minutes, seconds, milliseconds)
*/



//let sampleDate = new Date(2020, 5, 9, 10, 0)
let today = new Date();
let sampleMonth = today.getMonth(); //get current Month
//notice offset: 3 corresponds to April
let sampleDay = today.getDate(); // get current day of the Month

console.log(sampleMonth, sampleDay);

let tutors = [
	{
		name: 'Jenna Doe',
		employeeId: 0,
		appointments: [
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 10, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 10, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 10, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 10, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 10, 40),
					endTime: new Date(2020, sampleMonth, sampleDay, 11, 0),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 2, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 2, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 2, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 2, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
		],
	},

	{
		name: 'John Smith',
		employeeId: 1,
		appointments: [
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 11, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 11, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 12, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 1, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 12+ 1, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 1, 40),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 2, 0),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 2, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 2, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
		],
	},


	{
		name: 'Shikamaru Nara',
		employeeId: 2,
		appointments: [
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 4, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 4, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 4, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 4, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 5, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 5, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 5, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 5, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 5, 40),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 6, 0),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
		],
	}
]

//console.log(tutors)

//Today Button added via Javascript to make loading look more smooth
function addTodayButton(){
    let button = document.createElement("button");
button.innerHTML = "Today";
    let calendar = document.getElementById("calendar-section");
    calendar.append(button);
    button.addEventListener ("click", miniCalendarToday)
}

//Event Handler: When date is selected on the mini calendar, value is saved and displayed on the H3 heading
$('#mini-calendar').on('changeDate', function() {
  displaySelectedDate()
});

//Display selected date in header
function displaySelectedDate(){
      $('#selected-date-input').val(
        $('#mini-calendar').datepicker('getFormattedDate')
    );
    console.log($('#selected-date-input'));//Retrieves the date clicked on
    console.log(moment().format('dddd'));

    //saves the value of the date
    let value = $('#selected-date-input')[0].value;
    let dateDisplayString = moment(value).format('dddd, MMMM Do YYYY');
    //moment(value).format('dddd') + value;

    //displays in the h3 selected-date tag
    $('#selected-date').html(dateDisplayString)
}

//Reverts mini calendar back to today's date
function miniCalendarToday(){
  $('#mini-calendar').datepicker('update', new Date())
  displaySelectedDate()
}

//Goes through the tutors array, and displays available appointments based on selected day. (It is displayed by generating HTML. This links the DOM and the tutors array
function displayAvailableAppointments() {
  let appointmentHTML = '';
  for (let tutor of tutors) {
      for (let [i, appointment] of tutor.appointments.entries()){
        //match appointment time to list index/id
        let listIndex = moment(appointment.startTime).format('h')
        let appointmentJSON = JSON.stringify(appointment);

          appointmentHTML = `
					<div class="appointment-slot">
					<input type="radio" id= "employeeId:${tutor.employeeId}:appIndex:${i}" name="app" value="employeeId_${tutor.employeeId}_appIndex_${i}">
        <p class="tutor-name"> Tutor: ${tutor.name}</p>
        <p class="time">Time: ${moment(appointment.startTime).format('LT')} - ${moment(appointment.endTime).format('LT')} </p>
        <p class="location"> Location: ${appointment.location} </p>
        <input type="hidden" value="${appointmentJSON}">
        </div>
        `
        //sorted into the matching list index
        $(`#${listIndex}`).append(appointmentHTML)
    }
  }
  //Adds an event handler to each appointment
  $(`.appointment-slot`).click(clickAppointment)
}

//event handler calls this function when user clicks on an appointment
//
function clickAppointment(){

	var radioSelectedId = $("input[name='app']:checked").val(); //selected appointment of the form app "employeeId:${tutor.employeeId}appIndex:${i}"
	//radioSelectedId is passed to a function and returns position in tutors array
	var [employeeId, appIndex] = findAppointmentInArray(radioSelectedId)
	console.log(radioSelectedId)

	//display Appointment in Preview
	$('#preview').html(
		`Tutor Name: ${tutors[employeeId].name}
		Appointment Info: ${tutors[employeeId].appointments[appIndex].startTime}`);
}

//radioSelectedId is passed to a function and returns position in tutors array
//This function first parses radioSelectedId and links it to appointment in array
//The purpose is to manipulate appointment directly in the array if need be
//return an array of [employeeId, appIndex]
function findAppointmentInArray(radioSelectedId){
	//radioSelectedId is of the form "employeeId:${tutor.employeeId}:appIndex:${i}"
	let radioParsed = radioSelectedId.split("_");
	console.log(radioParsed)
	let employeeId = radioParsed[1];
	let appIndex = radioParsed[3];
	console.log(tutors[employeeId].appointments[appIndex])
	return [employeeId, appIndex];
}

function displayAvailableAppointmentsCSS() {


}

//Making use of the load function, as it will fire once the whole page has loaded, including all dependent resources such as stylesheets and images
window.addEventListener('load', (event) => {

  addTodayButton();

  $('#selected-date').html(moment().format('dddd, MMMM Do YYYY'))

//Displays mini calendar. Highlights todays date.
//utilizes moment.js library to get day of the week
$('#mini-calendar').datepicker({
  todayHighlight: true
});
//set active date on mini calendar to today
$('#mini-calendar').datepicker('update', new Date())

displayAvailableAppointments();


});
