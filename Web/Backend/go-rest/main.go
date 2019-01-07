package main

import (
	"database/sql"
	"fmt"
	"net/http"
	_ "github.com/lib/pq"
)

type product struct{
	id int
	model string
	company string
	price int
}

func main() {
	connStr := "user=postgres password=Alex0105 dbname=productdb sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		panic(err)
	}
	defer db.Close()


	rows, err := db.Query("select * from Products")
	if err != nil {
		panic(err)
	}
	defer rows.Close()
	products := []product{}

	for rows.Next(){
		p := product{}
		err := rows.Scan(&p.id, &p.model, &p.company, &p.price)
		if err != nil{
			fmt.Println(err)
			continue
		}
		products = append(products, p)
	}
	for _, p := range products{
		fmt.Println(p.id, p.model, p.company, p.price)
	}
	//result, err := db.Exec("insert into Products (model, company, price) values ('iPhone X', $1, $2)",
	//	"Apple", 72000)
	//if err != nil{
	//	panic(err)
	//}
	//fmt.Println(result.LastInsertId())  // не поддерживается
	//fmt.Println(result.RowsAffected())  // количество добавленных строк	http.HandleFunc("/",index)
	http.ListenAndServe(":3000", nil)
}
func index(writer http.ResponseWriter, request *http.Request){
	//path := request.URL.Path
	//log.Println(path)
	//writer.WriteHeader(200)
	//writer.Write([]byte("Alexei"+path))
	fmt.Fprintf(writer,"<h1>HelloWorld</h1>")
}

