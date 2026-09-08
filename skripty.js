/* Hratky v prihlasce. */       
 $(document).ready(function() {
    $('#paintballSelect').change(function(e) {
      
        switch($(this).val()) {
            case 'ano':
                $('#paintballComment').text('Spr·vnÏ, par·da! :)');
                break;
            case 'spis_ano':
                $('#paintballComment').text('Jak asi?!');
                break;
            case 'spis_ne':
                $('#paintballComment').text('Ale no t··k, nebuÔ labuù!');            
                break;
            case 'ne':
                $('#paintballComment').text('A proË ne? :(');            
                break;
        }
    });
     
    $('a.popup').click(function(e) {
        e.preventDefault();
        popup($(this).attr('href'), $(this).attr('width'), $(this).attr('height'));   
    });
 });


function popup(url, width, height) {
    var  screenX    = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
         screenY    = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
         outerWidth = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.body.clientWidth,
         outerHeight = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.body.clientHeight - 22),
         left     = parseInt(screenX + ((outerWidth - width) / 2), 10),
         top      = parseInt(screenY + ((outerHeight - height) / 2.5), 10),
         features = (
            'width=' + width +
            ',height=' + height +
            ',left=' + left +
            ',top=' + top
          );

         newWindow = window.open(url,'',features);

         if (window.focus) {
             newWindow.focus()
         }

         return newWindow;
}


/* Overeni na strance Administrace - kontrola vyplneni policka s heslem */

	function kontrola() {
			if (document.all.formular.heslo.value == "" || document.all.formular.heslo.value == null) {
				alert("Zadejte heslo!");
				document.all.formular.heslo.focus();
				return false;
				}
			else return true;

			}

function odhlas() {
	return confirm("Opravdu se chceö odhl·sit?");
}

/* Kontrola pri odeslani formulare pri pridavani prispevku do knihy navstev*/

	function pridat() {
			var jmeno = document.formular.jmeno;
			var email = document.formular.email;
			var vzkaz = document.formular.vzkaz;
			if (jmeno.value == "" || vzkaz.value == "")
				{alert("MusÌte zadat jmÈno i vzkaz!");
				return false;
				}
			else if (email.value == "")
				{var opravdu = window.confirm("Chcete tento formul·¯ odeslat i p¯esto, ûe nenÌ vyplnÏn e-mail?")
					if (opravdu == true) return true;
					else {
						email.focus();
						return false;
						}
				}
			else  if(email.value.indexOf("@") <= 0 || email.value.indexOf("@") > email.value.length - 5 )
				{alert("E-mail m· öpatn˝ form·t!");
				email.focus();
				return false;
				}
			else return true;
		}

	function pridat1() {
		if(document.formular.vzkaz.value == "") {
			alert("Zadejte vzkaz!");
			document.formular.vzkaz.focus();
			return false;
		}
		else return true;
	}

/* Mazani prispevku v knize navstev */

	function smazat() {
		var jo = confirm("Opravdu chceö vymazat tento z·znam?");
		if (jo == true)
			return true;
		else return false;
		}
		
/* Odeslani prihlasky	*/

	function prihl()	{
		document.form.jmeno.focus();
	}
	
	function prihlaska()	{
		if((document.form.jmeno.value == "" || document.form.prijmeni.value == "") && document.form.nick.value == "")	{
			alert("Zadejte bud jmÈno a prÌjmenÌ nebo prezdÌvku.");
			document.form.jmeno.focus();
			return false;
		}
		
		if((document.form.jmeno.value == "Martin" && document.form.prijmeni.value == "HoleËek") || document.form.nick.value == "Holi") {
            alert('M·sla neberem! :P');
            return false;
        }
		
		if(document.form.email.value == "") {
			alert("Zadejte e-mail.");
			document.form.email.focus();
			return false;
		}

	}