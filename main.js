// document.addEventListener('submit', e => {
// 	e.preventDefault();
// 	validate();
// });
// var name = document.getElementById('name').value;
// var regex_name = /[^0-9]/;
// var email = document.getElementById('email').value;
// var regex_email = /\S+@\S+\.\S+/;
// var sch_no = document.getElementById('sch_no').value;
// var regex_sch_no = /^[1][6-9]{1}[0-9]{7}$/;
//
// function validate() {
//   if (name.trim() == "") {
//     // document.getElementById('label_name').innerHTML='Name is required.';
//     // document.getElementById('label_name').style.visibility='visible';
//     // document.getElementById('label_name').style.color='red';
//     setErrorFor(name,"Name is required!");
//   } else {
//     if (regex_name.test(name)) {
//       // document.getElementById('label_name').innerHTML='Valid';
//       // document.getElementById('label_name').style.visibility='visible';
//       // document.getElementById('label_name').style.color='green';
//       setSuccessFor(name);
//     } else {
//       // document.getElementById('label_name').innerHTML='Invalid! Please enter a valid name.';
//       // document.getElementById('label_name').style.visibility='visible';
//       // document.getElementById('label_name').style.color='red';
//       setErrorFor(name, "Invalid Name");
//     }
//   }
//   if (email.trim() == "") {
//     setErrorFor(email, "Email is required!");
//   } else {
//     if (regex_email.test(email)) {
//       // document.getElementById('label_email').innerHTML='Valid';
//       // document.getElementById('label_email').style.visibility='visible';
//       // document.getElementById('label_email').style.color='green';
//       setSuccessFor(email);
//     } else {
//       // document.getElementById('label_name').innerHTML='Invalid! Please enter a valid email id.';
//       // document.getElementById('label_name').style.visibility='visible';
//       // document.getElementById('label_name').style.color='red';
//       setErrorFor(email, "Invalid email");
//     }
//   }
//   if (sch_no.trim() == "") {
//     setErrorFor(sch_no, "Scholar number is required!");
//   } else {
//     if (regex_sch_no.test(sch_no)) {
//       // document.getElementById('label_sch_no').innerHTML='Valid';
//       // document.getElementById('label_sch_no').style.visibility='visible';
//       // document.getElementById('label_sch_no').style.color='green';
//       setSuccessFor(sch_no);
//     } else {
//       // document.getElementById('label_sch_no').innerHTML='Invalid! Please enter a valid scholar number.';
//       // document.getElementById('label_sch_no').style.visibility='visible';
//       // document.getElementById('label_sch_no').style.color='red';
//       setErrorFor(sch_no, "Invalid scholar number");
//     }
//   }
// }
// function setErrorFor(input, message) {
// 	// const formControl = input.parentElement;
// 	// const small = formControl.querySelector('small');
// 	// formControl.className = 'form-control error';
//   document.getElementById('label_name').innerHTML=message;
//    document.getElementById('label_name').style.visibility='visible';
//    document.getElementById('label_name').style.color='red';
//
// }
//
// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }







//TEST DRIVE JS




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
