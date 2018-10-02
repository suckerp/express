use motorradausleihe;

/*delete from ausleihe where YEAR(AusleiheBeginn) = 0000;*/

/*select * from ausleihe 
        join kunden on ausleihe.K_ID = kunden.K_ID 
        join motorraeder on ausleihe.M_ID = motorraeder.M_ID;*/


/*delete from kunden where K_ID >= 7;*/

select * from kunden;
/*alter table kunden add K_ACCOUNT varchar(50) unique;*/


/*update kunden set K_ACCOUNT = K_NAME where K_Anrede = "Herr";*/

/*update kunden set K_PASSWORT = "testf" where K_Anrede = "Frau";*/

/*select * from kunden;*/

