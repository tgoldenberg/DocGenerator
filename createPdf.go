package main

import (
	"fmt"
	"github.com/SebastiaanKlippert/go-wkhtmltopdf"
	"log"
)

func main() {

	var docLinks = map[string]string{
		"try_databricks":"https://docs.azuredatabricks.net/getting-started/try-databricks.html",
	}
	for title, doc := range docLinks {
		pdfg, err := wkhtmltopdf.NewPDFGenerator()
		if err != nil {
			log.Fatal(err)
		}

		pdfg.AddPage(wkhtmltopdf.NewPage(doc))

		err = pdfg.Create()
		if err != nil {
			log.Fatal(err)
		}

		err = pdfg.WriteFile(title + ".pdf")
		if err != nil {
			log.Fatal(err)
		}

		err = pdfg.Create()
		if err != nil {
			log.Fatal(err)
		}

	}

	fmt.Println("Done")
}
