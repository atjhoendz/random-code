def cetak():
    print("hello")


def by_switch(name: str):
    switcher = {
        "hai": cetak
    }

    func = switcher.get(name, "hai")
    return func()


by_switch("hai")
by_switch("mm")
