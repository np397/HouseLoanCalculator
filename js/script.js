$(document).ready(function(){
				$(window).load(function(){
					$('input[name=purchasePrice]').focus();
				});
				
				$('input[name=purchasePrice], input[name="downPaymentPercent"]').on('mousewheel', function (e) {
				   e.preventDefault();
				});
				$('input[name=purchasePrice], input[name="downPaymentPercent"]').on('focusin', function (e) {
					if($(this).context.name == 'purchasePrice'){
						$(this).parent().css("border-bottom", " 1px solid #b8a9c9");
					}else{
						$(this).css("border-bottom", " 1px solid #b8a9c9");
					}					
				});
				$('input[name=purchasePrice], input[name="downPaymentPercent"]').on('focusout', function (e) {
					if($(this).context.name == 'purchasePrice'){
						$(this).parent().css("border-bottom", " 1px solid #d6d4e0");
					}
					else{
						$(this).css("border-bottom", " 1px solid #d6d4e0");
					}
				});		

				function formatCurrency(x) {
					return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				} 	
			
				$('input[name="purchasePrice"] , input[name="downPaymentPercent"]').keyup(function(e){
					var purchasePrice = 0;
					var downPayment = 0;
					var interestRate = 0;
					var loanAmount = 0;
					
					if($('input[name="purchasePrice"]').val().length > 0){
						purchasePrice = $('input[name="purchasePrice"]').val().replace(/,/g , "");
						purchasePrice = Number(purchasePrice);
						$('input[name="purchasePrice"]').val(formatCurrency(purchasePrice));
					}
					
					if($('input[name="downPaymentPercent"]').val().length > 0){
						interestRate = Number($('input[name="downPaymentPercent"]').val()) / 100;
					}
					
					if(isNaN(purchasePrice) ||  isNaN(interestRate)){
						bootbox.alert({ 
							size: "small",
							title: "Invalid Input",
							message: "Please enter a number for purchase price & interest rate."
						})
					}
					else{
						downPayment = purchasePrice * interestRate;					
						loanAmount =  purchasePrice - downPayment;
				
						$('input[name="downPayment"]').val(formatCurrency(downPayment.toFixed(2)));
						$('input[name="loanAmount"]').val(formatCurrency(loanAmount.toFixed(2)));
					}
				});
				
			});