/**********Tela de Carregamento**********/
$(document).ready(function () {
	// Depois que carregar, setar mais 3.4 segundos, para garantir o carregamento
	setTimeout(function(){ 
		document.getElementById("loading").remove();
		document.body.style.backgroundColor = "#FAFAFA";
		document.getElementById("conteudo").style.display = "block";
	}, 3400);
});


/**********Materialize**********/
$(document).ready(function() {
	//SideNav
	$(".button-collapse").sideNav({closeOnClick: true, draggable: false});

	//ScrollSpy
	$('.scrollspy').scrollSpy();
	
});

/**********Mensagem Nao ha eventos disponiveis**********/
var contarNumeroEventosDisponiveis=0;
function contarNumeroDeEventos(){
	contarNumeroEventosDisponiveis++;
	if(contarNumeroEventosDisponiveis == 2){
		document.getElementById("mensagemNaoHaEventosDisponiveis").remove();
		document.getElementById("postFixaxoes").style.display = "block";
	}
}

/**********Setar cor branco na lista negra**********/
function setarCorListaNegra() {
	x = document.getElementsByClassName("listaNegraUsuario").length;
		for (i=0;i<=x;i++){
			document.getElementsByClassName("listaNegraUsuario")[i].style.backgroundColor = "#FFFFFF";
	}
}

/**********FORMULARIO**********/
//Verifica o tipo do evento inserido
function verificaTipo() {
	//Se for prelecao, nao permitir inserir dificuldade
	if($("#tipo").find(":selected").val() == 1) {
		$("#dificuldade").attr("disabled", true);
		$("#dificuldade").material_select();
	}
	else {
		$("#dificuldade").attr("disabled", false);
		$("#dificuldade").material_select();
	}
	
	//Se for trekking, permitir inserir tipo do trekking
	if($("#tipo").find(":selected").val() == 2) {
		$("#tipoTrekking").attr("disabled", false);
		$("#tipoTrekking").material_select();
	}
	else {
		$("#tipoTrekking").attr("disabled", true);
		$("#tipoTrekking").material_select();
	}
	
	//Se for acampa, permitir inserir data fim
	if($("#tipo").find(":selected").val() == 3) {
		$("#dataFim").attr("disabled", false);
	}
	else {
		$("#dataFim").attr("disabled", true);
	}
}

/**********LOG OUT**********/
function logOut() {
	firebase.auth().signOut().then(function() {
		//SignOut bem-sucedido
	}, function(error) {
		//Deu ruim
	});
}