$(document).ready(function(){
	var empArrary = []
	var empTotalSalary = 0;
	var empNumber = 1;
	//var deleteEmp = [];

	$('#employeeForm').on('submit', function(event) {
		event.preventDefault();

		var values = {};

		$.each($('#employeeForm').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});


		empTotalSalary += parseInt(values.empSalary);
		$('.empTotalSalary').text('Total Employee Salary: $' + empTotalSalary);

		$('#employeeForm').find('input[type=text]').val('');
		appendDom(values);
	});

	function appendDom(empInfo) {
		$('#container').append('<div class="emp' + empNumber + '"></div>');
		var $el = $('#container').children().last();

		$el.append('<button class="deleteEmp">Delete Employee</button>');
		$el.append('<p>' + empInfo.empFirstName + '</p>');
		$el.append('<p>' + empInfo.empLastName + '</p>');
		$el.append('<p>' + empInfo.empID + '</p>');
		$el.append('<p>' + empInfo.empJobTitle + '</p>');
		$el.append('<p>' + empInfo.empSalary + '</p>');

		//deleteEmp[empNumber] = empInfo.empSalary;

		empNumber++;
	}

	$('#container').on('click', '.deleteEmp', function() {
		empTotalSalary -= parseInt($(this).parent().children().last().text());
		$('.empTotalSalary').text('Total Employee Salary: $' + empTotalSalary);
		$(this).parent().remove();
		
		
		//removeDom();

	})

	//function removeDom() {
		//$('#container').find('.emp' + 1).remove();

		//remove('<div></div>');
		//var $el = $('#container').children().last();

		//$el.remove('<button class="deleteEmp">Delete Employee</button>');
		//$el.remove('<p>' + empInfo.empFirstName + '</p>');
		//$el.remove('<p>' + empInfo.empLastName + '</p>');
		//$el.remove('<p>' + empInfo.empID + '</p>');
		//$el.remove('<p>' + empInfo.empJobTitle + '</p>');
		//$el.remove('<p>' + empInfo.empSalary + '</p>');
	//}





})