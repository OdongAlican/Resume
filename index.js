/* STRUCTURED QUERRY LANGUAGE */

/*
 SELECT * FROM Customers; ->                                         This returns all the columns from the Customers table.
 SELECT Name, Gender FROM Customers; ->                              This returns only name and gender columns.
 SELECT DISTINCT Country FROM Customers; ->                          This returns only the Country Column and removes repeated rows with same country name;
 SELECT COUNT(DISTINCT Country) FROM Customers; ->                   This returns the total number of the countries on the table;
 SELECT COUNT(DISTINCT Country) AS DistinctCountries FROM Customers; -> This returns the total number of the countries on the table;
 SELECT * FROM Customers WHERE Name='Alican'; ->                     Return all entries where name is Alican;
 SELECT * FROM Customers WHERE Name='Alican' OR Gender='Male'; ->    Returns all entries where Name is Alican Or Gender is Male;
 SELECT * FROM Customers WHERE Name='Justine' AND Gender='Male'; ->  Returns all entries where Name is Alican And Gender is Male;
 SELECT * FROM Customers WHERE ORDER BY Name ASC, Country DESC;
 SELECT * FROM Customers WHERE NOT COuntry='Uganda';
 INSERT INTO Customers(Name, Country) VALUES('Jane Doe', 'Rwanda'); -> This inserts a new row with the provided data.
 UPDATE Customers SET Name='Paul'; ->                                  This sets all names in the table to Paul; 
 UPDATE Customers SET Name = 'Paul' WHERE id = 1; ->                   This only updates the name field of a row whose id is one.
 DELETE FROM Customers WHERE id = 3; ->                                This will delete the row whose id is one;
 DELETE FROM Customers; ->                                             This deletes all rows from the table;
 SELECT MIN(Age) As Youngest FROM Customers;
 SELECT MAX(Age) As Oldest FROM Customers;
 SELECT AVG(Price) As Average FROM Customers;
 SELECT Sum(Price) As Average FROM Customers;
 SELECT * FROM Customers WHERE Name LIKE 'a%'; ->                      Where name begins with 'a';
 SELECT * FROM Customers WHERE Name LIKE '%a'; ->                      Where name end with 'a';
 SELECT * FROM Customers WHERE Name LIKE '_a%'; ->                     Where name has 'a' in the second position;
 SELECT * FROM Customers WHERE Name LIKE 'a%o'; ->                     Where name begins with 'a' and ends with 'o';
 SELECT * FROM Customers WHERE Name NOT LIKE 'a%'; ->                  Where name does not begins with 'a';
 SELECT * FROM Customers WHERE Name LIKE '%pa%'; ->                    Where name has 'pa' in any position;
*/