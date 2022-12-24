package channel

import (
	"fmt"
)

func SendMsg(ch chan<- string, msg string) {
	ch <- msg
}

func ReceiveMsg(ch <-chan string) {
	// for data := range ch {
	// 	fmt.Println("msg:", data)
	// }
	fmt.Println("msg: ", <-ch)
}
