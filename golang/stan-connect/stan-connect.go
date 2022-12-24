package main

import (
	nats "github.com/nats-io/nats.go"
	stan "github.com/nats-io/stan.go"
)

func main() {
	// Create a NATS connection
	natsURL := "localhost:4222"
	nc, err := nats.Connect(natsURL)
	if err != nil {
		panic(err)
	}

	// Then pass it to the stan.Connect() call.
	clientID := "publisher-ip-192-168-1-2-ap-southeast-1-compute-internal"
	cluster := "kumparan-cluster"
	// cluster := "test-cluster"
	sc, err := stan.Connect(cluster, clientID, stan.NatsConn(nc))
	if err != nil {
		panic(err)
	}
	if err := sc.Publish("test-subject", []byte("This is a test-message!")); err != nil {
		panic(err)
	}

	/*
		_, err = kumnats.NewNATSWithCallback(
			"test-cluster",
			"cluster-id",
			"localhost:4222",
			func(conn kumnats.NATS) {
				fmt.Println(conn)
			},
			nil,
			kumnats.WithReconnectInterval(5*time.Second),
		)
		if err != nil {
			fmt.Println(err)
		}
	*/

	// _, err = kumnats.NewNATSWithCallback(
	// 	config.NATSClusterID(),
	// 	fmt.Sprintf("%s-%s", "senggol-dong", "sukreber-nih"),
	// 	//fmt.Sprintf("%s-%s", "subscriber", config.NATSClientID()),
	// 	config.NATSURL(),
	// 	natsSubscriberConnectCallback(natsUsers),
	// 	nil,
	// 	kumnats.WithReconnectInterval("5s"),
	// )
}
