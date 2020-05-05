
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const sch_no = document.getElementById('sch_no');

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const sch_noValue = sch_no.value.trim();

	if(nameValue === '') {
		setErrorFor(name, 'Name field cannot be blank!');
	} else {
		setSuccessFor(name);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email field cannot be blank!');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Invalid email!');
	} else {
		setSuccessFor(email);
	}

	if(sch_noValue === '') {
		setErrorFor(sch_no, 'Scholar number field cannot be blank!');
	}else if (!isSchNo(sch_noValue)) {
		setErrorFor(sch_no, 'Invalid scholar number!');
	} else {
		setSuccessFor(sch_no);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form1 error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form1 success';
}

function isEmail(email) {
  var regex_email = /\S+@\S+\.\S+/;
	return regex_email.test(email);
}

function isSchNo(sch_no){
  var regex_sch_no = /^[1][6-9]{1}[0-9]{7}$/;
  return regex_sch_no.test(sch_no);
}
