			$("document").ready(function(){
				console.log(dt);
				var obj= $.getJSON(dt);

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

                //jogadores vencedores
                var idx=0;
                var jogadoresvencedoresHtml = "";
                for	(var item in obj.jogadoresvencedores){
                	if (idx % 2 == 0){
                		if (idx > 0) jogadoresvencedoresHtml += "</tr>";
                		jogadoresvencedoresHtml += "<tr>";
                	}
                	jogadoresvencedoresHtml += "<td valign='top'><b>" + item + "</b></td><td>" + montarJogos(obj.jogadoresvencedores[item]) + "</td><td style='border:0;'>&nbsp;</td>";	
                	idx += 1;	
                }
                jogadoresvencedoresHtml += "</tr>";
				$("#tblJogadores").append(jogadoresvencedoresHtml);

                //final
				$.each(obj.final, function( key, value ) {
					  $("#tblFinal").append("<tr><td valign='top'>" + key +"</td><td><b>" + montarResultado(value) + "</b></td></tr>");
				});
				$("#troco").append(obj.troco.quemGanhou + " ganhou a rodada do troco com um " + obj.troco.jogo);
			});

			function montarJogos(jogos){
				var html="<table cellpadding='2'>";
				var total=0;
				$.each(jogos, function( key, value ) {
					total += value; 
					html = html + "<tr><td>" + key + "</td><td><b>" + value + "</b></td></tr>";
				});
				html = html + "<tr style='background-color:#f60;'><td><b>total</b></td><td><b>" + total + "</b></td></tr>";
				html += "</table>"
				return html;
			}

			function montarResultado(valor){
				if (valor.indexOf("-") != -1)
					return "<font color='#ff0000'>" + valor + "</font>";
				else	
					return "<font color='#006400'>" + valor + "</font>";
			}		