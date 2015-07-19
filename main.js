			$("document").ready(function(){
				//data local
                $("#dataLocal").append(obj.quandoFoi + ", " + obj.ondeFoi);

				//quem foi
				$.each(obj.pessoas, function( index, value ) {
					  $("#quemFoi").append("<li>"+value+"</li>");
				});
				
				//cacife, fichas, horarios	
                $("#geral").append("Cada um recebeu <b style='color:#0000ff;'>" + obj.fichas + "</b> fichas e o cacife foi <b style='color:#0000ff;'>" + obj.cacife + "</b>. Come&ccedil;amos " + obj.inicio + " e a &uacute;ltima rodada foi " + obj.termino + ".");

                //jogos vencedores
				$.each(obj.jogosvencedores, function( key, value ) {
					  $("#tblJogos").append("<tr><td>" + key +"</td><td>" + value + "</td></tr>");
				});

                //jogos vencedores
				$.each(obj.jogadoresvencedores, function( key, value ) {
					  $("#tblJogadores").append("<tr><td valign='top'>" + key +"</td><td>" + montarJogos(value) + "</td></tr>");
				});

                //final
				$.each(obj.final, function( key, value ) {
					  $("#tblFinal").append("<tr><td valign='top'>" + key +"</td><td><b>" + montarResultado(value) + "</b></td></tr>");
				});
				$("#troco").append(obj.troco.quemGanhou + " ganhou a rodada do troco com um " + obj.troco.jogo);
			});

			function montarJogos(jogos){
				var html="<table cellpadding='2'>"
				$.each(jogos, function( key, value ) {
					  html = html + "<tr><td>" + key + "</td><td><b>" + value + "</b></td></tr>";
				});
				html += "</table>"
				return html;
			}

			function montarResultado(valor){
				if (valor.indexOf("-") != -1)
					return "<font color='#ff0000'>" + valor + "</font>";
				else	
					return "<font color='#006400'>" + valor + "</font>";
			}		