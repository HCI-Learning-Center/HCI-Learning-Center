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
					description: 'Jenna Doe has a major in English Language and Literature. She is here to assist and provide practical tips you can apply to your papers',
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
				startTime: new Date(2020, sampleMonth, sampleDay, 10, 0),
				endTime: new Date(2020, sampleMonth, sampleDay, 10, 20),
				location: 'BH 3129',
				description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
				status: 'available',
				student: '', //insert entire student object here if possible
			},
			{
				startTime: new Date(2020, sampleMonth, sampleDay, 10, 20),
				endTime: new Date(2020, sampleMonth, sampleDay, 10, 40),
				location: 'BH 3129',
				description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
				status: 'available',
				student: '', //insert entire student object here if possible
			},
			{
				startTime: new Date(2020, sampleMonth, sampleDay, 10, 40),
				endTime: new Date(2020, sampleMonth, sampleDay, 11, 0),
				location: 'BH 3129',
				description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
				status: 'available',
				student: '', //insert entire student object here if possible
			},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 11, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 11, 20),
					location: 'BH 3129',
					description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 12, 40),
					location: 'BH 3129',
					description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 1, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 12+ 1, 20),
					location: 'BH 3129',
					description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
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
					description: 'Shikamaru Nara is an expert in drafting academic articles. He can provide  some guidance on the papers you have been putting off.',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 4, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 4, 40),
					location: 'BH 3129',
					description: 'Shikamaru Nara is an expert in drafting academic articles. He can provide  some guidance on the papers you have been putting off.',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 5, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 5, 20),
					location: 'BH 3129',
					description: 'Shikamaru Nara is an expert in drafting academic articles. He can provide  some guidance on the papers you have been putting off.',
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
	displaySelectedDate();
	displayAvailableAppointments();
});

//Display selected date in header
function displaySelectedDate(){

	//sets value of selected date by getting formatted date of currently selected date on mini calendar
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
	$('.appointment-li').empty();

	let appointmentHTML = ''
  for (let tutor of tutors) {
      for (let [i, appointment] of tutor.appointments.entries()){

		console.log(tutors)//if the appointment is not available, then do not display it, and move on to next round of the for loop
								if(appointment.status !== 'available') continue;

				let selectedDate = $('#selected-date-input')[0].value || new Date(); //either set to selected date or if nothing selected on mini calendar, default value is today's date

				//if the appointment is not on selected date, then skip rendering appointment information. We only want to render appointments of selected day.
				if (moment(appointment.startTime).format('MMMM Do YYYY') !== moment(selectedDate).format('MMMM Do YYYY')) continue;



        //match appointment time to list index/id
        let listIndex = moment(appointment.startTime).format('h')
        let appointmentJSON = JSON.stringify(appointment);

          appointmentHTML = `
					<div id="div_employeeId_${tutor.employeeId}_appIndex_${i}" class="appointment-slot">
					<label>
					<input class="radioButtonClick" type="radio" id= "employeeId:${tutor.employeeId}:appIndex:${i}" name="app" value="employeeId_${tutor.employeeId}_appIndex_${i}">
        <p class="tutor-name"> Tutor: ${tutor.name}</p>
        <p class="time">Time: ${moment(appointment.startTime).format('LT')} - ${moment(appointment.endTime).format('LT')} </p>
        <p class="location"> Location: ${appointment.location} </p>
				<input type="hidden" value="${appointmentJSON}">
				</label>
        </div>
        `
        //sorted into the matching list index
        $(`#${listIndex}`).append(appointmentHTML)
    }
  }
  //Adds an event handler to each appointment
	$(`.radioButtonClick`).click(clickAppointment)
	}

//event handler calls this function when user clicks on an appointment
//
function clickAppointment(){

	//removes other highlighted appontments
	$('div').removeClass('selectedAppCSS')

	//change background color
 //selected appointment of the form app "employeeId:${tutor.employeeId}appIndex:${i}"
	//radioSelectedId is passed to a function and returns position in tutors array
	var [employeeId, appIndex] = findAppointmentInArray()

	//adds a class to selected appointment slot so it highlights
	$(`#div_employeeId_${employeeId}_appIndex_${appIndex}`).addClass('selectedAppCSS')

	let appointment = tutors[employeeId].appointments[appIndex]

	//display Appointment in Preview
	$('#preview').html(
		`<p> Tutor Name: <br>${tutors[employeeId].name} </p>

			<p> Appointment Date & Time: <br> ${moment(appointment.startTime).format('dddd, MMMM Do YYYY, h:mm a')} - ${moment(appointment.endTime).format('LT')}

			<p> Location: <br>${appointment.location} </p>

			${appointment.description ? "<p>Description: <br>"+ appointment.description +"</p>": ''}
			<br>

			`);
}

//radioSelectedId is passed to a function and returns position in tutors array
//This function first parses radioSelectedId and links it to appointment in array
//The purpose is to manipulate appointment directly in the array if need be
//return an array of [employeeId, appIndex, appointment]
function findAppointmentInArray(){
	//radioSelectedId is of the form "employeeId:${tutor.employeeId}:appIndex:${i}"
	var radioSelectedId = $("input[name='app']:checked").val();
	let radioParsed = radioSelectedId.split("_");
	console.log(radioParsed)
	let employeeId = radioParsed[1];
	let appIndex = radioParsed[3];
	console.log(tutors[employeeId].appointments[appIndex])
	let appointment = tutors[employeeId].appointments[appIndex]
	return [employeeId, appIndex, appointment];
}


function bookAppointment(){

	let [employeeId, appIndex, appointment] = findAppointmentInArray()
	appointment.status = 'booked'
	displayAvailableAppointments();

	$('#confirm-booking').html("Your appointment has been booked! Check your email for confirmation");
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
