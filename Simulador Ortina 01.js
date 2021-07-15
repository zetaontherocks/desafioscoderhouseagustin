var prodcode;
var disccode;
var price;

function askProd() {
	prodcode = parseInt(prompt('Ingrese codigo del producto'));
	if (prodcode == 1) {
		price = 600;
		alert(
			'Usted ha elegido guitarra de escala corta, el precio es de $600. Ingrese, si posee, codigo de descuento a continuación.'
		);
	} else if (prodcode == 2) {
		price = 900;
		alert(
			'Usted ha elegido guitarra standard, el precio es de $900. Ingrese, si posee, codigo de descuento a continuación.'
		);
	} else if (prodcode == 3) {
		price = 1200;
		alert(
			'Usted ha elegido guitarra baritona, el precio es de $1200. Ingrese, si posee, codigo de descuento a continuación.'
		);
	} else {
		alert('Codigo de producto inexistente');
	}
}

function askDcode() {
	disccode = prompt('Ingrese, si posee, codigo de descuento');
	if (disccode == 'descuento01') {
		price = price - (price * 15) / 100;
		alert('El precio final es ' + price);
	} else {
		alert('El precio final es ' + price);
	}
}

askProd();
askDcode();
