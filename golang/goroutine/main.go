package main

import (
	"fmt"
	// "runtime"
	"sync"
)

func printName(wg *sync.WaitGroup, name string) {
	defer wg.Done()
	fmt.Printf("Name: %s\n", name)
}

func printNumber(wg *sync.WaitGroup, num int) {
	defer wg.Done()
	fmt.Printf("Number: %d\n", num)
}

func printLoop(loop int, value string) {
	for i := 0; i < loop; i++ {
		fmt.Println((i + 1), value)
	}
}

func main() {
	/*
	  var wg sync.WaitGroup

	  wg.Add(2)
	  go printName(&wg, "armando")
	  go printNumber(&wg, 100)
	  go printLoop(10, "sepuluh")
	  printLoop(5, "lima")

	   wg.Wait()
	*/
	// var input string
	// fmt.Scanln(&input)

	// var msgCh = make(chan string)

	// intCh := make(chan int, 2)
	// runtime.GOMAXPROCS(2)
	intChan := make(chan int, 2)

	go func() {
		for {
			i := <-intChan
			fmt.Println("receive data ", i)
		}
	}()

	for i := 1; i <= 5; i++ {
		fmt.Println("send data ", i)
		intChan <- i
	}

	close(intChan)

	// go channel.SendMsg(msgCh, "1")
	// go channel.SendMsg(msgCh, "2")
	// go channel.SendMsg(msgCh, "3")
	// go channel.SendMsg(msgCh, "4")

	// go close(msgCh)
	// channel.ReceiveMsg(msgCh)
	// channel.ReceiveMsg(msgCh)
	// channel.ReceiveMsg(msgCh)
	// channel.ReceiveMsg(msgCh)
}
