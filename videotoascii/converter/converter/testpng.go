package main

import (
	"fmt"
	"os"
)

func main() {
	filepath := "exampleImages/gopng.png";

	fmt.Printf("reading file from %v\n", filepath)
	inFile, err := os.ReadFile(filepath);

	if err != nil {
		fmt.Println("error reading file, check location")
		return
	}

	fmt.Println(inFile)

}