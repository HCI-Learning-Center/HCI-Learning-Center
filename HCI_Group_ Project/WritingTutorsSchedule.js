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

// console.log(sampleMonth, sampleDay);

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
	displayAvailableAppointments()
}

//Goes through the tutors array, and displays available appointments based on selected day. (It is displayed by generating HTML. This links the DOM and the tutors array
function displayAvailableAppointments() {
	$('.appointment-li').empty();

	let appointmentHTML = ''
  for (let tutor of tutors) {
      for (let [i, appointment] of tutor.appointments.entries()){

		//console.log(tutors)//if the appointment is not available, then do not display it, and move on to next round of the for loop
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
					<input class="radioButtonClick" type="radio" id= "employeeId:${tutor.employeeId}:appIndex:${i}"  name="app" value="employeeId_${tutor.employeeId}_appIndex_${i}" ${tutor.employeeId === 0 && i===0 ? "checked": ""}>
				<p class="tutor-name">
							<strong>Tutor:</strong> ${tutor.name}</p>
				<p class="time">
							<strong>Time:</strong> ${moment(appointment.startTime).format('LT')} - ${moment(appointment.endTime).format('LT')} </p>
				<p class="location">
							<strong>Location:</strong> ${appointment.location} </p>
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
	//have one radio button checked by default to prevent errors

	}

//event handler calls this function when user clicks on an appointment slot
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
	$('#preview').addClass('previewbg')
	//display Appointment in Preview
	$('#preview').html(
		`	<h4> Appointment Preview: </h4>
		<div class="flex-tutor-location">
			<span><h5>Tutor Name:</h5><p>${tutors[employeeId].name}</p></span>

			<span><h5>Location:</h5><p>${appointment.location}</p></span>
		</div>
			<h5>Appointment Date & Time:</h5> <p>${moment(appointment.startTime).format('dddd, MMMM Do YYYY, h:mm a')} - ${moment(appointment.endTime).format('LT')}
			${appointment.description ? "<h5>Description:</h5> <p>"+ appointment.description +"</p>": ''}
			<br>
			`);
}

//radioSelectedId is passed to a function and returns position in tutors array
//This function first parses radioSelectedId and links it to appointment in array
//The purpose is to manipulate appointment directly in the array if need be
//return an array of [employeeId, appIndex, appointment, name]
function findAppointmentInArray(){
	//radioSelectedId is of the form "employeeId:${tutor.employeeId}:appIndex:${i}"
	var radioSelectedId = $("input[name='app']:checked").val();
	let radioParsed = radioSelectedId.split("_");
	//console.log(radioParsed)
	let employeeId = radioParsed[1];
	let appIndex = radioParsed[3];
	//console.log(tutors[employeeId].appointments[appIndex])
	let appointment = tutors[employeeId].appointments[appIndex]
	let name = tutors[employeeId].name;
	return [employeeId, appIndex, appointment, name];
}

function findCancelledAppointmentInArray(){
	//radioSelectedId is of the form "employeeId:${tutor.employeeId}:appIndex:${i}"
	var radioSelectedId = $("input[name='canceloption']:checked").val();
	let radioParsed = radioSelectedId.split("_");
	//console.log(radioParsed)
	let employeeId = radioParsed[1];
	let appIndex = radioParsed[3];
	//console.log(tutors[employeeId].appointments[appIndex])
	let appointment = tutors[employeeId].appointments[appIndex]
	let name = tutors[employeeId].name;
	return [employeeId, appIndex, appointment, name];
}


//this is called when user confirms they would like to book an appointment.
function bookAppointment(){

	let [employeeId, appIndex, appointment] = findAppointmentInArray()

	displayAvailableAppointments();
	$('.modal-content').html(`<span class="close">&times;</span>
	<h3>Your appointment has been booked!</h3>
	<p id="modal-appointment-info">
		Check your email for confirmation.<br>
		You are booked with ${tutors[employeeId].name} on ${moment(appointment.startTime).format('dddd, MMMM Do, YYYY')} between ${moment(appointment.startTime).format('LT')}- ${moment(appointment.endTime).format('LT')}
	</p>
	<button onclick="cancelModal()" type="button" class="btn btn-success"> Return to Schedule </button>
	`)

	// $('#modal-appointment-info').html(`Your appointment has been booked! Check your email for confirmation.
	// You are booked with ${tutors[employeeId].name} on ${moment(appointment.startTime).format('dddd, MMMM Do, YYYY')} between ${moment(appointment.startTime).format('LT')}- ${moment(appointment.endTime).format('LT')}
	// `);
	appointment.status = 'booked'
	displayAvailableAppointments();
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

function confirmAppointment(){
	window.confirm("Are you sure you would like to book this appointment?")
}

function displayBookedAppointments(){
	let appointmentHTML = ''
  for (let tutor of tutors) {
      for (let [i, appointment] of tutor.appointments.entries()){

		//console.log(tutors)//if the appointment is not available, then do not display it, and move on to next round of the for loop
			if(appointment.status === 'booked'){
				appointmentHTML+= `
				<span>
				<input class="radioCancelButtonClick" name="canceloption" type="radio" value="employeeId_${tutor.employeeId}_appIndex_${i}"}>
				<label> <p>Tutor: ${tutor.name}, Time: ${moment(appointment.startTime).format('LT')} - ${moment(appointment.endTime).format('LT')}, Location: ${appointment.location} </p>
				</label>
				<br></span>`
			}
			}
		}

	return appointmentHTML;
}

function cancelAppointment(){
	let [employeeId, appIndex, appointment, name] = findCancelledAppointmentInArray()

	$('.modal-content').html(`<span class="close">&times;</span>
	<h3 style="color:red" >Your appointment has been cancelled:</h3>
	<p id="modal-appointment-info">
		This appointment has now been released: <br>
		${tutors[employeeId].name} on ${moment(appointment.startTime).format('dddd, MMMM Do, YYYY')} between ${moment(appointment.startTime).format('LT')}- ${moment(appointment.endTime).format('LT')}
	</p>
	<button onclick="cancelModal()" type="button" class="btn btn-success"> Return to Schedule </button>
	`)

	appointment.status = 'available'
	displayAvailableAppointments();
}

/**Source code: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("book-button");
var cancelbtn = document.getElementById("cancel-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the book button, open the modal to confirm booking an appointment (will display preview of appointment, as well as Book and Cancel buttons. Will then switch to confirmation if booked.)
btn.onclick = function() {
	displayModal();

	let [employeeId, appIndex, appointment, name] = findAppointmentInArray();

	$('.modal-content').html(
		`<span class="close">&times;</span>
    <h3>Are you sure you would like to book the following appointment?</h3>
		<h4> Appointment Preview: </h4>
		<p id="modal-appointment-info">
		<div class="flex-tutor-location">
			<span><h5>Tutor Name:</h5><p>${tutors[employeeId].name}</p></span>

			<span><h5>Location:</h5><p>${appointment.location}</p></span>
		</div>
			<h5>Appointment Date & Time:</h5> <p>${moment(appointment.startTime).format('dddd, MMMM Do YYYY, h:mm a')} - ${moment(appointment.endTime).format('LT')}
			${appointment.description ? "<h5>Description:</h5> <p>"+ appointment.description +"</p>": ''}
			<br>
			</p>
			<button onclick="bookAppointment()" type="button" class="btn btn-success"> Book Appointment </button>
			<button onclick="cancelModal()" type="button" class="btn btn-default"> Cancel </button>
			`);

}

// When the user clicks the book button, open the modal
cancelbtn.onclick = function() {
	displayModal();
	let displayCancelledHTML = displayBookedAppointments();
	if(displayCancelledHTML){
		$('.modal-content').html(`<span class="close">&times;</span>
		<h3>The following are a list of your appointments. Which one would you like to cancel?</h3>
		<p id="modal-appointment-info">
				${displayCancelledHTML}
		</p>
		<button onclick="cancelAppointment()" id="cancelled" class="btn btn-danger" onclick="cancelModal()" type="button" class="btn btn-success"> Cancel Appointment </button>
		<button onclick="cancelModal()" type="button" class="btn btn-success"> Return to Schedule </button>
		`)
	}
	else{
		$('.modal-content').html(`<span class="close">&times;</span>
		<h3>You have not booked any appointments!</h3>
		<button onclick="cancelModal()" type="button" class="btn btn-success"> Return to Schedule </button>
		`)
	}
	//let [employeeId, appIndex, appointment, name] = findAppointmentInArray();

}


/**MODAL SETTINGS */
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
		modal.style.display = "none";
  }
}

function cancelModal(){
	modal.style.display = "none";
}

function displayModal(){
	modal.style.display = "block";
}
