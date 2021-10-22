import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-informacion-pago',
  templateUrl: './informacion-pago.component.html',
})
export class InformacionPagoComponent implements OnInit {

  infoTransaccion:string[]= [];

  constructor(
    private route:ActivatedRoute,
    private pagoService: TransaccionService
    
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      let body = new URLSearchParams();
        body.set("transaction_id",params.transactionId);
        body.set("reference_sale",params.referenceCode);     
        body.set("date",params.processingDate);     
        body.set("payment_method_type",params.polPaymentMethodType);     
        body.set("payment_method",params.polPaymentMethod);
        body.set("attempts","1");     
        body.set("tax",params.TX_TAX);     
        body.set("shipping_country",params.currency);     
        body.set("description",params.description); 
        body.set("currency",params.currency);     
        body.set("value",params.TX_VALUE);     
        body.set("payment_method_name",params.lapPaymentMethodType);     
        body.set("email_buyer",params.buyerEmail);     
        body.set("payment_method_id",params.polPaymentMethod);  
        body.set("response_message_pol",params.lapTransactionState);
        body.forEach((data)=>{
          this.infoTransaccion.push(data);
        });
        console.log(this.infoTransaccion);
        this.pagoService.guardarTransaccion(body).subscribe(data=>{
        })      
    })
  }

}
