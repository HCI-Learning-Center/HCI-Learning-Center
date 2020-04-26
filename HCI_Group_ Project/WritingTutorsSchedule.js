// This js file includes an array of tutors and appointment information, as well as code for a  customized Date Picker.

//  ============================================= This project does not require a backend at the moment. So we will build in our 'database' here and make use of local storage. array of tutors. Each tutor has a select list of appointmsnts available

/**Variable values
tutors-> name -> appointments -> status: booked/ available /pending //maybe true or false
tutors-> name -> appointments -> student: name of student who booked appointment

time: new Date(year, month, day, hours, minutes, seconds, milliseconds)
*/


//let sampleDate = new Date(2020, 5, 9, 10, 0)
let sampleMonth = 4;
let sampleDay = 26

let tutors = [
	{
		name: 'Jenna Doe',
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
					time: new Date(2020, sampleMonth, sampleDay, 10, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 10, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					time: new Date(2020, sampleMonth, sampleDay, 10, 40),
					endTime: new Date(2020, sampleMonth, sampleDay, 11, 0),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					time: new Date(2020, sampleMonth, sampleDay, 2, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 2, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					time: new Date(2020, sampleMonth, sampleDay, 2, 20),
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
					time: new Date(2020, sampleMonth, sampleDay, 12, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 12, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					time: new Date(2020, sampleMonth, sampleDay, 1, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 1, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					time: new Date(2020, sampleMonth, sampleDay, 1, 40),
					endTime: new Date(2020, sampleMonth, sampleDay, 2, 0),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					time: new Date(2020, sampleMonth, sampleDay, 2, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 2, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
		],
	},


	{
		name: 'Shikamaru Nara',
		appointments: [
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 4, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 4, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					time: new Date(2020, sampleMonth, sampleDay, 4, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 4, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					time: new Date(2020, sampleMonth, sampleDay, 5, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 5, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					time: new Date(2020, sampleMonth, sampleDay, 5, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 5, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					time: new Date(2020, sampleMonth, sampleDay, 5, 40),
					endTime: new Date(2020, sampleMonth, sampleDay, 6, 0),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
		],
	}
]

console.log(tutors)



$('#mini-calendar').datepicker({
});
